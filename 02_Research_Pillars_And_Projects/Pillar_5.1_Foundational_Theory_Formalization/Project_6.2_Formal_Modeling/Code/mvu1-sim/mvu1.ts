import Graph from 'graphology';
import { combinations } from 'graphology-utils';

// --- Type Definitions ---
export interface SimConfig {
    initial_distinctions: number;
    max_steps: number;
}

export interface LogEntry {
    step: number;
    L_A: number;
    num_distinctions: number;
    num_relations: number;
    graph_size: number;
    num_bonded_pairs: number;
    rule_applied: string;
}

type Move = { rule: string; nodes: string[]; la: number; priority: number };

/**
 * Encapsulates the entire logic for the MVU-1 simulation.
 * This class manages the universe's state (as a graph), applies the "Cosmic Algorithm"
 * rewrite rules, and makes decisions based on the Autaxic Lagrangian to test the
 * core hypothesis of self-organization.
 * This is an implementation of the model described in Project 6.2.
 */
export class MVU1_Simulator {
    public config: SimConfig;
    public graph: Graph;
    public log: LogEntry[] = [];
    public step_counter = 0;
    // The tie-breaking priority for rules when multiple moves yield the same max L_A.
    private rule_priority: { [key: string]: number } = { 'bonding': 3, 'collapse': 2, 'annihilation': 1 };

    constructor(config: SimConfig) {
        this.config = config;
        this.graph = new Graph();
    }

    /**
     * Creates the initial "primordial soup" of disconnected Distinctions.
     * Sets up the G_0 state of the universe.
     */
    public initializeGraph(): void {
        const n_initial = this.config.initial_distinctions;
        for (let i = 0; i < n_initial; i++) {
            this.graph.addNode(`p_${i}`, { polarity: 1, x: Math.random(), y: Math.random(), size: 5 });
            this.graph.addNode(`n_${i}`, { polarity: -1, x: Math.random(), y: Math.random(), size: 5 });
        }
        this.logState(0, 'initial_state');
    }

    /** Helper function to count stable +1/-1 pairs, the numerator for the Lagrangian. */
    private countBondedPairs(g: Graph): number {
        let count = 0;
        g.forEachEdge((_edge, _attrs, source, target) => {
            if (g.getNodeAttribute(source, 'polarity') !== g.getNodeAttribute(target, 'polarity')) {
                count++;
            }
        });
        return count;
    }

    /**
     * Calculates the Autaxic Lagrangian (L_A) for a given graph state.
     * This is the "fitness" or "coherence" score for the universe.
     *
     * L_A(G) = (Number of bonded +1/-1 pairs) / (|Distinctions| + |Relations|)
     */
    private calculateLA(g: Graph): number {
        const denominator = g.order + g.size;
        return denominator === 0 ? 0 : this.countBondedPairs(g) / denominator;
    }
    
    /**
     * Scans the graph to find every possible application of the Cosmic Algorithm rules.
     * @returns A list of all potential moves the engine could make in the current state.
     */
    private findPossibleMoves(): Move[] {
        const moves: Move[] = [];
        const positiveNodes: string[] = [];
        const negativeNodes: string[] = [];
        this.graph.forEachNode((node, attrs) => {
            if (attrs.polarity === 1) positiveNodes.push(node);
            else negativeNodes.push(node);
        });

        // --- Rule r1: Annihilation ---
        // A bonded +1/-1 pair is removed if they are only connected to each other.
        this.graph.forEachEdge((_edge, _attrs, source, target) => {
            if (this.graph.getNodeAttribute(source, 'polarity') !== this.graph.getNodeAttribute(target, 'polarity') && this.graph.degree(source) === 1 && this.graph.degree(target) === 1) {
                moves.push({ rule: 'annihilation', nodes: [source, target], la: 0, priority: this.rule_priority.annihilation });
            }
        });

        // --- Rule r2: Bonding ---
        // A new Relation is created between any disconnected +1 and -1 Distinction.
        for (const p_node of positiveNodes) {
            for (const n_node of negativeNodes) {
                if (!this.graph.hasEdge(p_node, n_node)) {
                    moves.push({ rule: 'bonding', nodes: [p_node, n_node], la: 0, priority: this.rule_priority.bonding });
                }
            }
        }
        
        // --- Rule r3: Redundancy Collapse ---
        // A fully connected triangle (K3 subgraph) simplifies to a single bonded pair (K2).
        const foundTriangles = new Set<string>();
        this.graph.forEachNode(node => {
            const neighbors = this.graph.neighbors(node);
            if (neighbors.length < 2) return;
            combinations(neighbors, 2).forEach(([neighbor1, neighbor2]) => {
                if (this.graph.hasEdge(neighbor1, neighbor2)) {
                    const triangle = [node, neighbor1, neighbor2].sort();
                    const triangleKey = triangle.join(',');
                    if (foundTriangles.has(triangleKey)) return;
                    
                    foundTriangles.add(triangleKey);
                    // The two nodes with the lowest degree in the whole graph are preserved.
                    triangle.sort((a, b) => this.graph.degree(a) - this.graph.degree(b));
                    moves.push({ rule: 'collapse', nodes: triangle, la: 0, priority: this.rule_priority.collapse });
                }
            });
        });
        return moves;
    }

    /**
     * Executes a single step of the simulation. This is the core of the engine's "thinking" process.
     * It finds all possible moves, evaluates which one is "best" by maximizing the future L_A,
     * applies that move, and updates the state.
     * @returns {boolean} - `false` if the simulation has halted (no moves possible), `true` otherwise.
     */
    public step(): boolean {
        // 1. Find all possible actions (rule applications).
        const possibleMoves = this.findPossibleMoves();
        if (possibleMoves.length === 0) return false; // Halt condition

        // 2. For each possible move, create a temporary "future" universe and calculate its L_A score.
        const evaluatedMoves: Move[] = [];
        for (const move of possibleMoves) {
            const tempGraph = this.graph.copy();
            // Apply the move to the temporary graph
            if (move.rule === 'annihilation') {
                tempGraph.dropNode(move.nodes[0]);
                tempGraph.dropNode(move.nodes[1]);
            } else if (move.rule === 'bonding') {
                tempGraph.addEdge(move.nodes[0], move.nodes[1]);
            } else if (move.rule === 'collapse') {
                tempGraph.dropNode(move.nodes[2]);
                if (!tempGraph.hasEdge(move.nodes[0], move.nodes[1])) tempGraph.addEdge(move.nodes[0], move.nodes[1]);
            }
            // Store the move along with its resulting L_A score.
            evaluatedMoves.push({ ...move, la: this.calculateLA(tempGraph) });
        }
        
        // 3. Select the best move: one that results in the highest L_A.
        // The sort function also handles the tie-breaking rule.
        evaluatedMoves.sort((a, b) => a.la !== b.la ? b.la - a.la : b.priority - a.priority);

        // 4. If there's still a tie (same L_A and same priority), pick one randomly.
        const bestLa = evaluatedMoves[0].la;
        const bestPriority = evaluatedMoves[0].priority;
        const topTierMoves = evaluatedMoves.filter(m => m.la === bestLa && m.priority === bestPriority);
        const bestMove = topTierMoves[Math.floor(Math.random() * topTierMoves.length)];

        // 5. Apply the chosen "best" move to the actual universe graph.
        if (bestMove.rule === 'annihilation') {
            this.graph.dropNode(bestMove.nodes[0]);
            this.graph.dropNode(bestMove.nodes[1]);
        } else if (bestMove.rule === 'bonding') {
            this.graph.addEdge(bestMove.nodes[0], bestMove.nodes[1]);
        } else if (bestMove.rule === 'collapse') {
             this.graph.dropNode(bestMove.nodes[2]);
             if (!this.graph.hasEdge(bestMove.nodes[0], bestMove.nodes[1])) this.graph.addEdge(bestMove.nodes[0], bestMove.nodes[1]);
        }
        
        // 6. Log the new state of the universe *after* the move.
        this.step_counter++;
        this.logState(this.step_counter, bestMove.rule);
        return true;
    }

    /** Records the key metrics of the current graph state for logging and analysis. */
    private logState(stepNum: number, ruleApplied: string): void {
        const logEntry: LogEntry = {
            step: stepNum,
            L_A: this.calculateLA(this.graph),
            num_distinctions: this.graph.order,
            num_relations: this.graph.size,
            graph_size: this.graph.order + this.graph.size,
            num_bonded_pairs: this.countBondedPairs(this.graph),
            rule_applied: ruleApplied,
        };
        this.log.push(logEntry);
    }
}
