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
    description:'Distinction fine-tunes properties based on stress and stagnation.',
    base_cost:PrecisionNumber.from(0.6,'high'),
    isApplicable:(g,s)=>g.order>0&&(s.config.enable_adaptation_valence||s.config.enable_adaptation_polarity||s.config.enable_adaptation_prototype),
    apply:(g,s)=>{ 
        const fut:PotentialFuture[]=[];
        
        g.forEachNode((nId,a)=>{ 
            try { 
                if (typeof a.valence !== 'number' || isNaN(a.valence) || typeof a.protoValence !== 'number' || isNaN(a.protoValence)) {
                    console.warn(`[AdaptationRule] Skipping node ${nId} due to invalid valence/protoValence attributes.`);
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
                
                // --- Valence Adaptation (based on simple stress) ---
                if(s.config.enable_adaptation_valence){
                    // **REFACTOR:** Condition restored to be more principled.
                    // Increase valence if stressed from being "full" or over-full.
                    const conditionValenceUp = cS > 0.5 && deg >= cV && cV < maxAV; 
                    if(conditionValenceUp){ 
                        const fG=deepCopyGraph(g);
                        fG.setNodeAttribute(nId,'valence',cV+1);
                        s.updateAllNodeStresses(fG);
                        const d=s.calculatePatternDescriptor(fG);
                        fut.push({move_name:'adaptation_valence_up',nodes_involved:[nId],cost:mC.add(0.1),resulting_graph:fG,descriptor:d});
                    }
                    
                    // Decrease valence if low stress and over-provisioned
                    const conditionValenceDown = cS < 0.3 && cV > s.config.min_valence && deg < cV;
                    if(conditionValenceDown){
                        const fG=deepCopyGraph(g);
                        fG.setNodeAttribute(nId,'valence',Math.max(s.config.min_valence,cV-1));
                        s.updateAllNodeStresses(fG);
                        const d=s.calculatePatternDescriptor(fG);
                        fut.push({move_name:'adaptation_valence_down',nodes_involved:[nId],cost:mC.add(0.1),resulting_graph:fG,descriptor:d});
                    }
                }

                // --- Drastic Adaptations (based on persistent stagnation) ---
                const stagnation = s.getNodeStagnation(nId);

                if(s.config.enable_adaptation_polarity && stagnation > s.config.polarity_flip_stagnation_threshold){ 
                    const fG=deepCopyGraph(g);
                    fG.setNodeAttribute(nId,'polarity',a.polarity*-1 as(1|-1));
                    s.updateAllNodeStresses(fG);
                    const d=s.calculatePatternDescriptor(fG);
                    fut.push({move_name:'adaptation_polarity_flip',nodes_involved:[nId],cost:mC.add(0.4),resulting_graph:fG,descriptor:d});
                }
                if(s.config.enable_adaptation_prototype && stagnation > s.config.prototype_adapt_stagnation_threshold){ 
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
        return fut;
    }
};