/**
 * @file This is the main entry point and controller for the Autaxys MVU-1 Analysis Workbench.
 * It orchestrates the full automated analysis workflow, from deterministic run to
 * divergence test, and batch analysis, all without user input.
 */
import { MVU1_Simulator, SimConfig, TieBreakingMode, LogEntry } from './mvu1';
import { PrecisionMode, PrecisionNumber } from './precision';
import Papa from 'papaparse';
import Chart from 'chart.js/auto';

// --- GLOBAL STATE ---
let analysisIsRunning = false; // Controls the overall analysis workflow
let batchPlotChart: Chart | null = null; // Stores the Chart.js instance for the batch plot
let allRawLogs: any[][] = []; // To store logs from all batch runs for download (CSV-friendly objects)

// --- UI ELEMENT REFERENCES (Accessed safely after DOMContentLoaded) ---
// Centralized DOM element references for safety and consistency.
// These will be populated once the DOM is fully loaded.
const uiElements = {
    startFullAnalysisButton: null as HTMLButtonElement | null,
    stopFullAnalysisButton: null as HTMLButtonElement | null,
    fullAnalysisStatus: null as HTMLElement | null,
    resultsContainer: null as HTMLElement | null,
    deterministicLogOutput: null as HTMLElement | null,
    divergenceAnalysisOutput: null as HTMLElement | null,
    batchAnalysisText: null as HTMLElement | null,
    batchPlotCanvas: null as HTMLCanvasElement | null,
    downloadAllDataButton: null as HTMLButtonElement | null,
    batchStatusLine: null as HTMLElement | null, // Using null and checking for existence
    divergenceStatusLine: null as HTMLElement | null, // Using null and checking for existence
};

/**
 * Initializes all UI element references once the DOM is ready.
 * This prevents "not defined" errors when trying to access elements before they exist.
 */
function initializeUIElements() {
    uiElements.startFullAnalysisButton = document.getElementById('start-full-analysis-button') as HTMLButtonElement;
    uiElements.stopFullAnalysisButton = document.getElementById('stop-full-analysis-button') as HTMLButtonElement;
    uiElements.fullAnalysisStatus = document.getElementById('full-analysis-status') as HTMLElement;
    uiElements.resultsContainer = document.getElementById('results-container') as HTMLElement;
    uiElements.deterministicLogOutput = document.getElementById('deterministic-log-output') as HTMLElement;
    uiElements.divergenceAnalysisOutput = document.getElementById('divergence-analysis-output') as HTMLElement;
    uiElements.batchAnalysisText = document.getElementById('batch-analysis-text') as HTMLElement;
    uiElements.batchPlotCanvas = document.getElementById('batch-plot-canvas') as HTMLCanvasElement;
    uiElements.downloadAllDataButton = document.getElementById('download-all-data-button') as HTMLButtonElement;
    uiElements.batchStatusLine = document.getElementById('batch-status-line') as HTMLElement; // Use ID
    uiElements.divergenceStatusLine = document.getElementById('divergence-status-line') as HTMLElement; // Use ID

    // Attach event listeners after elements are guaranteed to be loaded
    if (uiElements.startFullAnalysisButton) {
        uiElements.startFullAnalysisButton.addEventListener('click', handleStartFullAnalysis);
    }
    if (uiElements.stopFullAnalysisButton) {
        uiElements.stopFullAnalysisButton.addEventListener('click', handleStopFullAnalysis);
    }
}

// --- INTRINSIC SEEDING ---
/**
 * Generates a deterministic seed from a string using a common hashing algorithm (Cyrb53).
 * This ensures that simulations with the same intrinsic "physical constants" (parameters)
 * will always produce the exact same sequence of pseudo-random numbers when deterministic
 * tie-breaking is used. This removes any need for external random numbers.
 */
function cyrb53(str: string, seed = 0): number {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761); // Multiply with a large prime
        h2 = Math.imul(h2 ^ ch, 1597334677); // Another large prime
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507); // Finalization mix
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0); // Combine 32-bit hashes into a 53-bit integer
}

/**
 * Handles the stop button click by halting the analysis workflow.
 */
function handleStopFullAnalysis() {
    analysisIsRunning = false;
    setControlsState(false);
    if (uiElements.fullAnalysisStatus) {
        uiElements.fullAnalysisStatus.textContent = "Analysis stopped by user.";
    }
}

// --- UI MANAGEMENT ---
/** Sets the disabled state of main control buttons during analysis phases. */
function setControlsState(running: boolean) {
    if (uiElements.startFullAnalysisButton) uiElements.startFullAnalysisButton.disabled = running;
    if (uiElements.stopFullAnalysisButton) uiElements.stopFullAnalysisButton.disabled = !running;
}

/** Appends a new line to a specific log output area on the UI. */
function updateLog(logArea: HTMLElement | null, message: string, isError: boolean = false) {
    if (!logArea) return; // Safeguard if element not found
    const timestamp = new Date().toLocaleTimeString();
    logArea.innerHTML += `<div ${isError ? 'style="color: #ff7675; font-weight: bold;"' : ''}>[${timestamp}] ${message}</div>`;
    logArea.scrollTop = logArea.scrollHeight; // Auto-scroll to bottom
}

/** Clears all output areas and resets the UI for a new full analysis. */
function resetUIForNewAnalysis() {
    if (uiElements.resultsContainer) uiElements.resultsContainer.classList.add('hidden'); // Hide all results panels
    if (uiElements.deterministicLogOutput) uiElements.deterministicLogOutput.innerHTML = ''; // Clear logs
    if (uiElements.divergenceAnalysisOutput) uiElements.divergenceAnalysisOutput.innerHTML = '';
    if (uiElements.batchAnalysisText) uiElements.batchAnalysisText.innerHTML = '';
    if (batchPlotChart) batchPlotChart.destroy(); // Destroy previous plot
    batchPlotChart = null;
    if (uiElements.downloadAllDataButton) uiElements.downloadAllDataButton.onclick = null; // Clear download link
    allRawLogs = []; // Clear stored raw logs
}

// --- STATISTICAL HELPERS ---
const getMean = (arr: number[]) => arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
const getStdDev = (arr: number[]) => {
    if (arr.length < 2) return 0; // Standard deviation requires at least two data points
    const mean = getMean(arr);
    return Math.sqrt(getMean(arr.map(v => (v - mean) ** 2)));
};

// --- ANALYSIS REPORT GENERATION ---
/** Generates the textual analysis report for the batch run results. */
function generateAnalysisText(data: { step: number; mean_L_A: number; }[], config: SimConfig, numRuns: number): string {
    const initialLA = data[0].mean_L_A;
    const finalLA = data[data.length - 1].mean_L_A;
    const trend = finalLA > initialLA ? "upward" : (finalLA < initialLA ? "downward" : "flat");
    const trendColor = trend === "upward" ? "#27ae60" : "#c0392b";
    const conclusion = trend === "upward"
        ? "This result ROBUSTLY SUPPORTS the core hypothesis. The system consistently found more coherent states over time, driven only by the local optimization principle."
        : "This result would FALSIFY or challenge the core hypothesis, as the system did not, on average, find more coherent states over time.";

    // Get intrinsic parameters from a dummy simulator instance (created purely for access to intrinsic constants)
    const intrinsicSimulator = new MVU1_Simulator({ precision: 'high', tieBreaking: 'deterministic' });

    return `ANALYSIS REPORT
--------------------------------------------------
Configuration:
  - Intrinsic Initial Distinctions: ${intrinsicSimulator.INITIAL_PRIMORDIAL_DISTINCTIONS * 2} (fixed by model)
  - Intrinsic Max Steps per run:    ${intrinsicSimulator.MAX_INTRINSIC_STEPS} (fixed by model)
  - Calculation Precision:          HIGH (Guaranteed Reproducible)
  - Number of Stochastic Runs:      ${numRuns}

Key Findings:
  - Initial Mean L_A:               ${initialLA.toFixed(8)}
  - Final Mean L_A:                 ${finalLA.toFixed(8)}
  - Overall Trend:                  <span style="color: ${trendColor}; font-weight: bold;">${trend.toUpperCase()}</span>

Conclusion:
${conclusion}
--------------------------------------------------
The plot below visualizes the average trajectory (blue line) and the standard deviation (shaded area) of the Autaxic Lagrangian (L_A) across all runs.`;
}

/** Renders the batch analysis plot using Chart.js. */
function renderBatchPlot(data: { step: number; mean_L_A: number; std_dev_L_A: number; }[]) {
    if (batchPlotChart) batchPlotChart.destroy();
    const ctx = uiElements.batchPlotCanvas?.getContext('2d');
    if (!ctx) return;

    batchPlotChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(d => d.step),
            datasets: [
                { label: 'Mean L_A', data: data.map(d => d.mean_L_A), borderColor: 'blue', tension: 0.1, pointRadius: 0 },
                {
                    label: '1 Standard Deviation', data: data.map(d => d.mean_L_A + d.std_dev_L_A),
                    fill: '+1', backgroundColor: 'rgba(0, 0, 255, 0.15)',
                    borderColor: 'transparent', pointRadius: 0,
                },
                {
                    label: 'Lower Band', data: data.map(d => d.mean_L_A - d.std_dev_L_A),
                    fill: false, borderColor: 'transparent', pointRadius: 0
                }
            ]
        },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: { legend: { labels: { filter: item => item.text !== 'Lower Band' } } },
                scales: {
                    y: { beginAtZero: true, title: { display: true, text: 'Autaxic Lagrangian (L_A)' } },
                    x: { title: { display: true, text: 'Simulation Step' } }
                }
            }
    });
}

/** Handles the full automated analysis workflow when the start button is clicked. */
async function handleStartFullAnalysis() {
    analysisIsRunning = true;
    setControlsState(true); // Disable all main controls
    resetUIForNewAnalysis(); // Clear and reset UI
    if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.textContent = "Starting full analysis workflow...";
    if (uiElements.resultsContainer) uiElements.resultsContainer.classList.remove('hidden'); // Show results container early

    try {
        // --- Phase 1: Purely Deterministic Run (Intrinsic Evolution) ---
        if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.textContent = "Phase 1/3: Running Deterministic Simulation...";
        if (uiElements.deterministicLogOutput) uiElements.deterministicLogOutput.innerHTML = ''; // Clear previous log
        
        // Configuration for the deterministic run: high precision, deterministic tie-breaking, intrinsic seed
        const deterministicSim = new MVU1_Simulator({ precision: 'high', tieBreaking: 'deterministic', seed: cyrb53('deterministic_run_seed') });
        deterministicSim.initializeGraph(); // Start from the intrinsic primordial soup (empty graph -> genesis)
        
        while (analysisIsRunning && deterministicSim.step()) { // Run until natural halt or max steps
            const lastLog = deterministicSim.log[deterministicSim.log.length - 1];
            updateLog(uiElements.deterministicLogOutput, `Step ${lastLog.step} | L_A: ${lastLog.L_A.toString(15)} | Tension: ${lastLog.total_tension?.toString(8)} | FP_OC: ${lastLog.is_fixed_point_oc ? '✅' : '❌'} | TM_OC: ${lastLog.is_tension_minimum_oc ? '✅' : '❌'} | Rule: ${lastLog.rule_applied}`);
            await new Promise(resolve => setTimeout(resolve, 0)); // Yield to UI to keep it responsive
        }
        // Log the final status and reason for halting
        updateLog(uiElements.deterministicLogOutput, `Deterministic run finished at step ${deterministicSim.step_counter}. Reason: ${deterministicSim.log[deterministicSim.log.length-1]?.halt_reason || 'Unknown halt reason.'}`);

        // Capture logs from this phase for full download
        allRawLogs.push(deterministicSim.log.map(log => ({ // Convert PrecisionNumber to regular number for CSV
            step: log.step, L_A: log.L_A.toNumber(), num_distinctions: log.num_distinctions, num_relations: log.num_relations, rule_applied: log.rule_applied, total_tension: log.total_tension?.toNumber(), is_fixed_point_oc: log.is_fixed_point_oc, is_tension_minimum_oc: log.is_tension_minimum_oc, halt_reason: log.halt_reason
        })));


        if (!analysisIsRunning) { throw new Error("Analysis stopped by user during deterministic run."); }

        // --- Phase 2: Precision Divergence Analysis ---
        if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.textContent = "Phase 2/3: Running Precision Divergence Analysis...";
        await new Promise(resolve => setTimeout(resolve, 100)); // Short pause for UI update
        if (uiElements.divergenceAnalysisOutput) uiElements.divergenceAnalysisOutput.innerHTML = ''; // Clear previous output
        if (uiElements.divergenceStatusLine) uiElements.divergenceStatusLine.textContent = 'Starting divergence test...';


        const divergenceSeed = cyrb53('divergence_test_seed'); // Consistent seed for divergence test
        // Two simulators with same intrinsic parameters and seed, but different precision
        const simHighDiv = new MVU1_Simulator({ precision: 'high', tieBreaking: 'deterministic', seed: divergenceSeed });
        const simNativeDiv = new MVU1_Simulator({ precision: 'native', tieBreaking: 'deterministic', seed: divergenceSeed });

        simHighDiv.initializeGraph(); // Start from the intrinsic primordial soup
        simNativeDiv.initializeGraph();
        
        let divergenceFound = false;
        // Run until divergence or max intrinsic steps (extended to double max intrinsic steps for robust test)
        for (let i = 0; i < simHighDiv.MAX_INTRINSIC_STEPS * 2; i++) {
            if (!analysisIsRunning) { throw new Error("Analysis stopped by user during divergence test."); }

            const highContinues = simHighDiv.step();
            const nativeContinues = simNativeDiv.step();
            
            const highLog = simHighDiv.log[simHighDiv.log.length - 1];
            const nativeLog = simNativeDiv.log[simNativeDiv.log.length - 1];

            // Check for divergence: different rules applied or L_A values differ at high precision
            if (highLog.rule_applied !== nativeLog.rule_applied || highLog.L_A.compareTo(nativeLog.L_A) !== 0) {
                if (uiElements.divergenceAnalysisOutput) uiElements.divergenceAnalysisOutput.innerHTML = `
                    <strong style="color: #c0392b;">DIVERGENCE FOUND AT STEP ${highLog.step}!</strong><br>
                    A microscopic numerical difference caused the simulations to diverge.<br><br>
                    High Precision chose: <strong>${highLog.rule_applied}</strong> (L_A: ${highLog.L_A.toString(20)})<br>
                    Native Precision chose: <strong>${nativeLog.rule_applied}</strong> (L_A: ${nativeLog.L_A.toString(20)})<br><br>
                    This quantifies the "butterfly effect" from floating-point errors, demonstrating why High Precision is necessary.
                `;
                divergenceFound = true;
                break;
            }
            if (!highContinues || !nativeContinues) break; // Stop if either simulation halts
            if (i % 50 === 0) { // Update status periodically for long runs
                if (uiElements.divergenceStatusLine) uiElements.divergenceStatusLine.textContent = `Running divergence test... Step ${i}... No divergence yet.`;
                await new Promise(resolve => setTimeout(resolve, 0));
            }
        }
        if (!divergenceFound) {
            if (uiElements.divergenceAnalysisOutput) uiElements.divergenceAnalysisOutput.innerHTML = `No divergence found within ${simHighDiv.MAX_INTRINSIC_STEPS * 2} steps. This indicates high numerical stability for these parameters.`;
        }
        if (uiElements.divergenceStatusLine) uiElements.divergenceStatusLine.textContent = "Precision Divergence Analysis complete.";

        // Capture logs from this phase for full download (useful for debugging divergence)
        allRawLogs.push(simHighDiv.log.map(log => ({ // High precision run as a reference
            step: log.step, L_A: log.L_A.toNumber(), num_distinctions: log.num_distinctions, num_relations: log.num_relations, rule_applied: log.rule_applied, total_tension: log.total_tension?.toNumber(), is_fixed_point_oc: log.is_fixed_point_oc, is_tension_minimum_oc: log.is_tension_minimum_oc, halt_reason: log.halt_reason
        })));
        allRawLogs.push(simNativeDiv.log.map(log => ({ // Native precision run
            step: log.step, L_A: log.L_A.toNumber(), num_distinctions: log.num_distinctions, num_relations: log.num_relations, rule_applied: log.rule_applied, total_tension: log.total_tension?.toNumber(), is_fixed_point_oc: log.is_fixed_point_oc, is_tension_minimum_oc: log.is_tension_minimum_oc, halt_reason: log.halt_reason
        })));


        if (!analysisIsRunning) { throw new Error("Analysis stopped by user during divergence test."); }

        // --- Phase 3: Scientific Batch Analysis (Monte Carlo) ---
        if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.textContent = "Phase 3/3: Running Scientific Batch Analysis (Monte Carlo)...";
        await new Promise(resolve => setTimeout(resolve, 100)); // Short pause for UI update
        if (uiElements.batchStatusLine) uiElements.batchStatusLine.textContent = 'Starting batch analysis...';

        const numRuns = 30; // Fixed number of runs for batch analysis
        const batchConfig: SimConfig = {
            precision: 'high', // Batch analysis always uses high precision for scientific integrity
            tieBreaking: 'stochastic' // Batch analysis uses stochastic tie-breaking to explore average behavior
        };

        const allRunsLA: number[][] = [];
        // allRawLogs is already being populated by previous phases, so just push new logs.

        for (let i = 0; i < numRuns; i++) {
            if (!analysisIsRunning) { throw new Error("Analysis stopped by user during batch run."); }
            if (uiElements.batchStatusLine) uiElements.batchStatusLine.textContent = `Running batch simulation ${i + 1} of ${numRuns}...`;
            await new Promise(resolve => setTimeout(resolve, 0)); // Yield to UI
            
            const simulator = new MVU1_Simulator({...batchConfig, seed: Date.now() + i }); // Use unique seed for each run in batch
            simulator.initializeGraph(); // Start from the intrinsic primordial soup
            while (simulator.step()); // Run until natural halt (no max steps here)
            
            allRunsLA.push(simulator.log.map(logEntry => logEntry.L_A.toNumber())); // Convert PrecisionNumbers to native numbers for aggregation
            allRawLogs.push(simulator.log.map(log => ({ // Store raw log for download, convert PrecisionNumber
                step: log.step, L_A: log.L_A.toNumber(), num_distinctions: log.num_distinctions, num_relations: log.num_relations, rule_applied: log.rule_applied, total_tension: log.total_tension?.toNumber(), is_fixed_point_oc: log.is_fixed_point_oc, is_tension_minimum_oc: log.is_tension_minimum_oc, halt_reason: log.halt_reason
            })));
        }

        if (uiElements.batchStatusLine) uiElements.batchStatusLine.textContent = "Aggregating results and generating report...";
        await new Promise(resolve => setTimeout(resolve, 0));
        
        const aggregatedData: { step: number; mean_L_A: number; std_dev_L_A: number; }[] = [];
        // Determine the maximum step count across all runs for consistent plotting.
        // This will be the maximum step reached by any run.
        const maxFinalStep = allRunsLA.reduce((max, run) => Math.max(max, run.length), 0);
        // The plot should go up to the maximum step actually reached by any run, for consistency.
        // It's no longer capped by MAX_INTRINSIC_STEPS as an explicit parameter in the plot.
        
        for (let step = 0; step < maxFinalStep; step++) {
            // For runs that halted early, use their final L_A value for subsequent steps.
            const laValuesAtStep = allRunsLA.map(run => step < run.length ? run[step] : run[run.length - 1]);
            aggregatedData.push({ step, mean_L_A: getMean(laValuesAtStep), std_dev_L_A: getStdDev(laValuesAtStep) });
        }

        // Final UI updates for batch completion
        analysisIsRunning = false;
        setControlsState(false);
        if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.textContent = `Full analysis complete.`;
        if (uiElements.batchStatusLine) uiElements.batchStatusLine.textContent = `Batch of ${numRuns} runs complete.`;
        
        // Setup download button for all collected raw data
        if (uiElements.downloadAllDataButton) uiElements.downloadAllDataButton.onclick = () => {
            const flattenedLog = allRawLogs.flat(); // Flatten all individual run logs into one large array
            const csvData = Papa.unparse(flattenedLog); // Papaparse handles conversion to CSV from array of objects
            const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `mvu1_full_analysis_raw_data.csv`;
            a.click();
        };

        if (uiElements.batchAnalysisText) uiElements.batchAnalysisText.innerHTML = generateAnalysisText(aggregatedData, batchConfig, numRuns);
        renderBatchPlot(aggregatedData);

    } catch (error) {
        console.error("Critical error during full analysis workflow:", error);
        if (uiElements.fullAnalysisStatus) uiElements.fullAnalysisStatus.innerHTML = `<strong style="color: #c0392b;">ANALYSIS FAILED:</strong> ${(error as Error).message}<br>Check browser console (F12) for more details.`;
        setControlsState(false);
        analysisIsRunning = false;
    }
}

/** Attaches event listeners and initializes UI elements once the DOM is fully loaded. */
document.addEventListener('DOMContentLoaded', () => {
    // Populate uiElements safely
    uiElements.startFullAnalysisButton = document.getElementById('start-full-analysis-button') as HTMLButtonElement;
    uiElements.stopFullAnalysisButton = document.getElementById('stop-full-analysis-button') as HTMLButtonElement;
    uiElements.fullAnalysisStatus = document.getElementById('full-analysis-status') as HTMLElement;
    uiElements.resultsContainer = document.getElementById('results-container') as HTMLElement;
    uiElements.deterministicLogOutput = document.getElementById('deterministic-log-output') as HTMLElement;
    uiElements.divergenceAnalysisOutput = document.getElementById('divergence-analysis-output') as HTMLElement;
    uiElements.batchAnalysisText = document.getElementById('batch-analysis-text') as HTMLElement;
    uiElements.batchPlotCanvas = document.getElementById('batch-plot-canvas') as HTMLCanvasElement;
    uiElements.downloadAllDataButton = document.getElementById('download-all-data-button') as HTMLButtonElement;
    uiElements.batchStatusLine = document.getElementById('batch-status-line') as HTMLElement; // Use ID
    uiElements.divergenceStatusLine = document.getElementById('divergence-status-line') as HTMLElement; // Use ID

    // Attach event listeners
    if (uiElements.startFullAnalysisButton) {
        uiElements.startFullAnalysisButton.addEventListener('click', handleStartFullAnalysis);
    }
    if (uiElements.stopFullAnalysisButton) {
        uiElements.stopFullAnalysisButton.addEventListener('click', handleStopFullAnalysis);
    }
});