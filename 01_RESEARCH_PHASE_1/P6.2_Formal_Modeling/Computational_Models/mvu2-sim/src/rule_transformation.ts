// src/rule_transformation.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs, 
    PotentialFuture, 
    Rule,
    ProtoType,
    S_Level,
    PROTO_TYPE_COUNT
} from './shared_types';
import { getRuleBaseCost } from './rule_utils';
import { deepCopyGraph } from './graph_utils';
import type { MVU_Simulator } from './simulator_core';

export const TransformationRule: Rule = {
    name:'transformation',
    description:'A distinction undergoes a fundamental change in ProtoType due to persistent stagnation.',
    base_cost:PrecisionNumber.from(0.8,'high'),
    isApplicable:(g,s)=>g.order>0&&s.config.enable_transformation_prototype,
    apply:(g,s)=>{
        const fut:PotentialFuture[]=[];
        
        g.forEachNode((nId,a)=>{ 
            try { 
                // Guard against corrupted attributes
                if (typeof a.sLevel !== 'number' || typeof a.stress?.toNumber() !== 'number') {
                    return; 
                }

                const stagnation = s.getNodeStagnation(nId);
                const randomCheck = s.random();

                // REFACTOR: Condition is now based on stagnation, not an arbitrary stress threshold.
                // Transformation is a drastic, probabilistic move for nodes that are not complex (S1)
                // and have been stuck in a high-stress state for a long time.
                const conditionMet = a.sLevel <= S_Level.S1_SimpleFixedPoint && 
                                   stagnation > s.config.transformation_stagnation_threshold && 
                                   randomCheck < 0.25; // Increased chance slightly for more dynamic behavior
                
                if(conditionMet){
                    const fG=deepCopyGraph(g);
                    // Choose a new ProtoType that is different from the current one
                    const nPT=(a.protoType + Math.floor(s.random() * (PROTO_TYPE_COUNT - 1)) + 1) % PROTO_TYPE_COUNT as ProtoType;
                    
                    if(nPT !== a.protoType){
                        fG.setNodeAttribute(nId,'protoType',nPT);
                        // A transformation could also reset adaptive valence, but for now, we let adaptation handle it.
                        s.updateAllNodeStresses(fG);
                        const d=s.calculatePatternDescriptor(fG);
                        fut.push({
                            move_name:`transformation_prototype_to_${ProtoType[nPT].toLowerCase()}`,
                            nodes_involved:[nId],
                            cost:getRuleBaseCost('transformation',s),
                            resulting_graph:fG,
                            descriptor:d
                        });
                    }
                }
            } catch (error) {
                 console.error(`  [TransformationRule] ERROR processing node ${nId}:`, error); 
            }
        });
        return fut;
    }
};