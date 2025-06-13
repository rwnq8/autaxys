// src/simulator_analysis.ts
import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { 
    S_Level, 
    DistinctionAttrs, 
    RelationAttrs, 
    PatternDescriptor, 
    InteractionChannelType
} from './shared_types';
import type { MVU_Simulator } from './simulator_state';

// --- Stress Calculation ---

export function calculateIntrinsicNodeStress(nodeId: string, graph: Graph<DistinctionAttrs, RelationAttrs>, sim: MVU_Simulator): PrecisionNumber {
    const attrs = graph.getNodeAttributes(nodeId) as DistinctionAttrs;
    const degree = graph.degree(nodeId);
    let stress = 0;

    if (typeof attrs.valence !== 'number' || isNaN(attrs.valence) || 
        typeof attrs.protoValence !== 'number' || isNaN(attrs.protoValence) ) {
        console.error(`[calculateIntrinsicNodeStress] Node ${nodeId} has invalid valence/protoValence: V=${attrs.valence}, PV=${attrs.protoValence}. Assigning high stress.`);
        return new PrecisionNumber(10, sim.config.precision);
    }

    const unmetAdaptiveValence = attrs.valence - degree;
    if (unmetAdaptiveValence > 0) stress += unmetAdaptiveValence;
    if (degree > attrs.valence) stress += (degree - attrs.valence) * 0.5;

    const maxAllowedAdaptiveValence = Math.min( Math.floor(attrs.protoValence * sim.config.max_valence_factor), sim.config.absolute_max_valence );
    if (attrs.valence > maxAllowedAdaptiveValence) {
        stress += (attrs.valence - maxAllowedAdaptiveValence) * 0.5; 
    } else if (attrs.valence > attrs.protoValence) {
         stress += (attrs.valence - attrs.protoValence) * 0.25;
    }
    
    if (degree > 0) {
        let samePolarityNeighbors = 0;
        graph.forEachNeighbor(nodeId, (_n, na) => { if (na.polarity === attrs.polarity) samePolarityNeighbors++; });
        if (samePolarityNeighbors === degree) {
            stress += sim.config.stress_penalty_homogeneous_env;
        }
    }
    return new PrecisionNumber(stress, sim.config.precision);
}

export function updateAllNodeStresses(sim: MVU_Simulator): void {
    const graph = sim.graph;
    const intrinsicStresses: Map<string, PrecisionNumber> = new Map();
    graph.forEachNode(nodeId => {
        intrinsicStresses.set(nodeId, calculateIntrinsicNodeStress(nodeId, graph, sim));
    });

    if (sim.config.enable_stress_propagation && sim.config.stress_propagation_factor > 0 && graph.size > 0) {
        const propagatedStressContributions: Map<string, PrecisionNumber> = new Map();
        graph.forEachNode(nodeId => propagatedStressContributions.set(nodeId, PrecisionNumber.from(0, sim.config.precision)));

        graph.forEachNode(sourceNodeId => {
            const sourceIntrinsicStress = intrinsicStresses.get(sourceNodeId)!;
            if (sourceIntrinsicStress.isGreaterThan(sim['HIGH_STRESS_THRESHOLD_FOR_PROPAGATION'])) {
                graph.forEachNeighbor(sourceNodeId, (neighborNodeId, edgeAttributes) => {
                    const relationAttrs = edgeAttributes as RelationAttrs;
                    const resistanceFactor = PrecisionNumber.from(1, sim.config.precision).divide(relationAttrs.flowResistance.add(1)); 
                    const stressToPropagateToNeighbor = sourceIntrinsicStress.multiply(sim.config.stress_propagation_factor).multiply(resistanceFactor);
                    const currentPropStress = propagatedStressContributions.get(neighborNodeId)!;
                    propagatedStressContributions.set(neighborNodeId, currentPropStress.add(stressToPropagateToNeighbor));
                });
            }
        });
        graph.forEachNode(nodeId => { 
            const finalStress = intrinsicStresses.get(nodeId)!.add(propagatedStressContributions.get(nodeId)!); 
            graph.setNodeAttribute(nodeId, 'stress', finalStress); 
        });
    } else { 
        graph.forEachNode(nodeId => { 
            graph.setNodeAttribute(nodeId, 'stress', intrinsicStresses.get(nodeId)!); 
        });
    }
}

// --- S-Level Detection ---

function detectS2Recursive(g: Graph<DistinctionAttrs, RelationAttrs>, sim: MVU_Simulator): { isS2: boolean, score: PrecisionNumber } {
    if(g.order<3)return{isS2:false,score:new PrecisionNumber(0,sim.config.precision)};
    let hS2S=new PrecisionNumber(0,sim.config.precision);
    let fS2=false;
    for(const sN of g.nodes()){
        const neigh=g.neighbors(sN);
        for(const n1 of neigh){
            if(n1===sN)continue;
            for(const n2 of g.neighbors(n1)){
                if(n2===sN||n2===n1)continue;
                if(g.hasEdge(n2,sN)){
                    const cN=[sN,n1,n2];
                    const fNA=g.getNodeAttributes(sN)as DistinctionAttrs;
                    const iCC=cN.every(cn=>{
                        const a=g.getNodeAttributes(cn)as DistinctionAttrs;
                        return a.protoType===fNA.protoType&&a.polarity===fNA.polarity&&(g.degree(cn)===2);
                    });
                    if(iCC){
                        fS2=true;
                        const cS=new PrecisionNumber(1.0/(3*2),sim.config.precision);
                        if(cS.compareTo(hS2S)>0)hS2S=cS;
                    }
                }
            }
        }
    }
    return{isS2:fS2,score:hS2S};
}

function detectS4Composite(g: Graph<DistinctionAttrs, RelationAttrs>): { isS4: boolean, components: string[] } { 
    return { isS4: false, components: [] }; 
}

// --- Descriptor Calculation ---

export function calculatePatternDescriptor(sim: MVU_Simulator): PatternDescriptor {
    const g = sim.graph;
    const o=g.order;const sz=g.size;const C=new PrecisionNumber(o+sz,sim.config.precision);
    let hPB=0;
    g.forEachEdge((_e,_a,s,t)=>{
        const sAttrs = g.getNodeAttributes(s); 
        const tAttrs = g.getNodeAttributes(t); 
        if(sAttrs && tAttrs && sAttrs.polarity !== tAttrs.polarity)hPB++;
    });
    const r=PrecisionNumber.divide(hPB,C.isZero()?1:C.toNumber(),sim.config.precision);
    let sL:S_Level=S_Level.S0_Vacuum;
    let s2i={isS2:false,score:new PrecisionNumber(0,sim.config.precision)};
    
    if(o>0){
        sL=S_Level.S1_SimpleFixedPoint;
        const cH=getGraphHash(g);
        if(sim.graph_state_history.has(cH) && sim.graph_state_history.get(cH)!.step < sim.step_counter){
            sL=S_Level.S3_DynamicEquilibrium;
        } else {
            s2i=detectS2Recursive(g, sim);
            if(s2i.isS2)sL=S_Level.S2_RecursiveStructure;
        }
    }
    let tS=PrecisionNumber.from(0,sim.config.precision);
    g.forEachNode(nId=>{
        const sA=g.getNodeAttribute(nId,'stress')as PrecisionNumber|undefined;
        if(sA)tS=tS.add(sA);
    });
    let tRFR=PrecisionNumber.from(0,sim.config.precision);
    g.forEachEdge((_e,a)=>{
        const frA=a.flowResistance as PrecisionNumber|undefined; 
        if(frA)tRFR=tRFR.add(frA);
    });
    return{C,S:{level:sL,robustness:r},totalStress:tS,totalRelationFlowResistance:tRFR,s2_score:s2i.score};
}

export function getGraphHash(g: Graph<DistinctionAttrs, RelationAttrs>): string {
    const nodeStrings = g.nodes().sort((a,b)=>parseInt(a.split('_')[1])-parseInt(b.split('_')[1])).map(nId=>{const a=g.getNodeAttributes(nId)as DistinctionAttrs;return`${a.id}:${a.polarity}:${a.protoType}:${a.protoValence}:${a.valence}:${a.sLevel.toString()}`;});
    const edgeStrings = g.edges().map(e=>{const[u,v]=g.extremities(e).sort();const ea=g.getEdgeAttributes(e)as RelationAttrs;const r=ea.flowResistance?ea.flowResistance.toNumber().toFixed(2):"N/A";const c=ea.interactionChannelType!==undefined?InteractionChannelType[ea.interactionChannelType]:"N/A";return`${u}-[${c}](${r})-${v}`;}).sort();
    return`${nodeStrings.join('|')};${edgeStrings.join('|')}`;
}