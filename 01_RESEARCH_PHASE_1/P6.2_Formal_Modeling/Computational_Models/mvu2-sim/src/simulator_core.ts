// src/simulator_core.ts
import { MVU_Simulator as SimulatorState } from './simulator_state';
import { step as performStep } from './simulator_step';
import { 
    updateAllNodeStresses as updateAllNodeStressesFunc, 
    calculatePatternDescriptor as calculatePatternDescriptorFunc,
    getGraphHash as getGraphHashFunc
} from './simulator_analysis';
import { 
    PatternDescriptor, 
    MoveRecord,
    DistinctionAttrs,
    RelationAttrs,
    ProtoType,
    S_Level,
    SimConfig
} from './shared_types';
import Graph from 'graphology';

export class MVU_Simulator extends SimulatorState {

    constructor(config?: Partial<SimConfig>) {
        super(config);
    }

    public step(): { halt: boolean, reason?: string, descriptor?: PatternDescriptor, move_record?: MoveRecord } {
        return performStep(this);
    }

    public updateAllNodeStresses(graph: Graph<DistinctionAttrs, RelationAttrs> = this.graph): void {
        updateAllNodeStressesFunc(this);
    }

    public calculatePatternDescriptor(g: Graph<DistinctionAttrs, RelationAttrs> = this.graph): PatternDescriptor {
        return calculatePatternDescriptorFunc(this);
    }

    public getGraphHash(g: Graph<DistinctionAttrs, RelationAttrs> = this.graph): string {
        return getGraphHashFunc(g);
    }

    public createDistinction(graph: Graph<DistinctionAttrs, RelationAttrs>, id: string, p: 1 | -1, pv?: number, pt?: ProtoType, sl?: S_Level): void {
        super.createDistinction(graph, id, p, pv, pt, sl);
    }
}