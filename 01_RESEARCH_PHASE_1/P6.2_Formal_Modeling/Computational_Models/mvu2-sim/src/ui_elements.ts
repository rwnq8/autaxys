// src/ui_elements.ts

// Define a type for the UI elements object for strong typing
export interface UIElements {
    timelineCanvas: HTMLCanvasElement;
    multiverseCanvas: HTMLCanvasElement;
    divergenceHighCanvas: HTMLCanvasElement;
    divergenceNativeCanvas: HTMLCanvasElement;
    timelineView: HTMLElement;
    multiverseView: HTMLElement;
    divergenceView: HTMLElement;
    modeTimelineBtn: HTMLButtonElement;
    modeMultiverseBtn: HTMLButtonElement;
    modeDivergenceBtn: HTMLButtonElement;
    pauseButton: HTMLButtonElement;
    exportDataBtn: HTMLButtonElement;
    currentModeDd: HTMLElement;
    totalStepsDd: HTMLElement;
    currentComplexityDd: HTMLElement;
    currentSLevelDd: HTMLElement;
    currentRobustnessDd: HTMLElement;
    currentStressDd: HTMLElement;
    totalAttemptsDd: HTMLElement;
    stableUniversesDd: HTMLElement;
    highestSLevelAchievedDd: HTMLElement;
    divergenceStepDd: HTMLElement;
    ruleWeightsUl: HTMLUListElement;
    cbEnableAdaptValence: HTMLInputElement;
    cbEnableAdaptPolarity: HTMLInputElement;
    cbEnableAdaptPrototype: HTMLInputElement;
    cbEnableTransformPrototype: HTMLInputElement;
    cbEnableCollapse: HTMLInputElement;
    cbEnableDynamicRuleWeights: HTMLInputElement;
    cbEnableStressPropagation: HTMLInputElement;
}

/**
 * Queries the DOM to find all necessary UI elements and returns them in a structured object.
 * Throws an error if any critical element is not found.
 * @returns The populated UIElements object.
 */
export function initializeUI(): UIElements {
    const ui: UIElements = {
        timelineCanvas: document.getElementById('timeline-canvas') as HTMLCanvasElement,
        multiverseCanvas: document.getElementById('multiverse-canvas') as HTMLCanvasElement,
        divergenceHighCanvas: document.getElementById('divergence-high-canvas') as HTMLCanvasElement,
        divergenceNativeCanvas: document.getElementById('divergence-native-canvas') as HTMLCanvasElement,
        timelineView: document.getElementById('timeline-view') as HTMLElement,
        multiverseView: document.getElementById('multiverse-view') as HTMLElement,
        divergenceView: document.getElementById('divergence-view') as HTMLElement,
        modeTimelineBtn: document.getElementById('mode-timeline-btn') as HTMLButtonElement,
        modeMultiverseBtn: document.getElementById('mode-multiverse-btn') as HTMLButtonElement,
        modeDivergenceBtn: document.getElementById('mode-divergence-btn') as HTMLButtonElement,
        pauseButton: document.getElementById('pause-button') as HTMLButtonElement,
        exportDataBtn: document.getElementById('export-data-btn') as HTMLButtonElement,
        currentModeDd: document.getElementById('current-mode-dd') as HTMLElement,
        totalStepsDd: document.getElementById('total-steps-dd') as HTMLElement,
        currentComplexityDd: document.getElementById('current-complexity-dd') as HTMLElement,
        currentSLevelDd: document.getElementById('current-s-level-dd') as HTMLElement,
        currentRobustnessDd: document.getElementById('current-robustness-dd') as HTMLElement,
        currentStressDd: document.getElementById('current-stress-dd') as HTMLElement,
        totalAttemptsDd: document.getElementById('total-attempts-dd') as HTMLElement,
        stableUniversesDd: document.getElementById('stable-universes-dd') as HTMLElement,
        highestSLevelAchievedDd: document.getElementById('highest-s-level-achieved-dd') as HTMLElement,
        divergenceStepDd: document.getElementById('divergence-step-dd') as HTMLElement,
        ruleWeightsUl: document.getElementById('rule-weights-ul') as HTMLUListElement,
        cbEnableAdaptValence: document.getElementById('cb-enable-adapt-valence') as HTMLInputElement,
        cbEnableAdaptPolarity: document.getElementById('cb-enable-adapt-polarity') as HTMLInputElement,
        cbEnableAdaptPrototype: document.getElementById('cb-enable-adapt-prototype') as HTMLInputElement,
        cbEnableTransformPrototype: document.getElementById('cb-enable-transform-prototype') as HTMLInputElement,
        cbEnableCollapse: document.getElementById('cb-enable-collapse') as HTMLInputElement,
        cbEnableDynamicRuleWeights: document.getElementById('cb-enable-dynamic-rule-weights') as HTMLInputElement,
        cbEnableStressPropagation: document.getElementById('cb-enable-stress-propagation') as HTMLInputElement,
    };

    // Verify all essential UI elements were found after assignment
    for (const key in ui) {
        if (!ui[key as keyof UIElements]) {
            const kebabCaseId = key.replace(/([A-Z])/g, '-$1').toLowerCase();
            throw new Error(`FATAL: UI element for '${key}' (expected ID: '${kebabCaseId}') not found in DOM. App cannot start.`);
        }
    }

    return ui;
}