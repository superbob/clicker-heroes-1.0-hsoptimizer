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
      'hybrid',
      0.5);
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

  it('should give correct recommendations in an appropriate time', inject(hsoptimizer => {
    const recommendations = hsoptimizer.computeOptimumLevels(
      [
        {"name": "Solomon", "level": 720030000},
        {"name": "Libertas", "level": 43009999999},
        {"name": "Siyalatas", "level": 47000009999},
        {"name": "Mammon", "level": 43000000001},
        {"name": "Mimzee", "level": 43000000001},
        {"name": "Dogcog", "level": 63},
        {"name": "Fortuna", "level": 63},
        {"name": "Atman", "level": 66},
        {"name": "Dora", "level": 64 }, { "name": "Bhaal", "level": 15000000001},
        {"name": "Morgulis", "level": 2.2021e+21},
        {"name": "Chronos", "level": 58},
        {"name": "Bubos", "level": 62},
        {"name": "Fragsworth", "level": 15000000001},
        {"name": "Vaagur", "level": 63},
        {"name": "Kumawakamaru", "level": 66},
        {"name": "Chawedo", "level": 60},
        {"name": "Hecatoncheir", "level": 60},
        {"name": "Berserker", "level": 60},
        {"name": "Sniperino", "level": 62},
        {"name": "Kleptos", "level": 60},
        {"name": "Energon", "level": 60},
        {"name": "Argaiv", "level": 47000010001},
        {"name": "Juggernaut", "level": 120000001},
        {"name": "Revolc", "level": 60}
      ],
      [
        {"name": undefined, "level": 3},
        {"name": "Chor'gorloth", "level": 10},
        {"name": "Phandoryss", "level": 11},
        {"name": undefined, "level": 13},
        {"name": undefined, "level": 19}
      ],
      1.192347317103044e+23,
      6849,
      111,
      'hybrid',
      0.5);
    expect(recommendations).toEqual([
      {"name": "Solomon", "level": 720030000, "optimumLevel": 2165667541, "delta": 1445637541},
      {"name": "Libertas", "level": 43009999999, "optimumLevel": 169056568496, "delta": 126046568497},
      {"name": "Siyalatas", "level": 47000009999, "optimumLevel": 182566488657, "delta": 135566478658},
      {"name": "Mammon", "level": 43000000001, "optimumLevel": 169056568496, "delta": 126056568495},
      {"name": "Mimzee", "level": 43000000001, "optimumLevel": 169056568496, "delta": 126056568495},
      {"name": "Dogcog", "level": 63, "optimumLevel": 67, "delta": 4},
      {"name": "Fortuna", "level": 63, "optimumLevel": 67, "delta": 4},
      {"name": "Atman", "level": 66, "optimumLevel": 70, "delta": 4},
      {"name": "Dora", "level": 64, "optimumLevel": 68, "delta": 4},
      {"name": "Bhaal", "level": 15000000001, "optimumLevel": 91283244329, "delta": 76283244328},
      {"name": "Morgulis", "level": 2.2021e+21, "optimumLevel": 3.333052278054651e+22, "delta": 3.112842278054651e+22},
      {"name": "Chronos", "level": 58, "optimumLevel": 65, "delta": 7},
      {"name": "Bubos", "level": 62, "optimumLevel": 66, "delta": 4},
      {"name": "Fragsworth", "level": 15000000001, "optimumLevel": 91283244329, "delta": 76283244328},
      {"name": "Kumawakamaru", "level": 66, "optimumLevel": 67, "delta": 1},
      {"name": "Argaiv", "level": 47000010001, "optimumLevel": 182566488657, "delta": 135566478656},
      {"name": "Juggernaut", "level": 120000001, "optimumLevel": 586560554, "delta": 466560553}
    ]);
  }));

  it('should give affordable recommendations', inject(hsoptimizer => {
    const recommendations = hsoptimizer.computeOptimumLevels(
      [
        {"name": "Atman", "level": 6},
        {"name": "Dogcog", "level": 2},
        {"name": "Dora", "level": 5},
        {"name": "Fortuna", "level": 3},
        {"name": "Kumawakamaru", "level": 1},
        {"name": "Libertas", "level": 22},
        {"name": "Mammon", "level": 22},
        {"name": "Mimzee", "level": 22},
        {"name": "Siyalatas", "level": 24}
      ],
      [
        {"name": undefined, "level": 0},
        {"name": "Chor'gorloth", "level": 15},
        {"name": "Phandoryss", "level": 3},
        {"name": undefined, "level": 0},
        {"name": undefined, "level": 0}
      ],
      392,
      200,
      60,
      'idle',
      0.5);
    expect(recommendations).toEqual([
      {"name": "Atman", "level": 6, "optimumLevel": 7, "delta": 1},
      {"name": "Dogcog", "level": 2, "optimumLevel": 2, "delta": 0},
      {"name": "Dora", "level": 5, "optimumLevel": 6, "delta": 1},
      {"name": "Fortuna", "level": 3, "optimumLevel": 4, "delta": 1},
      {"name": "Kumawakamaru", "level": 1, "optimumLevel": 2, "delta": 1},
      {"name": "Libertas", "level": 22, "optimumLevel": 28, "delta": 6},
      {"name": "Mammon", "level": 22, "optimumLevel": 28, "delta": 6},
      {"name": "Mimzee", "level": 22, "optimumLevel": 28, "delta": 6},
      {"name": "Siyalatas", "level": 24, "optimumLevel": 30, "delta": 6}
    ]);
  }));
});
