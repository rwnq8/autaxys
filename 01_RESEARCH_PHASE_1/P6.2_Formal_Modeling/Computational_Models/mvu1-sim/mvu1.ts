import Graph from 'graphology';
import { PrecisionNumber, PrecisionMode } from './precision';
import dijkstra from 'graphology-shortest-path/dijkstra';

/**
 * Defines the stability level (S-Level) of a pattern.
 */
export enum S_Level {
    S0_Vacuum = 0,
    S1_SimpleFixedPoint = 1,
    S2_RecursiveStructure = 2,
    S3_DynamicEquilibrium = 3,
    S4_CompositeStability = 4,
}

/**
 * The fundamental "flavors" of matter that can emerge dynamically.
 */
export enum ProtoType {
    Standard = 0,
    Leptonic = 1,
    Quarkic = 2,
}

/**
 * The Autaxic Quantum Numbers (AQNs) describing a pattern.
 */
export interface PatternDescriptor {
    C: PrecisionNumber;
    S: {
        level: S_Level;
        robustness: PrecisionNumber;
    };
}

/** Represents a potential move and its resulting pattern descriptor. */
type Move = {
    rule: string;
    nodes?: string[];
    descriptor: PatternDescriptor;
};

/** The attributes of a Distinction. */
interface DistinctionAttrs {
    polarity: 1 | -1;
    protoType: ProtoType;
    valence: number;
    stress: number;
    sLevel: S_Level;
}

/** The attributes of a Relation. */
interface RelationAttrs {
    cost: number;
}

/** Log entry for a single simulation step. */
export interface LogEntry {
    step: number;
    rule_applied: string;
    s_level: S_Level;
    robustness: number;
    complexity: number;
    halt_reason?: 'STABLE_STATE' | 'LIMIT_CYCLE' | 'UNBOUNDED_GROWTH';
}

/** Configuration for a single simulation run. */
export interface SimConfig {
    precision: PrecisionMode;
    tieBreaking: TieBreakingMode;
    seed?: number;
}

export class MVU1_Simulator {
    public config: SimConfig;
    public graph: Graph<DistinctionAttrs, RelationAttrs, {}>;
    public log: LogEntry[] = [];
    public step_counter = 0;
    private lcg_seed: number;
    private _next_node_id = 0;

    private readonly UNBOUNDED_NODE_LIMIT = 2000;
    private readonly LIMIT_CYCLE_HISTORY_WINDOW = 500;
    private graph_state_history: Map<string, number> = new Map();

    constructor(config: SimConfig) {
        this.config = config;
        this.graph = new Graph<DistinctionAttrs, RelationAttrs, {}>({ multi: false, allowSelfLoops: false });
        this.lcg_seed = config.seed ?? Date.now();
        this.logState(0, 'initial_state');
    }

    private random = (): number => {
        this.lcg_seed = (this.lcg_seed * 1664525 + 1013904223) % 4294967296;
        return this.lcg_seed / 4294967296;
    };

    private *_getCombinations<T>(array: T[], k: number): Generator<T[]> {
        if (k === 0) { yield []; return; }
        for (let i = 0; i <= array.length - k; i++) {
            for (const combination of this._getCombinations(array.slice(i + 1), k - 1)) {
                yield [array[i], ...combination];
            }
        }
    }

    private getGraphHash = (g: Graph<DistinctionAttrs, RelationAttrs, {}>): string => {
        const nodes = g.nodes().sort((a, b) => parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]))
            .map(node => {
                const attrs = g.getNodeAttributes(node);
                return `${node}:${attrs.polarity}:${attrs.protoType}:${attrs.valence}:${attrs.stress.toFixed(2)}:${attrs.sLevel}`;
            }).join('|');
        const edges = g.edges().map(edge => g.extremities(edge).sort().join('->')).sort().join('|');
        return `${nodes};${edges}`;
    };

    private calculatePatternDescriptor(g: Graph<DistinctionAttrs, RelationAttrs, {}>): PatternDescriptor {
        const order = g.order;
        const size = g.size;
        const C = new PrecisionNumber(order + size, this.config.precision);

        const bondedPairs = g.edges().reduce((acc, edge) => {
            const [src, tgt] = g.extremities(edge);
            if (g.getNodeAttribute(src, 'polarity') !== g.getNodeAttribute(tgt, 'polarity')) acc++;
            return acc;
        }, 0);
        const robustness = (order > 0) ? PrecisionNumber.divide(bondedPairs, order + size, this.config.precision) : new PrecisionNumber(0, this.config.precision);

        let maxSLevel: S_Level = S_Level.S0_Vacuum;
        if (order > 0) maxSLevel = S_Level.S1_SimpleFixedPoint;
        g.forEachNode((_node, attrs) => {
            if (attrs.sLevel > maxSLevel) maxSLevel = attrs.sLevel;
        });
        if (this.graph_state_history.has(this.getGraphHash(g))) {
            maxSLevel = Math.max(maxSLevel, S_Level.S3_DynamicEquilibrium) as S_Level;
        }

        return { C, S: { level: maxSLevel, robustness } };
    }

    public step(): boolean {
        if (this.graph.order > this.UNBOUNDED_NODE_LIMIT) {
            this.logState(this.step_counter, 'halt', 'UNBOUNDED_GROWTH');
            return false;
        }
        const currentGraphHash = this.getGraphHash(this.graph);
        if (this.graph_state_history.has(currentGraphHash)) {
            this.logState(this.step_counter, 'halt', 'LIMIT_CYCLE');
            return false;
        }
        this.graph_state_history.set(currentGraphHash, this.step_counter);
        if (this.graph_state_history.size > this.LIMIT_CYCLE_HISTORY_WINDOW) {
            this.graph_state_history.delete(this.graph_state_history.keys().next().value);
        }

        if (this.graph.order === 0) {
            this.graph.addNode(`d_${this._next_node_id++}`, { polarity: (this.random() < 0.5) ? 1 : -1, protoType: ProtoType.Standard, valence: 0, stress: 0, sLevel: S_Level.S1_SimpleFixedPoint });
            this.step_counter++;
            this.logState(this.step_counter, 'genesis_ignition');
            return true;
        }

        const currentDescriptor = this.calculatePatternDescriptor(this.graph);
        const possibleFutures: { move: Move, resultingGraph: Graph }[] = [];

        this.generateGenesisFutures(possibleFutures);
        this.generateStructuralFutures(possibleFutures);
        this.generateAdaptationFutures(possibleFutures);

        if (possibleFutures.length === 0) {
            this.logState(this.step_counter, 'halt', 'STABLE_STATE');
            return false;
        }

        const chosenFuture = this.selectNextMove(possibleFutures, currentDescriptor);

        if (!chosenFuture) {
            this.logState(this.step_counter, 'halt', 'STABLE_STATE');
            return false;
        }

        this.graph = chosenFuture.resultingGraph;

        if (chosenFuture.move.rule === 'genesis') {
            this._next_node_id++;
        }

        if (this.graph.order === 0) {
            this._next_node_id = 0;
            this.graph_state_history.clear();
        }

        this.step_counter++;
        this.logState(this.step_counter, chosenFuture.move.rule);
        return true;
    }

    private selectNextMove(possibleFutures: { move: Move, resultingGraph: Graph }[], currentDescriptor: PatternDescriptor): { move: Move, resultingGraph: Graph } | null {
        let bestDescriptor = currentDescriptor;
        let bestMoves: { move: Move, resultingGraph: Graph }[] = [];
        let neutralMoves: { move: Move, resultingGraph: Graph }[] = [];

        for (const future of possibleFutures) {
            const futureDescriptor = future.move.descriptor;
            const sLevelComparison = futureDescriptor.S.level - bestDescriptor.S.level;

            if (sLevelComparison > 0) {
                bestDescriptor = futureDescriptor;
                bestMoves = [future];
            } else if (sLevelComparison === 0) {
                const robustnessComparison = futureDescriptor.S.robustness.compareTo(bestDescriptor.S.robustness);
                if (robustnessComparison > 0) {
                    bestDescriptor = futureDescriptor;
                    bestMoves = [future];
                } else if (robustnessComparison === 0) {
                    if (futureDescriptor.C.compareTo(bestDescriptor.C) < 0) {
                        bestDescriptor = futureDescriptor;
                        bestMoves = [future];
                    } else if (futureDescriptor.C.compareTo(bestDescriptor.C) === 0) {
                        if (bestDescriptor === currentDescriptor) {
                            neutralMoves.push(future);
                        } else {
                            bestMoves.push(future);
                        }
                    }
                }
            }
        }

        if (bestMoves.length > 0) {
            return this.deterministicTieBreak(bestMoves);
        }

        const explorationPressure = 1.0 - (currentDescriptor.S.robustness.toNumber() * 0.5 + Math.min(1.0, currentDescriptor.C.toNumber() / 50) * 0.5);
        if (this.random() < explorationPressure) {
            const viableFutures = possibleFutures.filter(f => f.move.descriptor.S.robustness.toNumber() > 0 || f.move.rule === 'genesis');
            if (viableFutures.length > 0) {
                return viableFutures[Math.floor(this.random() * viableFutures.length)];
            }
        }

        if (neutralMoves.length > 0) {
            return this.deterministicTieBreak(neutralMoves);
        }

        return null;
    }

    private generateGenesisFutures(futures: { move: Move, resultingGraph: Graph }[]) {
        const tempGraph = this.graph.copy();
        const newType = this.random() < 0.8 ? ProtoType.Standard : ProtoType.Leptonic;
        tempGraph.addNode(`d_${this._next_node_id}`, { polarity: (this.random() < 0.5) ? 1 : -1, protoType: newType, valence: 0, stress: 0, sLevel: S_Level.S1_SimpleFixedPoint });
        futures.push({ move: { rule: 'genesis', descriptor: this.calculatePatternDescriptor(tempGraph) }, resultingGraph: tempGraph });
    }

    private generateStructuralFutures(futures: { move: Move, resultingGraph: Graph }[]) {
        const nodes = this.graph.nodes();
        const pos: string[] = [], neg: string[] = [];
        nodes.forEach(node => this.graph.getNodeAttribute(node, 'polarity') === 1 ? pos.push(node) : neg.push(node));

        for (const p of pos) {
            for (const n of neg) {
                const attrsP = this.graph.getNodeAttributes(p);
                const attrsN = this.graph.getNodeAttributes(n);
                if (!this.graph.hasEdge(p, n) && attrsP.valence > this.graph.degree(p) && attrsN.valence > this.graph.degree(n)) {
                    const tempGraph = this.graph.copy();
                    const cost = 1.0 + (attrsP.stress + attrsN.stress);
                    tempGraph.addEdge(p, n, { cost });
                    futures.push({ move: { rule: 'bonding', nodes: [p, n], descriptor: this.calculatePatternDescriptor(tempGraph) }, resultingGraph: tempGraph });
                }
            }
        }

        this.graph.forEachEdge((_e, _a, src, tgt) => {
            if (this.graph.getNodeAttribute(src, 'polarity') !== this.graph.getNodeAttribute(tgt, 'polarity') && this.graph.degree(src) === 1 && this.graph.degree(tgt) === 1) {
                const tempGraph = this.graph.copy();
                tempGraph.dropNode(src);
                tempGraph.dropNode(tgt);
                futures.push({ move: { rule: 'annihilation', nodes: [src, tgt], descriptor: this.calculatePatternDescriptor(tempGraph) }, resultingGraph: tempGraph });
            }
        });
    }

    private generateAdaptationFutures(futures: { move: Move, resultingGraph: Graph }[]) {
        this.graph.forEachNode((node, attrs) => {
            if (this.graph.degree(node) === 0) {
                const tempGraph = this.graph.copy();
                tempGraph.setNodeAttribute(node, 'stress', attrs.stress + 0.1);
                futures.push({ move: { rule: 'stress_increase', nodes: [node], descriptor: this.calculatePatternDescriptor(tempGraph) }, resultingGraph: tempGraph });
            }
            if (attrs.stress > 1.0 && attrs.valence === 0) {
                const tempGraph = this.graph.copy();
                tempGraph.setNodeAttribute(node, 'valence', 1);
                tempGraph.setNodeAttribute(node, 'stress', 0);
                futures.push({ move: { rule: 'valence_emergence', nodes: [node], descriptor: this.calculatePatternDescriptor(tempGraph) }, resultingGraph: tempGraph });
            }
        });
    }

    private deterministicTieBreak(futures: { move: Move, resultingGraph: Graph }[]): { move: Move, resultingGraph: Graph } {
        return futures.sort((a, b) => {
            const nodesA = (a.move.nodes || []).join('');
            const nodesB = (b.move.nodes || []).join('');
            if (nodesA < nodesB) return -1;
            if (nodesA > nodesB) return 1;
            return 0;
        })[0];
    }

    private logState(step: number, rule: string, halt_reason?: LogEntry['halt_reason']): void {
        const descriptor = this.calculatePatternDescriptor(this.graph);
        this.log.push({
            step,
            rule_applied: rule,
            s_level: descriptor.S.level,
            robustness: descriptor.S.robustness.toNumber(),
            complexity: descriptor.C.toNumber(),
            halt_reason
        });
    }
}