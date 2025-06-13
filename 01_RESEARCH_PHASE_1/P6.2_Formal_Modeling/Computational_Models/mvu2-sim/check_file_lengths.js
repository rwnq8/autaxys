// check_file_lengths.js
const fs = require('fs');
const path = require('path');

const lineCountsConfigPath = path.join(__dirname, 'file_line_counts.json');
let expectedLineCounts;

try {
    if (fs.existsSync(lineCountsConfigPath)) {
        expectedLineCounts = JSON.parse(fs.readFileSync(lineCountsConfigPath, 'utf8'));
    } else {
        console.error(`❌ ERROR: Golden line counts file not found: ${lineCountsConfigPath}`);
        console.error(`Run "npm run update-golden-lengths" first to create it with current file lengths.`);
        process.exit(1);
    }
} catch (error) {
    console.error(`Error reading or parsing ${lineCountsConfigPath}:`, error);
    process.exit(1);
}

let allChecksPassed = true;

console.log("Checking file line counts against expected values...");

// CORRECTED: This list now reflects the new modular file structure.
const filesToTrack = [ 
    "src/shared_types.ts",
    "src/rule_utils.ts",
    "src/rule_genesis.ts",
    "src/rule_bonding.ts",
    "src/rule_annihilation.ts",
    "src/rule_adaptation.ts",
    "src/rule_transformation.ts",
    "src/rule_collapse.ts",
    "src/graph_utils.ts",
    "src/simulator_state.ts",
    "src/simulator_analysis.ts",
    "src/simulator_step.ts",
    "src/main.ts",
    "src/ui_elements.ts",
    "src/simulation_controller.ts",
    "src/visualizer_graph.ts",
    "src/visualizer_multiverse.ts",
    "src/precision.ts",
    "tests/simulator_logic.test.ts",
    "tests/file_integrity.test.ts",
    "tests/app_flow.e2e.test.ts"
];


for (const relativeFilePath of filesToTrack) {
    const expectedCount = expectedLineCounts[relativeFilePath];
    const absoluteFilePath = path.join(__dirname, relativeFilePath);

    if (!fs.existsSync(absoluteFilePath)) {
        console.error(`❌ ERROR: File not found: ${absoluteFilePath}`);
        allChecksPassed = false;
        continue;
    }

    try {
        const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
        const actualCount = fileContent.split(/\r\n|\r|\n/).length;

        if (expectedCount === undefined) {
             console.warn(
                `⚠️ WARNING: File "${relativeFilePath}" is tracked but not in golden file. ` +
                `Actual lines: ${actualCount}. Run "npm run update-golden-lengths" to add it.`
             );
        } else if (actualCount < expectedCount) {
            console.error( 
                `❌ FAILURE: File "${relativeFilePath}" is SHORTER than its golden record. ` +
                `Expected: ${expectedCount} lines, Actual: ${actualCount} lines. ` +
                `AI TRUNCATION SUSPECTED. Please verify the file and if correct, run "npm run update-golden-lengths" to update golden record.`
            );
            allChecksPassed = false; 
        } else {
            const growthAllowanceFactor = 0.35; 
            const growthAllowance = Math.floor((expectedCount || 0) * growthAllowanceFactor);
            const maxLength = (expectedCount || 0) + growthAllowance;

            if (actualCount > maxLength && (expectedCount || 0) > 20) { 
                 console.warn(
                    `⚠️ WARNING: File "${relativeFilePath}" is significantly LONGER than its golden record. ` +
                    `Expected: ~${expectedCount} lines (up to ${maxLength}), Actual: ${actualCount} lines. ` +
                    `Please review if this growth is intended. If so, run "npm run update-golden-lengths" to update golden record.`
                 );
            } else {
                console.log(`✅ OK: File "${relativeFilePath}" line count: ${actualCount} (expected ~${expectedCount})`);
            }
        }
    } catch (error) {
        console.error(`Error reading file ${absoluteFilePath}:`, error);
        allChecksPassed = false;
    }
}

if (!allChecksPassed) {
    console.error("\nOne or more file length checks FAILED. Please review the errors above.");
    process.exit(1); 
} else {
    console.log("\nAll file length checks passed or are within acceptable growth margins.");
    process.exit(0);
}