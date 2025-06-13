// src/rule_annihilation.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    DistinctionAttrs, 
    RelationAttrs, 
    PotentialFuture, 
    Rule
} from './shared_types';
import { getRuleBaseCost } from './rule_utils';
import { deepCopyGraph } from './graph_utils';
import type { MVU_Simulator } from './simulator_core';

export const AnnihilationRule: Rule = {
    name:'annihilation',
    description:'Remove terminally bonded pair.',
    base_cost:PrecisionNumber.from(0.2,'high'),
    isApplicable:(g)=>g.size>0,
    apply:(g,s)=>{ 
        const fut:PotentialFuture[]=[];
        g.forEachEdge((_e,_a,n1,n2)=>{
            const n1a=g.getNodeAttributes(n1)as DistinctionAttrs;
            const n2a=g.getNodeAttributes(n2)as DistinctionAttrs;
            
            // Guard against corrupted attributes
            if (!n1a || !n2a) return;

            if(n1a.polarity!==n2a.polarity&&g.degree(n1)===1&&g.degree(n2)===1){
                const fG = deepCopyGraph(g); // Use robust deep copy
                fG.dropNode(n1);
                fG.dropNode(n2);
                s.updateAllNodeStresses(fG);
                const d=s.calculatePatternDescriptor(fG);
                fut.push({
                    move_name:'annihilation',
                    nodes_involved:[n1,n2].sort(),
                    cost:getRuleBaseCost('annihilation',s),
                    resulting_graph:fG,
                    descriptor:d
                });
            }
        });
        return fut;
    }
};