// update_golden_lengths.js
const fs = require('fs');
const path = require('path');

const lineCountsConfigPath = path.join(__dirname, 'file_line_counts.json');
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

let currentGoldenCounts = {};
try {
    if (fs.existsSync(lineCountsConfigPath)) {
        currentGoldenCounts = JSON.parse(fs.readFileSync(lineCountsConfigPath, 'utf8'));
    }
} catch (e) {
    console.warn("Could not read existing file_line_counts.json, will create a new one.", e.message);
}

const newGoldenCounts = { ...currentGoldenCounts };

console.log("Updating golden line counts...");

filesToTrack.forEach(relativeFilePath => {
    const absoluteFilePath = path.join(__dirname, relativeFilePath);
    if (!fs.existsSync(absoluteFilePath)) {
        console.error(`❌ ERROR: File not found, cannot update count: ${absoluteFilePath}`);
        // We will not add it to the new counts, it will be removed if it existed before.
        delete newGoldenCounts[relativeFilePath]; 
        return; 
    }

    try {
        const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
        const actualCount = fileContent.split(/\r\n|\r|\n/).length;
        newGoldenCounts[relativeFilePath] = actualCount;
        console.log(`Updated ${relativeFilePath}: ${actualCount} lines`);
    } catch (error) {
        console.error(`Error reading file ${absoluteFilePath}:`, error);
    }
});

try {
    const sortedKeys = Object.keys(newGoldenCounts).sort();
    const sortedGoldenCounts = {};
    for (const key of sortedKeys) {
        sortedGoldenCounts[key] = newGoldenCounts[key];
    }

    fs.writeFileSync(lineCountsConfigPath, JSON.stringify(sortedGoldenCounts, null, 2), 'utf8');
    console.log(`\nSuccessfully updated golden line counts in ${lineCountsConfigPath}`);
} catch (error) {
    console.error(`\nError writing updated golden line counts to ${lineCountsConfigPath}:`, error);
    process.exit(1);
}

process.exit(0);