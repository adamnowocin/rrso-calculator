import { RrsoResult } from './rrso-result';
import { RrsoConfig } from './rrso-config';

export class RRSO {

  getSimpleResult(amount: number, months: number, days: number, config: RrsoConfig): RrsoResult {

    config = config || {intrest: 0, commission: 0};
    days = days || 0;
    months = months || 0;

    const intrest = config.intrest || 0;
    const commission = config.commission || 0;

    const parOfTheYear: number = days / 365 + months / 12;

    const amountToPayBack = amount + amount * commission + amount * intrest * parOfTheYear;

    return {
      'rrso': (Math.pow(amountToPayBack / amount, 1 / parOfTheYear) - 1) * 100,
      'amountToPayBack': amountToPayBack
    };

  }

}
