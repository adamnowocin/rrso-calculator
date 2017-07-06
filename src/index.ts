export interface Result {
  rrso: number;
  amountToPay: number;
}

export class RRSO {
  calculate(amount: number, time: number, isDays: number, intrest: number, commission: number): Result {
    const t: number = isDays ? time / 365 : time / 12;
    const toPay = amount + amount * commission + amount * intrest * t;
    return {
      'rrso': (Math.pow(toPay / amount, 1/t) - 1) * 100,
      'amountToPay': toPay
    };
  }
}