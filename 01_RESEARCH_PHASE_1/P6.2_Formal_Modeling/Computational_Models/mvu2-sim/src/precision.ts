// src/precision.ts
import { Decimal } from 'decimal.js';

Decimal.set({ precision: 60 });

export type PrecisionMode = 'high' | 'native';

export class PrecisionNumber {
    private value: Decimal | number;
    public readonly mode: PrecisionMode; 

    constructor(n: number | string | PrecisionNumber | Decimal, mode: PrecisionMode) {
        this.mode = mode;
        if (n instanceof PrecisionNumber) {
            if (this.mode === 'high') {
                this.value = n.toDecimal(); 
            } else {
                this.value = n.toNumber(); 
            }
        } else if (n instanceof Decimal) {
            if (this.mode === 'high') {
                this.value = new Decimal(n); 
            } else {
                this.value = n.toNumber(); 
            }
        } else { 
            if (this.mode === 'high') {
                this.value = new Decimal(n);
            } else {
                this.value = Number(n); 
            }
        }
    }

    public static from(n: number | string | PrecisionNumber | Decimal, mode: PrecisionMode): PrecisionNumber {
        return new PrecisionNumber(n, mode);
    }

    public add(other: PrecisionNumber | number | string): PrecisionNumber {
        if (this.mode === 'high' && this.value instanceof Decimal) {
            const otherDecimal = (other instanceof PrecisionNumber) ? other.toDecimal() : new Decimal(other);
            return new PrecisionNumber(this.value.add(otherDecimal), 'high');
        } else {
            const otherNumber = (other instanceof PrecisionNumber) ? other.toNumber() : Number(other);
            return new PrecisionNumber((this.value as number) + otherNumber, 'native');
        }
    }

    public subtract(other: PrecisionNumber | number | string): PrecisionNumber {
        if (this.mode === 'high' && this.value instanceof Decimal) {
            const otherDecimal = (other instanceof PrecisionNumber) ? other.toDecimal() : new Decimal(other);
            return new PrecisionNumber(this.value.sub(otherDecimal), 'high');
        } else {
            const otherNumber = (other instanceof PrecisionNumber) ? other.toNumber() : Number(other);
            return new PrecisionNumber((this.value as number) - otherNumber, 'native');
        }
    }

    public multiply(other: PrecisionNumber | number | string): PrecisionNumber {
        if (this.mode === 'high' && this.value instanceof Decimal) {
            const otherDecimal = (other instanceof PrecisionNumber) ? other.toDecimal() : new Decimal(other);
            return new PrecisionNumber(this.value.mul(otherDecimal), 'high');
        } else {
            const otherNumber = (other instanceof PrecisionNumber) ? other.toNumber() : Number(other);
            return new PrecisionNumber((this.value as number) * otherNumber, 'native');
        }
    }
    
    public divide(other: PrecisionNumber | number | string): PrecisionNumber {
        if (this.mode === 'high' && this.value instanceof Decimal) {
            const otherDecimal = (other instanceof PrecisionNumber) ? other.toDecimal() : new Decimal(other);
            if (otherDecimal.isZero()) return new PrecisionNumber(new Decimal(0), 'high'); 
            return new PrecisionNumber(this.value.dividedBy(otherDecimal), 'high');
        } else {
            const otherNumber = (other instanceof PrecisionNumber) ? other.toNumber() : Number(other);
            if (otherNumber === 0) return new PrecisionNumber(this.value === 0 ? 0 : ((this.value as number) > 0 ? Infinity : -Infinity), 'native');
            return new PrecisionNumber((this.value as number) / otherNumber, 'native');
        }
    }

    public static divide(a: PrecisionNumber | number | string, b: PrecisionNumber | number | string, mode: PrecisionMode): PrecisionNumber {
        const numA = new PrecisionNumber(a, mode); 
        const numB = new PrecisionNumber(b, mode); 
        return numA.divide(numB); 
    }

    public compareTo(other: PrecisionNumber | number | string): -1 | 0 | 1 {
        const otherPrecisionNumber = (other instanceof PrecisionNumber) ? other : new PrecisionNumber(other, this.mode);

        if (this.mode === 'high' && this.value instanceof Decimal) {
            return this.value.comparedTo(otherPrecisionNumber.toDecimal());
        } else { 
            const thisNum = this.value as number;
            const otherNum = otherPrecisionNumber.toNumber();
            if (thisNum < otherNum) return -1;
            if (thisNum > otherNum) return 1;
            return 0;
        }
    }

    public isEqualTo(other: PrecisionNumber | number | string): boolean {
        return this.compareTo(other) === 0;
    }
    public isLessThan(other: PrecisionNumber | number | string): boolean {
        return this.compareTo(other) === -1;
    }
    public isGreaterThan(other: PrecisionNumber | number | string): boolean {
        return this.compareTo(other) === 1;
    }
    public isLessThanOrEqualTo(other: PrecisionNumber | number | string): boolean {
        return this.compareTo(other) <= 0;
    }
    public isGreaterThanOrEqualTo(other: PrecisionNumber | number | string): boolean {
        return this.compareTo(other) >= 0;
    }

    public isZero(): boolean {
        if (this.value instanceof Decimal) {
            return this.value.isZero();
        }
        return this.value === 0;
    }

    public isNegative(): boolean {
        if (this.value instanceof Decimal) {
            return this.value.isNegative();
        }
        return (this.value as number) < 0;
    }

    public isPositive(): boolean {
        if (this.value instanceof Decimal) {
            return this.value.isPositive();
        }
        return (this.value as number) > 0;
    }

    public abs(): PrecisionNumber {
        if (this.value instanceof Decimal) {
            return new PrecisionNumber(this.value.abs(), this.mode);
        }
        return new PrecisionNumber(Math.abs(this.value as number), this.mode);
    }

    public toNumber(): number {
        if (this.value instanceof Decimal) {
            return this.value.toNumber();
        }
        return this.value;
    }

    public toDecimal(): Decimal {
        if (this.value instanceof Decimal) {
            return new Decimal(this.value); 
        }
        return new Decimal(this.value);
    }

    public toString(precision?: number): string {
        if (this.value instanceof Decimal) {
            return precision ? this.value.toPrecision(precision) : this.value.toString();
        }
        return precision ? (this.value as number).toPrecision(precision) : (this.value as number).toString();
    }
}