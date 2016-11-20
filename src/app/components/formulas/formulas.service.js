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
    return 2.844 * Math.log(baseLevel) - 1.422 * Math.log(alpha) - 1.422 * Math.log(0.25 + Math.exp(-0.01 * oldKumawakamaruLevel)) - 7.014;
  }
  
  computeNogardnitLevel(baseLevel) {
	return Math.pow(0.926 * baseLevel, 0.8);  
  }

  // Formulas taken from https://kepow.org/clickerheroes
  // and https://www.reddit.com/r/ClickerHeroes/comments/3y57jd/updated_rules_of_thumb/
  // changed ratio from 0.1 to 0.5 in respect to original Rules of Thumb
  // for a more active power !
  computeHybridBhaalLevel(baseLevel, hybridRatio) {
    return hybridRatio * baseLevel;
  }

  computeHybridJuggernautLevel(baseLevel, hybridRatio) {
    return Math.pow(hybridRatio * baseLevel, 0.8);
  }

  computeActiveJuggernautLevel(baseLevel) {
    return Math.pow(baseLevel, 0.8);
  }

  // Alpha formula from: http://alexbonjour.github.io/rules-of-thumb/
  computeAlpha(tp, ascensionZone) {
    const hpScale = (Math.ceil(ascensionZone / 500) * 0.005) + 1.14;
    return 1.4067 * Math.log(1 + tp) / Math.log(hpScale);
  }

  // TP formula from: https://www.reddit.com/r/ClickerHeroes/wiki/faqtranscendence
  computeTranscendencePower(ancientSoulsTotal, phandoryssLevel) {
    const baseTp = 50 - 49 * Math.exp(-ancientSoulsTotal / 10000);
    const phandoryssBonus = 0.05 * phandoryssLevel;
    return (baseTp + phandoryssBonus) / 100;
  }

  // Outsider formulas from: https://www.reddit.com/r/ClickerHeroes/comments/4rrbpi/math_outsiders_rule_of_thumb/
  computeActiveXyliqil() {
    return 0;
  }

  computeHybridXyliqil(ancientSoulsTotal) {
    return Math.min(Math.floor(ancientSoulsTotal / 20), 5);
  }

  computeIdleXyliqil(ancientSoulsTotal) {
    return Math.min(Math.floor(ancientSoulsTotal / 5), 10);
  }

  /*
  Phandoryss-Level	1	2	3	4	5	6	7	8	9	10
AS-Minimum	3	10	21	36	54	60	67	75	84	94
Phandoryss-Level	11	12	13	14	15	16	17	18	19
AS-Minimum	104	117	129	143	158	174	190	208	228
  */
  computePhandoryss(remainingAncientSouls) {
    const table = [
      {level: 1, as: 3},
      {level: 2, as: 10},
      {level: 3, as: 21},
      {level: 4, as: 36},
      {level: 5, as: 54},
      {level: 6, as: 60},
      {level: 7, as: 67},
      {level: 8, as: 75},
      {level: 9, as: 84},
      {level: 10, as: 94},
      {level: 11, as: 104},
      {level: 12, as: 117},
      {level: 14, as: 129},
      {level: 13, as: 143},
      {level: 15, as: 158},
      {level: 16, as: 174},
      {level: 17, as: 190},
      {level: 18, as: 208},
      {level: 19, as: 228}
    ];

    return table.filter(e => e.as <= remainingAncientSouls).pop().level;
  }

  computeBorbA(remainingAncientSouls) {
    return Math.ceil(remainingAncientSouls / 10);
  }

  computePonyboy(remainingAncientSouls) {
    return Math.min(remainingAncientSouls, 19);
  }

  computeChorgorloth(remainingAncientSouls) {
    return Math.min(remainingAncientSouls, 10);
  }

  computeBorbD(currentLevel, remainingAncientSouls) {
    return Math.min(Math.max(10 - currentLevel, 0), remainingAncientSouls);
  }

  computeBorbE(remainingAncientSouls) {
    return Math.floor(remainingAncientSouls / 2);
  }

}
