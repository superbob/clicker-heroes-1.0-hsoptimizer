'use strict';

describe('service mechanics', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(mechanics => {
    expect(mechanics).not.toEqual(null);
  }));

  describe('getAncientNameById', () => {
    it('should return Solomon when given 3', inject(mechanics => {
      expect(mechanics.getAncientNameById('3')).toBe('Solomon');
    }));

    it('should return Kumawakamaru when given 21', inject(mechanics => {
      expect(mechanics.getAncientNameById('21')).toBe('Kumawakamaru');
    }));
  });

  describe('getOutsiderNameById', () => {
    it('should return Chor\'gorloth when given 2', inject(mechanics => {
      expect(mechanics.getOutsiderNameById('2')).toBe('Chor\'gorloth');
    }));

    it('should return Phandoryss when given 3', inject(mechanics => {
      expect(mechanics.getOutsiderNameById('3')).toBe('Phandoryss');
    }));
  });

  describe('getAncientUpgradeCost', () => {
    it('should return 50 when given Siyalatas and 1 to 10', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 10)).toBe(54);
    }));

    it('should return 50 when given Solomon and 1 to 100', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 100)).toBe(40500);
    }));
  });

});
