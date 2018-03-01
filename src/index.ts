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

  calculate(amount, interestRate, installmentNumber, commision, additionalCreditCosts): RrsoNormalResult {
    const interestRatePerMonth = interestRate / 100 / 12;
    const creditCost = amount * (commision / 100 + 1) + additionalCreditCosts;
    const fixedInstallment = Math.round(100 * (creditCost * interestRatePerMonth) * Math.pow((interestRatePerMonth + 1), installmentNumber) / ((Math.pow((interestRatePerMonth + 1), installmentNumber) - 1))) / 100;
    const amountToPayBack = Math.round(100 * fixedInstallment * installmentNumber) / 100;
    const interest = Math.round(100 * (amountToPayBack - amount)) / 100;
    const nominalInterest = (12 * (95 * installmentNumber + 9) * interest) / ((1 + parseFloat(installmentNumber)) * 12 * parseFloat(installmentNumber) * (4 * amount + interest));
    const rrso = Math.round((Math.pow(1 + nominalInterest / 12, 12) - 1) * 10000) / 100;

    return {
      fixedInstallment: fixedInstallment,
      amountToPayBack: amountToPayBack,
      interest: interest,
      rrso: rrso,
    }
  }

}
