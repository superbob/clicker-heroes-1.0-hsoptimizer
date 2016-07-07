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

  describe('getAncientCostMultiplier', () => {
    it('should return 1 when given 0', inject(mechanics => {
      expect(mechanics.getAncientCostMultiplier(0)).toBe(1);
    }));

    it('should return 0.95 when given 1', inject(mechanics => {
      expect(mechanics.getAncientCostMultiplier(1)).toBe(0.95);
    }));

    it('should return 0.9025 when given 2', inject(mechanics => {
      expect(mechanics.getAncientCostMultiplier(2)).toBe(0.9025);
    }));
  });

  describe('getAncientUpgradeCost', () => {
    it('should return 1 when given Morgulis and 1 to 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Morgulis', 1, 2)).toBe(1);
    }));

    it('should return 2 when given Siyalatas and 1 to 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 2)).toBe(2);
    }));

    it('should return 3 when given Siyalatas and 2 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 2, 3)).toBe(3);
    }));

    it('should return 5 when given Siyalatas and 1 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 3)).toBe(5);
    }));

    it('should return 4 when given Siyalatas and 3 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 3, 4)).toBe(4);
    }));

    it('should return 9 when given Siyalatas and 1 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 4)).toBe(9);
    }));

    it('should return 54 when given Siyalatas and 1 to 10', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 1, 10)).toBe(54);
    }));

    // TODO fix edge case
    // it('should return 1 when given Solomon and 1 to 2', inject(mechanics => {
    //   expect(mechanics.getAncientUpgradeCost('Solomon', 1, 2)).toBe(1);
    // }));

    // TODO fix edge case
    // it('should return 3 when given Solomon and 2 to 3', inject(mechanics => {
    //   expect(mechanics.getAncientUpgradeCost('Solomon', 2, 3)).toBe(3);
    // }));

    it('should return 8 when given Solomon and 1 to 3', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 3)).toBe(8);
    }));

    it('should return 8 when given Solomon and 3 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 3, 4)).toBe(8);
    }));

    it('should return 16 when given Solomon and 1 to 4', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 4)).toBe(16);
    }));

    it('should return 141 when given Solomon and 1 to 10', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 10)).toBe(141);
    }));

    it('should return 40500 when given Solomon and 1 to 100', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 1, 100)).toBe(40500);
    }));
  });

  describe('getAncientUpgradeCost with Chor\'gorloth multiplier', () => {
    it('should return 13 990 when given Argaiv, 15 500 to 15 501 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15500, 15501, 2)).toBe(13990);
    }));

    it('should return 13 990 when given Argaiv, 15 501 to 15 502 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15501, 15502, 2)).toBe(13991);
    }));

    it('should return 13 990 when given Argaiv, 15 502 to 15 503 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15502, 15503, 2)).toBe(13992);
    }));

    it('should return 13 990 when given Argaiv, 15 503 to 15 504 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15503, 15504, 2)).toBe(13993);
    }));

    it('should return 13 990 when given Argaiv, 15 504 to 15 505 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15504, 15505, 2)).toBe(13994);
    }));

    it('should return 13 990 when given Argaiv, 15 505 to 15 506 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15505, 15506, 2)).toBe(13995);
    }));

    it('should return 13 990 when given Argaiv, 15 506 to 15 507 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15506, 15507, 2)).toBe(13996);
    }));

    it('should return 13 990 when given Argaiv, 15 507 to 15 508 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15507, 15508, 2)).toBe(13996);
    }));

    it('should return 13 990 when given Argaiv, 15 509 to 15 510 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15509, 15510, 2)).toBe(13998);
    }));

    it('should return 139 000 when given Argaiv, 15 500 to 15 510 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15500, 15510, 2)).toBe(139938);
    }));

    it('should return 1 403 000 when given Argaiv, 15 500 to 15 600 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 15500, 15600, 2)).toBe(1403433);
    }));

    it('should return 1 484 000 when given Argaiv, 16 400 to 16 500 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 16400, 16500, 2)).toBe(1484658);
    }));

    it('should return 193 000 000 when given Argaiv, 16 400 to 26 400 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Argaiv', 16400, 26400, 2)).toBe(193139513);
    }));

    it('should return 38,388d when given Atman, 24 to 124 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Atman', 24, 124, 2)).toBe(3.838810451826837e+37);
    }));

    it('should return 149d when given Berserker, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Berserker', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 114M when given Bhaal, 7700 to 17700 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Bhaal', 7700, 17700, 2)).toBe(114622013);
    }));

    it('should return 2,399d when given Bubos, 20 to 120 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Bubos', 20, 120, 2)).toBe(2.399256532391773e+36);
    }));

    it('should return 149d when given Chawedo, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Chawedo', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 4,798d when given Chronos, 21 to 121 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Chronos', 21, 121, 2)).toBe(4.798513064783546e+36);
    }));

    it('should return 2,399d when given Dogcog, 20 to 120 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Dogcog', 20, 120, 2)).toBe(2.399256532391773e+36);
    }));

    it('should return 9,597d when given Dora, 22 to 122 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Dora', 22, 122, 2)).toBe(9.597026129567092e+36);
    }));

    it('should return 149d when given Energon, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Energon', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 4,798d when given Fortuna, 21 to 121 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Fortuna', 21, 121, 2)).toBe(4.798513064783546e+36);
    }));

    it('should return 114M when given Fragsworth, 7700 to 17700 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Fragsworth', 7700, 17700, 2)).toBe(114622013);
    }));

    it('should return 149d when given Hecatoncheir, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Hecatoncheir', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 4,878M when given Juggernaut, 1300 to 11300 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Juggernaut', 1300, 11300, 2)).toBe(4878605374);
    }));

    it('should return 149d when given Kleptos, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Kleptos', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 4,798d when given Kumawakamaru, 21 to 121 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Kumawakamaru', 21, 121, 2)).toBe(4.798513064783546e+36);
    }));

    it('should return 175M when given Libertas, 14400 to 24400 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Libertas', 14400, 24400, 2)).toBe(175089513);
    }));

    it('should return 175M when given Mammon, 14400 to 24400 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Mammon', 14400, 24400, 2)).toBe(175089513);
    }));

    it('should return 175M when given Mimzee, 14400 to 24400 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Mimzee', 14400, 24400, 2)).toBe(175089513);
    }));

    it('should return 902K when given Morgulis, 240000000 to 241000000 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Morgulis', 240000000, 241000000, 2)).toBe(902500);
    }));

    it('should return 149d when given Revolc, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Revolc', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 185M when given Siyalatas, 15501 to 25501 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Siyalatas', 15501, 25501, 2)).toBe(185026038);
    }));

    it('should return 149d when given Sniperino, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Sniperino', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));

    it('should return 9,658M when given Solomon, 5257 to 15257 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Solomon', 5257, 15257, 2)).toBe(9656909168);
    }));

    it('should return 149d when given Vaagur, 16 to 116 and Chor at 2', inject(mechanics => {
      expect(mechanics.getAncientUpgradeCost('Vaagur', 16, 116, 2)).toBe(1.4995353327448582e+35);
    }));
  });

});
