/**
 * @file precision.ts
 * Provides a centralized module for handling high-precision arithmetic.
 * This abstracts away the complexity of using decimal.js and allows for
 * easy switching between high-precision and native float calculations,
 * which is critical for analyzing numerical stability and the "butterfly effect."
 */
import { Decimal } from 'decimal.js';

// Set a high default precision for all new Decimal instances.
// 60 digits is more than sufficient to avoid any conceivable rounding errors in this simulation.
Decimal.set({ precision: 60 });

export type PrecisionMode = 'high' | 'native';

/**
 * A wrapper for a number that can be either a high-precision Decimal or a native number.
 * This class allows us to perform arithmetic without the calling code needing to know
 * the underlying type, making it easy to switch precision modes.
 */
export class PrecisionNumber {
    private value: Decimal | number;
    private mode: PrecisionMode;

    constructor(initialValue: number | string | Decimal, mode: PrecisionMode) {
        this.mode = mode;
        // If initialValue is already a Decimal, use it directly. Otherwise, create a new Decimal.
        if (this.mode === 'high') {
             this.value = new Decimal(initialValue);
        } else {
             this.value = typeof initialValue === 'object' ? initialValue.toNumber() : Number(initialValue);
        }
    }
    
    /** Performs division using the specified calculation mode. */
    static divide(a: number, b: number, mode: PrecisionMode): PrecisionNumber {
        if (mode === 'high') {
            // Decimal.js handles division by zero by returning Decimal(Infinity) or Decimal(NaN).
            // We'll explicitly return Decimal(0) for a/0 to align with L_A definition for empty graph.
            return new PrecisionNumber(b === 0 ? new Decimal(0) : new Decimal(a).dividedBy(b), mode);
        }
        // Native JavaScript number division by zero results in Infinity or NaN.
        // Explicitly return 0 for a/0 to align with L_A definition.
        return new PrecisionNumber(b === 0 ? 0 : a / b, mode);
    }
    
    /** Compares this PrecisionNumber to another. Returns -1 (less than), 0 (equal), or 1 (greater than). */
    compareTo(other: PrecisionNumber): number {
        // Always perform comparison using high precision to ensure accuracy across modes.
        const thisDecimal = this.value instanceof Decimal ? this.value : new Decimal(this.value);
        const otherDecimal = other.value instanceof Decimal ? other.value : new Decimal(other.value);
        return thisDecimal.comparedTo(otherDecimal);
    }
    
    /** Returns the value as a standard JavaScript number (potential loss of precision for high-precision values). */
    toNumber(): number {
        return this.value instanceof Decimal ? this.value.toNumber() : this.value;
    }
    
    /** Returns a string representation, crucial for displaying exact values. */
    toString(precision: number = 25): string {
        if (this.value instanceof Decimal) {
            return this.value.toDecimalPlaces(precision).toString();
        }
        // For native numbers, toPrecision(17) provides maximum significant digits for double-precision floats.
        return this.value.toPrecision(17);
    }
}