// src/rule_adaptation.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs, 
    PotentialFuture, 
    Rule,
    ProtoType,
    PROTO_TYPE_COUNT
} from './shared_types';
import { getRuleBaseCost } from './rule_utils';
import { deepCopyGraph } from './graph_utils';
import type { MVU_Simulator } from './simulator_core';

export const AdaptationRule: Rule = {
    name:'adaptation',
    description:'Distinction fine-tunes properties.',
    base_cost:PrecisionNumber.from(0.6,'high'),
    isApplicable:(g,s)=>g.order>0&&(s.config.enable_adaptation_valence||s.config.enable_adaptation_polarity||s.config.enable_adaptation_prototype),
    apply:(g,s)=>{ 
        const fut:PotentialFuture[]=[];
        console.log(`[AdaptationRule.apply ENTRY] Graph order: ${g.order}`);

        g.forEachNode((nId,a)=>{ 
            try { 
                if (typeof a.valence !== 'number' || isNaN(a.valence) || typeof a.protoValence !== 'number' || isNaN(a.protoValence)) {
                    console.warn(`[AdaptationRule] Skipping node ${nId} due to invalid valence/protoValence attributes. V: ${a.valence}, PV: ${a.protoValence}`);
                    return; 
                }

                const cS=a.stress.toNumber();
                const cV=a.valence;
                const cPV=a.protoValence;
                let maxAV=Math.floor(cPV*s.config.max_valence_factor);
                maxAV=Math.min(maxAV,s.config.absolute_max_valence);
                maxAV=Math.max(s.config.min_valence,maxAV);
                const deg=g.degree(nId);
                let mC=getRuleBaseCost('adaptation',s);
                
                console.log(`  [AdaptationRule] Node: ${nId}, Stress: ${cS.toFixed(2)}, V: ${cV}, PV: ${cPV}, Deg: ${deg}, Pol: ${a.polarity}, Type: ${ProtoType[a.protoType]}, maxAV: ${maxAV}`);

                if(s.config.enable_adaptation_valence){
                    const conditionValenceUp = cS > 0.5 && deg >= cV && cV < maxAV;
                    if(conditionValenceUp){ 
                        console.log(`      Node ${nId}: Valence UP future GENERATED.`);
                        const fG=deepCopyGraph(g);
                        fG.setNodeAttribute(nId,'valence',cV+1);
                        s.updateAllNodeStresses(fG);
                        const d=s.calculatePatternDescriptor(fG);
                        fut.push({move_name:'adaptation_valence_up',nodes_involved:[nId],cost:mC.add(0.1),resulting_graph:fG,descriptor:d});
                    }
                    
                    const conditionValenceDown = cS < 0.3 && cV > s.config.min_valence && deg < cV;
                    if(conditionValenceDown){
                        console.log(`      Node ${nId}: Valence DOWN future GENERATED.`);
                        const fG=deepCopyGraph(g);
                        fG.setNodeAttribute(nId,'valence',Math.max(s.config.min_valence,cV-1));
                        s.updateAllNodeStresses(fG);
                        const d=s.calculatePatternDescriptor(fG);
                        fut.push({move_name:'adaptation_valence_down',nodes_involved:[nId],cost:mC.add(0.1),resulting_graph:fG,descriptor:d});
                    }
                }
                
                const stagnation = s.getNodeStagnation(nId);
                console.log(`    Node ${nId}: Stagnation count: ${stagnation}`);

                if(s.config.enable_adaptation_polarity && stagnation > s.config.polarity_flip_stagnation_threshold){ 
                    console.log(`      Node ${nId}: Polarity FLIP future GENERATED.`);
                    const fG=deepCopyGraph(g);
                    fG.setNodeAttribute(nId,'polarity',a.polarity*-1 as(1|-1));
                    s.updateAllNodeStresses(fG);
                    const d=s.calculatePatternDescriptor(fG);
                    fut.push({move_name:'adaptation_polarity_flip',nodes_involved:[nId],cost:mC.add(0.4),resulting_graph:fG,descriptor:d});
                }
                if(s.config.enable_adaptation_prototype && stagnation > s.config.prototype_adapt_stagnation_threshold){ 
                    console.log(`      Node ${nId}: ProtoType ADAPTATION future GENERATED.`);
                    const fG=deepCopyGraph(g);
                    const nPT=(a.protoType+1)%PROTO_TYPE_COUNT as ProtoType;
                    fG.setNodeAttribute(nId,'protoType',nPT);
                    s.updateAllNodeStresses(fG);
                    const d=s.calculatePatternDescriptor(fG);
                    fut.push({move_name:`adaptation_prototype_${ProtoType[nPT].toLowerCase()}`,nodes_involved:[nId],cost:mC.add(0.5),resulting_graph:fG,descriptor:d});
                }
            } catch (error) {
                console.error(`  [AdaptationRule] ERROR processing node ${nId}:`, error); 
            }
        });
        console.log(`[AdaptationRule.apply EXIT] Generated ${fut.length} futures.`);
        return fut;
    }
};