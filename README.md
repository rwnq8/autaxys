# Autaxys Research Program


## 1. High-Level Summary

This repository is the central hub for the **Autaxys Research & Development Program**. Autaxys is a proposed fundamental theory of reality, positing that the universe is a self-generating, self-organizing, and self-actualizing system. This research aims to develop this concept into a rigorous, formal, and predictive scientific framework.

The work contained here documents the entire research lifecycle, from initial conceptualization and philosophical grounding to formal mathematical modeling, computational simulation, results analysis, and strategic planning.

## 2. Repository Structure

This repository uses a standardized structure to ensure clarity and maintainability. All projects and documents are organized according to the following hierarchy.

```
AUTX/
├── 📄 README.md                 (You are here)
├── 📄 LICENSE
├── 🗂️ 00_Master_Plan/            (Canonical strategic documents)
├── 🗂️ 01_Foundational_Documents/   (Core conceptual papers)
├── 🗂️ 02_Research_Pillars_And_Projects/
│   └── 🗂️ Pillar_5.X_Name/
│       └── 🗂️ Project_6.X_Name/
│           ├── 📄 README.md        (Project-specific summary)
│           ├── 🗂️ Code/           (Source code for simulations)
│           ├── 🗂️ Deliverables/   (Final, canonical reports & papers)
│           ├── 🗂️ Source_Material/ (Input documents, conceptual notes)
│           ├── 🗂️ Statements_Of_Work/ (SOWs for the project)
│           └── 🗂️ Working_Drafts/  (In-progress documents, older versions)
├── 🗂️ 03_Autologos_System/         (Specifications for AI tooling)
├── 🗂️ 06_Governance_And_Admin/       (WBS, project charters, etc.)
├── 🗂️ _workspace/                  (Temporary files, logs, AI outputs - safe to ignore)
└── 🗂️ 99_Archive/                  (Historical versions and non-essential old files)
```

## 3. How to Keep This Project Organized

This project uses an automated Python script to maintain the clean directory structure. As you work, files (especially AI-generated logs, drafts, and temporary files) will accumulate in the project directories. **You should run this script periodically to clean up the workspace.**

### **Instructions for Running the Organization Script**

The instructions for running the script are **not intuitive**, so please follow them carefully. The script must be run from the **correct parent directory**.

1.  **Locate the Script:** The script is named **`organize_project.py`** and should be located in the root of the repository that contains the `projects` folder.

2.  **Open Your Terminal:** Launch your command-line terminal.

3.  **Navigate to the CORRECT Directory:** Use `cd` to navigate to the folder that **CONTAINS `projects/AUTX`**. Based on your setup, this is likely `~/Documents/qnfo.org`.

    ```bash
    # Example command to navigate to the correct location
    cd ~/Documents/qnfo.org
    ```
    Your prompt should look something like `rwnquni@org:~/Documents/qnfo.org$`.

4.  **Execute the Script:** Run the script by telling Python where it is *relative to your current location*.

    ```bash
    python3 projects/AUTX/organize_project.py
    ```

The script will then run, identify files that are out of place, and move them to their correct locations (e.g., `_workspace`, `99_Archive`, or internal project subfolders like `Deliverables` and `Working_Drafts`). It is safe to run this script multiple times.

## 4. Current Research Focus

The program's current, primary focus is **Project 6.2: Formal Mathematical & Computational Modeling of the Autaxic Generative Engine (AGE) v0.1 "Toy Model"**.

This project translates the core theory into a concrete, testable simulation by formalizing the primitives (`Distinctions`, `Relations`), the "Cosmic Algorithm" (`Genesis`, `Formation`, `Annihilation` rules), and the concept of `RelationalTension`. You can find all related work inside `02_Research_Pillars_And_Projects/Pillar_5.1_Foundational_Theory_Formalization/Project_6.2_Formal_Modeling/`.

## 5. Key Resources & Engagement

*   **Zenodo Community:** Explore the broader Autaxys research community and discover related publications and datasets on [Zenodo](https://zenodo.org/communities/autaxys/).
*   **Foundational Publications:**
    1.  *Autaxys and Autology: Definition, Rationale, and Implications* ([DOI: 10.5281/zenodo.15527007](https://doi.org/10.5281/zenodo.15527007))
    2.  *A New Way of Seeing: Autaxys as a Framework for Pattern-Based Reality, from Rocks to Neutrinos* ([DOI: 10.5281/zenodo.15527088](https://doi.org/10.5281/zenodo.15527088))
*   **Contributions:** We welcome engagement with the Autaxys research! If you are interested in contributing, please reach out to the Principal Investigator via the contact information provided in this repository's `LICENSE` file.

## 6. License

The content within this repository is made available under the terms specified in the `LICENSE` file. In summary, this license permits **non-commercial use only** and **requires clear attribution**.
