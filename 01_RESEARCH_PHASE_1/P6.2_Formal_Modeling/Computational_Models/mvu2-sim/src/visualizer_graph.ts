// src/visualizer_graph.ts
import Graph from 'graphology';
import { DistinctionAttrs, RelationAttrs, ProtoType, S_Level } from './shared_types';
import forceAtlas2 from 'graphology-layout-forceatlas2';

function circularLayout(graph: Graph<DistinctionAttrs, RelationAttrs>, positions: { [key: string]: { x: number, y: number } }, width: number, height: number) {
    const nodes = graph.nodes();
    const order = nodes.length;
    if (order === 0) return;

    const angleStep = (2 * Math.PI) / order;
    const radiusFactor = order === 1 ? 0 : (order < 10 ? 0.25 : 0.4);
    const layoutRadius = Math.min(width, height) * radiusFactor;

    nodes.forEach((node, i) => {
        positions[node] = {
            x: width / 2 + (order > 1 ? layoutRadius * Math.cos(i * angleStep) : 0),
            y: height / 2 + (order > 1 ? layoutRadius * Math.sin(i * angleStep) : 0),
        };
    });
}

export function drawGraph(graph: Graph<DistinctionAttrs, RelationAttrs>, canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get 2D context from canvas for drawGraph");
        return;
    }

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (graph.order === 0) return;

    const positions: { [key: string]: { x: number, y: number } } = {};

    if (graph.order > 0) { 
        const layoutGraph = new Graph();
        graph.forEachNode((node, attrs) => {
            layoutGraph.addNode(node, { ...attrs }); 
            if (!Object.prototype.hasOwnProperty.call(attrs, 'x')) {
                layoutGraph.setNodeAttribute(node, 'x', (Math.random() - 0.5) * width * 0.1); 
            }
            if (!Object.prototype.hasOwnProperty.call(attrs, 'y')) {
                layoutGraph.setNodeAttribute(node, 'y', (Math.random() - 0.5) * height * 0.1);
            }
        });
        graph.forEachEdge((edgeKey, attrs, source, target) => { 
            if(layoutGraph.hasNode(source) && layoutGraph.hasNode(target)) {
                 if (!layoutGraph.hasEdge(source,target)) { 
                    layoutGraph.addEdgeWithKey(edgeKey, source, target, {...attrs});
                 } else { 
                    layoutGraph.mergeEdgeAttributes(edgeKey, {...attrs});
                 }
            }
        });

        if (graph.order > 2 && graph.order < 300) { 
            try {
                 forceAtlas2.assign(layoutGraph, { 
                    iterations: Math.max(30, Math.min(150, graph.order * 3)), 
                    settings: { 
                        gravity: 1.2, 
                        edgeWeightInfluence: 0.1,
                        scalingRatio: 20.0,
                        barnesHutOptimize: graph.order > 75, 
                        barnesHutTheta: 0.7,
                        slowDown: 1 + Math.log(graph.order + 1),
                        adjustSizes: true, 
                        linLogMode: true,
                    } 
                });
                layoutGraph.forEachNode((node, attrs) => {
                    const scaleFactor = Math.min(width, height) / (Math.max(10, Math.sqrt(graph.order) * 25)); 
                    positions[node] = {
                        x: attrs.x * scaleFactor + width / 2,
                        y: attrs.y * scaleFactor + height / 2,
                    };
                });
            } catch (e) {
                console.error("ForceAtlas2 layout failed, falling back to circular:", e);
                circularLayout(graph, positions, width, height);
            }
        } else { 
            circularLayout(graph, positions, width, height);
        }
    }

    // Draw Edges
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    graph.forEachEdge((_edge, attrs, source, target) => {
        const posSrc = positions[source];
        const posTgt = positions[target];
        if (posSrc && posTgt) {
            ctx.beginPath();
            ctx.moveTo(posSrc.x, posSrc.y);
            ctx.lineTo(posTgt.x, posTgt.y);
            const resistance = attrs.flowResistance.toNumber();
            ctx.lineWidth = Math.max(0.3, 2.0 - resistance * 0.4); 
            ctx.stroke();
        }
    });
    ctx.lineWidth = 1; 

    // Draw Nodes
    graph.forEachNode((node, attrs) => {
        const pos = positions[node];
        if (!pos) {
            positions[node] = { x: Math.random() * width, y: Math.random() * height };
            console.warn(`No position calculated for node ${node}, placed randomly.`);
        }

        const baseRadius = attrs.protoType === ProtoType.Quarkic ? 4.5 : (attrs.protoType === ProtoType.Leptonic ? 5 : 5.5);
        const stressVal = attrs.stress ? attrs.stress.toNumber() : 0;
        const stressFactor = Math.min(2.0, 1 + stressVal * 0.1); 
        const radius = Math.max(2.5, baseRadius * stressFactor);

        ctx.beginPath();
        ctx.arc(positions[node].x, positions[node].y, radius, 0, 2 * Math.PI);
        
        ctx.fillStyle = attrs.polarity === 1 ? '#00aaff' : '#ffaa00'; 
        if (attrs.protoType === ProtoType.Leptonic) ctx.fillStyle = '#33cc33'; 
        else if (attrs.protoType === ProtoType.Quarkic) ctx.fillStyle = '#ff6666'; 
        
        ctx.fill();

        if (attrs.sLevel >= S_Level.S2_RecursiveStructure) {
            ctx.strokeStyle = attrs.sLevel === S_Level.S3_DynamicEquilibrium ? '#FFD700' : (attrs.sLevel === S_Level.S2_RecursiveStructure ? '#FFFFFF' : '#DDDDDD');
            ctx.lineWidth = attrs.sLevel === S_Level.S3_DynamicEquilibrium ? 1.5 : 1;
            ctx.stroke();
        }
    });
}