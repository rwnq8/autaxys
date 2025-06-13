// src/rule_collapse.ts
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

export const CollapseRule: Rule = {
    name:'collapse',
    description:'Simplify redundant linear structures.',
    base_cost:PrecisionNumber.from(0.4,'high'),
    isApplicable:(g,s)=>g.order>=3&&s.config.enable_collapse,
    apply:(g,s)=>{
        const fut:PotentialFuture[]=[];
        g.forEachNode((nodeB_id)=>{
            // This rule applies to nodes that are simple bridges between two other nodes
            if(g.degree(nodeB_id)===2){
                const neighbors=g.neighbors(nodeB_id);
                if(neighbors.length===2){
                    const nodeA_id=neighbors[0];
                    const nodeC_id=neighbors[1];
                    
                    // Ensure it's a linear chain (A-B-C) and not a triangle (A-B, B-C, C-A)
                    // Also ensures we don't have a weird case of a node connected to itself twice via B
                    if(nodeA_id !== nodeC_id && !g.hasEdge(nodeA_id, nodeC_id)){ 
                        const fG = deepCopyGraph(g); // Use robust deep copy
                        
                        // Dropping the node also removes its incident edges (A-B and B-C)
                        fG.dropNode(nodeB_id);
                        
                        // After collapse, recalculate stresses for the now-affected nodes A and C
                        s.updateAllNodeStresses(fG);
                        
                        const d=s.calculatePatternDescriptor(fG);
                        
                        fut.push({
                            move_name:'collapse_linear_trim',
                            nodes_involved:[nodeA_id,nodeB_id,nodeC_id].sort(),
                            cost:getRuleBaseCost('collapse',s),
                            resulting_graph:fG,
                            descriptor:d
                        });
                    }
                }
            }
        });
        return fut;
    }
};