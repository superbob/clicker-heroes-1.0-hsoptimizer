'use strict';

describe('Service: formulas', function () {

  const customMatchers = {
    toBeApproximatly: function() {
      return {
        compare: function(actual, expected) {
          const FACTOR = Math.pow(10, 6);
          var result = {};
          result.pass = (Math.floor(FACTOR * actual) === Math.floor(FACTOR * expected));
          if (result.pass) {
            result.message = 'Expected ' + actual + ' not to equal ' + expected + ' approximatly';
          } else {
            result.message = 'Expected ' + actual + ' to equal ' + expected + ' approximatly';
          }
          return result;
        }
      };
    }
  };

  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });

  // load the service's module
  beforeEach(angular.mock.module('chRotTranscendApp'));

  // instantiate service
  var formulas;
  beforeEach(inject(function (_formulas_) {
    formulas = _formulas_;
  }));

  it('should do something', function () {
    expect(!!formulas).toBe(true);
  });

  const BASE_LEVEL = 100;
  const OLD_LEVEL = 1;
  const ALPHA = 0.8;

  describe('computeMorgulisLevel formula', function() {
    it('should return the square of baselevel when given a baseLevel', function() {
      expect(formulas.computeMorgulisLevel(10)).toBe(100);
      expect(formulas.computeMorgulisLevel(2)).toBe(4);
      expect(formulas.computeMorgulisLevel(1000)).toBe(1000000);
    });
  });

  describe('computeBubosLevel formula', function() {
    it('should return 6 when given (100, 1)', function() {
      expect(Math.round(formulas.computeBubosLevel(BASE_LEVEL, OLD_LEVEL))).toBe(6);
    });
  });

  describe('computeChronosLevel formula', function() {
    it('should return 8 when given (100, 1)', function() {
      expect(Math.round(formulas.computeChronosLevel(BASE_LEVEL, OLD_LEVEL))).toBe(8);
    });
  });

  describe('computeGoldLevel formula', function() {
    it('should return 93 when given 100', function() {
      expect(Math.round(formulas.computeGoldLevel(BASE_LEVEL))).toBe(93);
    });
  });

  describe('computeDoraLevel formula', function() {
    it('should return 10 when given (100, 1)', function() {
      expect(Math.round(formulas.computeDoraLevel(BASE_LEVEL, OLD_LEVEL))).toBe(10);
    });
  });

  describe('computeDogcogLevel formula', function() {
    it('should return 6 when given (100, 1)', function() {
      expect(Math.round(formulas.computeDogcogLevel(BASE_LEVEL, OLD_LEVEL))).toBe(6);
    });
  });

  describe('computeFortunaLevel formula', function() {
    it('should return 7 when given (100, 1)', function() {
      expect(Math.round(formulas.computeFortunaLevel(BASE_LEVEL, OLD_LEVEL))).toBe(7);
    });
  });

  describe('computeSolomonLevel formula', function() {
    it('should return 44 when given (100, 0.8)', function() {
      expect(Math.round(formulas.computeSolomonLevel(BASE_LEVEL, ALPHA))).toBe(44);
    });
  });

  describe('computeAtmanLevel formula', function() {
    it('should return 8 when given (100, 1, 0.8)', function() {
      expect(Math.round(formulas.computeAtmanLevel(BASE_LEVEL, OLD_LEVEL, ALPHA))).toBe(8);
    });
  });

  describe('computeKumawakamaruLevel formula', function() {
    it('should return 3 when given (100, 1, 0.8)', function() {
      expect(Math.round(formulas.computeKumawakamaruLevel(BASE_LEVEL, OLD_LEVEL, ALPHA))).toBe(3);
    });
  });

  describe('computeHybridBhaalLevel formula', function() {
    it('should return 50 when given 100', function() {
      expect(Math.round(formulas.computeHybridBhaalLevel(BASE_LEVEL))).toBe(50);
    });
  });

  describe('computeHybridJuggernautLevel formula', function() {
    it('should return 23 when given 100', function() {
      expect(Math.round(formulas.computeHybridJuggernautLevel(BASE_LEVEL))).toBe(23);
    });
  });

  describe('computeActiveJuggernautLevel formula', function() {
    it('should return 40 when given 100', function() {
      expect(Math.round(formulas.computeActiveJuggernautLevel(BASE_LEVEL))).toBe(40);
    });
  });

  describe('computeAlpha formula', function() {
    it('should return 40 when given (1.5, 1500)', function() {
      expect(formulas.computeAlpha(0.015, 1500)).toBeApproximatly(0.145341);
    });
  });

  describe('computeTranscendencePower formula', function() {
    it('should return 40 when given (1.5, 1500)', function() {
      expect(formulas.computeTranscendencePower(30, 10)).toBeApproximatly(0.016467);
    });
  });

});
