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
      'hybrid');
    expect(recommendations).toEqual([
      {"name": "Solomon", "level": 548, "optimumLevel": 577, "delta": 29},
      {"name": "Libertas", "level": 881, "optimumLevel": 936, "delta": 55},
      {"name": "Siyalatas", "level": 950, "optimumLevel": 1011, "delta": 61},
      {"name": "Mammon", "level": 881, "optimumLevel": 936, "delta": 55},
      {"name": "Mimzee", "level": 881, "optimumLevel": 936, "delta": 55},
      {"name": "Dogcog", "level": 12, "optimumLevel": 13, "delta": 1},
      {"name": "Fortuna", "level": 13, "optimumLevel": 13, "delta": 0},
      {"name": "Atman", "level": 16, "optimumLevel": 17, "delta": 1},
      {"name": "Dora", "level": 14, "optimumLevel": 15, "delta": 1},
      {"name": "Bhaal", "level": 150, "optimumLevel": 506, "delta": 356},
      {"name": "Morgulis", "level": 902486, "optimumLevel": 1022121, "delta": 119635},
      {"name": "Chronos", "level": 13, "optimumLevel": 14, "delta": 1},
      {"name": "Bubos", "level": 12, "optimumLevel": 13, "delta": 1},
      {"name": "Fragsworth", "level": 150, "optimumLevel": 506, "delta": 356},
      {"name": "Kumawakamaru", "level": 11, "optimumLevel": 12, "delta": 1},
      {"name": "Argaiv", "level": 950, "optimumLevel": 1011, "delta": 61},
      {"name": "Juggernaut", "level": 50, "optimumLevel": 146, "delta": 96}
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
      'hybrid');
    expect(recommendations).toEqual([
      {"name": "Solomon", "level": 720030000, "optimumLevel": 2173291146, "delta": 1453261146},
      {"name": "Libertas", "level": 43009999999, "optimumLevel": 169800788962, "delta": 126790788963},
      {"name": "Siyalatas", "level": 47000009999, "optimumLevel": 183370182464, "delta": 136370172465},
      {"name": "Mammon", "level": 43000000001, "optimumLevel": 169800788962, "delta": 126800788961},
      {"name": "Mimzee", "level": 43000000001, "optimumLevel": 169800788962, "delta": 126800788961},
      {"name": "Dogcog", "level": 63, "optimumLevel": 67, "delta": 4},
      {"name": "Fortuna", "level": 63, "optimumLevel": 67, "delta": 4},
      {"name": "Atman", "level": 66, "optimumLevel": 70, "delta": 4},
      {"name": "Dora", "level": 64, "optimumLevel": 68, "delta": 4},
      {"name": "Bhaal", "level": 15000000001, "optimumLevel": 91685091232, "delta": 76685091231},
      {"name": "Morgulis", "level": 2.2021e+21, "optimumLevel": 3.362462381688065e+22, "delta": 3.142252381688065e+22},
      {"name": "Chronos", "level": 58, "optimumLevel": 65, "delta": 7},
      {"name": "Bubos", "level": 62, "optimumLevel": 66, "delta": 4},
      {"name": "Fragsworth", "level": 15000000001, "optimumLevel": 91685091232, "delta": 76685091231},
      {"name": "Kumawakamaru", "level": 66, "optimumLevel": 67, "delta": 1},
      {"name": "Argaiv", "level": 47000010001, "optimumLevel": 183370182464, "delta": 136370172463},
      {"name": "Juggernaut", "level": 120000001, "optimumLevel": 588625371, "delta": 468625370}
    ]);
  }));
});
