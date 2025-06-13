// src/main.ts

import { initializeUI } from './ui_elements';
import { SimulationController } from './simulation_controller';

// The main entry point for the application.
// This script is loaded by index.html as a module.

document.addEventListener('DOMContentLoaded', () => {
    try {
        // 1. Safely initialize all UI element references after the DOM is loaded.
        // This will throw an error and stop execution if any element is missing.
        const ui = initializeUI();

        // 2. Create an instance of the main application controller, passing it the UI elements.
        const appController = new SimulationController(ui);

        // 3. Start the application logic (sets up initial state and event listeners).
        appController.start();

    } catch (error) {
        // If initializeUI throws an error, catch it and display a user-friendly message.
        console.error("Application failed to start:", error);
        alert("A critical error occurred on startup. Check the developer console for details. This is often caused by a mismatch between expected HTML element IDs and the actual HTML.");
    }
});