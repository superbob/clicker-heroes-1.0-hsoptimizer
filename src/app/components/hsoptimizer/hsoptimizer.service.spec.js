'use strict';

describe('service hsoptimizer', () => {
  beforeEach(angular.mock.module('clickerHeroes10Hsoptimizer'));

  it('should be registered', inject(hsoptimizer => {
    expect(hsoptimizer).not.toEqual(null);
  }));

  it('should give correct recommendations', inject(hsoptimizer => {
    const recommendations = hsoptimizer.computeOptimumLevels(
      [
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
      ],
      [
        {"name": undefined, "level": 15},
        {"name": "Chor'gorloth", "level": 2},
        {"name": "Phandoryss", "level": 3},
        {"name": undefined, "level": 0},
        {"name": undefined, "level": 19}
      ],
      1089984,
      1559,
      42,
      'hybrid')
    expect(recommendations).toEqual([
      {"name": "Solomon", "level": 548, "optimumLevel": 574, "delta": 26},
      {"name": "Libertas", "level": 881, "optimumLevel": 930, "delta": 49},
      {"name": "Siyalatas", "level": 950, "optimumLevel": 1004, "delta": 54},
      {"name": "Mammon", "level": 881, "optimumLevel": 930, "delta": 49},
      {"name": "Mimzee", "level": 881, "optimumLevel": 930, "delta": 49},
      {"name": "Dogcog", "level": 12, "optimumLevel": 13, "delta": 1},
      {"name": "Fortuna", "level": 13, "optimumLevel": 13, "delta": 0},
      {"name": "Atman", "level": 16, "optimumLevel": 17, "delta": 1},
      {"name": "Dora", "level": 14, "optimumLevel": 15, "delta": 1},
      {"name": "Bhaal", "level": 150, "optimumLevel": 502, "delta": 352},
      {"name": "Morgulis", "level": 902486, "optimumLevel": 1008016, "delta": 105530},
      {"name": "Chronos", "level": 13, "optimumLevel": 13, "delta": 0},
      {"name": "Bubos", "level": 12, "optimumLevel": 13, "delta": 1},
      {"name": "Fragsworth", "level": 150, "optimumLevel": 502, "delta": 352},
      {"name": "Kumawakamaru", "level": 11, "optimumLevel": 12, "delta": 1},
      {"name": "Argaiv", "level": 950, "optimumLevel": 1004, "delta": 54},
      {"name": "Juggernaut", "level": 50, "optimumLevel": 145, "delta": 95}
    ]);
  }));

});
