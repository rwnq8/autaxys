# Autaxys Program Work Breakdown Structure (WBS) - Documentation

## 1. Introduction

This document provides a guide to the Work Breakdown Structure (WBS) for the Autaxys Research & Development Program. The WBS is a hierarchical decomposition of the total scope of work to be carried out to accomplish the program's objectives and create the required deliverables.

The full WBS is maintained in the file **`WBS_Autaxys_R&D_Program_v1.0.md`** in this directory. This document serves to explain its structure and link its components to the project's file and folder organization.

## 2. WBS Philosophy

The WBS is designed to mirror the strategic structure outlined in the **Autaxys Master Plan v2.0**. Its top levels correspond to the major research phases, and its lower levels map directly to the Research Projects detailed in `Part V` of the Master Plan. This ensures a clear and traceable line from strategic intent to specific work packages and deliverables.

## 3. Top-Level Breakdown

The WBS is organized into the following major sections:

-   **1.0 Program Management & Foundational Setup:** Covers all overarching administrative, governance, and tooling activities.
-   **2.0 Research Phase 1: Foundational Formalization & Core Model Development:** The initial phase focused on translating core concepts into a testable "Toy Model" (AGE v0.1).
-   **3.0 Research Phase 2: Expansion, Initial Applications, & Empirical Linkages:** Focuses on expanding the models and connecting them to physics and cosmology.
-   **4.0 Research Phase 3: Mature Theory, Broader Applications, & Community Engagement:** The long-term phase for tackling "hard problems" and developing the mature theory.
-   **5.0 Cross-Cutting Activities:** Ongoing research in philosophy, potential applications, and dissemination that occurs throughout all phases.
-   **6.0 Program Closure:** A placeholder for the final program wrap-up.

## 4. Connecting the WBS to Project Files and Activities

The WBS provides the formal structure for the work. Here is how key WBS items map to the activities and documents within the repository, with a focus on the currently active **Phase 1** and **Project 6.2**.

### **WBS 2.2: Project 6.2 - Formal Mathematical & Computational Modeling**

This work package is the core of Research Phase 1 and is located in the directory:
`./projects/AUTX/02_Research_Pillars_And_Projects/Pillar_5.1_Foundational_Theory_Formalization/Project_6.2_Formal_Modeling/`

The activities within this project are defined by several key documents and Statements of Work (SOWs):

-   **WBS 2.2.1: Phase 6.2.1 - Formalism Selection & Initial Notation Development**
    -   **Governing SOW:** `AUTX-SOW-P6.2.1-001.md`
    -   **Conceptual Input:** `AUTX-A0-CCD-TM-001.md`
    -   **Deliverables:**
        -   `D-P6.2-2_Report_on_Suitable_Formalisms_v1.0.md`
        -   `D-P6.2-3_Initial_Formal_Language_v1.0.md`

-   **WBS 2.2.2: Phase 6.2.2 - Modeling Fundamental Dynamics & Meta-Logic**
    -   **Governing SOW:** `AUTX-SOW-P6.2.2-TM1.md` (Defines Primitives and Core Rules)
    -   **Conceptual Input:** `AUTX-A0-CCD-TM-001.md` (Provides clarifications on rules like `GenesisRule`, `FormationRule`, `AnnihilationRule`)
    -   **Deliverables:**
        -   `AUTX_A1_AGEv0.1_Primitives_V1.md`
        -   `AUTX_A1_AGEv0.1_CoreRules_V1.md`

-   **WBS 2.2.5: Phase 6.2.5 - Modeling Simple Emergent Patterns & Ontological Closure**
    -   **Governing SOW:** `AUTX-SOW-P6.2.2-TM2-OC.md` (Defines Tension Minimization OC)
    -   **Conceptual Input:** `AUTX_A1_AGEv0.1_OC_TensionMin_V1.md` (Formal definition of tension)
    -   **Implementation Specification:** `AUTX_A1_AGEv0.1_Simulation_Impl_Spec_V1.md`
    -   **Code Scaffolding/Implementation:** `AGE_v0.1_Prototype.py.md`
    -   **Results Analysis:** `AUTX_A1_AGEv0.1_Simulation_Analysis_Report_V1.md`

-   **Broader Context for Future Work:**
    -   All activities within Project 6.2 are informed by the long-term vision laid out in **`AUTX-A0-Conceptual-AGE-Expansion-Speculations-V1.md`**. This document explores concepts like the "Tension Landscape," dynamic rule application, and emergent hierarchies, which guide the evolution of the models beyond the initial v0.1 Toy Model.

## 5. How to Use the WBS

The WBS serves as a map to the project's execution plan. To find the work related to a specific area:
1.  Locate the relevant item in the `WBS_Autaxys_R&D_Program_v1.0.md` file.
2.  Use the WBS ID and description to find the corresponding project folder in the `02_Research_Pillars_And_Projects/` directory.
3.  Within the project folder, locate the relevant SOWs, plans, specifications, and deliverables that implement the work described in the WBS.

The WBS is a living document and will be updated in conjunction with the Master Plan as the research program evolves.