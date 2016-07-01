'use strict';

// This is a 'compact' representation of all necessary data read from a save file
// Almost all unused keys have been removed
const saveData = {
  "highestFinishedZonePersist": 1559,
  "heroSouls": "1.0899840000000034e6",
  "ancientSoulsTotal": 42,
  "ancients": {
    "ancients": {
      "3": {"purchaseTime": 1465651440789, "locked": true, "spentHeroSouls": "2.5437000000000007e6", "uid": 3, "id": 3, "level": "548"},
      "4": {"purchaseTime": 1465646719837, "locked": true, "spentHeroSouls": "3.5067299999999992e5", "uid": 4, "id": 4, "level": "881.0000000000001"},
      "5": {"purchaseTime": 1465564457414, "locked": true, "spentHeroSouls": "4.085730000000001e5", "uid": 5, "id": 5, "level": "950.9999999999997"},
      "8": {"purchaseTime": 1465649533960, "locked": true, "spentHeroSouls": "3.5067900000000005e5", "uid": 8, "id": 8, "level": "881.0000000000001"},
      "9": {"purchaseTime": 1465649505159, "locked": true, "spentHeroSouls": "3.5067500000000003e5", "uid": 9, "id": 9, "level": "881.0000000000001"},
      "11": {"purchaseTime": 1465664895373, "locked": true, "spentHeroSouls": "7520.999999999999", "uid": 11, "id": 11, "level": "12"},
      "12": {"purchaseTime": 1465678790532, "locked": true, "spentHeroSouls": "15039.999999999998", "uid": 12, "id": 12, "level": "13"},
      "13": {"purchaseTime": 1465650342145, "locked": true, "spentHeroSouls": "1.18314e5", "uid": 13, "id": 13, "level": "16"},
      "14": {"purchaseTime": 1465651312374, "locked": true, "spentHeroSouls": "29612", "uid": 14, "id": 14, "level": "14"},
      "15": {"purchaseTime": 1465934164310, "locked": true, "spentHeroSouls": "20228", "uid": 15, "id": 15, "level": "150"},
      "16": {"purchaseTime": 1465712501053, "locked": true, "spentHeroSouls": "8.16230999999999e5", "uid": 16, "id": 16, "level": "9.02486e5"},
      "17": {"purchaseTime": 1465848785677, "locked": true, "spentHeroSouls": "16985", "uid": 17, "id": 17, "level": "13"},
      "18": {"purchaseTime": 1465712484132, "locked": true, "spentHeroSouls": "8596.000000000002", "uid": 18, "id": 18, "level": "12" },
      "19": {"purchaseTime": 1465934150647, "locked": true, "spentHeroSouls": "16227.999999999995", "uid": 19, "id": 19, "level": "150"},
      "20": {"purchaseTime": 1465934115112, "locked": true, "spentHeroSouls": "4156", "uid": 20, "id": 20, "level": "5"},
      "21": {"purchaseTime": 1465710269556, "locked": true, "spentHeroSouls": "4499", "uid": 21, "id": 21, "level": "11"},
      "22": {"purchaseTime": 1465934186622, "locked": true, "spentHeroSouls": "35055.99999999999", "uid": 22, "id": 22, "level": "5"},
      "23": {"purchaseTime": 1465934182952, "locked": true, "spentHeroSouls": "25056", "uid": 23, "id": 23, "level": "5"},
      "24": {"purchaseTime": 1465934099517, "locked": true, "spentHeroSouls": "3455.9999999999995", "uid": 24, "id": 24, "level": "5"},
      "25": {"purchaseTime": 1465934094257, "locked": true, "spentHeroSouls": "2805.9999999999995", "uid": 25, "id": 25, "level": "5"},
      "26": {"purchaseTime": 1465934142217, "locked": true, "spentHeroSouls": "5055.999999999999", "uid": 26, "id": 26, "level": "5"},
      "27": {"purchaseTime": 1465934179076, "locked": true, "spentHeroSouls": "16055.999999999996", "uid": 27, "id": 27, "level": "5"},
      "28": {"purchaseTime": 1465680142873, "locked": true, "spentHeroSouls": "4.090719999999999e5", "uid": 28, "id": 28, "level": "950.9999999999997"},
      "29": {"purchaseTime": 1465934156461, "locked": true, "spentHeroSouls": "14046.000000000004", "uid": 29, "id": 29, "level": "50"},
      "31": {"purchaseTime": 1465934174815, "locked": true, "spentHeroSouls": "12556", "uid": 31, "id": 31, "level": "5"}
    }
  },
  "primalSouls": "4.645657999999998e6",
  "outsiders": {
    "outsiders": {
      "1": {"uid": 1, "spentAncientSouls": 15, "id": 1, "level": 15},
      "2": {"uid": 2, "spentAncientSouls": 2, "id": 2, "level": 2},
      "3": {"uid": 3, "spentAncientSouls": 6, "id": 3, "level": 3},
      "4": {"uid": 4, "spentAncientSouls": 0, "id": 4, "level": 0},
      "5": {"uid": 5, "spentAncientSouls": 19, "id": 5, "level": 19}
    }
  }
};

describe('service saveDataAnalyzer', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(saveDataAnalyzer => {
    expect(saveDataAnalyzer).not.toEqual(null);
  }));

  describe('getAncients', () => {
    it('should return ancient list when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getAncients(saveData)).toEqual([
        {"name": "Solomon", "level": 548},
        {"name": "Libertas", "level": 881},
        {"name": "Siyalatas", "level": 950},
        {"name": "Mammon", "level": 881},
        {"name": "Mimzee", "level": 881},
        {"name": "Dogcog", "level": 12},
        {"name": "Fortuna", "level": 13},
        {"name": "Atman", "level": 16},
        {"name": "Dora", "level": 14},
        {"name": "Bhaal", "level": 150},
        {"name": "Morgulis", "level": 902486},
        {"name": "Chronos", "level": 13},
        {"name": "Bubos", "level": 12},
        {"name": "Fragsworth", "level": 150},
        {"name": "Vaagur", "level": 5},
        {"name": "Kumawakamaru", "level": 11},
        {"name": "Chawedo", "level": 5},
        {"name": "Hecatoncheir", "level": 5},
        {"name": "Berserker", "level": 5},
        {"name": "Sniperino", "level": 5},
        {"name": "Kleptos", "level": 5},
        {"name": "Energon", "level": 5},
        {"name": "Argaiv", "level": 950},
        {"name": "Juggernaut", "level": 50},
        {"name": "Revolc", "level": 5}
      ]);
    }));
  });

  describe('getOutsiders', () => {
    it('should return outsider list when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getOutsiders(saveData)).toEqual([
        {"name": undefined, "level": 15},
        {"name": "Chor'gorloth", "level": 2},
        {"name": "Phandoryss", "level": 3},
        {"name": undefined, "level": 0},
        {"name": undefined, "level": 19}
      ]);
    }));
  });

  describe('getHsInStock', () => {
    it('should return 1089984 when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getHsInStock(saveData)).toBe(1089984);
    }));
  });

  describe('getHsUponAscend', () => {
    it('should return 4645658 when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getHsUponAscend(saveData)).toBe(4645658);
    }));
  });

  describe('getAncientSoulsTotal', () => {
    it('should return 42 when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getAncientSoulsTotal(saveData)).toBe(42);
    }));
  });

  describe('getAscendZone', () => {
    it('should return 1559 when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.getAscendZone(saveData)).toBe(1559);
    }));
  });

  describe('detectPlayStyle', () => {
    it('should return hybrid when given saveData', inject(saveDataAnalyzer => {
      expect(saveDataAnalyzer.detectPlayStyle(saveData)).toBe('hybrid');
    }));
  });

});
