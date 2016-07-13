'use strict';

const returnBaseLevel = baseLevel => baseLevel;

const idleAndHybrid = function idleAndHybrid(formula) {
  return playStyle => {
    if (playStyle === 'idle' || playStyle === 'hybrid') {
      return formula;
    }
  };
};

const activeOrHybrid = function activeOrHybrid(activeFormula, hybridFormula) {
  return playStyle => {
    if (playStyle === 'active') {
      return activeFormula;
    } else if (playStyle === 'hybrid') {
      return hybridFormula;
    }
  };
};

const allStyles = function allStyles(formula) {
  return () => formula;
};

export default class HSOptimizer {
  constructor (formulas, mechanics) {
    'ngInject';

    this.formulas = formulas;
    this.mechanics = mechanics;

    // Khrysos, Thusia, Pluto and Iris don't exist anymore after transcending.
    // They should be reintroduced in a pre-transcendent mode.
    // No recommendation (yet) for Vaagur, Chawedo, Hecatoncheir, Berserker, Sniperino, Kleptos, Energon and Revolc.
    this.ancientsOptimizedLevel = {
      'Solomon':      allStyles((baseLevel, old, alpha) => formulas.computeSolomonLevel(baseLevel, alpha)),
      'Libertas':     idleAndHybrid(formulas.computeGoldLevel),
      'Siyalatas':    idleAndHybrid(returnBaseLevel),
      'Mammon':       allStyles(formulas.computeGoldLevel),
      'Mimzee':       allStyles(formulas.computeGoldLevel),
      'Dogcog':       allStyles(formulas.computeDogcogLevel),
      'Fortuna':      allStyles(formulas.computeFortunaLevel),
      'Atman':        allStyles(formulas.computeAtmanLevel),
      'Dora':         allStyles(formulas.computeDoraLevel),
      'Bhaal':        activeOrHybrid(returnBaseLevel, (baseLevel, old, alpha, hybridRatio) => formulas.computeHybridBhaalLevel(baseLevel, hybridRatio)),
      'Morgulis':     allStyles(formulas.computeMorgulisLevel),
      'Chronos':      allStyles(formulas.computeChronosLevel),
      'Bubos':        allStyles(formulas.computeBubosLevel),
      'Fragsworth':   activeOrHybrid(returnBaseLevel, (baseLevel, old, alpha, hybridRatio) => formulas.computeHybridBhaalLevel(baseLevel, hybridRatio)),
      'Kumawakamaru': allStyles(formulas.computeKumawakamaruLevel),
      'Argaiv':       allStyles(returnBaseLevel),
      'Juggernaut':   activeOrHybrid(formulas.computeActiveJuggernautLevel, (baseLevel, old, alpha, hybridRatio) => formulas.computeHybridJuggernautLevel(baseLevel, hybridRatio))
    };
  }

  computeOptimumLevels(ancientList, outsiders, hsInStock, ascendZone, ancientSoulsTotal, playStyle, hybridRatio) {
    const phandoryssLevel = outsiders.filter(outsider => outsider.name === 'Phandoryss')[0].level;
    const chorgorlothLevel = outsiders.filter(outsider => outsider.name === 'Chor\'gorloth')[0].level;

    let baseLevel = 1;

    // TODO add soul bank when Morgulis has not been summon
    // const hasMorgulis = ancientList.some(ancient => ancient.name === 'Morgulis');

    const tp = this.formulas.computeTranscendencePower(ancientSoulsTotal, phandoryssLevel);
    const alpha = this.formulas.computeAlpha(tp, ascendZone);

    let remainingHs = hsInStock;
    let baseLevelIncrease = 0;

    const computeNewLevel = (ancientName, playStyle, newBaseLevel, oldLevel, alpha, hybridRatio) => {
      const optimizationFormula = this.ancientsOptimizedLevel[ancientName];
      if (optimizationFormula) {
        const playStyleForumla = optimizationFormula(playStyle);
        if (playStyleForumla) {
          return playStyleForumla(newBaseLevel, oldLevel, alpha, hybridRatio);
        }
      }
    };

    var normalize = function normalize(oldLevel, newLevel) {
      if (oldLevel === 0) { return 0 ; }
      if (newLevel === undefined) { return undefined; }
      return Math.max(oldLevel, Math.round(newLevel));
    };

    const computeNewLevels = function computeNewLevels(currentAncients, newBaseLevel, alpha, hybridRatio) {
      return currentAncients.map(ancient => {
        return {
          name: ancient.name,
          currentLevel: ancient.level,
          optimizedLevel: normalize(ancient.level, computeNewLevel(ancient.name, playStyle, newBaseLevel, ancient.level, alpha, hybridRatio))
        };
      }).filter(ancient => ancient.optimizedLevel !== undefined);
    };

    const getCost = (ancientLevels, chorgorlothLevel) => {
      return ancientLevels.reduce(
        (totalCost, ancient) =>
          totalCost + this.mechanics.getAncientUpgradeCost(ancient.name, ancient.currentLevel, ancient.optimizedLevel, chorgorlothLevel),
        0);
    };

    // Okay this is a little bit magic... and approximate also, but it's fast !
    // TODO maybe switch to a more simple dichotomy
    let baseOffset = 0;
    while (remainingHs >= 0 || baseLevelIncrease > 0) {
      remainingHs = hsInStock;
      baseLevelIncrease = -1;
      while (remainingHs >= 0) {
        baseLevelIncrease++;
        let levelToCheck = baseLevel + baseOffset + Math.pow(2, baseLevelIncrease);
        const newLevels = computeNewLevels(ancientList, levelToCheck, alpha, hybridRatio);
        remainingHs = hsInStock - getCost(newLevels, chorgorlothLevel);
      }
      if (baseLevelIncrease > 0) {
        baseOffset += Math.pow(2, baseLevelIncrease - 1);
      }
    }
    const newBaseLevel = baseLevel + baseOffset;

    let optimumAncients = ancientList
      .map(ancient => {
        const optimumLevel = normalize(ancient.level, computeNewLevel(ancient.name, playStyle, newBaseLevel, ancient.level, alpha, hybridRatio));
        return {
          name: ancient.name,
          level: ancient.level,
          optimumLevel: optimumLevel,
          delta: optimumLevel - ancient.level};
        })
      .filter(ancient => ancient.optimumLevel !== undefined);
    return optimumAncients;
  }

  computeOptimumAncientSouls(outsiderList, ancientSoulsTotal, playStyle) {
    const currentXyliqilLevel = outsiderList.filter(outsider => outsider.name === 'Xyliqil')[0].level;
    const currentChorgorlothLevel = outsiderList.filter(outsider => outsider.name === 'Chor\'gorloth')[0].level;
    const currentPhandoryssLevel = outsiderList.filter(outsider => outsider.name === 'Phandoryss')[0].level;
    const currentBorbLevel = outsiderList.filter(outsider => outsider.name === 'Borb')[0].level;
    const currentPonyboyLevel = outsiderList.filter(outsider => outsider.name === 'Ponyboy')[0].level;

    let remainingAncientSouls = ancientSoulsTotal;
    let xyliqilTargetLevel;
    if (playStyle === 'idle') {
      xyliqilTargetLevel = this.formulas.computeIdleXyliqil(ancientSoulsTotal);
    } else if (playStyle === 'active') {
      xyliqilTargetLevel = this.formulas.computeActiveXyliqil(ancientSoulsTotal);
    } else if (playStyle === 'hybrid') {
      xyliqilTargetLevel = this.formulas.computeHybridXyliqil(ancientSoulsTotal);
    }
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Xyliqil', 0, xyliqilTargetLevel);
    const phandoryssTargetLevel = this.formulas.computePhandoryss(remainingAncientSouls);
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Phandoryss', 0, phandoryssTargetLevel);
    const borbTargetLevelA = this.formulas.computeBorbA(remainingAncientSouls);
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Borb', 0, borbTargetLevelA);
    const ponyTargetLevelB = this.formulas.computePonyboy(remainingAncientSouls);
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Ponyboy', 0, ponyTargetLevelB);
    const chorTargetLevelC = this.formulas.computeChorgorloth(remainingAncientSouls);
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Chor\'gorloth', 0, chorTargetLevelC);
    const borbTargetLevelD = this.formulas.computeBorbD(borbTargetLevelA, remainingAncientSouls);
    if (borbTargetLevelA < borbTargetLevelD) {
      remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Borb', borbTargetLevelA, borbTargetLevelD);
    }
    const borbTargetLevelE = this.formulas.computeBorbE(remainingAncientSouls);
    const intermediateBorbLevel = Math.max(borbTargetLevelA, borbTargetLevelD);
    remainingAncientSouls -= this.mechanics.getOutsiderUpgradeCost('Borb', intermediateBorbLevel, intermediateBorbLevel + borbTargetLevelE);
    const ponyTargetLevelE = remainingAncientSouls;
    return [
      {name: 'Xyliqil', level: currentXyliqilLevel, optimumLevel: xyliqilTargetLevel},
      {name: 'Chor\'gorloth', level: currentChorgorlothLevel, optimumLevel: chorTargetLevelC},
      {name: 'Phandoryss', level: currentPhandoryssLevel, optimumLevel: phandoryssTargetLevel},
      {name: 'Borb', level: currentBorbLevel, optimumLevel: intermediateBorbLevel + borbTargetLevelE},
      {name: 'Ponyboy', level: currentPonyboyLevel, optimumLevel: ponyTargetLevelB + ponyTargetLevelE}
    ];
  }
}
