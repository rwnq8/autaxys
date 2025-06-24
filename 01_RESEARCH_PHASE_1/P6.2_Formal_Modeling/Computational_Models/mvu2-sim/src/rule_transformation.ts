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
        // console.log(`[TransformationRule.apply ENTRY] Graph order: ${g.order}`);
        
        g.forEachNode((nId,a)=>{ 
            try { 
                if (typeof a.sLevel !== 'number' || typeof a.stress?.toNumber() !== 'number') {
                    // console.warn(`[TransformationRule] Skipping node ${nId} due to invalid attributes.`);
                    return; 
                }

                const stagnation = s.getNodeStagnation(nId);
                const randomCheck = s.random();

                // Transformation is a drastic, probabilistic move for nodes that are not complex (S1)
                // and have been stuck in a high-stress state for a long time.
                const conditionMet = a.sLevel <= S_Level.S1_SimpleFixedPoint && 
                                   stagnation > s.config.transformation_stagnation_threshold && 
                                   randomCheck < 0.25; 
                
                // console.log(`  [TransformationRule] Node: ${nId}, S-Level: ${S_Level[a.sLevel]}, Stagnation: ${stagnation}, Random: ${randomCheck.toFixed(3)}, ConditionMet: ${conditionMet}`);

                if(conditionMet){
                    // console.log(`    Node ${nId}: Transformation condition MET. Preparing future.`);
                    const fG=deepCopyGraph(g);
                    // Choose a new ProtoType that is different from the current one
                    const nPT=(a.protoType + Math.floor(s.random() * (PROTO_TYPE_COUNT - 1)) + 1) % PROTO_TYPE_COUNT as ProtoType;
                    
                    if(nPT !== a.protoType){
                        // console.log(`      Node ${nId}: Transforming ProtoType from ${ProtoType[a.protoType]} to ${ProtoType[nPT]}`);
                        fG.setNodeAttribute(nId,'protoType',nPT);
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
        // console.log(`[TransformationRule.apply EXIT] Generated ${fut.length} futures.`);
        return fut;
    }
};