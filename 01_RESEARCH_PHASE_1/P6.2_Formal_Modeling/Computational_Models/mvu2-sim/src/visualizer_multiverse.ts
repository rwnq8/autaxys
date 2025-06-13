// src/visualizer_multiverse.ts
import Graph from 'graphology';
import { PatternDescriptor, S_Level } from './shared_types';
import forceAtlas2 from 'graphology-layout-forceatlas2';

function getSLevelColor(level: S_Level): string {
    switch (level) {
        case S_Level.S0_Vacuum: return '#495057'; 
        case S_Level.S1_SimpleFixedPoint: return '#6c757d'; 
        case S_Level.S2_RecursiveStructure: return '#007bff'; 
        case S_Level.S3_DynamicEquilibrium: return '#ffc107'; 
        case S_Level.S4_CompositeStability: return '#28a745'; 
        default: return '#ced4da'; 
    }
}

export function drawMultiverse(universes: { descriptor: PatternDescriptor, graphJson: string }[], canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error("Failed to get 2D context from canvas for drawMultiverse");
        return;
    }

    const width = canvas.width;
    const height = canvas.height;
    ctx.clearRect(0, 0, width, height);

    if (universes.length === 0) return;

    const multiverseGraph = new Graph(); 
    universes.forEach((uni, i) => {
        const complexity = uni.descriptor.C.toNumber();
        const size = Math.max(3, Math.log(complexity + 1) * 2.5 + 3); 
        const color = getSLevelColor(uni.descriptor.S.level);
        
        multiverseGraph.addNode(i.toString(), { 
            size: size,
            color: color,
            x: (Math.random() - 0.5) * width * 0.4, 
            y: (Math.random() - 0.5) * height * 0.4,
            originalDescriptor: uni.descriptor 
        });
    });

    if (multiverseGraph.order > 1) {
        try {
            forceAtlas2.assign(multiverseGraph, { 
                iterations: Math.max(50, Math.min(150, multiverseGraph.order * 2)), 
                settings: { 
                    gravity: Math.max(1.0, multiverseGraph.order * 0.05), 
                    scalingRatio: Math.min(width, height) / Math.max(10, Math.sqrt(multiverseGraph.order) * 15), 
                    barnesHutOptimize: multiverseGraph.order > 75,
                    barnesHutTheta: 0.8,
                    strongGravityMode: true, 
                    slowDown: 1 + Math.log10(multiverseGraph.order +1),
                    adjustSizes: true,
                } 
            });
        } catch (e) {
            console.error("Multiverse ForceAtlas2 layout failed:", e);
        }
    }

    multiverseGraph.forEachNode((_node, attrs) => {
        const x = attrs.x + width / 2; 
        const y = attrs.y + height / 2;
        
        ctx.beginPath();
        ctx.arc(x, y, attrs.size, 0, 2 * Math.PI);
        ctx.fillStyle = attrs.color;
        ctx.globalAlpha = 0.75; 
        ctx.fill();
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)'; 
        ctx.lineWidth = 0.5;
        ctx.stroke();
    });
    ctx.globalAlpha = 1.0;
}