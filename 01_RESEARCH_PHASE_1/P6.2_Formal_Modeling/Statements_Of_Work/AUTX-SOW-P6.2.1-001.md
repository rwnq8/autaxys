**Statement of Work (SOW)**

**SOW ID:** AUTX-SOW-P6.2.1-001
**WBS Reference:** 2.2.1 Project 6.2, Phase 6.2.1: Formalism Selection & Initial Notation Development
**Project Title:** Formalism Selection and Notation for Autaxic "Toy Model" (AGE v0.1)
**Project Manager/Lead:** Rowan Brad Quni (PI)

**1. Objective:**
To research, evaluate, and select the most suitable primary mathematical/computational formalism(s) for implementing the "Toy Model" (AGE v0.1) as described in `_25161103619.md` and clarified in `AUTX-A0-CCD-TM-001`, and to develop an initial, consistent formal notation for its primitives (Distinctions, Relations, Proto-properties) and core rules.

**2. Scope of Work / Key Activities:**
    *   **2.1 (WBS 6.2.4.1.2): Research & Evaluate Formalisms:** Based on the requirements of the "Toy Model" (Attributed Dynamic Graphs, Graph Rewriting Rules, measurable properties for Ontological Closure), research and evaluate candidate formalisms. Priority candidates from `_25161103619.md` include Attributed Dynamic Graphs and Graph Rewriting Systems. Other candidates listed in `AUTX_Master_Plan_v2.0_Part_V_Research_Projects.md` (Sec 6.2.2.1, 6.2.4.1.2) such as process calculi, type theory, category theory may be briefly reviewed for supplementary concepts if needed.
    *   **2.2 (WBS 6.2.4.1.2): Assess Strengths/Weaknesses:** Assess the chosen formalisms' ability to represent:
        *   Distinctions (D) as nodes.
        *   Relations (R) as directed edges.
        *   Proto-properties as attributes on nodes/edges (as clarified in `AUTX-A0-CCD-TM-001`).
        *   Graph Rewriting Rules for `GenesisRule`, `FormationRule`, `AnnihilationRule` (as clarified in `AUTX-A0-CCD-TM-001`).
        *   Measurable properties for Ontological Closure definitions (Fixed Point, Tension Minimization, with Limit Cycle as a secondary consideration for v0.1, per `AUTX-A0-CCD-TM-001`).
    *   **2.3 (WBS 6.2.2.2, 6.2.4.1.2): Develop Initial Formal Notation:** Develop a clear, precise, and consistent mathematical notation for representing D, R, their attributes (proto-properties), and the structure of the graph rewriting rules for the "Toy Model", consistent with the selected formalism.
    *   **2.4 Document Rationale:** Document the rationale for selecting the primary formalism(s) and the design choices for the notation system in the AFKB.

**3. Inputs:**
    *   `_25161103619.md` (Primary requirements for the "Toy Model" formalism).
    *   `AUTX-A0-CCD-TM-001` (Conceptual Clarification Document for Toy Model).
    *   `AFKB_Processed_Artifacts_V1.md` and `AFKB_Structure_And_Management.md` (representing deliverables from AUTX-SOW-P6.1-001).
    *   `D-P6.7-1_Unified_Framework_v1.9.md` (Conceptual definitions of D, R, proto-properties).
    *   `AUTX_Master_Plan_v2.0_Part_V_Research_Projects.md` (Sec 6.2.2.1, 6.2.4.1).
    *   `AUTX_A0_Synth_Formalisms_V1.md` (Consolidated Thematic Synthesis for formalism candidates and lessons).
    *   Relevant academic literature on graph theory, graph rewriting systems, and computational modeling.

**4. Deliverables:**
    *   **D1:** Report on Formalism Evaluation and Selection (AFKB Artifact ID: `AUTX_A1_FormalismSelection_Report_V1`), detailing the chosen formalism(s) (e.g., specific type of attributed dynamic graph library/framework, graph rewriting system engine/language) and the rationale.
    *   **D2:** Initial Formal Notation Document v0.1 (AFKB Artifact ID: `AUTX_A1_FormalNotation_AGEv0.1_V1`), specifying the mathematical symbols and structures for representing "Toy Model" components (D, R, proto-properties, rules).
    *   All deliverables to be archived in the AFKB.

**5. Assumptions:**
    *   The "Toy Model" description in `_25161103619.md` and clarifications in `AUTX-A0-CCD-TM-001` are sufficiently detailed to guide formalism selection.
    *   PI has access to necessary academic resources and potentially software tools for evaluating formalisms.

**6. Risks:**
    *   Selected formalism proves inadequate or overly complex during subsequent implementation.
    *   Difficulty in creating a notation that is both rigorous and intuitive.
    *   Time to evaluate a wide range of formalisms may be underestimated.

**7. Success Criteria:**
    *   A primary formalism is selected that directly supports the representation of attributed dynamic graphs and graph rewriting rules, as specified for AGE v0.1.
    *   The Initial Formal Notation Document v0.1 is sufficiently precise to be used in SOW AUTX-SOW-P6.2.2-TM1 for defining the "Toy Model" primitives and rules.
    *   The selection rationale is well-documented and justified in the AFKB.
