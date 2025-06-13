// src/shared_types.ts
import Graph, { EdgeAttributes, NodeAttributes } from 'graphology';
import { PrecisionNumber, PrecisionMode } from './precision'; 
import type { MVU_Simulator } from './simulator_core'; // Type-only import for Rule interface

// --- Enums ---
export enum S_Level { 
    S0_Vacuum = 0, 
    S1_SimpleFixedPoint = 1, 
    S2_RecursiveStructure = 2, 
    S3_DynamicEquilibrium = 3, 
    S4_CompositeStability = 4 
}

export enum ProtoType { 
    Standard = 0, 
    Leptonic = 1, 
    Quarkic = 2 
}
export const PROTO_TYPE_COUNT = Object.keys(ProtoType).length / 2;

export enum SymmetryBias { 
    None = 0, 
    Rotational = 1, 
    Reflectional = 2 
}

export enum InteractionChannelType { 
    Generic = 0, 
    EM_Like = 1, 
    Strong_Like = 2, 
    Weak_Like = 3 
}

// --- Core Interfaces ---
export interface DistinctionAttrs extends NodeAttributes {
    id: string;
    polarity: 1 | -1;
    protoType: ProtoType;
    protoValence: number;       // Inherent capacity
    valence: number;            // Current adaptive capacity
    stress: PrecisionNumber;
    sLevel: S_Level;            // Intrinsic stability
    // Conceptual Proto-Properties
    symmetryBias?: SymmetryBias;
    coherencePotential?: PrecisionNumber;
    aestheticValue?: PrecisionNumber;
}

export interface RelationAttrs extends EdgeAttributes {
    flowResistance: PrecisionNumber;
    interactionChannelType: InteractionChannelType; // Now mandatory
    // Conceptual Proto-Properties
    coherencePotential?: PrecisionNumber;
    aestheticValue?: PrecisionNumber;
}

export interface PatternDescriptor {
    C: PrecisionNumber; 
    S: { level: S_Level; robustness: PrecisionNumber }; 
    T_fingerprint?: string; 
    totalStress: PrecisionNumber; 
    totalRelationFlowResistance: PrecisionNumber;
    s2_score?: PrecisionNumber;
    s4_components?: string[];
 }

export interface DescriptorDelta {
    s_level: number;
    robustness: number;
    complexity: number;
    totalStress: number;
}

export interface MoveRecord {
    rule_name: string;
    nodes_involved: string[];
    cost: PrecisionNumber; 
    step_number: number;
    delta_descriptor: DescriptorDelta;
}

export interface PotentialFuture {
    move_name:string;
    nodes_involved: string[];
    cost: PrecisionNumber; 
    resulting_graph: Graph<DistinctionAttrs, RelationAttrs>;
    descriptor: PatternDescriptor;
    origin_rule_weight?: PrecisionNumber;
}

export interface SimConfig {
    precision: PrecisionMode;
    seed?: number;
    initial_proto_valence?: number;
    initial_valence_adaptation_ratio?: number;
    enable_adaptation_valence?: boolean;
    enable_adaptation_polarity?: boolean;
    enable_adaptation_prototype?: boolean;
    enable_transformation_prototype?: boolean;
    enable_collapse?: boolean;
    enable_dynamic_rule_weighting?: boolean;
    max_valence_factor?: number; 
    min_valence?: number;
    absolute_max_valence?: number; 
    enable_stress_propagation?: boolean; 
    stress_propagation_factor?: number;  
    stress_penalty_homogeneous_env?: number; 
}

export const DEFAULT_SIM_CONFIG: Required<SimConfig> = {
    precision: 'high', seed: Date.now(), initial_proto_valence: 2, initial_valence_adaptation_ratio: 1.0,
    enable_adaptation_valence: true, enable_adaptation_polarity: true, enable_adaptation_prototype: true,
    enable_transformation_prototype: true, enable_collapse: true, enable_dynamic_rule_weighting: true,
    max_valence_factor: 1.5, min_valence: 1, absolute_max_valence: 7,
    enable_stress_propagation: true, stress_propagation_factor: 0.1,
    stress_penalty_homogeneous_env: 0.75,
};

export interface Rule {
    name: string;
    description: string;
    base_cost: PrecisionNumber;
    isApplicable: (graph: Graph<DistinctionAttrs, RelationAttrs>, sim: MVU_Simulator) => boolean; 
    apply: (graph: Graph<DistinctionAttrs, RelationAttrs>, sim: MVU_Simulator) => PotentialFuture[];
}

export const protoTypeCompatibility: { [key in ProtoType]?: { [key in ProtoType]?: boolean | { channel: InteractionChannelType, resistanceMod: number } } } = {
    [ProtoType.Standard]: { 
        [ProtoType.Standard]: true, 
        [ProtoType.Leptonic]: { channel: InteractionChannelType.EM_Like, resistanceMod: 1.2 }, 
        [ProtoType.Quarkic]: false, 
    },
    [ProtoType.Leptonic]: { 
        [ProtoType.Standard]: { channel: InteractionChannelType.EM_Like, resistanceMod: 1.2 }, 
        [ProtoType.Leptonic]: true, 
        [ProtoType.Quarkic]: false, 
    },
    [ProtoType.Quarkic]: { 
        [ProtoType.Standard]: false, 
        [ProtoType.Leptonic]: false, 
        [ProtoType.Quarkic]: { channel: InteractionChannelType.Strong_Like, resistanceMod: 0.8 }, 
    },
};