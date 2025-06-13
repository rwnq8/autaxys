// src/simulator_step.ts
import { PrecisionNumber } from './precision';
import { 
    S_Level, 
    PatternDescriptor, 
    DescriptorDelta,
    MoveRecord, 
    PotentialFuture
} from './shared_types';
import { MVU_Simulator } from './simulator_state';
import { 
    updateAllNodeStresses, 
    calculatePatternDescriptor,
    getGraphHash
} from './simulator_analysis';

function compareDescriptors(d1: PatternDescriptor, d2: PatternDescriptor): -1 | 0 | 1 {
    if(d1.S.level > d2.S.level) return 1;
    if(d1.S.level < d2.S.level) return -1;
    
    if(d1.S.level === S_Level.S2_RecursiveStructure && d1.s2_score && d2.s2_score){
        const s2Comp = d1.s2_score.compareTo(d2.s2_score);
        if(s2Comp !== 0) return s2Comp;
    }
    
    const robComp = d1.S.robustness.compareTo(d2.S.robustness);
    if(robComp !== 0) return robComp;
    
    const cComp = d2.C.compareTo(d1.C);
    if(cComp !== 0) return cComp;
    
    const stressComp = d2.totalStress.compareTo(d1.totalStress);
    if(stressComp !== 0) return stressComp;
    
    const flowComp = d2.totalRelationFlowResistance.compareTo(d1.totalRelationFlowResistance);
    if(flowComp !== 0) return flowComp;
    
    return 0;
}

export function selectBestFuture(sim: MVU_Simulator, futures: PotentialFuture[], currentDescriptor: PatternDescriptor): PotentialFuture | null {
    if(futures.length===0)return null;
    futures.sort((a,b)=>{
        const descComp = compareDescriptors(a.descriptor, b.descriptor);
        if (descComp !== 0) return -descComp;

        if (a.move_name === 'bonding' && b.move_name !== 'bonding') return -1;
        if (b.move_name === 'bonding' && a.move_name !== 'bonding') return 1;

        if (sim.config.enable_dynamic_rule_weighting && a.origin_rule_weight && b.origin_rule_weight) {
            const weightComp = a.origin_rule_weight.compareTo(b.origin_rule_weight);
            if (weightComp !== 0) return -weightComp;
        }
        
        const costComp = a.cost.compareTo(b.cost);
        if (costComp !== 0) return costComp;

        if (a.move_name < b.move_name) return -1; 
        if (a.move_name > b.move_name) return 1;

        const nodesA = a.nodes_involved.slice().sort().join(',');
        const nodesB = b.nodes_involved.slice().sort().join(',');
        if (nodesA < nodesB) return -1; 
        if (nodesA > nodesB) return 1;
        
        return 0;
    });

    const bestBySort = futures[0];
    const comparisonToCurrent = compareDescriptors(bestBySort.descriptor,currentDescriptor);
    if(comparisonToCurrent > 0){return bestBySort;}else{if(sim.graph.order < 5 && sim.step_counter < 15){const gF=futures.find(f=>f.move_name==='genesis');if(gF){if(gF.descriptor.S.level>=currentDescriptor.S.level||futures.length===1){if(gF.descriptor.C.compareTo(currentDescriptor.C.add(2))<=0){return gF;}}}}return bestBySort;}
}

function calculateDescriptorDelta(newDesc: PatternDescriptor, oldDesc: PatternDescriptor | null): DescriptorDelta {
    if(!oldDesc){return{s_level:newDesc.S.level,robustness:newDesc.S.robustness.toNumber(),complexity:newDesc.C.toNumber(),totalStress:newDesc.totalStress.toNumber()};}
    return{s_level:newDesc.S.level-oldDesc.S.level,robustness:newDesc.S.robustness.subtract(oldDesc.S.robustness).toNumber(),complexity:newDesc.C.subtract(oldDesc.C).toNumber(),totalStress:newDesc.totalStress.subtract(oldDesc.totalStress).toNumber()};
}

function adjustRuleWeight(sim: MVU_Simulator, ruleName: string, delta: DescriptorDelta): void {
    if(!sim.config.enable_dynamic_rule_weighting)return;
    const baseRuleName=sim.rules.find(r=>ruleName.startsWith(r.name))?.name;
    if(!baseRuleName)return;
    const cW=sim.rule_weights.get(baseRuleName); if(!cW) return; 
    let aF=PrecisionNumber.from(0,sim.config.precision);
    if(delta.s_level>0)aF=aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(2));
    else if(delta.s_level===0){
        if(delta.robustness>0.001)aF=aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR']);
        if(delta.complexity<0&&Math.abs(delta.robustness)<0.001)aF=aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(0.5));
        if(delta.totalStress<-0.01)aF=aF.add(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(0.25));
    } else {
        aF=aF.subtract(sim['RULE_WEIGHT_ADJUSTMENT_FACTOR'].multiply(1.5));
    }
    let nW=cW.add(aF);if(nW.isNegative()||nW.isZero())nW=PrecisionNumber.from(0.01,sim.config.precision);
    sim.rule_weights.set(baseRuleName,nW);
}

function normalizeRuleWeights(sim: MVU_Simulator): void {
    if(!sim.config.enable_dynamic_rule_weighting||sim.rules.length===0)return;
    let sOW=new PrecisionNumber(0,sim.config.precision);
    sim.rule_weights.forEach(w=>sOW=sOW.add(w));
    if(sOW.isZero()||sOW.isNegative()){sim.rules.forEach(r=>sim.rule_weights.set(r.name,new PrecisionNumber(1.0,sim.config.precision)));return;}
    const nR=new PrecisionNumber(sim.rules.length,sim.config.precision);
    sim.rule_weights.forEach((w,rN)=>{sim.rule_weights.set(rN,w.divide(sOW).multiply(nR));});
}

function updateStagnationCounters(sim: MVU_Simulator): void {
    const toRemove: string[] = [];
    sim.node_stagnation_counter.forEach((_count, nodeId) => {
        if (!sim.graph.hasNode(nodeId)) {
            toRemove.push(nodeId);
        }
    });
    toRemove.forEach(nodeId => {
        sim.node_stagnation_counter.delete(nodeId);
        sim.node_last_stress.delete(nodeId);
    });

    sim.graph.forEachNode((nodeId, attrs) => {
        const lastStress = sim.node_last_stress.get(nodeId);
        const currentStress = attrs.stress;
        if (lastStress && currentStress.isGreaterThanOrEqualTo(lastStress)) {
            const currentCount = sim.node_stagnation_counter.get(nodeId) || 0;
            sim.node_stagnation_counter.set(nodeId, currentCount + 1);
        } else {
            sim.node_stagnation_counter.set(nodeId, 0);
        }
        sim.node_last_stress.set(nodeId, currentStress);
    });
}

export function step(sim: MVU_Simulator): { halt: boolean, reason?: string, descriptor?: PatternDescriptor, move_record?: MoveRecord } {
    if(sim.graph.order > sim['UNBOUNDED_NODE_LIMIT'] || sim.step_counter >= sim['MAX_STEPS_PER_SIM']){
        const r=sim.graph.order > sim['UNBOUNDED_NODE_LIMIT'] ? 'UNBOUNDED_GROWTH' : 'MAX_STEPS_REACHED';
        updateAllNodeStresses(sim);
        return {halt:true,reason:r,descriptor:calculatePatternDescriptor(sim)};
    }

    updateAllNodeStresses(sim);
    updateStagnationCounters(sim);
    
    const currentDescriptor = calculatePatternDescriptor(sim);
    const currentGraphHash = getGraphHash(sim.graph);

    if(sim.graph.order > 0 && sim.graph_state_history.has(currentGraphHash) && sim.graph_state_history.get(currentGraphHash)!.step < sim.step_counter){
        return {halt:true,reason:'LIMIT_CYCLE',descriptor:currentDescriptor};
    }
    
    if(sim.graph.order === 0){ 
        const nId=sim.getNextNodeId();
        sim.createDistinction(sim.graph,nId,(sim.random()<0.5)?1:-1);
        updateAllNodeStresses(sim); 
        sim.step_counter++;
        const dAI=calculatePatternDescriptor(sim);
        sim.node_last_stress.set(nId, dAI.totalStress); 
        const dlt=calculateDescriptorDelta(dAI,null);
        const mR:MoveRecord={rule_name:'genesis_ignition',nodes_involved:[nId],cost:PrecisionNumber.from(0,sim.config.precision),step_number:sim.step_counter,delta_descriptor:dlt};
        sim.simulation_history.push(mR);
        if(sim.graph.order > 0) sim.graph_state_history.set(getGraphHash(sim.graph),{step:sim.step_counter,descriptor:dAI});
        sim.last_descriptor=dAI;
        return {halt:false,descriptor:dAI,move_record:mR};
    }
    
    sim.last_descriptor=currentDescriptor; 
    sim.graph_state_history.set(currentGraphHash,{step:sim.step_counter,descriptor:currentDescriptor});

    const pF:PotentialFuture[]=[];
    sim.rules.forEach(r=>{
        if(r.isApplicable(sim.graph,sim)){
            const fFR=r.apply(sim.graph,sim);
            fFR.forEach(f=>{
                const bRN=sim.rules.find(rl=>f.move_name.startsWith(rl.name))?.name;
                f.origin_rule_weight=bRN?sim.rule_weights.get(bRN):undefined;
            });
            pF.push(...fFR);
        }
    });
    
    if(pF.length===0){
        console.error(`HALT @ Step ${sim.step_counter}: NO_APPLICABLE_MOVES. Current Descriptor:`, JSON.parse(JSON.stringify(currentDescriptor)));
        return{halt:true,reason:'NO_APPLICABLE_MOVES',descriptor:currentDescriptor};
    }
    
    const cF=selectBestFuture(sim, pF,currentDescriptor);
    if(!cF){
        console.error(`HALT @ Step ${sim.step_counter}: STUCK_NO_VIABLE_FUTURE despite ${pF.length} options. Current Descriptor:`, JSON.parse(JSON.stringify(currentDescriptor)));
        return{halt:true,reason:'STUCK_NO_VIABLE_FUTURE',descriptor:currentDescriptor};
    }
    
    sim.graph=cF.resulting_graph;
    sim.step_counter++;
    const finD=calculatePatternDescriptor(sim);
    const dlt=calculateDescriptorDelta(finD,sim.last_descriptor);
    const mR:MoveRecord={rule_name:cF.move_name,nodes_involved:cF.nodes_involved,cost:cF.cost,step_number:sim.step_counter,delta_descriptor:dlt};
    sim.simulation_history.push(mR);
    if(sim.config.enable_dynamic_rule_weighting){adjustRuleWeight(sim, cF.move_name,dlt);if(sim.step_counter%sim['RULE_WEIGHT_NORMALIZATION_INTERVAL']===0){normalizeRuleWeights(sim);}}
    sim.last_descriptor=finD;
    return{halt:false,descriptor:finD,move_record:mR};
}