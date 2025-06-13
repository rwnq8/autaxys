// src/rule_utils.ts
import { PrecisionNumber } from './precision';
import { Rule } from './shared_types';
import type { MVU_Simulator } from './simulator_core';

/**
 * Helper function to get the base cost of a rule by its name.
 * It extracts the base name (e.g., "adaptation" from "adaptation_valence_up")
 * to find the corresponding rule object in the simulator's rule list.
 * @param ruleName The full name of the move (e.g., "adaptation_valence_up").
 * @param sim The simulator instance.
 * @returns The base cost of the rule as a PrecisionNumber.
 */
export function getRuleBaseCost(ruleName: string, sim: MVU_Simulator): PrecisionNumber {
    const baseRuleKey = ruleName.split('_')[0];
    const rule = sim.rules.find(r => r.name === baseRuleKey); 
    return rule ? rule.base_cost : PrecisionNumber.from(1, sim.config.precision); // Default cost if rule not found
}