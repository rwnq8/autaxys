// tests/simulator_logic.test.ts
import { MVU_Simulator } from '../src/simulator_core';
import { SimConfig, S_Level, ProtoType, DistinctionAttrs, PotentialFuture, DEFAULT_SIM_CONFIG } from '../src/shared_types';
import { calculateIntrinsicNodeStress } from '../src/simulator_analysis';
import { step, selectBestFuture } from '../src/simulator_step';
import { AdaptationRule, AnnihilationRule, BondingRule, CollapseRule, GenesisRule, TransformationRule } from '../src/rules_export'; // **FIX: Import from a new barrel file**
import { PrecisionNumber } from '../src/precision';
import Graph from 'graphology';

describe('Simulator Logic, Rules, and Integration', () => {
    let sim: MVU_Simulator;
    const testConfig: Partial<SimConfig> = { 
        seed: 123,
        enable_dynamic_rule_weighting: false,
        polarity_flip_stagnation_threshold: 3,
        prototype_adapt_stagnation_threshold: 5,
        transformation_stagnation_threshold: 8,
    };

    beforeEach(() => {
        sim = new MVU_Simulator(testConfig);
    });

    // --- Analysis Unit Tests ---
    describe('Analysis Functions', () => {
        it('calculateIntrinsicNodeStress should return high stress for a node with invalid valence', () => {
            const g = new Graph();
            g.addNode('d0', { valence: NaN, protoValence: 2 });
            const stress = calculateIntrinsicNodeStress('d0', g as any, sim);
            expect(stress.toNumber()).toBe(10);
        });

        it('calculateIntrinsicNodeStress should return stress equal to unmet valence', () => {
            const g = new Graph();
            sim.createDistinction(g, 'd0', 1, 3);
            sim.createDistinction(g, 'd1', -1, 1);
            g.addEdge('d0', 'd1'); 
            const stress = calculateIntrinsicNodeStress('d0', g as any, sim);
            expect(stress.toNumber()).toBe(2);
        });
    });

    // --- Rule Unit Tests ---
    describe('Rule `apply` Methods', () => {
        it('AdaptationRule should generate a polarity flip if stagnation is ABOVE threshold', () => {
            sim.createDistinction(sim.graph, 'd0', 1, 2);
            sim.node_stagnation_counter.set('d0', 4);
            (sim.graph.getNodeAttributes('d0') as DistinctionAttrs).stress = new PrecisionNumber(10, 'high');

            const futures = AdaptationRule.apply(sim.graph, sim);
            const flipFuture = futures.find(f => f.move_name === 'adaptation_polarity_flip');
            expect(flipFuture).toBeDefined();
            expect(flipFuture?.resulting_graph.getNodeAttribute('d0', 'polarity')).toBe(-1);
        });

        it('BondingRule should not generate a bond between incompatible ProtoTypes', () => {
            sim.createDistinction(sim.graph, 'd0', 1, 2, ProtoType.Quarkic);
            sim.createDistinction(sim.graph, 'd1', -1, 2, ProtoType.Standard);
            const futures = BondingRule.apply(sim.graph, sim);
            expect(futures.length).toBe(0);
        });
    });

    // --- Integration Tests ---
    describe('Simulator `step` Method Integration', () => {
        it('should not halt prematurely and should eventually form a bond', () => {
            let halt = false;
            let reason = '';
            for (let i = 0; i < 25; i++) {
                const result = step(sim);
                if (result.halt) {
                    halt = true;
                    reason = result.reason || 'Unknown';
                    break;
                }
                if (sim.graph.size > 0) {
                    break;
                }
            }
            expect(reason).not.toBe('NO_APPLICABLE_MOVES');
            expect(sim.graph.size).toBeGreaterThan(0);
        });
    });

    // --- selectBestFuture Logic Tests ---
    describe('selectBestFuture Logic', () => {
        const mockCurrentDescriptor: PatternDescriptor = {
            S: { level: S_Level.S1_SimpleFixedPoint, robustness: new PrecisionNumber(0.1, 'high') },
            C: new PrecisionNumber(5, 'high'),
            totalStress: new PrecisionNumber(1, 'high'),
            totalRelationFlowResistance: new PrecisionNumber(1, 'high')
        };
        const createMockFuture = (sLevel: S_Level, robustness: number, complexity: number, stress: number): PotentialFuture => {
            return {
                move_name: "test_move",
                cost: new PrecisionNumber(1.0, 'high'),
                origin_rule_weight: new PrecisionNumber(1.0, 'high'),
                descriptor: {
                    S: { level: sLevel, robustness: new PrecisionNumber(robustness, 'high') },
                    C: new PrecisionNumber(complexity, 'high'),
                    totalStress: new PrecisionNumber(stress, 'high'),
                    totalRelationFlowResistance: new PrecisionNumber(0, 'high')
                },
                nodes_involved: [],
                resulting_graph: new Graph() 
            };
        };

        test('should prefer higher S-Level', () => {
            const f1 = createMockFuture(S_Level.S2_RecursiveStructure, 0.5, 10, 5);
            const f2 = createMockFuture(S_Level.S1_SimpleFixedPoint, 0.8, 5, 2);
            const best = selectBestFuture(sim, [f1, f2], mockCurrentDescriptor);
            expect(best?.descriptor.S.level).toBe(S_Level.S2_RecursiveStructure);
        });
    });
});