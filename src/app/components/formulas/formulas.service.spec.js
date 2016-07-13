'use strict';

describe('service formulas', () => {
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

  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(formulas => {
    expect(formulas).not.toEqual(null);
  }));

  const BASE_LEVEL = 100;
  const OLD_LEVEL = 1;
  const ALPHA = 0.8;

  describe('computeMorgulisLevel formula', () => {
    it('should exist', inject(formulas => {
      expect(formulas.computeMorgulisLevel).not.toBeNull();
    }));

    it('should return the square of baselevel when given a baseLevel', inject(formulas => {
      expect(formulas.computeMorgulisLevel(10)).toBe(100);
      expect(formulas.computeMorgulisLevel(2)).toBe(4);
      expect(formulas.computeMorgulisLevel(1000)).toBe(1000000);
    }));
  });

  describe('computeBubosLevel formula', () => {
    it('should return 6 when given (100, 1)', inject(formulas => {
      expect(Math.round(formulas.computeBubosLevel(BASE_LEVEL, OLD_LEVEL))).toBe(6);
    }));
  });

  describe('computeChronosLevel formula', () => {
    it('should return 8 when given (100, 1)', inject(formulas => {
      expect(Math.round(formulas.computeChronosLevel(BASE_LEVEL, OLD_LEVEL))).toBe(8);
    }));
  });

  describe('computeGoldLevel formula', () => {
    it('should return 93 when given 100', inject(formulas => {
      expect(Math.round(formulas.computeGoldLevel(BASE_LEVEL))).toBe(93);
    }));
  });

  describe('computeDoraLevel formula', () => {
    it('should return 10 when given (100, 1)', inject(formulas => {
      expect(Math.round(formulas.computeDoraLevel(BASE_LEVEL, OLD_LEVEL))).toBe(10);
    }));
  });

  describe('computeDogcogLevel formula', () => {
    it('should return 6 when given (100, 1)', inject(formulas => {
      expect(Math.round(formulas.computeDogcogLevel(BASE_LEVEL, OLD_LEVEL))).toBe(6);
    }));
  });

  describe('computeFortunaLevel formula', () => {
    it('should return 7 when given (100, 1)', inject(formulas => {
      expect(Math.round(formulas.computeFortunaLevel(BASE_LEVEL, OLD_LEVEL))).toBe(7);
    }));
  });

  describe('computeSolomonLevel formula', () => {
    it('should return 44 when given (100, 0.8)', inject(formulas => {
      expect(Math.round(formulas.computeSolomonLevel(BASE_LEVEL, ALPHA))).toBe(44);
    }));
  });

  describe('computeAtmanLevel formula', () => {
    it('should return 8 when given (100, 1, 0.8)', inject(formulas => {
      expect(Math.round(formulas.computeAtmanLevel(BASE_LEVEL, OLD_LEVEL, ALPHA))).toBe(8);
    }));
  });

  describe('computeKumawakamaruLevel formula', () => {
    it('should return 3 when given (100, 1, 0.8)', inject(formulas => {
      expect(Math.round(formulas.computeKumawakamaruLevel(BASE_LEVEL, OLD_LEVEL, ALPHA))).toBe(3);
    }));
  });

  describe('computeHybridBhaalLevel formula', () => {
    it('should return 50 when given 100', inject(formulas => {
      expect(Math.round(formulas.computeHybridBhaalLevel(BASE_LEVEL, 0.5))).toBe(50);
    }));
  });

  describe('computeHybridJuggernautLevel formula', () => {
    it('should return 23 when given 100', inject(formulas => {
      expect(Math.round(formulas.computeHybridJuggernautLevel(BASE_LEVEL, 0.5))).toBe(23);
    }));
  });

  describe('computeActiveJuggernautLevel formula', () => {
    it('should return 40 when given 100', inject(formulas => {
      expect(Math.round(formulas.computeActiveJuggernautLevel(BASE_LEVEL))).toBe(40);
    }));
  });

  describe('computeAlpha formula', () => {
    it('should return 40 when given (1.5, 1500)', inject(formulas => {
      expect(formulas.computeAlpha(0.015, 1500)).toBeApproximatly(0.145341);
    }));
  });

  describe('computeTranscendencePower formula', () => {
    it('should return 40 when given (1.5, 1500)', inject(formulas => {
      expect(formulas.computeTranscendencePower(30, 10)).toBeApproximatly(0.016467);
    }));
  });

  describe('computeActiveXyliqil formula', () => {
    it('should return 0 when given 1 AS', inject(formulas => {
      expect(formulas.computeActiveXyliqil(1)).toBe(0);
    }));

    it('should return 0 when given 10 AS', inject(formulas => {
      expect(formulas.computeActiveXyliqil(10)).toBe(0);
    }));
  });

  describe('computeHybridXyliqil formula', () => {
    it('should return 0 when given 1 AS', inject(formulas => {
      expect(formulas.computeHybridXyliqil(1)).toBe(0);
    }));

    it('should return 1 when given 20 AS', inject(formulas => {
      expect(formulas.computeHybridXyliqil(20)).toBe(1);
    }));

    it('should return 1 when given 25 AS', inject(formulas => {
      expect(formulas.computeHybridXyliqil(25)).toBe(1);
    }));

    it('should return 5 when given 100 AS', inject(formulas => {
      expect(formulas.computeHybridXyliqil(100)).toBe(5);
    }));

    it('should return 5 when given 120 AS', inject(formulas => {
      expect(formulas.computeHybridXyliqil(120)).toBe(5);
    }));
  });

  describe('computeIdleXyliqil formula', () => {
    it('should return 0 when given 1 AS', inject(formulas => {
      expect(formulas.computeIdleXyliqil(1)).toBe(0);
    }));

    it('should return 1 when given 5 AS', inject(formulas => {
      expect(formulas.computeIdleXyliqil(5)).toBe(1);
    }));

    it('should return 1 when given 9 AS', inject(formulas => {
      expect(formulas.computeIdleXyliqil(9)).toBe(1);
    }));

    it('should return 10 when given 50 AS', inject(formulas => {
      expect(formulas.computeIdleXyliqil(50)).toBe(10);
    }));

    it('should return 10 when given 60 AS', inject(formulas => {
      expect(formulas.computeIdleXyliqil(60)).toBe(10);
    }));
  });

  describe('computePhandoryss formula', () => {
    it('should return 1 when given 4 AS', inject(formulas => {
      expect(formulas.computePhandoryss(4)).toBe(1);
    }));

    it('should return 1 when given 5 AS', inject(formulas => {
      expect(formulas.computePhandoryss(5)).toBe(1);
    }));

    it('should return 2 when given 11 AS', inject(formulas => {
      expect(formulas.computePhandoryss(11)).toBe(2);
    }));

    it('should return 4 when given 50 AS', inject(formulas => {
      expect(formulas.computePhandoryss(50)).toBe(4);
    }));

    it('should return 6 when given 60 AS', inject(formulas => {
      expect(formulas.computePhandoryss(60)).toBe(6);
    }));

    it('should return 19 when given 230 AS', inject(formulas => {
      expect(formulas.computePhandoryss(230)).toBe(19);
    }));
  });

  describe('computeBorbA formula', () => {
    it('should return 1 when given 4 AS', inject(formulas => {
      expect(formulas.computeBorbA(4)).toBe(1);
    }));

    it('should return 1 when given 5 AS', inject(formulas => {
      expect(formulas.computeBorbA(5)).toBe(1);
    }));

    it('should return 2 when given 11 AS', inject(formulas => {
      expect(formulas.computeBorbA(11)).toBe(2);
    }));

    it('should return 5 when given 50 AS', inject(formulas => {
      expect(formulas.computeBorbA(50)).toBe(5);
    }));

    it('should return 6 when given 60 AS', inject(formulas => {
      expect(formulas.computeBorbA(60)).toBe(6);
    }));

    it('should return 23 when given 230 AS', inject(formulas => {
      expect(formulas.computeBorbA(230)).toBe(23);
    }));
  });

  describe('computePonyboy formula', () => {
    it('should return 1 when given 1 AS', inject(formulas => {
      expect(formulas.computePonyboy(1)).toBe(1);
    }));

    it('should return 5 when given 5 AS', inject(formulas => {
      expect(formulas.computePonyboy(5)).toBe(5);
    }));

    it('should return 11 when given 11 AS', inject(formulas => {
      expect(formulas.computePonyboy(11)).toBe(11);
    }));

    it('should return 19 when given 50 AS', inject(formulas => {
      expect(formulas.computePonyboy(50)).toBe(19);
    }));

    it('should return 19 when given 60 AS', inject(formulas => {
      expect(formulas.computePonyboy(60)).toBe(19);
    }));

    it('should return 19 when given 230 AS', inject(formulas => {
      expect(formulas.computePonyboy(230)).toBe(19);
    }));
  });

  describe('computeChorgorloth formula', () => {
    it('should return 1 when given 1 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(1)).toBe(1);
    }));

    it('should return 5 when given 5 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(5)).toBe(5);
    }));

    it('should return 10 when given 11 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(11)).toBe(10);
    }));

    it('should return 10 when given 50 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(50)).toBe(10);
    }));

    it('should return 10 when given 60 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(60)).toBe(10);
    }));

    it('should return 10 when given 230 AS', inject(formulas => {
      expect(formulas.computeChorgorloth(230)).toBe(10);
    }));
  });

  describe('computeBorbD formula', () => {
    it('should return 4 when given 4, 4 AS', inject(formulas => {
      expect(formulas.computeBorbD(4, 4)).toBe(4);
    }));

    it('should return 2 when given 8, 5 AS', inject(formulas => {
      expect(formulas.computeBorbD(8, 5)).toBe(2);
    }));

    it('should return 0 when given 11, 3 AS', inject(formulas => {
      expect(formulas.computeBorbD(11, 3)).toBe(0);
    }));

    it('should return 7 when given 3, 10 AS', inject(formulas => {
      expect(formulas.computeBorbD(3, 10)).toBe(7);
    }));
  });

  describe('computeBorbE formula', () => {
    it('should return 2 when given 4 AS', inject(formulas => {
      expect(formulas.computeBorbE(4)).toBe(2);
    }));

    it('should return 2 when given 5 AS', inject(formulas => {
      expect(formulas.computeBorbE(5)).toBe(2);
    }));

    it('should return 5 when given 11 AS', inject(formulas => {
      expect(formulas.computeBorbE(11)).toBe(5);
    }));

    it('should return 5 when given 10 AS', inject(formulas => {
      expect(formulas.computeBorbE(10)).toBe(5);
    }));
  });

});
