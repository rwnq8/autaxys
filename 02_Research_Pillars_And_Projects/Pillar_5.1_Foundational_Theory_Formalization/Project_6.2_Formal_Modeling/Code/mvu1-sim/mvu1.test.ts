import { MVU1_Simulator, SimConfig } from './mvu1';

export type PrecisionMode = 'high' | 'low';

import Graph from 'graphology';
import { PrecisionNumber } from './precision';
import { describe, it } from 'node:test';
import { expect } from 'expect';

describe('MVU1_Simulator', () => {
    const baseConfig: SimConfig = {
        precision: 'high',
        tieBreaking: 'deterministic',
        seed: 42,
    };

    it('initializes with an empty graph and logs initial state', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        expect(sim.graph.order).toBe(0);
        expect(sim.log.length).toBe(1);
        expect(sim.log[0].rule_applied).toBe('initial_state');
    });

    it('applies genesis rule and adds a node', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim['applyGenesis'](sim.graph);
        expect(sim.graph.order).toBe(1);
        const nodeId = sim.graph.nodes()[0];
        const attrs = sim.graph.getNodeAttributes(nodeId);
        expect([1, -1]).toContain(attrs.polarity);
        expect(attrs.protoValence).toBeGreaterThanOrEqual(0);
        expect(attrs.protoValence).toBeLessThanOrEqual(sim.MAX_PROTO_VALENCE);
    });

    it('step() creates primordial soup until threshold', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        let steps = 0;
        while (sim.graph.order < sim.INITIAL_PRIMORDIAL_DISTINCTIONS * 2 && steps < 100) {
            const cont = sim.step();
            expect(cont).toBe(true);
            steps++;
        }
        expect(sim.graph.order).toBe(sim.INITIAL_PRIMORDIAL_DISTINCTIONS * 2);
        expect(sim.log[sim.log.length - 1].rule_applied).toBe('genesis');
    });

    it('step() halts with PRIMORDIAL_SOUP_COMPLETE if soup creation is done and graph is empty', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        // Simulate primordial soup creation
        for (let i = 0; i < sim.INITIAL_PRIMORDIAL_DISTINCTIONS * 2; i++) {
            sim.step();
        }
        // Remove all nodes to simulate annihilation
        sim.graph.clear();
        const cont = sim.step();
        expect(cont).toBe(false);
        expect(sim.log[sim.log.length - 1].halt_reason).toBe('PRIMORDIAL_SOUP_COMPLETE');
    });

    it('findPossibleMoves returns bonding moves for opposite polarity nodes with unsatisfied valence', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        // Add two nodes with opposite polarity and protoValence > 0
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 1 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 1 });
        const moves = sim['findPossibleMoves']();
        expect(moves.some(m => m.rule === 'bonding' && m.nodes.includes('d_0') && m.nodes.includes('d_1'))).toBe(true);
    });

    it('findPossibleMoves returns annihilation moves for bonded +1/-1 pairs with degree 1', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 1 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 1 });
        sim.graph.addEdge('d_0', 'd_1');
        const moves = sim['findPossibleMoves']();
        expect(moves.some(m => m.rule === 'annihilation')).toBe(true);
    });

    it('findPossibleMoves returns collapse moves for triangles', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 2 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 2 });
        sim.graph.addNode('d_2', { polarity: 1, protoValence: 2 });
        sim.graph.addEdge('d_0', 'd_1');
        sim.graph.addEdge('d_1', 'd_2');
        sim.graph.addEdge('d_0', 'd_2');
        const moves = sim['findPossibleMoves']();
        expect(moves.some(m => m.rule === 'collapse')).toBe(true);
    });

    it('calculateLA returns correct value for simple graph', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 1 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 1 });
        sim.graph.addEdge('d_0', 'd_1');
        const la = sim['calculateLA'](sim.graph);
        expect(la.toNumber()).toBeCloseTo(1 / 3, 5); // 1 bonded pair, 2 nodes, 1 edge
    });

    it('calculateTotalTension returns 0 for fully satisfied valence', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 1 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 1 });
        sim.graph.addEdge('d_0', 'd_1');
        const tension = sim['calculateTotalTension'](sim.graph);
        expect(tension.toNumber()).toBe(0);
    });

    it('checkOntologicalClosure detects fixed point when no moves are possible', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        // Add two nodes with no possible moves (same polarity)
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 0 });
        sim.graph.addNode('d_1', { polarity: 1, protoValence: 0 });
        const oc = sim['checkOntologicalClosure'](sim.graph);
        expect(oc.is_fixed_point_oc).toBe(true);
        expect(oc.is_tension_minimum_oc).toBe(true);
    });

        
    npm i --save-dev @types/jest
    ('step() halts after MAX_INTRINSIC_STEPS', () => {
        const sim = new MVU1_Simulator({ ...baseConfig, seed: 1 });
        sim.initializeGraph();
        sim['step_counter'] = sim.MAX_INTRINSIC_STEPS;
        const cont = sim.step();
        expect(cont).toBe(false);
        expect(sim.log[sim.log.length - 1].halt_reason).toBe('MAX_STEPS');
    });

    it('step() halts on unbounded growth', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        // Add nodes to exceed UNBOUNDED_NODE_LIMIT
        for (let i = 0; i < sim['UNBOUNDED_NODE_LIMIT'] + 1; i++) {
            sim.graph.addNode(`d_${i}`, { polarity: 1, protoValence: 1 });
        }
        const cont = sim.step();
        expect(cont).toBe(false);
        expect(sim.log[sim.log.length - 1].halt_reason).toBe('UNBOUNDED_GROWTH');
    });

    it('getGraphHash produces consistent hashes for same graph', () => {
        const sim = new MVU1_Simulator(baseConfig);
        sim.initializeGraph();
        sim.graph.addNode('d_0', { polarity: 1, protoValence: 1 });
        sim.graph.addNode('d_1', { polarity: -1, protoValence: 1 });
        sim.graph.addEdge('d_0', 'd_1');
        const hash1 = sim['getGraphHash'](sim.graph);
        const hash2 = sim['getGraphHash'](sim.graph.copy());
        expect(hash1).toBe(hash2);
    });
});



// The 'expect' function is provided by Jest for assertions in tests.
// In this context, you should not define your own 'expect' function.
// Remove this function entirely to avoid conflicts with Jest's global 'expect'.

