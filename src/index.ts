export interface RrsoConfig {
  interest: number;
  commission: number;
}

export interface RrsoResult {
  rrso: number;
  amountToPayBack: number;
}

export class RRSO {

  getSimpleResult(amount: number, months: number, days: number, config: RrsoConfig): RrsoResult {

    config = config || {interest: 0, commission: 0};
    days = days || 0;
    months = months || 0;

    const interest = config.interest || 0;
    const commission = config.commission || 0;

    const parOfTheYear: number = days / 365 + months / 12;

    const amountToPayBack = amount + amount * commission + amount * interest * parOfTheYear;

    return {
      'rrso': (Math.pow(amountToPayBack / amount, 1 / parOfTheYear) - 1) * 100,
      'amountToPayBack': amountToPayBack
    };

  }

}
