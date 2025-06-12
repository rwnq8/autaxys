/**
 * @file This is the main entry point for the MVU-1 web application.
 * It handles user interactions, manages the simulation lifecycle (start, stop),
 * and orchestrates the non-blocking, step-by-step execution of the simulator
 * to provide a responsive user experience with live feedback.
 */

import { MVU1_Simulator, SimConfig, LogEntry } from './mvu1';
import Papa from 'papaparse';
// Note: Chart.js and Sigma.js imports would be added back here if chart rendering is re-enabled.

// --- GLOBAL STATE ---
let isSimulationRunning = false;
let simulatorInstance: MVU1_Simulator | null = null;

// --- UI ELEMENT REFERENCES ---
const runButton = document.getElementById('run-button') as HTMLButtonElement;
const stopButton = document.getElementById('stop-button') as HTMLButtonElement;
const distinctionsInput = document.getElementById('distinctions-input') as HTMLInputElement;
const stepsInput = document.getElementById('steps-input') as HTMLInputElement;
const liveLogPanel = document.getElementById('live-log-panel') as HTMLElement;
const liveLogOutput = document.getElementById('live-log-output') as HTMLElement;
const statusLine = document.getElementById('status-line') as HTMLElement;
const summaryPanel = document.getElementById('summary-panel') as HTMLElement;
const summaryText = document.getElementById('summary-text') as HTMLElement;
const downloadPanel = document.getElementById('download-panel') as HTMLElement;
const downloadButton = document.getElementById('download-csv') as HTMLButtonElement;

/**
 * Manages the enabled/disabled state of UI controls based on the simulation status.
 * @param running - Whether the simulation is currently running.
 * @param message - An optional status message to display to the user.
 */
function setUIState(running: boolean, message: string = "") {
    isSimulationRunning = running;
    runButton.disabled = running;
    stopButton.disabled = !running;
    distinctionsInput.disabled = running;
    stepsInput.disabled = running;
    statusLine.textContent = message;

    if (running) {
        // Reset UI for a new run
        summaryPanel.style.display = 'none';
        downloadPanel.style.display = 'none';
        liveLogOutput.innerHTML = '';
        liveLogPanel.style.display = 'block';
    }
}

/**
 * Appends a new line to the live log on the UI.
 * @param message - The text to log.
 * @param isError - If true, the log entry will be styled as an error.
 */
function updateLiveLog(message: string, isError: boolean = false) {
    const timestamp = new Date().toLocaleTimeString();
    const logLine = document.createElement('div');
    logLine.textContent = `[${timestamp}] ${message}`;
    if (isError) {
        logLine.classList.add('log-error');
    }
    liveLogOutput.appendChild(logLine);
    liveLogOutput.scrollTop = liveLogOutput.scrollHeight;
}

/**
 * Renders the final summary and download link after a simulation completes.
 */
function renderFinalResults(simulator: MVU1_Simulator) {
    const finalState = simulator.log[simulator.log.length - 1];
    if (!finalState) return;

    // Show Summary Panel
    summaryText.textContent = `Simulation Steps: ${finalState.step}\nFinal L_A:        ${finalState.L_A.toFixed(4)}\nDistinctions:     ${finalState.num_distinctions}\nRelations:        ${finalState.num_relations}\nBonded Pairs:     ${finalState.num_bonded_pairs}`;
    summaryPanel.style.display = 'block';

    // Enable Download Button
    const csvData = Papa.unparse(simulator.log);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    downloadButton.onclick = () => {
        const a = document.createElement('a');
        a.href = url;
        a.download = `mvu1_run_d${simulator.config.initial_distinctions}_s${simulator.config.max_steps}.csv`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
    downloadPanel.style.display = 'block';
    
    // NOTE: Chart.js and Sigma.js rendering functions would be called here.
}


/**
 * The core non-blocking simulation loop.
 * It executes one step, updates the UI, and then uses requestAnimationFrame
 * to schedule the next step, yielding control to the browser in between.
 * This ensures the UI remains responsive and updates are rendered instantly.
 */
function simulationLoop() {
    if (!isSimulationRunning || !simulatorInstance) {
        setUIState(false, "Simulation stopped.");
        return;
    }

    try {
        const keepGoing = simulatorInstance.step();
        const lastLog = simulatorInstance.log[simulatorInstance.log.length - 1];
        const logMessage = `Step ${lastLog.step.toString().padStart(4, ' ')} | L_A: ${lastLog.L_A.toFixed(3)} | D: ${lastLog.num_distinctions.toString().padStart(3, ' ')} | R: ${lastLog.num_relations.toString().padStart(4, ' ')} | Rule: ${lastLog.rule_applied}`;
        updateLiveLog(logMessage);

        if (keepGoing && simulatorInstance.step_counter < simulatorInstance.config.max_steps) {
            // Schedule the next iteration of the loop.
            requestAnimationFrame(simulationLoop);
        } else {
            // Simulation has ended, either by halting or reaching max steps.
            const reason = !keepGoing ? "Halted: No more possible moves." : "Finished: Max steps reached.";
            setUIState(false, `Simulation complete. ${reason}`);
            renderFinalResults(simulatorInstance);
        }
    } catch (error) {
        console.error("A critical error occurred during simulation step:", error);
        updateLiveLog(`FATAL ERROR at Step ${simulatorInstance.step_counter + 1}: ${error.message}`, true);
        updateLiveLog("Check browser console (F12) for more details.", true);
        setUIState(false, "Simulation FAILED due to a critical error.");
    }
}

// --- Event Listener for the Start Button ---
runButton.addEventListener('click', () => {
    // 1. Get configuration from the UI input boxes.
    const config: SimConfig = {
        initial_distinctions: parseInt(distinctionsInput.value, 10) || 2,
        max_steps: parseInt(stepsInput.value, 10) || 10,
    };
    
    // 2. Create a new simulator instance and set the UI to its "running" state.
    simulatorInstance = new MVU1_Simulator(config);
    setUIState(true, "Initializing simulation...");
    
    // 3. Initialize the graph and log the initial state.
    simulatorInstance.initializeGraph();
    const initialLog = `Initial State | D: ${simulatorInstance.graph.order} | R: ${simulatorInstance.graph.size}`;
    updateLiveLog(initialLog);
    
    // 4. Kick off the non-blocking simulation loop.
    requestAnimationFrame(simulationLoop);
});

// --- Event Listener for the Stop Button ---
stopButton.addEventListener('click', () => {
    // Setting this flag to false will cause the simulationLoop to exit on its next check.
    isSimulationRunning = false;
});
