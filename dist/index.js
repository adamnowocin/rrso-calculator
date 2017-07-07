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
    return RRSO;
}());
exports.RRSO = RRSO;
