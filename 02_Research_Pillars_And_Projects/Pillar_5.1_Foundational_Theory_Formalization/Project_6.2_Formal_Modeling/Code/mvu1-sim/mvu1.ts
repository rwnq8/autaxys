import Graph from 'graphology';
import { PrecisionNumber, PrecisionMode } from './precision';

/** Determines how tie-breaking is handled when multiple moves yield the same L_A. */
export type TieBreakingMode = 'deterministic' | 'stochastic';

/** Configuration for a single simulation run. No longer directly user-configurable. */
export interface SimConfig {
    precision: PrecisionMode;
    tieBreaking: TieBreakingMode;
    seed?: number; // Optional seed for randomness in stochastic mode
}

/** Represents the state and metrics logged at each step of the simulation. */
export interface LogEntry {
    step: number;
    L_A: PrecisionNumber;
    num_distinctions: number;
    num_relations: number;
    rule_applied: string;
    total_tension?: PrecisionNumber; // Total Relational Tension
    is_fixed_point_oc?: boolean;    // True if in Fixed Point Ontological Closure
    is_tension_minimum_oc?: boolean; // True if in Tension Minimization Ontological Closure
    halt_reason?: 'MAX_STEPS' | 'FIXED_POINT_OC' | 'TENSION_MIN_OC' | 'EMPTY' | 'LIMIT_CYCLE' | 'UNBOUNDED_GROWTH' | 'PRIMORDIAL_SOUP_COMPLETE'; // Reason for halting
}

/** Internal type for representing a potential rule application (move) and its resulting "fitness" score. */
type Move = {
    rule: string;
    nodes: string[];
    la: PrecisionNumber;
    priority: number;
};

/**
 * Represents a fundamental Distinction (node) in the universe.
 * In MVU-1, it has a polarity (+1 or -1) and a fixed initial ProtoValence.
 */
interface DistinctionAttrs {
    polarity: 1 | -1;
    protoValence: number; // Represents the *initial* bonding capacity/desire
}

/**
 * The core simulation engine for MVU-1.
 * Manages the universe's graph state, applies "Cosmic Algorithm" rules,
 * and makes decisions based on L_A to model self-organization.
 */
export class MVU1_Simulator {
    public config: SimConfig;
    public graph: Graph<DistinctionAttrs, {}, {}>; // Graphology Graph with typed attributes
    public log: LogEntry[] = [];
    public step_counter = 0;
    private rule_priority: { [key: string]: number } = { 'genesis': 4, 'bonding': 3, 'collapse': 2, 'annihilation': 1 };
    private lcg_seed: number;
    private _next_node_id = 0; // Ensures unique IDs for new distinctions

    // --- Intrinsic Parameters for a Self-Generating Universe (No Longer in SimConfig) ---
    // These are fixed within the model, not external inputs, embodying self-generation.
    // The universe always starts truly empty, and Genesis populates it.
    public readonly INITIAL_PRIMORDIAL_DISTINCTIONS = 10; // Number of +/- distinctions to create initially (first genesis steps)
    public readonly MAX_PROTO_VALENCE = 2; // Max random valence for new distinctions (0 to MAX_PROTO_VALENCE)
    private readonly TENSION_WV = new PrecisionNumber(1.0, 'high'); // Weight for unsatisfied valence tension
    private readonly TENSION_WP = new PrecisionNumber(5.0, 'high'); // Weight for frustrated polarity tension

    // --- Parameters for Dynamic Halting ---
    public readonly MAX_INTRINSIC_STEPS = 5000; // Hard limit on steps to halt truly pathological cases (very rarely hit)
    private readonly UNBOUNDED_NODE_LIMIT = 1000; // Heuristic limit for nodes to detect unbounded growth
    private readonly UNBOUNDED_RELATION_LIMIT = 5000; // Heuristic limit for relations
    private readonly LIMIT_CYCLE_HISTORY_WINDOW = 100; // Max steps to look back for cycle detection
    private graph_state_history: Map<string, number> = new Map(); // Map: graph_hash -> step_number for cycle detection

    constructor(config: SimConfig) {
        this.config = config;
        // Graphology Graph with typed attributes for Distinctions (nodes)
        this.graph = new Graph<DistinctionAttrs, {}, {}>({ multi: false, allowSelfLoops: false });
        this.lcg_seed = config.seed ?? Date.now(); // Fallback to time-based seed if none is provided
    }

    /** A simple, seeded pseudo-random number generator (LCG) for deterministic tie-breaking. */
    private random = (): number => { // Arrow function to bind 'this'
        this.lcg_seed = (this.lcg_seed * 1664525 + 1013904223) % 4294967296;
        return this.lcg_seed / 4294967296;
    }
    
    /** A self-contained, dependency-free generator function to produce combinations. */
    private *_getCombinations<T>(array: T[], k: number): Generator<T[]> {
        if (k === 0) { yield []; return; }
        for (let i = 0; i <= array.length - k; i++) {
            for (const combination of this._getCombinations(array.slice(i + 1), k - 1)) {
                yield [array[i], ...combination];
            }
        }
    }

    /** Initializes the graph for a new run (starts empty). */
    public initializeGraph = (): void => { // Arrow function to bind 'this'
        // The simulation now starts from a truly empty graph. Genesis will populate it.
        this.logState(0, 'initial_state', 'No initial distinctions. Genesis will create.');
    }

    /** Generates a stable hash of the current graph state for cycle detection. */
    private getGraphHash = (g: Graph<DistinctionAttrs, {}, {}>): string => { // Arrow function to bind 'this'
        // Sort nodes by ID for consistent hashing
        const nodes = g.nodes().sort((a, b) => {
            // Consistent sorting by id strings (e.g., "d_10" vs "d_2")
            const idA = parseInt(a.split('_')[1]);
            const idB = parseInt(b.split('_')[1]);
            return idA - idB;
        }).map(node => {
            const attrs = g.getNodeAttributes(node);
            return `${node}:${attrs.polarity}:${attrs.protoValence}:${g.degree(node)}`;
        }).join('|');

        // Sort edges by string representation for consistent hashing
        const edges = g.edges().map(edge => {
            const [source, target] = g.extremities(edge);
            return `${source}->${target}`;
        }).sort().join('|');
        
        return `${nodes};${edges}`;
    }

    /** Counts bonded +1/-1 pairs for L_A calculation. */
    private countBondedPairs = (g: Graph<DistinctionAttrs, {}, {}>): number => { // Arrow function to bind 'this'
        let count = 0;
        g.forEachEdge((_e, _a, source, target) => { if (g.getNodeAttribute(source, 'polarity') !== g.getNodeAttribute(target, 'polarity')) count++; });
        return count;
    }

    /** Calculates the Autaxic Lagrangian (L_A) for a given graph state. */
    private calculateLA = (g: Graph<DistinctionAttrs, {}, {}>): PrecisionNumber => { // Arrow function to bind 'this'
        return PrecisionNumber.divide(this.countBondedPairs(g), g.order + g.size, this.config.precision);
    }

    /** Calculates the total Relational Tension for the graph. */
    private calculateTotalTension = (g: Graph<DistinctionAttrs, {}, {}>): PrecisionNumber => { // Arrow function to bind 'this'
        let total_tension = new PrecisionNumber(0, 'high'); // Always calculate tension in high precision

        g.forEachNode((nodeId, attrs) => {
            const current_relation_count = g.degree(nodeId); // Number of active relations
            // Unsatisfied valence is the initial capacity minus current active relations.
            const unsatisfied_valence = Math.max(0, attrs.protoValence - current_relation_count);

            // Tension contribution from unsatisfied valence
            total_tension = new PrecisionNumber(total_tension.toNumber() + this.TENSION_WV.toNumber() * unsatisfied_valence, 'high');

            // Tension contribution from frustrated polarity on nodes with unsatisfied valence
            // This is applied if a node has a polarity AND desires more connections.
            if (unsatisfied_valence > 0 && attrs.polarity !== 0) { // Polarity is always -1 or 1 in this model
                total_tension = new PrecisionNumber(total_tension.toNumber() + this.TENSION_WP.toNumber() * Math.abs(attrs.polarity), 'high');
            }
        });
        return total_tension;
    }
    
    /** Applies the Genesis rule: adds a new polarized distinction to the graph. */
    private applyGenesis = (graph: Graph<DistinctionAttrs, {}, {}>): void => { // Arrow function to bind 'this'
        const polarity = (this.random() < 0.5) ? 1 : -1;
        const protoValence = Math.floor(this.random() * (this.MAX_PROTO_VALENCE + 1)); // Random fixed initial valence
        graph.addNode(`d_${this._next_node_id++}`, { polarity: polarity, protoValence: protoValence });
    }

    /** Finds all possible applications of Cosmic Algorithm rules in the current graph state. */
    private findPossibleMoves = (): Move[] => { // Arrow function to bind 'this'
        const moves: Move[] = [];
        const pos: string[] = [], neg: string[] = [];
        this.graph.forEachNode((node, attrs) => attrs.polarity === 1 ? pos.push(node) : neg.push(node));

        // Rule r1: Annihilation
        this.graph.forEachEdge((_e, _a, src, tgt) => {
            if (this.graph.getNodeAttribute(src, 'polarity') !== this.graph.getNodeAttribute(tgt, 'polarity') && this.graph.degree(src) === 1 && this.graph.degree(tgt) === 1) {
                moves.push({ rule: 'annihilation', nodes: [src, tgt], la: new PrecisionNumber(0, this.config.precision), priority: this.rule_priority.annihilation });
            }
        });

        // Rule r2: Bonding
        for (const p of pos) {
            for (const n of neg) {
                // Check if they are not already connected
                if (!this.graph.hasEdge(p, n)) {
                    // Check if both nodes have unsatisfied valence (can accept a bond) based on current degree vs fixed initial protoValence
                    const pAttrs = this.graph.getNodeAttributes(p);
                    const nAttrs = this.graph.getNodeAttributes(n);
                    if (pAttrs.protoValence > this.graph.degree(p) && nAttrs.protoValence > this.graph.degree(n)) {
                        moves.push({ rule: 'bonding', nodes: [p, n], la: new PrecisionNumber(0, this.config.precision), priority: this.rule_priority.bonding });
                    }
                }
            }
        }
        
        // Rule r3: Redundancy Collapse
        const foundTriangles = new Set<string>();
        this.graph.forEachNode(node => {
            const neighbors = this.graph.neighbors(node);
            if (neighbors.length < 2) return;
            for (const combo of this._getCombinations(neighbors, 2)) {
                if (this.graph.hasEdge(combo[0], combo[1])) {
                    const triangle = [node, ...combo].sort();
                    const key = triangle.join(',');
                    if (foundTriangles.has(key)) continue;
                    foundTriangles.add(key);
                    triangle.sort((a, b) => this.graph.degree(a) - this.graph.degree(b)); // Sort by degree
                    moves.push({ rule: 'collapse', nodes: triangle, la: new PrecisionNumber(0, this.config.precision), priority: this.rule_priority.collapse });
                }
            }
        });
        return moves;
    }

    /** Detects Ontological Closure (Fixed Point OC and Tension Minimization OC). */
    private checkOntologicalClosure = (g: Graph<DistinctionAttrs, {}, {}>): { is_fixed_point_oc: boolean; is_tension_minimum_oc: boolean; } => { // Arrow function to bind 'this'
        const currentTension = this.calculateTotalTension(g);
        let is_fixed_point_oc = true;
        let is_tension_minimum_oc = true;

        const allPossibleMoves = this.findPossibleMoves(); // Find moves based on current graph state
        const structuralMoves = allPossibleMoves.filter(m => m.rule !== 'genesis');

        // Check for Fixed Point OC: True if no structural moves are applicable.
        if (structuralMoves.length > 0) {
            is_fixed_point_oc = false;
        }

        // Check for Tension Minimization OC: True if no single structural move reduces tension.
        if (!is_fixed_point_oc) { // Only check if not already a fixed point
            for (const move of structuralMoves) {
                const tempGraph = g.copy(); // Copy current graph state
                if (move.rule === 'annihilation') { tempGraph.dropNode(move.nodes[0]); tempGraph.dropNode(move.nodes[1]); }
                else if (move.rule === 'bonding') { tempGraph.addEdge(move.nodes[0], move.nodes[1]); }
                else if (move.rule === 'collapse') { tempGraph.dropNode(move.nodes[2]); if (!tempGraph.hasEdge(move.nodes[0], move.nodes[1])) tempGraph.addEdge(move.nodes[0], move.nodes[1]); }
                
                const prospectiveTension = this.calculateTotalTension(tempGraph);
                if (prospectiveTension.compareTo(currentTension) < 0) { // If tension decreases
                    is_tension_minimum_oc = false;
                    break; // Found a move that reduces tension, so not a minimum
                }
            }
        }
        
        return { is_fixed_point_oc, is_tension_minimum_oc };
    }

    /**
     * Executes a single step of the simulation, applying the "best" rule or Genesis.
     * Returns true if simulation continues, false if it halts naturally.
     */
    public step(): boolean {
        // --- Halting based on conditions (checked first) ---
        // These conditions are checked at the BEGINNING of a step, before any new rule is applied.
        const { is_fixed_point_oc, is_tension_minimum_oc } = this.checkOntologicalClosure(this.graph);
        const currentGraphHash = this.getGraphHash(this.graph);

        let haltReason: LogEntry['halt_reason'] | undefined = undefined;

        if (this.step_counter === 0 && this.graph.order === 0) {
             // Initial empty state, first step will always be Genesis
             // No explicit halt reason here, Genesis will be applied below.
        }
        else if (this.graph.order === 0) { // Condition 1: Empty graph (total annihilation)
            haltReason = 'EMPTY';
        } else if (is_fixed_point_oc) { // Condition 2: Fixed Point OC
            haltReason = 'FIXED_POINT_OC';
        } else if (is_tension_minimum_oc) { // Condition 3: Tension Minimization OC
            haltReason = 'TENSION_MIN_OC';
        } else if (this.graph.order > this.UNBOUNDED_NODE_LIMIT || this.graph.size > this.UNBOUNDED_RELATION_LIMIT) { // Condition 5: Unbounded Growth heuristic
            haltReason = 'UNBOUNDED_GROWTH';
        } else {
            // Condition 4: Check for Limit Cycle if not already halted and graph is 'complex' enough to form a cycle
            // Only store history for a limited window to prevent memory leaks in very long runs.
            // Only check after some initial steps to avoid false positives from simple initial states.
            if (this.step_counter > this.LIMIT_CYCLE_HISTORY_WINDOW / 2) { 
                if (this.graph_state_history.has(currentGraphHash)) {
                    haltReason = 'LIMIT_CYCLE';
                } else {
                    this.graph_state_history.set(currentGraphHash, this.step_counter);
                    // Prune oldest history entries to keep the window size bounded
                    if (this.graph_state_history.size > this.LIMIT_CYCLE_HISTORY_WINDOW * 2) { 
                        const oldestKey = Array.from(this.graph_state_history.keys())[0];
                        this.graph_state_history.delete(oldestKey);
                    }
                }
            }
        }
        
        // If a natural halt reason is found, log it and return false.
        if (haltReason) {
            // Update the last log entry if it already exists, otherwise create one for step 0 halt
            if (this.log.length > 0 && this.log[this.log.length - 1].step === this.step_counter) {
                 this.log[this.log.length - 1].halt_reason = haltReason;
            } else {
                 this.logState(this.step_counter, 'halt', haltReason); // Log halt at current step
            }
            return false; // Simulation halts
        }
        
        // Condition 6: Max intrinsic steps reached (final safety net for pathological cases)
        if (this.step_counter >= this.MAX_INTRINSIC_STEPS) {
             this.logState(this.step_counter, 'halt', 'MAX_STEPS');
             return false; // Simulation halts due to step limit
        }


        // --- If not halted, proceed with one step of evolution ---
        const currentLA = this.calculateLA(this.graph);
        const possibleStructuralMoves = this.findPossibleMoves().filter(m => m.rule !== 'genesis');

        let maxLA: PrecisionNumber | null = null; // Max L_A found among structural moves
        let bestMovesThisStep: Move[] = [];      // Moves achieving maxLA
        
        // Evaluate all structural moves to find the one maximizing L_A
        for (const move of possibleStructuralMoves) {
            const tempGraph = this.graph.copy();
            if (move.rule === 'annihilation') { tempGraph.dropNode(move.nodes[0]); tempGraph.dropNode(move.nodes[1]); }
            else if (move.rule === 'bonding') { 
                tempGraph.addEdge(move.nodes[0], move.nodes[1]); 
                // ProtoValence is fixed; this operation affects actual degree, not ProtoValence itself.
            }
            else if (move.rule === 'collapse') { tempGraph.dropNode(move.nodes[2]); if (!tempGraph.hasEdge(move.nodes[0], move.nodes[1])) tempGraph.addEdge(move.nodes[0], move.nodes[1]); }
            
            const prospectiveLA = this.calculateLA(tempGraph);
            if (maxLA === null || prospectiveLA.compareTo(maxLA) > 0) {
                maxLA = prospectiveLA;
                bestMovesThisStep = [{ ...move, la: prospectiveLA }];
            } else if (maxLA !== null && prospectiveLA.compareTo(maxLA) === 0) {
                bestMovesThisStep.push({ ...move, la: prospectiveLA });
            }
        }
        
        let ruleApplied: string;
        let chosenMove: Move | null = null;

        // Decision Logic:
        // If the graph is empty (after primordial creation), or no structural moves improve L_A, then apply Genesis.
        // This is where Genesis acts as the "driver" if no structural optimization is found.
        if (this.graph.order === 0 || bestMovesThisStep.length === 0 || (maxLA !== null && maxLA.compareTo(currentLA) <= 0)) {
            // Special case: If graph is empty, create INITIAL_PRIMORDIAL_DISTINCTIONS pairs of +/- distinctions
            // This is the starting condition of the self-generating universe.
            if (this.graph.order === 0) {
                 for (let i = 0; i < this.INITIAL_PRIMORDIAL_DISTINCTIONS; i++) {
                     this.applyGenesis(this.graph);
                 }
                 ruleApplied = 'genesis_primordial_soup';
            } else {
                 this.applyGenesis(this.graph); // Genesis is the regular fallback rule
                 ruleApplied = 'genesis';
            }
        } else {
            // Select from the best structural moves (tie-breaking by priority then deterministic/stochastic)
            bestMovesThisStep.sort((a, b) => {
                const cmp = b.la.compareTo(a.la); // Primary sort: highest L_A first
                return cmp !== 0 ? cmp : b.priority - a.priority; // Secondary sort: rule priority
            });

            const trueBestLA = bestMovesThisStep[0].la;
            const trueBestPriority = bestMovesThisStep[0].priority;
            const topTierMoves = bestMovesThisStep.filter(m => m.la.compareTo(trueBestLA) === 0 && m.priority === trueBestPriority);
            
            if (this.config.tieBreaking === 'stochastic') {
                chosenMove = topTierMoves[Math.floor(this.random() * topTierMoves.length)];
            } else { // 'deterministic' tie-breaking for intrinsic seeding and divergence tests
                chosenMove = topTierMoves.sort((a, b) => {
                    // Final deterministic tie-break: sort by string representation of node IDs (consistent but arbitrary)
                    const nodesA = a.nodes.join('');
                    const nodesB = b.nodes.join('');
                    if (nodesA < nodesB) return -1;
                    if (nodesA > nodesB) return 1;
                    return 0;
                })[0];
            }
            ruleApplied = chosenMove.rule;

            // Apply the chosen structural move to the actual graph
            if (ruleApplied === 'annihilation') { this.graph.dropNode(chosenMove.nodes[0]); this.graph.dropNode(chosenMove.nodes[1]); }
            else if (ruleApplied === 'bonding') { 
                this.graph.addEdge(chosenMove.nodes[0], chosenMove.nodes[1]); 
                // ProtoValence is fixed, only actual degree changes.
            }
            else if (ruleApplied === 'collapse') { this.graph.dropNode(chosenMove.nodes[2]); if (!this.graph.hasEdge(chosenMove.nodes[0], chosenMove.nodes[1])) tempGraph.addEdge(chosenMove.nodes[0], chosenMove.nodes[1]); }
        }
        
        this.step_counter++;
        this.logState(this.step_counter, ruleApplied);
        
        return true; // Simulation continues unless halted by next step's check
    }

    /** Records the key metrics of the current graph state for logging and analysis. */
    private logState(step: number, rule: string, halt_reason_override?: LogEntry['halt_reason']): void {
        const { is_fixed_point_oc, is_tension_minimum_oc } = this.checkOntologicalClosure(this.graph);
        this.log.push({
            step, rule_applied: rule,
            L_A: this.calculateLA(this.graph),
            num_distinctions: this.graph.order,
            num_relations: this.graph.size,
            total_tension: this.calculateTotalTension(this.graph),
            is_fixed_point_oc,
            is_tension_minimum_oc,
            halt_reason: halt_reason_override
        });
    }
}