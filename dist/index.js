"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RRSO = (function () {
    function RRSO() {
    }
    RRSO.prototype.getSimpleResult = function (amount, months, days, config) {
        config = config || { interest: 0, commission: 0 };
        days = days || 0;
        months = months || 0;
        var interest = config.interest || 0;
        var commission = config.commission || 0;
        var parOfTheYear = days / 365 + months / 12;
        var amountToPayBack = amount + amount * commission + amount * interest * parOfTheYear;
        return {
            'rrso': (Math.pow(amountToPayBack / amount, 1 / parOfTheYear) - 1) * 100,
            'amountToPayBack': amountToPayBack
        };
    };
    RRSO.prototype.calculate = function (amount, interestRate, installmentNumber, commision, additionalCreditCosts) {
        var interestRatePerMonth = interestRate / 100 / 12;
        var creditCost = amount * (commision / 100 + 1) + additionalCreditCosts;
        var fixedInstallment = Math.round(100 * (creditCost * interestRatePerMonth) * Math.pow((interestRatePerMonth + 1), installmentNumber) / ((Math.pow((interestRatePerMonth + 1), installmentNumber) - 1))) / 100;
        var amountToPayBack = Math.round(100 * fixedInstallment * installmentNumber) / 100;
        var interest = Math.round(100 * (amountToPayBack - amount)) / 100;
        var nominalInterest = (12 * (95 * installmentNumber + 9) * interest) / ((1 + parseFloat(installmentNumber)) * 12 * parseFloat(installmentNumber) * (4 * amount + interest));
        var rrso = Math.round((Math.pow(1 + nominalInterest / 12, 12) - 1) * 10000) / 100;
        return {
            fixedInstallment: fixedInstallment,
            amountToPayBack: amountToPayBack,
            interest: interest,
            rrso: rrso,
        };
    };
    return RRSO;
}());
exports.RRSO = RRSO;
