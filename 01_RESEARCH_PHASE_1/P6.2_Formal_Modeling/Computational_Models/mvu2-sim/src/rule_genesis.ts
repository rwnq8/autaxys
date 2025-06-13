// src/rule_genesis.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs, 
    PotentialFuture, 
    Rule,
    ProtoType
} from './shared_types';
import { getRuleBaseCost } from './rule_utils';
import { deepCopyGraph } from './graph_utils';
import type { MVU_Simulator } from './simulator_core';

export const GenesisRule: Rule = {
    name: 'genesis', 
    description: 'Create a new distinction, with a small chance of being a non-standard type.',
    base_cost: PrecisionNumber.from(1.0, 'high'), 
    isApplicable: (graph, sim) => graph.order < sim['UNBOUNDED_NODE_LIMIT'],
    apply: (graph, sim) => {
        const futureGraph = deepCopyGraph(graph);
        const newNodeId = sim.getNextNodeId();
        
        // --- REFACTOR BASED ON AUDIT ---
        // Introduce variety from the start, as per framework principles.
        let newProtoType = ProtoType.Standard;
        const randomProtoType = sim.random();
        if (randomProtoType < 0.025) { // 2.5% chance for Leptonic
            newProtoType = ProtoType.Leptonic;
        } else if (randomProtoType < 0.05) { // 2.5% chance for Quarkic
            newProtoType = ProtoType.Quarkic;
        }
        // --- END REFACTOR ---

        sim.createDistinction(futureGraph, newNodeId, (sim.random() < 0.5) ? 1 : -1, undefined, newProtoType);
        
        sim.updateAllNodeStresses(futureGraph);
        const descriptor = sim.calculatePatternDescriptor(futureGraph);

        return [{ 
            move_name: 'genesis', 
            nodes_involved: [newNodeId], 
            cost: getRuleBaseCost('genesis', sim), 
            resulting_graph: futureGraph, 
            descriptor 
        }];
    }
};