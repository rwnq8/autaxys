# Autaxys MVU-1 Analysis Workbench

**Version: 6.0 (Definitive, Parameter-Free, Self-Generating)**

## 1. Overview

This project is the definitive, self-contained instrument for simulating and analyzing the Autaxys framework's "Minimal Viable Universe 1" (MVU-1). It has been re-architected to embody the core principle of self-genesis, **starting from a truly empty graph and evolving until a natural halting condition is met.**

A user performs a single action: clicking "Start Full Analysis." The workbench then automatically executes a complete, three-phase scientific analysis and generates a comprehensive report directly in the browser.

## 2. The Analysis Workflow (Automated)

Upon starting, the workbench automatically performs the following sequence:

1.  **Phase 1: Purely Deterministic Run (Intrinsic Evolution)**
    *   The simulation starts from an **empty graph**.
    *   It evolves using a deterministic tie-breaking rule and high numerical precision.
    *   The universe runs until it reaches a natural halt (Fixed Point OC, Tension Minimization OC, or Annihilation) or a high intrinsic step limit.
    *   This models the intrinsic, parameter-free evolution of a single universe, highlighting its journey toward **Ontological Closure** and reduced **Relational Tension**.

2.  **Phase 2: Precision Divergence Analysis**
    *   The workbench re-runs the deterministic simulation in lock-step against a slightly perturbed version (using native floating-point precision).
    *   It reports the exact step where a microscopic numerical difference causes their evolutionary paths to diverge, quantifying the "butterfly effect."

3.  **Phase 3: Scientific Batch Analysis (Monte Carlo Exploration)**
    *   The workbench automatically performs 30 unique, stochastic simulations.
    *   This phase analyzes the *average* behavior of the self-generating system, providing statistical data on `L_A`, `Relational Tension`, and the achievement of `Ontological Closure` over time.

4.  **Phase 4: Comprehensive Report Generation**
    *   All findings from the three phases are aggregated and presented in a single, detailed report directly on the page, including plots and interpretations.

## 3. The Core Hypothesis

The experiment tests the following hypothesis:
> Can a system governed by a simple, local optimization principle spontaneously organize itself into complex, stable structures, starting from nothing?

A statistically significant upward trend in the average "coherence" score (`L_A`) and/or a downward trend in `Relational Tension` across the batch runs provides strong evidence in support of this hypothesis. The achievement of `Ontological Closure` states is a key success metric.

## 4. Setup and Installation

**Prerequisites:**
*   **Node.js:** v16 or higher is recommended.

**One-Time Setup:**
1.  Open your terminal in this project's root directory.
2.  **Install all dependencies:**
    ```bash
    npm install
    ```

## 5. How to Use the Workbench

1.  **Start the web server:** In your terminal, run: `npm start`
2.  **Open the application:** Navigate to `http://localhost:1234`.
3.  **Click the "Start Full Analysis" button.**