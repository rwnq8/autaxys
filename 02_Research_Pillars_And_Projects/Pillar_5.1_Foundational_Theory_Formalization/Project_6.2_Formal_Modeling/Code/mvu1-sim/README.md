# MVU-1 Simulation Engine (TypeScript/Web)

This document provides instructions for installing, running, and interpreting the results of the "Minimal Viable Universe 1" (MVU-1) simulation, which is an implementation of the Autaxic Generative Engine (AGE) v0.1 Toy Model.

## 1. Objective of the Simulation

The purpose of this simulation is to empirically test the core hypothesis of the Autaxys framework: that a system governed by a local optimization principle can self-organize into stable, coherent structures.

This simulation implements the following core concepts from the formal specification (`AUTX-A0-CCD-TM-001.md`):

*   **Universe State:** A graph `G = (D, R)` of Distinctions (nodes) and Relations (edges).
*   **Proto-Properties:** Each Distinction has a `polarity` (`+1` or `-1`).
*   **Cosmic Algorithm:** Three graph rewrite rules are applied:
    *   `r1 (Annihilation)`: A bonded `+1/-1` pair is removed.
    *   `r2 (Bonding)`: A relation is created between a `+1` and a `-1`.
    *   `r3 (Redundancy Collapse)`: A K3 subgraph (triangle) simplifies to a K2 (bonded pair).
*   **Optimization Principle:** The system evolves by selecting the rule that maximizes the **Autaxic Lagrangian (`L_A`)**, a measure of the graph's structural coherence.

## 2. Technology Stack

This simulation is a web application built with:

*   **TypeScript:** For type safety and robust code.
*   **Graphology:** For all graph data structures and manipulation.
*   **Sigma.js:** For rendering the final graph visualization.
*   **Chart.js:** For plotting the time-series data.
*   **Parcel:** As the web application bundler and development server.

## 3. Installation and Setup

To run the simulation, you will need Node.js and npm installed on your system.

**Prerequisites:**
*   **Node.js**: Version 16.0.0 or higher is required. It is highly recommended to manage Node versions using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm). If you don't have Node.js, you can download it from [nodejs.org](https://nodejs.org/).

**Installation Steps:**

1.  **Open your terminal** and navigate to the directory containing the simulation source code (where `package.json` is located).

2.  **Install dependencies:** Run the following command. This will download all the required libraries into a `node_modules` folder. This step is mandatory.
    ```bash
    npm install
    ```

## 4. Running the Simulation (Operation)

1.  **Start the development server:** In the same directory, run:
    ```bash
    npm start
    ```
    This command tells Parcel to build the application and start a local web server.

2.  **Open in browser:** Your terminal will display a message, typically `Server running at http://localhost:1234`. Open this URL in your web browser.

3.  **Execute the simulation:** Click the **"Start Simulation"** button on the web page. The simulation will run in the background, and the UI will update with the results upon completion.

## 5. Debugging Common Issues

If you encounter errors, check for these common problems:

*   **Error: `sh: 1: parcel: not found`**
    *   **Cause:** You have not installed the project dependencies. The `parcel` command is a local dependency.
    *   **Solution:** Run `npm install` in the project directory.

*   **Error: `gyp ERR!` or `notsup Unsupported engine`**
    *   **Cause:** Your version of Node.js is too old. The terminal output will show warnings like `wanted: {"node": ">= 16.0.0"}` but `current: {"node":"10.24.1"}`.
    *   **Solution:** Update your Node.js version. The recommended way is with `nvm`:
        ```bash
        # Install nvm (if you don't have it)
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
        source ~/.bashrc

        # Install and use a modern version of Node.js
        nvm install --lts
        nvm use --lts

        # Go back to the project, remove the old attempt, and reinstall
        cd /path/to/simulation/code
        rm -rf node_modules
        npm install
        ```

*   **The page is blank or a chart does not render:**
    *   **Cause:** There might be a JavaScript error in the browser.
    *   **Solution:** Open your browser's **Developer Console** (usually by pressing `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`) and check the "Console" tab for any red error messages.

## 6. Interpreting the Output

The simulation produces several key outputs designed for research analysis:

#### **Final State Summary**
This panel provides a snapshot of the universe at the end of the simulation:
*   **`L_A`**: The final Autaxic Lagrangian value. A higher value suggests a more coherent state.
*   **`Distinctions`**: The final number of nodes (`|D|`).
*   **`Relations`**: The final number of edges (`|R|`).
*   **`Bonded Pairs`**: The number of stable `+1/-1` pairs, the target structure.

#### **Charts**

1.  **Autaxic Lagrangian (`L_A`) vs. Step**: This is the most important plot. It shows how the overall "fitness" or coherence of the universe evolves. An increasing trend indicates the system is successfully self-organizing towards more stable configurations.
2.  **Number of Bonded Pairs vs. Step**: This tracks the emergence of the target structure (`P_ID`). An increase here shows the formation of stable building blocks.
3.  **Graph Size (`|D| + |R|`) vs. Step**: This plot shows the evolution of the universe's total complexity. You can see whether the universe is growing, shrinking (due to annihilation), or reaching a stable size.
4.  **Final Graph State**: This is a visual representation of the final universe.
    *   **Blue nodes** represent `+1` polarity.
    *   **Red nodes** represent `-1` polarity.
    *   Look for patterns: a stable state might consist of many isolated blue-red pairs. An empty graph indicates total annihilation.

#### **Download Results (CSV)**
Clicking this button downloads a `_simulation_log.csv` file. This file contains the raw, step-by-step data for all the metrics plotted in the charts, allowing for more detailed external analysis (e.g., using Python/pandas, R, or Excel).

## 7. Connection to Formal Research
This simulation is a direct implementation of the formalisms defined in the Autaxys research program. For specific details on the theoretical underpinnings, refer to the following documents in the main repository:
*   `AUTX-SOW-P6.2.2-TM2-OC.md`: Statement of Work for formalizing Ontological Closure via Tension Minimization.
*   `AUTX_A1_AGEv0.1_Simulation_Impl_Spec_V1.md`: The detailed implementation specification for this simulation.
*   `AUTX-A0-Conceptual-AGE-Expansion-Speculations-V1.md`: Discusses the broader conceptual space and future directions for the model.
