// src/simulation_controller.ts
import { MVU_Simulator } from './simulator_core';
import { 
    SimConfig, 
    PatternDescriptor, 
    S_Level, 
    DEFAULT_SIM_CONFIG 
} from './shared_types';
import { drawGraph } from './visualizer_graph';
import { drawMultiverse } from './visualizer_multiverse';
import Papa from 'papaparse';
import { PrecisionNumber } from './precision';
import { UIElements } from './ui_elements';

export class SimulationController {
    private ui: UIElements;
    private activeMode: 'timeline' | 'multiverse' | 'divergence' = 'timeline';
    private isPaused = true;
    private animationFrameId: number = 0;
    private readonly SIM_SPEED = 30;

    private timelineSim: MVU_Simulator | null = null;
    private divergenceSimHigh: MVU_Simulator | null = null;
    private divergenceSimNative: MVU_Simulator | null = null;

    private multiverseAttempts = 0;
    private stableUniverses: { descriptor: PatternDescriptor, graphJson: string }[] = [];
    private highestSLevelOverall: S_Level = S_Level.S0_Vacuum;
    private divergenceFoundStep: number | null = null;

    constructor(ui: UIElements) {
        this.ui = ui;
    }

    public start() {
        this.setupEventListeners();
        this.setInitialCheckboxStates();
        this.initializeSimulators('all', true);
        this.switchMode('timeline');
    }

    private getSimulatorConfigFromUI(precisionMode: 'high' | 'native' = 'high', seed?: number): SimConfig {
        return {
            precision: precisionMode,
            seed: seed ?? Date.now() + Math.random() * 100000,
            enable_adaptation_valence: this.ui.cbEnableAdaptValence.checked,
            enable_adaptation_polarity: this.ui.cbEnableAdaptPolarity.checked,
            enable_adaptation_prototype: this.ui.cbEnableAdaptPrototype.checked,
            enable_transformation_prototype: this.ui.cbEnableTransformPrototype.checked,
            enable_collapse: this.ui.cbEnableCollapse.checked,
            enable_dynamic_rule_weighting: this.ui.cbEnableDynamicRuleWeights.checked,
            enable_stress_propagation: this.ui.cbEnableStressPropagation.checked,
            initial_proto_valence: undefined, 
            initial_valence_adaptation_ratio: undefined,
            max_valence_factor: undefined,
            min_valence: undefined,
            absolute_max_valence: undefined,
            stress_propagation_factor: undefined,
            stress_penalty_homogeneous_env: undefined,
        };
    }

    private initializeSimulators(mode: 'timeline' | 'divergence' | 'all' = 'all', forceNewSeedTimeline = false) {
        if (mode === 'timeline' || mode === 'all') {
            const currentTimelineSeed = this.timelineSim?.lcg_seed;
            const timelineSeed = forceNewSeedTimeline || !currentTimelineSeed ? undefined : currentTimelineSeed;
            this.timelineSim = new MVU_Simulator(this.getSimulatorConfigFromUI('high', timelineSeed));
            this.timelineSim.reset();
        }
        if (mode === 'divergence' || mode === 'all') {
            this.divergenceSimHigh = new MVU_Simulator(this.getSimulatorConfigFromUI('high', 420));
            this.divergenceSimNative = new MVU_Simulator(this.getSimulatorConfigFromUI('native', 420));
            this.divergenceSimHigh.reset();
            this.divergenceSimNative.reset();
        }
    }

    private ensureSimulatorsAreReadyForMode(mode: 'timeline' | 'divergence', forceNewSeedForTimeline = false) {
        if (mode === 'timeline' && (!this.timelineSim || forceNewSeedForTimeline)) {
            this.initializeSimulators('timeline', forceNewSeedForTimeline);
        } else if (mode === 'divergence' && (!this.divergenceSimHigh || !this.divergenceSimNative)) {
            this.initializeSimulators('divergence');
        }
    }

    private mainLoop = () => {
        if (this.isPaused) {
            if (this.animationFrameId) cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = 0;
            return;
        }

        switch (this.activeMode) {
            case 'timeline': this.runTimelineStep(); break;
            case 'multiverse': this.runMultiverseBatch(); return; // Multiverse handles its own loop
            case 'divergence': this.runDivergenceStep(); break;
        }

        if (!this.isPaused) {
            this.animationFrameId = requestAnimationFrame(this.mainLoop);
        }
    }

    private runTimelineStep() {
        if (!this.timelineSim) return;
        const result = this.timelineSim.step();
        drawGraph(this.timelineSim.graph, this.ui.timelineCanvas);
        this.updateTimelineStats(result.descriptor);
        this.updateRuleWeightsDisplay(this.timelineSim.rule_weights);

        if (result.halt) {
            this.isPaused = true;
            this.ui.pauseButton.textContent = 'Restart';
            console.log(`Timeline Halted @ step ${this.timelineSim.step_counter}: ${result.reason}`, result.descriptor ? JSON.parse(JSON.stringify(result.descriptor)) : "No descriptor");
        }
    }

    private async runMultiverseBatch() {
        if (this.isPaused) return;

        for (let i = 0; i < 5; i++) {
            if (this.isPaused) break;
            const simulator = new MVU_Simulator(this.getSimulatorConfigFromUI('high'));
            let result;
            do {
                result = simulator.step();
            } while (!result.halt && simulator.step_counter < simulator['MAX_STEPS_PER_SIM']);
            
            this.multiverseAttempts++;
            if (result.descriptor && result.reason !== 'UNBOUNDED_GROWTH' && result.descriptor.C.toNumber() > 1) {
                this.stableUniverses.push({ descriptor: result.descriptor, graphJson: simulator.getGraphHash(simulator.graph) });
                if (result.descriptor.S.level > this.highestSLevelOverall) {
                    this.highestSLevelOverall = result.descriptor.S.level;
                }
            }
            if (i % 2 === 0) await new Promise(r => setTimeout(r, 0));
        }
        drawMultiverse(this.stableUniverses, this.ui.multiverseCanvas);
        this.updateMultiverseStats();

        if (!this.isPaused) {
            this.animationFrameId = requestAnimationFrame(this.mainLoop);
        }
    }

    private runDivergenceStep() {
        if (!this.divergenceSimHigh || !this.divergenceSimNative) return;
        const highResult = this.divergenceSimHigh.step();
        const nativeResult = this.divergenceSimNative.step();
        drawGraph(this.divergenceSimHigh.graph, this.ui.divergenceHighCanvas);
        drawGraph(this.divergenceSimNative.graph, this.ui.divergenceNativeCanvas);

        if (!this.divergenceFoundStep) {
            if (this.divergenceSimHigh.getGraphHash(this.divergenceSimHigh.graph) !== this.divergenceSimNative.getGraphHash(this.divergenceSimNative.graph)) {
                this.divergenceFoundStep = this.divergenceSimHigh.step_counter;
            }
        }
        this.updateDivergenceStats(highResult.descriptor);
        this.updateRuleWeightsDisplay(this.divergenceSimHigh.rule_weights);

        if (highResult.halt || nativeResult.halt) {
            this.isPaused = true;
            this.ui.pauseButton.textContent = 'Restart';
        }
    }

    private updateTimelineStats(descriptor?: PatternDescriptor) {
        this.ui.totalStepsDd.textContent=this.timelineSim?.step_counter.toString()??'0';if(descriptor){this.ui.currentComplexityDd.textContent=descriptor.C.toNumber().toFixed(0);this.ui.currentSLevelDd.textContent=`S${descriptor.S.level} (${S_Level[descriptor.S.level]})`;this.ui.currentRobustnessDd.textContent=descriptor.S.robustness.toNumber().toFixed(3);this.ui.currentStressDd.textContent=descriptor.totalStress.toNumber().toFixed(2);}else{this.ui.currentComplexityDd.textContent='N/A';this.ui.currentSLevelDd.textContent='N/A';this.ui.currentRobustnessDd.textContent='N/A';this.ui.currentStressDd.textContent='N/A';}
    }
    private updateMultiverseStats() {
        this.ui.totalAttemptsDd.textContent=this.multiverseAttempts.toString();this.ui.stableUniversesDd.textContent=this.stableUniverses.length.toString();this.ui.highestSLevelAchievedDd.textContent=`S${this.highestSLevelOverall} (${S_Level[this.highestSLevelOverall]})`;
    }
    private updateDivergenceStats(highDesc?: PatternDescriptor) {
        this.ui.totalStepsDd.textContent=this.divergenceSimHigh?.step_counter.toString()??'0';if(highDesc){this.ui.currentComplexityDd.textContent=highDesc.C.toNumber().toFixed(0);this.ui.currentSLevelDd.textContent=`S${highDesc.S.level} (${S_Level[highDesc.S.level]})`;this.ui.currentRobustnessDd.textContent=highDesc.S.robustness.toNumber().toFixed(3);this.ui.currentStressDd.textContent=highDesc.totalStress.toNumber().toFixed(2);}else{this.ui.currentComplexityDd.textContent='N/A';this.ui.currentSLevelDd.textContent='N/A';this.ui.currentRobustnessDd.textContent='N/A';this.ui.currentStressDd.textContent='N/A';}
        if(this.divergenceFoundStep){this.ui.divergenceStepDd.textContent=`Diverged at Step ${this.divergenceFoundStep}`;this.ui.divergenceStepDd.style.color='#ffc107';}else if(!this.isPaused&&this.activeMode==='divergence'){this.ui.divergenceStepDd.textContent='Running...';this.ui.divergenceStepDd.style.color='';}else if(this.isPaused&&this.activeMode==='divergence'&&this.divergenceSimHigh?.step_counter>0){this.ui.divergenceStepDd.textContent='Paused';}else{this.ui.divergenceStepDd.textContent='N/A';this.ui.divergenceStepDd.style.color='';}
    }
    private updateRuleWeightsDisplay(weights?: Map<string, PrecisionNumber>) {
        if(!this.ui.ruleWeightsUl)return;this.ui.ruleWeightsUl.innerHTML='';if(weights&&weights.size>0){weights.forEach((w,rN)=>{const li=document.createElement('li');li.textContent=`${rN}: ${w.toNumber().toFixed(3)}`;this.ui.ruleWeightsUl.appendChild(li);});}else{const li=document.createElement('li');li.textContent="N/A";let noWeighting = false; if(this.activeMode==='timeline'&&this.timelineSim){noWeighting = this.timelineSim.config.enable_dynamic_rule_weighting === false;} else if(this.activeMode==='divergence'&&this.divergenceSimHigh){noWeighting = this.divergenceSimHigh.config.enable_dynamic_rule_weighting === false;} if(noWeighting){li.textContent="Weighting Disabled";}this.ui.ruleWeightsUl.appendChild(li);}
    }

    private resetCurrentModeSimulators(forceNewSeedForTimeline = false) {
        if (this.activeMode === 'timeline') {
            this.timelineSim?.reset();
            this.ensureSimulatorsAreReadyForMode('timeline', forceNewSeedForTimeline);
        } else if (this.activeMode === 'divergence') {
            this.divergenceSimHigh?.reset();
            this.divergenceSimNative?.reset();
            this.ensureSimulatorsAreReadyForMode('divergence');
        }
    }

    private resetAllStatsForModeSwitch() {
        this.ui.totalStepsDd.textContent='0';this.ui.currentComplexityDd.textContent='N/A';this.ui.currentSLevelDd.textContent='N/A';this.ui.currentRobustnessDd.textContent='N/A';this.ui.currentStressDd.textContent='N/A';
        this.divergenceFoundStep=null;this.updateDivergenceStats(); this.updateMultiverseStats(); this.updateRuleWeightsDisplay(); 
    }

    private switchMode(newMode: 'timeline' | 'multiverse' | 'divergence') {
        this.isPaused=true; if(this.animationFrameId)cancelAnimationFrame(this.animationFrameId); this.animationFrameId=0;
        this.activeMode=newMode;
        
        this.resetAllStatsForModeSwitch(); 
        this.ensureSimulatorsAreReadyForMode(newMode, true);

        document.querySelectorAll('.view').forEach(v=>(v as HTMLElement).style.display='none');
        document.querySelectorAll('.mode-btn').forEach(b=>b.classList.remove('active'));
        const vE=document.getElementById(`${newMode}-view`);if(vE)vE.style.display=newMode==='divergence'?'flex':'block';
        const bE=document.getElementById(`mode-${newMode}-btn`);if(bE)bE.classList.add('active');
        this.ui.currentModeDd.textContent=newMode.charAt(0).toUpperCase()+newMode.slice(1);

        [this.ui.timelineCanvas,this.ui.multiverseCanvas,this.ui.divergenceHighCanvas,this.ui.divergenceNativeCanvas].forEach(c=>{const ctx=c.getContext('2d');if(ctx)ctx.clearRect(0,0,c.width,c.height);});
        
        if(newMode==='timeline' && this.timelineSim) { this.updateTimelineStats(this.timelineSim.last_descriptor ?? undefined); this.updateRuleWeightsDisplay(this.timelineSim.rule_weights); } 
        else if(newMode==='multiverse') { drawMultiverse(this.stableUniverses,this.ui.multiverseCanvas); this.updateRuleWeightsDisplay(); } 
        else if(newMode==='divergence' && this.divergenceSimHigh) { this.updateDivergenceStats(this.divergenceSimHigh.last_descriptor ?? undefined); this.updateRuleWeightsDisplay(this.divergenceSimHigh.rule_weights); }
        
        this.ui.pauseButton.textContent = 'Start';
    }

    private setupEventListeners() {
        this.ui.pauseButton.addEventListener('click', () => {
            if(this.ui.pauseButton.textContent==='Start'||this.ui.pauseButton.textContent==='Resume'){
                this.ensureSimulatorsAreReadyForMode(this.activeMode, this.activeMode === 'timeline' && !this.timelineSim); 
                this.isPaused=false;this.ui.pauseButton.textContent='Pause';this.mainLoop();
            } else if(this.ui.pauseButton.textContent==='Pause'){
                this.isPaused=true;this.ui.pauseButton.textContent='Resume';
            } else if(this.ui.pauseButton.textContent==='Restart'){
                this.isPaused=true; if(this.animationFrameId)cancelAnimationFrame(this.animationFrameId); this.animationFrameId=0; 
                this.resetCurrentModeSimulators(true); 
                if (this.activeMode === 'timeline' && this.timelineSim) this.updateTimelineStats(this.timelineSim.last_descriptor ?? undefined);
                else if (this.activeMode === 'divergence' && this.divergenceSimHigh) this.updateDivergenceStats(this.divergenceSimHigh.last_descriptor ?? undefined);
                this.isPaused=false;this.ui.pauseButton.textContent='Pause';this.mainLoop();
            }
        });

        this.ui.modeTimelineBtn.addEventListener('click', () => this.switchMode('timeline'));
        this.ui.modeMultiverseBtn.addEventListener('click', () => this.switchMode('multiverse'));
        this.ui.modeDivergenceBtn.addEventListener('click', () => this.switchMode('divergence'));

        this.ui.exportDataBtn.addEventListener('click', () => {
            if(this.stableUniverses.length===0){alert("No stable universes found yet to export.");return;}
            const dataToExport=this.stableUniverses.map((uni,i)=>({universe_id:i+1,s_level:uni.descriptor.S.level,s_level_name:S_Level[uni.descriptor.S.level],robustness:uni.descriptor.S.robustness.toNumber(),complexity_C:uni.descriptor.C.toNumber(),total_stress:uni.descriptor.totalStress.toNumber(),total_relation_flow_resistance:uni.descriptor.totalRelationFlowResistance.toNumber(),s2_score:uni.descriptor.s2_score?.toNumber()??0,}));
            const csv=Papa.unparse(dataToExport);const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const link=document.createElement('a');link.href=URL.createObjectURL(blob);link.setAttribute('download','autaxys_multiverse_census.csv');link.click();URL.revokeObjectURL(link.href);
        });

        const configCheckboxes = [
            this.ui.cbEnableAdaptValence, this.ui.cbEnableAdaptPolarity, this.ui.cbEnableAdaptPrototype,
            this.ui.cbEnableTransformPrototype, this.ui.cbEnableCollapse, this.ui.cbEnableDynamicRuleWeights,
            this.ui.cbEnableStressPropagation
        ];
        configCheckboxes.forEach(cb => {
            cb.addEventListener('change', () => {
                console.log(`Config changed: ${cb.id} is now ${cb.checked}. Restart simulation or switch mode to apply these settings.`);
                this.timelineSim = null; this.divergenceSimHigh = null; this.divergenceSimNative = null;
                if (!this.isPaused) {
                    this.isPaused = true; 
                    this.ui.pauseButton.textContent = 'Resume (Config Changed)'; 
                    if(this.animationFrameId) cancelAnimationFrame(this.animationFrameId); this.animationFrameId = 0;
                } else {
                    if (this.ui.pauseButton.textContent === 'Resume' || this.ui.pauseButton.textContent === 'Pause') { 
                        this.ui.pauseButton.textContent = 'Start (Config Changed)';
                    }
                }
            });
        });
    }

    private setInitialCheckboxStates() {
        this.ui.cbEnableAdaptValence.checked = DEFAULT_SIM_CONFIG.enable_adaptation_valence;
        this.ui.cbEnableAdaptPolarity.checked = DEFAULT_SIM_CONFIG.enable_adaptation_polarity;
        this.ui.cbEnableAdaptPrototype.checked = DEFAULT_SIM_CONFIG.enable_adaptation_prototype;
        this.ui.cbEnableTransformPrototype.checked = DEFAULT_SIM_CONFIG.enable_transformation_prototype;
        this.ui.cbEnableCollapse.checked = DEFAULT_SIM_CONFIG.enable_collapse;
        this.ui.cbEnableDynamicRuleWeights.checked = DEFAULT_SIM_CONFIG.enable_dynamic_rule_weighting;
        this.ui.cbEnableStressPropagation.checked = DEFAULT_SIM_CONFIG.enable_stress_propagation;
    }
}