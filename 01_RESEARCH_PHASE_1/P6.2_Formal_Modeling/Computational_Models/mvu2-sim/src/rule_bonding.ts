// src/rule_bonding.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs, 
    PotentialFuture, 
    Rule,
    InteractionChannelType,
    protoTypeCompatibility
} from './shared_types';
import { getRuleBaseCost } from './rule_utils';
import { deepCopyGraph } from './graph_utils';
import type { MVU_Simulator } from './simulator_core';

export const BondingRule: Rule = { 
    name: 'bonding', 
    description: 'Form a relation (bond) based on compatibility.',
    base_cost: PrecisionNumber.from(0.3, 'high'), // REFACTORED: Lowered base_cost to make it more attractive
    isApplicable: (graph) => graph.order >= 2,
    apply: (graph, sim) => {
        const futures: PotentialFuture[] = [];
        const nodes = graph.nodes();
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const n1_id = nodes[i], n2_id = nodes[j];
                const n1_attrs = graph.getNodeAttributes(n1_id) as DistinctionAttrs;
                const n2_attrs = graph.getNodeAttributes(n2_id) as DistinctionAttrs;

                // Guard against corrupted attributes
                if (typeof n1_attrs.valence !== 'number' || typeof n2_attrs.valence !== 'number') {
                    continue;
                }

                const type1Compatibility = protoTypeCompatibility[n1_attrs.protoType];
                const compatibilityInfo = type1Compatibility ? type1Compatibility[n2_attrs.protoType] : undefined;

                if (compatibilityInfo === undefined || compatibilityInfo === false) {
                    continue; 
                }

                let assignedChannel = InteractionChannelType.Generic;
                let resistanceModifier = 1.0; 
                if (typeof compatibilityInfo === 'object') {
                    assignedChannel = compatibilityInfo.channel;
                    resistanceModifier = compatibilityInfo.resistanceMod;
                }
                
                if (n1_attrs.polarity !== n2_attrs.polarity &&
                    !graph.hasEdge(n1_id, n2_id) &&
                    graph.degree(n1_id) < n1_attrs.valence &&
                    graph.degree(n2_id) < n2_attrs.valence) {
                    
                    const futureGraph = deepCopyGraph(graph);
                    const baseFlowResistanceForNewBond = 1.0; 
                    const flowResistance = PrecisionNumber.from(baseFlowResistanceForNewBond * resistanceModifier, sim.config.precision); 
                    
                    futureGraph.addEdge(n1_id, n2_id, { 
                        flowResistance, 
                        interactionChannelType: assignedChannel 
                    });
                    sim.updateAllNodeStresses(futureGraph);
                    const descriptor = sim.calculatePatternDescriptor(futureGraph);
                    futures.push({
                        move_name: 'bonding', 
                        nodes_involved: [n1_id, n2_id].sort(),
                        cost: getRuleBaseCost('bonding', sim),
                        resulting_graph: futureGraph, 
                        descriptor
                    });
                }
            }
        }
        return futures;
    }
};