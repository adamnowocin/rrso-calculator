export interface RrsoConfig {
    interest: number;
    commission: number;
}
export interface RrsoResult {
    rrso: number;
    amountToPayBack: number;
}
export declare class RRSO {
    getSimpleResult(amount: number, months: number, days: number, config: RrsoConfig): RrsoResult;
}
