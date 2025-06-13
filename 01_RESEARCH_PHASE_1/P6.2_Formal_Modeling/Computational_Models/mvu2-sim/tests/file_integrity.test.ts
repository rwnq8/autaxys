// tests/file_integrity.test.ts
import * as fs from 'fs';
import * as path from 'path';

const lineCountsConfigPath = path.resolve(__dirname, '../file_line_counts.json'); 
const projectBasePath = path.resolve(__dirname, '../'); 

// CORRECTED: This list now reflects the new modular file structure.
const filesToTrack: string[] = [ 
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

describe('File Integrity Checks', () => {
    let expectedLineCounts: { [key: string]: number } = {};

    beforeAll(() => {
        try {
            if (fs.existsSync(lineCountsConfigPath)) {
                expectedLineCounts = JSON.parse(fs.readFileSync(lineCountsConfigPath, 'utf8'));
            } else if (process.env.UPDATE_GOLDEN_LENGTHS === 'true') {
                console.warn(`${lineCountsConfigPath} not found. Will create it during update.`);
            } else {
                throw new Error(`${lineCountsConfigPath} not found. Run with UPDATE_GOLDEN_LENGTHS=true npm test to create it.`);
            }
        } catch (error: any) {
            console.error(`Error loading ${lineCountsConfigPath}: ${error.message}`);
        }
    });

    filesToTrack.forEach(relativeFilePath => {
        test(`should check line count for ${relativeFilePath}`, () => {
            const absoluteFilePath = path.join(projectBasePath, relativeFilePath);
            if (!fs.existsSync(absoluteFilePath)) {
                // This test will fail if a tracked file is missing.
                throw new Error(`File not found: ${absoluteFilePath}. Cannot check line count. Check 'filesToTrack' in file_integrity.test.ts.`);
            }

            const fileContent = fs.readFileSync(absoluteFilePath, 'utf8');
            const actualCount = fileContent.split(/\r\n|\r|\n/).length;
            const expectedCount = expectedLineCounts[relativeFilePath];

            if (process.env.UPDATE_GOLDEN_LENGTHS === 'true') {
                expectedLineCounts[relativeFilePath] = actualCount;
                console.log(`UPDATING golden length for ${relativeFilePath} to ${actualCount}`);
            } else {
                if (expectedCount === undefined) {
                    throw new Error(
                        `No golden line count found for ${relativeFilePath}. ` +
                        `Run with "UPDATE_GOLDEN_LENGTHS=true npm test" to record it.`
                    );
                }
                
                const growthAllowanceFactor = 0.35; 
                const growthAllowance = Math.floor((expectedCount || 0) * growthAllowanceFactor);
                const maxLength = (expectedCount || 0) + growthAllowance;

                if (actualCount < expectedCount) {
                    throw new Error(
                        `File "${relativeFilePath}" is SHORTER than its golden record. ` +
                        `Expected: ${expectedCount} lines, Actual: ${actualCount} lines. ` +
                        `AI TRUNCATION SUSPECTED. Please verify the file and if correct, run "UPDATE_GOLDEN_LENGTHS=true npm test" to update golden record.`
                    );
                }
                if (actualCount > maxLength && (expectedCount || 0) > 20) { 
                     console.warn(
                        `⚠️ WARNING: File "${relativeFilePath}" is significantly LONGER than its golden record. ` +
                        `Expected: ~${expectedCount} lines (up to ${maxLength}), Actual: ${actualCount} lines. ` +
                        `Please review if this growth is intended. If so, run "UPDATE_GOLDEN_LENGTHS=true npm test" to update golden record.`
                     );
                }
                expect(actualCount).toBeGreaterThanOrEqual(expectedCount); 
            }
        });
    });

    afterAll(() => {
        if (process.env.UPDATE_GOLDEN_LENGTHS === 'true') {
            try {
                const sortedKeys = Object.keys(expectedLineCounts).sort();
                const sortedGoldenCounts: { [key: string]: number } = {};
                for (const key of sortedKeys) {
                    sortedGoldenCounts[key] = expectedLineCounts[key];
                }

                fs.writeFileSync(lineCountsConfigPath, JSON.stringify(sortedGoldenCounts, null, 2), 'utf8');
                console.log(`\nSuccessfully updated golden line counts in ${lineCountsConfigPath}`);
            } catch (error: any) {
                console.error(`\nError writing updated golden line counts to ${lineCountsConfigPath}: ${error.message}`);
            }
        }
    });
});