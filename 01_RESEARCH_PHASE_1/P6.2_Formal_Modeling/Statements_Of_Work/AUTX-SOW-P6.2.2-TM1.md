**Statement of Work (SOW)**

**SOW ID:** AUTX-SOW-P6.2.2-TM1  
**WBS Reference:** Blend of WBS 2.2.2 (P6.2, Ph 6.2.2), targeting _25161103619.md Phase 1, Steps 1 & 2.  
**Project Title:** "Toy Model" (AGE v0.1) - Mathematical Primitives and Core Algorithm Definition  
**Project Manager/Lead:** Rowan Brad Quni (PI)  

**1. Objective:**  
To mathematically define the primitives (Distinctions, Relations, Proto-properties) and a minimal "Cosmic Algorithm" (core graph rewriting rules) for the "Toy Model" (AGE v0.1), using the formalism and notation selected and developed in AUTX-SOW-P6.2.1-001. This corresponds to steps 1 and 2 of Phase 1 in _25161103619.md.

**2. Scope of Work / Key Activities:**  
* **2.1 (Proposal Phase 1, Step 1): Define Primitives Mathematically.**  
* Using the selected formalism and the AUTX_A1_FormalNotation_AGEv0.1_V1 document, formally represent Distinctions (D) as nodes in an Attributed Dynamic Graph.  
* Formally represent Relations (R) as directed edges between nodes.  
* Formally define how Proto-properties (as clarified in AUTX-A0-CCD-TM-001) are represented as attributes (data) attached to nodes (D) and edges (R).  
* **2.2 (Proposal Phase 1, Step 2): Formalize a Minimal "Cosmic Algorithm".**  
* Define a small, core set of the proposed rules as precise, automatable Graph Rewriting Rules using the selected formalism and notation.  
* **Priority Rules to Formalize (based on clarifications in AUTX-A0-CCD-TM-001):**  
* **GenesisRule(p):** A stochastic rule for adding new D nodes to the graph with specified proto-properties. Define parameters p and the property assignment logic.  
* **FormationRule(D1, D2):** A rule that creates an R edge between two D nodes if their proto-properties are compatible. Define compatibility conditions and resultant R attributes.  
* **AnnihilationRule(R_or_D_pair):** A rule that removes an R edge and/or its D nodes if they form a logically inconsistent or unstable pair. Define instability/inconsistency conditions.  
* **2.3 Documentation:** Document all formal definitions, rules, and data structures in a dedicated section of the AFKB for the AGE v0.1 (e.g., AUTX_A1_AGEv0.1_Primitives_Rules_V1).

**3. Inputs:**  
* _25161103619.md (Primary requirements for "Toy Model" primitives and rules).  
* AUTX-A0-CCD-TM-001 (Conceptual Clarification Document for Toy Model).  
* Deliverable D1 from AUTX-SOW-P6.2.1-001: AUTX_A1_FormalismSelection_Report_V1.  
* Deliverable D2 from AUTX-SOW-P6.2.1-001: AUTX_A1_FormalNotation_AGEv0.1_V1.  
* D-P6.7-1_Unified_Framework_v1.9.md (Conceptual basis for proto-properties).

**4. Deliverables:**  
* **D1:** Mathematical Definition of Primitives for AGE v0.1 (AFKB Artifact ID: AUTX_A1_AGEv0.1_Primitives_V1):  
* Formal specification of D (nodes) and their attributes.  
* Formal specification of R (edges) and their attributes.  
* Formal specification of Proto-property data types and ranges used in AGE v0.1.  
* **D2:** Formal Definition of Minimal Cosmic Algorithm for AGE v0.1 (AFKB Artifact ID: AUTX_A1_AGEv0.1_CoreRules_V1):  
* Formal specification of GenesisRule(p) as a graph rewriting rule.  
* Formal specification of FormationRule(D1, D2) as a graph rewriting rule.  
* Formal specification of AnnihilationRule(R_or_D_pair) as a graph rewriting rule.  
* Combined documentation integrated into AUTX_A1_AGEv0.1_Primitives_Rules_V1 in the AFKB.

**5. Assumptions:**  
* The formalism and notation selected/developed in AUTX-SOW-P6.2.1-001 are adequate for these definitions.  
* The conceptual definitions of proto-properties and rules clarified in AUTX-A0-CCD-TM-001 are sufficiently robust for formalization.

**6. Risks:**  
* Difficulty in translating conceptual rules into precise, unambiguous graph rewriting rules within the chosen formalism.  
* The initial set of proto-properties or rules, even after clarification, may be found to be insufficient or overly complex for a "toy model" upon detailed formalization.  
* Potential for unforeseen logical inconsistencies in the rule definitions when implemented in the chosen formalism.

**7. Success Criteria:**  
* All primitives (D, R, Proto-properties for AGE v0.1) are defined mathematically using the chosen notation.  
* The three priority rules (GenesisRule, FormationRule, AnnihilationRule) are formally defined as graph rewriting rules within the chosen formalism.  
* The definitions are sufficiently precise to guide the implementation of the AGE v0.1 simulation (a subsequent task).  
* All definitions are clearly documented in the AFKB.