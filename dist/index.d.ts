export interface Result {
    rrso: number;
    amountToPay: number;
}
export declare class RRSO {
    calculate(amount: number, time: number, isDays: number, intrest: number, commission: number): Result;
}
