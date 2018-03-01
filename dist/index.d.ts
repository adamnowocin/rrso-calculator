export interface RrsoConfig {
    interest: number;
    commission: number;
}
export interface RrsoResult {
    rrso: number;
    amountToPayBack: number;
}
export interface RrsoNormalResult {
    fixedInstallment: number;
    amountToPayBack: number;
    interest: number;
    rrso: number;
}
export declare class RRSO {
    getSimpleResult(amount: number, months: number, days: number, config: RrsoConfig): RrsoResult;
    calculate(amount: any, interestRate: any, installmentNumber: any, commision: any, additionalCreditCosts: any): RrsoNormalResult;
}
