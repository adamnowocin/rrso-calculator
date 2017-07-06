"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RRSO = (function () {
    function RRSO() {
    }
    RRSO.prototype.calculate = function (amount, time, isDays, intrest, commission) {
        var t = isDays ? time / 365 : time / 12;
        var toPay = amount + amount * commission + amount * intrest * t;
        return {
            'rrso': (Math.pow(toPay / amount, 1 / t) - 1) * 100,
            'amountToPay': toPay
        };
    };
    return RRSO;
}());
exports.RRSO = RRSO;
