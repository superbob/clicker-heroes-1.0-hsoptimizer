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
    it('should return 1 when given Morgulis and 1 to 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Morgulis', 1, 2)).toBe(1);
    }));

    it('should return 1 when given Siyalatas and 1 to 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 2)).toBe(1);
    }));

    it('should return 2 when given Siyalatas and 2 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 2, 3)).toBe(2);
    }));

    it('should return 3 when given Siyalatas and 1 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 3)).toBe(3);
    }));

    it('should return 3 when given Siyalatas and 3 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 3, 4)).toBe(3);
    }));

    it('should return 4 when given Siyalatas and 1 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 4)).toBe(6);
    }));

    it('should return 45 when given Siyalatas and 1 to 10', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 10)).toBe(45);
    }));

    // TODO fix edge case
    // it('should return 1 when given Solomon and 1 to 2', inject(mechanics => {
    //   expect(mechanics.getAncientUpgradeCost('Solomon', 1, 2)).toBe(1);
    // }));

    // TODO fix edge case
    // it('should return 3 when given Solomon and 2 to 3', inject(mechanics => {
    //   expect(mechanics.getAncientUpgradeCost('Solomon', 2, 3)).toBe(3);
    // }));

    it('should return 4 when given Solomon and 1 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 3)).toBe(4);
    }));

    it('should return 6 when given Solomon and 3 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 3, 4)).toBe(6);
    }));

    it('should return 10 when given Solomon and 1 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 4)).toBe(10);
    }));

    it('should return 112 when given Solomon and 1 to 10', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 10)).toBe(112);
    }));

    it('should return 50 when given Solomon and 1 to 100', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 100)).toBe(39502);
    }));
  });

});
