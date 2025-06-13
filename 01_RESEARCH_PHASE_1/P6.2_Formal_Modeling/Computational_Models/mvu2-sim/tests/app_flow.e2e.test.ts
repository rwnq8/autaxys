// tests/app_flow.e2e.test.ts
import { test, expect, Page } from '@playwright/test';

// Helper function to check if the simulation is running by observing a stat change
async function isSimulationRunning(page: Page): Promise<boolean> {
    const initialSteps = await page.locator('#total-steps-dd').textContent();
    await page.waitForTimeout(200); // Wait for a few animation frames
    const nextSteps = await page.locator('#total-steps-dd').textContent();
    // If the simulation is running, the step count should have increased.
    return nextSteps !== initialSteps;
}

test.describe('Autaxys Prime Engine E2E Flow', () => {
    const appUrl = 'http://localhost:1234'; // Your dev server URL

    test.beforeEach(async ({ page }) => {
        // Navigate to the app before each test
        await page.goto(appUrl);
        // Wait for the initial mode to be set and visible
        await expect(page.locator('#current-mode-dd')).toHaveText('Timeline');
        await expect(page.locator('#timeline-view')).toBeVisible();
    });

    test('should load the page and display the default timeline view correctly', async ({ page }) => {
        await expect(page.locator('h1')).toContainText('Autaxys Prime Engine');
        await expect(page.locator('#multiverse-view')).toBeHidden();
        await expect(page.locator('#divergence-view')).toBeHidden();
        await expect(page.locator('#pause-button')).toHaveText('Start');
        await expect(page.locator('#total-steps-dd')).toHaveText('0');
    });

    test('should start, pause, and resume the timeline simulation', async ({ page }) => {
        const pauseButton = page.locator('#pause-button');
        
        // --- Start ---
        await pauseButton.click();
        await expect(pauseButton).toHaveText('Pause');
        // Verify simulation is running by checking if step count increases
        expect(await isSimulationRunning(page)).toBe(true);

        // --- Pause ---
        await pauseButton.click();
        await expect(pauseButton).toHaveText('Resume');
        // Verify simulation is paused by checking if step count stops increasing
        expect(await isSimulationRunning(page)).toBe(false);

        // --- Resume ---
        await pauseButton.click();
        await expect(pauseButton).toHaveText('Pause');
        // Verify simulation is running again
        expect(await isSimulationRunning(page)).toBe(true);
    });

    test('should switch to Multiverse mode and start running batches', async ({ page }) => {
        await page.locator('#mode-multiverse-btn').click();
        await expect(page.locator('#current-mode-dd')).toHaveText('Multiverse');
        await expect(page.locator('#multiverse-view')).toBeVisible();
        await expect(page.locator('#timeline-view')).toBeHidden();

        const pauseButton = page.locator('#pause-button');
        await expect(pauseButton).toHaveText('Start');

        // Start the multiverse census
        await pauseButton.click();
        await expect(pauseButton).toHaveText('Pause');

        // Check if multiverse attempts are increasing
        const initialAttempts = await page.locator('#total-attempts-dd').textContent();
        await page.waitForTimeout(500); // Let a few batches run
        const nextAttempts = await page.locator('#total-attempts-dd').textContent();
        expect(Number(nextAttempts)).toBeGreaterThan(Number(initialAttempts));
    });

    test('changing a config checkbox should correctly update UI and be used on restart', async ({ page }) => {
        const collapseCheckbox = page.locator('#cb-enable-collapse');
        const pauseButton = page.locator('#pause-button');

        // Verify initial state
        await expect(collapseCheckbox).toBeChecked();

        // Start and then pause the simulation
        await pauseButton.click(); // Start
        await page.waitForTimeout(100);
        await pauseButton.click(); // Pause
        await expect(pauseButton).toHaveText('Resume');

        // Change the configuration
        await collapseCheckbox.uncheck();
        await expect(collapseCheckbox).not.toBeChecked();
        
        // The button text should update to indicate a config change requires a restart/new start
        await expect(pauseButton).toHaveText('Start (Config Changed)');

        // Starting again should use the new config
        await pauseButton.click();
        await expect(pauseButton).toHaveText('Pause');
        
        // A more advanced test would verify the actual behavior change, 
        // but this confirms the UI flow for re-initialization is working.
        expect(await isSimulationRunning(page)).toBe(true);
    });
});