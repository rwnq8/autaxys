// src/simulator_state.ts
import Graph from 'graphology';
import { PrecisionNumber, PrecisionMode } from './precision';
import { 
    S_Level, ProtoType, SymmetryBias,
    DistinctionAttrs, RelationAttrs, PatternDescriptor, 
    MoveRecord, SimConfig, DEFAULT_SIM_CONFIG, Rule 
} from './shared_types';
import { GenesisRule } from './rule_genesis';
import { BondingRule } from './rule_bonding';
import { AnnihilationRule } from './rule_annihilation';
import { AdaptationRule } from './rule_adaptation';
import { TransformationRule } from './rule_transformation';
import { CollapseRule } from './rule_collapse';

export class MVU_Simulator {
    public config: Required<SimConfig>;
    public graph: Graph<DistinctionAttrs, RelationAttrs>;
    public step_counter = 0;
    public lcg_seed: number; 
    public _next_node_id = 0; // Public for potential test access
    public graph_state_history: Map<string, { step: number, descriptor: PatternDescriptor }> = new Map();
    public simulation_history: MoveRecord[] = [];
    public rule_weights: Map<string, PrecisionNumber>;
    
    // Stagnation tracking for advanced rule conditions
    public node_stagnation_counter: Map<string, number> = new Map();
    public node_last_stress: Map<string, PrecisionNumber> = new Map();

    public readonly UNBOUNDED_NODE_LIMIT = 75;
    public readonly MAX_STEPS_PER_SIM = 350;
    public readonly RULE_WEIGHT_ADJUSTMENT_FACTOR = new PrecisionNumber(0.05, 'high');
    public readonly RULE_WEIGHT_NORMALIZATION_INTERVAL = 30;
    
    public rules: Rule[];
    public last_descriptor: PatternDescriptor | null = null;

    constructor(config?: Partial<SimConfig>) {
        this.config = { ...DEFAULT_SIM_CONFIG, ...config };
        if (this.config.enable_stress_propagation && this.config.stress_propagation_factor < 0) {
            this.config.stress_propagation_factor = 0;
        }
        this.graph = new Graph<DistinctionAttrs, RelationAttrs>({ multi: false, allowSelfLoops: false });
        this.lcg_seed = this.config.seed ?? Date.now(); 
        this.rules = this.initializeRules();
        this.rule_weights = new Map();
        this.rules.forEach(rule => this.rule_weights.set(rule.name, new PrecisionNumber(1.0, this.config.precision)));
    }

    private initializeRules(): Rule[] {
        const activeRules: Rule[] = [GenesisRule, BondingRule, AnnihilationRule];
        if (this.config.enable_adaptation_valence || this.config.enable_adaptation_polarity || this.config.enable_adaptation_prototype) { 
            activeRules.push(AdaptationRule); 
        }
        if (this.config.enable_transformation_prototype) { 
            activeRules.push(TransformationRule); 
        }
        if (this.config.enable_collapse) { 
            activeRules.push(CollapseRule); 
        }
        return activeRules;
    }

    public reset() {
        this.graph.clear(); 
        this.step_counter = 0; 
        this._next_node_id = 0; 
        this.graph_state_history.clear();
        this.simulation_history = []; 
        this.lcg_seed = this.config.seed ?? Date.now();
        this.rules = this.initializeRules(); 
        this.rule_weights.clear();
        this.rules.forEach(rule => this.rule_weights.set(rule.name, new PrecisionNumber(1.0, this.config.precision)));
        this.last_descriptor = null;
        this.node_stagnation_counter.clear();
        this.node_last_stress.clear();
    }

    public random = (): number => {
        this.lcg_seed = (this.lcg_seed * 1664525 + 1013904223) % 4294967296; 
        return this.lcg_seed / 4294967296;
    };

    public getNextNodeId(): string { return `d_${this._next_node_id++}`; }

    public getNodeStagnation(nodeId: string): number {
        return this.node_stagnation_counter.get(nodeId) || 0;
    }

    public createDistinction(graph: Graph<DistinctionAttrs, RelationAttrs>, id: string, p: 1 | -1, pv?: number, pt?: ProtoType, sl?: S_Level): void {
        const proVal=pv??this.config.initial_proto_valence;
        let iniAdaVal=Math.round(proVal*this.config.initial_valence_adaptation_ratio);
        iniAdaVal=Math.max(this.config.min_valence,iniAdaVal);
        iniAdaVal=Math.min(iniAdaVal,this.config.absolute_max_valence);
        
        graph.addNode(id,{
            id,
            polarity:p,
            protoType:pt??ProtoType.Standard,
            protoValence:proVal,
            valence:iniAdaVal,
            stress:PrecisionNumber.from(iniAdaVal,this.config.precision),
            sLevel:sl??S_Level.S1_SimpleFixedPoint,
            symmetryBias:SymmetryBias.None,
            coherencePotential:PrecisionNumber.from(0.5,this.config.precision),
            aestheticValue:PrecisionNumber.from(0.5,this.config.precision)
        });
    }
}