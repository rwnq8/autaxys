// src/simulator_step.ts
import { PrecisionNumber } from './precision';
import { 
    PatternDescriptor, 
    DescriptorDelta,
    MoveRecord, 
    PotentialFuture
} from './shared_types';
import { MVU_Simulator } from './simulator_state';
import { 
    updateAllNodeStresses, 
    calculatePatternDescriptor,
    getGraphHash,
    calculateAutaxicLagrangian // Import the new Lagrangian function
} from './simulator_analysis';

// The old compareDescriptors function is REMOVED.

/**
 * Selects the best future state based on the Greedy Local Optimization principle.
 * It finds the future(s) with the maximum Autaxic Lagrangian (L_A) score and
 * performs stochastic tie-breaking if necessary.
 * @param sim The simulator instance.
 * @param futures An array of possible next states.
 * @returns The single chosen PotentialFuture.
 */
function selectBestFuture(sim: MVU_Simulator, futures: PotentialFuture[]): PotentialFuture | null {
    if (futures.length === 0) return null;

    // 1. Evaluate: Calculate the L_A score for every potential future.
    const futuresWithScores = futures.map(future => ({
        future,
        score: calculateAutaxicLagrangian(future.descriptor)
    }));

    // 2. Select: Find the maximum L_A score among all futures.
    let maxScore = futuresWithScores[0].score;
    for (let i = 1; i < futuresWithScores.length; i++) {
        if (futuresWithScores[i].score.isGreaterThan(maxScore)) {
            maxScore = futuresWithScores[i].score;
        }
    }

    // 3. Collect all futures that have this maximum score.
    const bestFutures = futuresWithScores
        .filter(item => item.score.isEqualTo(maxScore))
        .map(item => item.future);

    // 4. Actualize: If there's only one best future, choose it.
    // If there are multiple, perform stochastic tie-breaking by picking one randomly.
    if (bestFutures.length === 1) {
        return bestFutures[0];
    } else {
        const randomIndex = Math.floor(sim.random() * bestFutures.length);
        return bestFutures[randomIndex];
    }
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
        if (lastStress && currentStress.isGreaterThanOrEqualTo(lastStress) && currentStress.isGreaterThan(0)) { // Only count stagnation if stress > 0
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