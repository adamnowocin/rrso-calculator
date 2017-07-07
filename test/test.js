const expect = require('chai').expect;
const rrso = require('../dist/index').RRSO;

let rrsoModule;

beforeEach(function() {
  rrsoModule = new rrso();
});

describe('RRSO', function() {
  describe('getSimpleResult', function() {
    it('should return proper result when borrowed 1500$ for 1 month with 10% interest rate', function() {
      // given
      const config = {
        interest: 0.10,
        commission: 0
      };

      // when
      const result = rrsoModule.getSimpleResult(1500, 1, 0, config);

      // then
      expect(result.rrso.toFixed(2)).to.equal('10.47');
      expect(result.amountToPayBack.toFixed(2)).to.equal('1512.50');
    });

    it('should return proper result when borrowed 500$ for 20 days with 10% interest rate and 20% commision', function() {
      // given
      const config = {
        interest: 0.10,
        commission: 0.20
      };

      // when
      const result = rrsoModule.getSimpleResult(500, 0, 20, config);

      // then
      expect(result.rrso.toFixed(2)).to.equal('2928.07');
      expect(result.amountToPayBack.toFixed(2)).to.equal('602.74');
    });
  });
});