'use strict';

export default class Formulas {
  constructor () {
    'ngInject';
  }

  computeMorgulisLevel(baseLevel) {
    return Math.pow(baseLevel, 2);
  }

  computeBubosLevel(baseLevel, oldBubosLevel) {
    return 2.8 * Math.log(baseLevel) - 1.4 * Math.log(1 + Math.exp(-0.02 * oldBubosLevel)) - 5.94;
  }

  computeChronosLevel(baseLevel, oldChronosLevel) {
    return 2.75 * Math.log(baseLevel) - 1.375 * Math.log(2 - Math.exp(-0.034 * oldChronosLevel)) - 5.1;
  }

  computeGoldLevel(baseLevel) {
    return 0.926 * baseLevel;
  }

  computeDoraLevel(baseLevel, oldDoraLevel) {
    return 2.877 * Math.log(baseLevel) - 1.4365 * Math.log(100/99 - Math.exp(-0.002 * oldDoraLevel)) - 9.63;
  }

  computeDogcogLevel(baseLevel, oldDogcogLevel) {
    return 2.844 * Math.log(baseLevel) - 1.422 * Math.log(1/99 + Math.exp(-0.01 * oldDogcogLevel)) - 7.232;
  }

  computeFortunaLevel(baseLevel, oldFortunaLevel) {
    return 2.875 * Math.log(baseLevel) - 1.4375 * Math.log(10/9 - Math.exp(-0.0025 * oldFortunaLevel)) - 9.3;
  }

  computeSolomonLevel(baseLevel, alpha) {
    return Math.pow(baseLevel, 0.8) / Math.pow(alpha, 0.4);
  }

  computeAtmanLevel(baseLevel, oldAtmanLevel, alpha) {
    return 2.832 * Math.log(baseLevel) - 1.416 * Math.log(alpha) - 1.416 * Math.log(4/3 - Math.exp(-0.013 * oldAtmanLevel)) - 6.613;
  }

  computeKumawakamaruLevel(baseLevel, oldKumawakamaruLevel, alpha) {
    return 2.88 * Math.log(baseLevel) - 1.44 * Math.log(alpha) - 1.44 * Math.log(0.25 + Math.exp(-0.001 * oldKumawakamaruLevel)) - 10.42;
  }

  // Formulas taken from https://kepow.org/clickerheroes
  computeHybridBhaalLevel(baseLevel) {
    return 0.5 * baseLevel;
  }

  computeHybridJuggernautLevel(baseLevel) {
    return Math.pow(0.5 * baseLevel, 0.8);
  }

  computeActiveJuggernautLevel(baseLevel) {
    return Math.pow(baseLevel, 0.8);
  }

  // Alpha formula from: http://alexbonjour.github.io/rules-of-thumb/
  computeAlpha(tp, ascensionZone) {
    return 1.4067 * Math.log(1 + tp) / Math.log((Math.ceil(ascensionZone / 500) * 0.005) + 1.14);
  }

  // TP formula from: https://www.reddit.com/r/ClickerHeroes/wiki/faqtranscendence
  computeTranscendencePower(ancientSoulsTotal, phandoryssLevel) {
    const baseTp = 50 - 49 * Math.exp(-ancientSoulsTotal / 10000);
    const phandoryssBonus = 0.05 * phandoryssLevel;
    return (baseTp + phandoryssBonus) / 100;
  }
}
