**Conceptual Clarification Document for Autaxic "Toy Model" (AGE v0.1) Formalization**

**Document ID:** AUTX-A0-CCD-TM-001
**Based on:** `_25161103619.md` (Toy Model Proposal) and `D-P6.7-1_Unified_Framework_v1.9.md` (Autaxys v1.9 Conceptual Framework)
**Purpose:** To identify and propose resolutions for conceptual ambiguities or underspecified aspects in the "Toy Model" proposal, ensuring a clear basis for Phase 1 formalization (Formalism Selection and Primitive/Rule Definition).

**1. Primitives and Proto-properties (Ref: Toy Model Proposal - Phase 1, Step 1):**

*   **1.1. Minimal Set of Proto-properties for Toy Model:**
    *   **Issue:** `D-P6.7-1_Unified_Framework_v1.9.md` (Sec 4.2.2) lists numerous speculative proto-properties. The Toy Model proposal (`_25161103619.md`) gives examples but doesn't explicitly select a minimal set for AGE v0.1.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   **For Distinctions (D - nodes):**
            *   Confirm use of `ID` (unique identifier, likely integer, system-assigned).
            *   `ProtoPolarity`: Data type (e.g., integer `{-1, 0, +1}` or a more abstract enum) and initial distribution if relevant for `GenesisRule`.
            *   `ProtoValence`: Data type (e.g., non-negative integer). Clarify its meaning: a capacity for *n* relations, or a type of bonding site that needs to be satisfied? The "unsatisfied proto-valences" for Tension Minimization suggests the latter.
        *   **For Relations (R - edges):**
            *   `Type`: Data type (e.g., enum, string). What are the initial types for the toy model? E.g., `'link'`, `'strong-link'`. Is one generic type sufficient initially?
            *   `FlowResistance`: Data type (e.g., float `0.0-1.0`).
        *   **Other Proto-properties from v1.9 for consideration (and likely deferral for Toy Model):** Should `ProtoPolarity` also apply to R for the toy model? (v1.9 Sec 4.2.2.2). *Recommendation: Defer for toy model simplicity.*
    *   **Proposed Initial Set for AGE v0.1:**
        *   D-Nodes: `ID` (int, unique), `ProtoPolarity` (int: -1, 0, +1), `ProtoValence` (int >= 0, representing 'bonding desire/sites').
        *   R-Edges: `Type` (enum: e.g., `default_link`), `Strength` (float, potentially inverse of FlowResistance, e.g., 0.0-1.0). *Note: "Strength" might be more intuitive than "FlowResistance" if higher values mean stronger link.*

**2. Minimal "Cosmic Algorithm" (Graph Rewriting Rules) (Ref: Toy Model Proposal - Phase 1, Step 2):**

*   **2.1. `GenesisRule(p)`:**
    *   **Issue:** "Stochastic rule for adding new D/R pairs." Underspecified `p` and mechanism.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   What does `p` control? Probability per simulation step? Rate of generation?
        *   How are D and R proto-properties assigned during genesis? (e.g., `ProtoPolarity` for D randomly chosen from `{-1,0,+1}`? `ProtoValence` randomly from a small range e.g., `0-3`?)
        *   Are D and R added as an already-connected pair, or can D be added first, then R forms via `FormationRule`? The proposal phrasing "D/R pairs" suggests connected. v1.9 `S₀ -> D + R` also suggests co-creation.
    *   **Proposed Interpretation for AGE v0.1:** `GenesisRule` adds one D node and one R edge connected *to a new, simultaneously created D node*, forming a D-R-D triplet if the first D was existing, or a D-R-D if both D are new. Or simpler: adds a single D node with random proto-properties. R's only form via `FormationRule`. *Recommendation: Add only D nodes via GenesisRule to simplify initial state and make R formation explicit.* If D/R pairs, then D1-R-D2, with D1, R, D2 all new, or D1 existing, R-D2 new. *Simpler still for toy model: `GenesisRule` adds one D node with random proto-properties based on `p`.*

*   **2.2. `FormationRule(D1, D2)`:**
    *   **Issue:** "Creates an R edge... if proto-properties are compatible." Compatibility logic is undefined.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   Define specific compatibility logic. E.g., Can D with `ProtoPolarity: +1` form a relation with `D: -1`? Does `ProtoValence` decrement upon formation? Is an R formed if `D1.ProtoValence > 0` AND `D2.ProtoValence > 0` AND `compatible(D1.ProtoPolarity, D2.ProtoPolarity)`?
        *   What are the attributes of the newly formed R? (e.g., `Type: 'default_link'`, `Strength: some_value` perhaps based on D properties or a default).
    *   **Proposed Logic for AGE v0.1:** An R forms between D1 and D2 if `D1.ProtoValence > 0`, `D2.ProtoValence > 0`, and `D1.ProtoPolarity == -D2.ProtoPolarity` (and neither is 0). Upon formation, `D1.ProtoValence--`, `D2.ProtoValence--`. R gets `Type: 'default_link'`, `Strength: 1.0`.

*   **2.3. `AnnihilationRule(R)`:**
    *   **Issue:** "Removes an R edge and its D nodes if they form a logically inconsistent or unstable pair (e.g., `D(+1)` and `D(-1)` annihilating)." Conditions for "inconsistent/unstable" are broad.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   Does annihilation depend on the R type/strength, or only the D nodes' properties?
        *   Example: `D(+1)` and `D(-1)` annihilating. Does this mean if D1 and D2 are connected by *any* R, and `D1.ProtoPolarity == +1` and `D2.ProtoPolarity == -1`, then D1, D2, and R are removed? What if one is `+1` and the other is `0`?
    *   **Proposed Logic for AGE v0.1:** If an R connects D1 and D2, and `D1.ProtoPolarity == +1` and `D2.ProtoPolarity == -1` (or vice-versa), and perhaps their `ProtoValence` are both 0 (meaning they have no other stabilizing connections), then D1, D2, and R are removed. *Simpler: If D1 and D2 are connected by an R, and their polarities are opposite and non-zero, they annihilate.*

**3. Ontological Closure (OC) (Ref: Toy Model Proposal - Phase 1, Step 3):**

*   **3.1. Fixed Point:**
    *   **Issue:** "for a certain number of simulation steps."
    *   **Clarification/Decision Needed for AGE v0.1:** Define this number of steps (N_fixed_point_check) as a simulation parameter.
*   **3.2. Limit Cycle:**
    *   **Issue:** Detection mechanism.
    *   **Clarification/Decision Needed for AGE v0.1:** For AGE v0.1, detection of limit cycles might be complex. Simplest approach: if not a fixed point, run for many more steps and observe. Formal detection (e.g., hashing graph states and looking for repeats) might be deferred past v0.1 if too complex initially. *Recommendation: Focus on Fixed Point and Tension Minimization for v0.1, defer complex limit cycle detection.*
*   **3.3. Tension Minimization:**
    *   **Issue:** Definition of "Relational Tension" function.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   Define a simple tension function based on selected proto-properties. Example: `Tension(Subgraph) = sum_nodes(abs(ProtoPolarity_if_valence_unsatisfied)) + sum_nodes(ProtoValence_if_positive)`. E.g., each unsatisfied valence point contributes 1 to tension. Each D node with non-zero polarity that also has unsatisfied valence contributes `abs(ProtoPolarity)` to tension.
        *   How is "local minimum" determined? (e.g., subgraph state where no single rule application from the cosmic algorithm can further reduce its tension score).

**4. AGE v0.1 Simulation Setup (Ref: Toy Model Proposal - Phase 1, Step 4):**

*   **4.1. Initial State "Foam":**
    *   **Issue:** "starts with a random 'foam' of D's and R's." This seems to contradict `GenesisRule` adding D/R *pairs*.
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   What is the exact nature of the initial state?
            *   Option A: Start with an empty graph, and only `GenesisRule` adds elements.
            *   Option B: Start with a pre-populated graph of N_initial D nodes with random proto-properties. R's then form via `FormationRule`.
            *   Option C: Start with D's and R's already connected randomly (a "foam"). This seems hardest to define consistently.
        *   *Recommendation for AGE v0.1: Option B. Start with N_initial D nodes, their proto-properties assigned randomly within defined ranges. Then let `FormationRule` and `AnnihilationRule` operate. `GenesisRule` can then add new D nodes over time.*
*   **4.2. Stochasticity:**
    *   **Issue:** Where is stochasticity primarily introduced? In `GenesisRule`? In rule selection if multiple rules can apply?
    *   **Clarification/Decision Needed for AGE v0.1:**
        *   If `GenesisRule` is the main source, its parameter `p` needs clear definition.
        *   If multiple rules can apply to a subgraph or node/edge, how is one chosen? Randomly? Based on some priority? *Recommendation: For v0.1, if multiple rules can apply, pick one randomly, or apply all applicable non-conflicting rules in one "step".*

This document is intended to facilitate focused discussion and decision-making for the PI before or during the execution of SOW AUTX-SOW-P6.2.1-001 and AUTX-SOW-P6.2.2-TM1.
