// src/graph_utils.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs,
    S_Level,
    ProtoType,
    SymmetryBias,
    InteractionChannelType
} from './shared_types';

/**
 * Creates a robust deep copy of the graph, ensuring all node and edge attributes are explicitly
 * reconstructed to prevent corruption or loss of properties.
 * This replaces graph.copy() and previous shallow spread-operator copies.
 * @param originalGraph The graph to copy.
 * @returns A new Graph instance that is a deep copy of the original.
 */
export function deepCopyGraph(originalGraph: Graph<DistinctionAttrs, RelationAttrs>): Graph<DistinctionAttrs, RelationAttrs> {
    const newGraph = new Graph<DistinctionAttrs, RelationAttrs>({ multi: false, allowSelfLoops: false });
    
    originalGraph.forEachNode((node, attrs) => {
        // Manually and defensively construct the new attribute object.
        // Provide default values from a known good source if a property is missing.
        const newAttrs: DistinctionAttrs = {
            id: attrs.id ?? node, // Fallback to node id if 'id' attribute is missing
            polarity: attrs.polarity ?? 1,
            protoType: attrs.protoType ?? ProtoType.Standard,
            protoValence: attrs.protoValence ?? 2, // Default to 2 if missing
            valence: attrs.valence ?? 2, // Default to 2 if missing
            stress: attrs.stress ? PrecisionNumber.from(attrs.stress, attrs.stress.mode) : PrecisionNumber.from(2, 'high'), // Default high stress if missing
            sLevel: attrs.sLevel ?? S_Level.S1_SimpleFixedPoint,
            symmetryBias: attrs.symmetryBias ?? SymmetryBias.None,
            coherencePotential: attrs.coherencePotential ? PrecisionNumber.from(attrs.coherencePotential, attrs.coherencePotential.mode) : undefined,
            aestheticValue: attrs.aestheticValue ? PrecisionNumber.from(attrs.aestheticValue, attrs.aestheticValue.mode) : undefined,
        };
        newGraph.addNode(node, newAttrs);
    });

    originalGraph.forEachEdge((edgeKey, attrs, source, target) => {
        if (newGraph.hasNode(source) && newGraph.hasNode(target)) {
            // Manually and defensively construct the new edge attribute object.
            const newEdgeAttrs: RelationAttrs = {
                flowResistance: attrs.flowResistance ? PrecisionNumber.from(attrs.flowResistance, attrs.flowResistance.mode) : PrecisionNumber.from(1, 'high'),
                interactionChannelType: attrs.interactionChannelType ?? InteractionChannelType.Generic,
                coherencePotential: attrs.coherencePotential ? PrecisionNumber.from(attrs.coherencePotential, attrs.coherencePotential.mode) : undefined,
                aestheticValue: attrs.aestheticValue ? PrecisionNumber.from(attrs.aestheticValue, attrs.aestheticValue.mode) : undefined,
            };
            newGraph.addEdgeWithKey(edgeKey, source, target, newEdgeAttrs);
        }
    });
    return newGraph;
}