'use strict';

/**
 * @ngdoc service
 * @name chRotTranscendApp.hsoptimizer
 * @description
 * # hsoptimizer
 * Service in the chRotTranscendApp.
 */
angular.module('chRotTranscendApp')
  .service('hsoptimizer', ['formulas', 'mechanics', function (formulas, mechanics) {
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

    // Khrysos, Thusia, Pluto and Iris don't exist anymore after transcending.
    // They should be reintroduced in a pre-transcendent mode.
    // No recommendation (yet) for Vaagur, Chawedo, Hecatoncheir, Berserker, Sniperino, Kleptos, Energon and Revolc.
    const ancientsOptimizedLevel = {
      'Solomon':      allStyles((baseLevel, old, alpha) => formulas.computeSolomonLevel(baseLevel, alpha)),
      'Libertas':     idleAndHybrid(formulas.computeGoldLevel),
      'Siyalatas':    idleAndHybrid(returnBaseLevel),
      'Mammon':       allStyles(formulas.computeGoldLevel),
      'Mimzee':       allStyles(formulas.computeGoldLevel),
      'Dogcog':       allStyles(formulas.computeDogcogLevel),
      'Fortuna':      allStyles(formulas.computeFortunaLevel),
      'Atman':        allStyles(formulas.computeAtmanLevel),
      'Dora':         allStyles(formulas.computeDoraLevel),
      'Bhaal':        activeOrHybrid(returnBaseLevel, formulas.computeHybridBhaalLevel),
      'Morgulis':     allStyles(formulas.computeMorgulisLevel),
      'Chronos':      allStyles(formulas.computeChronosLevel),
      'Bubos':        allStyles(formulas.computeBubosLevel),
      'Fragsworth':   activeOrHybrid(returnBaseLevel, formulas.computeHybridBhaalLevel),
      'Kumawakamaru': allStyles(formulas.computeKumawakamaruLevel),
      'Argaiv':       allStyles(returnBaseLevel),
      'Juggernaut':   activeOrHybrid(formulas.computeActiveJuggernautLevel, formulas.computeHybridJuggernautLevel),
    };

    return {
      computeOptimumLevels: (ancientList, outsiders, hsInStock, ascendZone, ancientSoulsTotal, playStyle) => {
        const phandoryssLevel = outsiders.filter(outsider => outsider.name === 'Phandoryss')[0].level;
        const chorgorlothLevel = outsiders.filter(outsider => outsider.name === 'Chor\'gorloth')[0].level;

        let baseLevel;
        if (playStyle === 'active') {
          baseLevel = ancientList.filter(ancient => ancient.name === 'Fragsworth')[0].level;
        } else {
          baseLevel = ancientList.filter(ancient => ancient.name === 'Siyalatas')[0].level;
        }

        const tp = formulas.computeTranscendencePower(ancientSoulsTotal, phandoryssLevel);
        const alpha = formulas.computeAlpha(tp, ascendZone);

        let remainingHs = hsInStock;
        let baseLevelIncrease = 0;

        const computeNewLevel = function computeNewLevel(ancientName, playStyle, newBaseLevel, oldLevel, alpha) {
          const optimizationFormula = ancientsOptimizedLevel[ancientName];
          if (optimizationFormula) {
            const playStyleForumla = optimizationFormula(playStyle);
            if (playStyleForumla) {
              return playStyleForumla(newBaseLevel, oldLevel, alpha);
            }
          }
        };

        var normalize = function normalize(oldLevel, newLevel) {
        	if (oldLevel === 0) { return 0 ; }
          if (newLevel === undefined) { return undefined; }
        	return Math.max(oldLevel, Math.round(newLevel));
        };

        const computeNewLevels = function computeNewLevels(currentAncients, newBaseLevel, alpha) {
          return currentAncients.map(ancient => {
            return {
              name: ancient.name,
              currentLevel: ancient.level,
              optimizedLevel: normalize(ancient.level, computeNewLevel(ancient.name, playStyle, newBaseLevel, ancient.level, alpha))
            };
          }).filter(ancient => ancient.optimizedLevel !== undefined);
        };

        const getCost = function getCost(ancientLevels, chorgorlothLevel) {
          const ancientCostMultiplier = Math.pow(0.95, chorgorlothLevel);

          return ancientLevels.reduce((totalCost, ancient) => {
            let ancientCost = 0;
            // const costFunction = nsum(mechanics.getAncientCost(ancient.name));
            // return costFunction(ancient.optimizedLevel) - costFunction(ancient.currentLevel);
            for (let i = ancient.currentLevel + 1; i <= ancient.optimizedLevel; i++) {
              ancientCost += mechanics.getAncientCost(ancient.name)(i);
            }
            return totalCost + ancientCost * ancientCostMultiplier;
          }, 0);
        };

        while (remainingHs >= 0) {
          baseLevelIncrease++;
          const newLevels = computeNewLevels(ancientList, baseLevel + baseLevelIncrease, alpha);
          remainingHs = hsInStock - getCost(newLevels, chorgorlothLevel);
          console.log('At level: ' + baseLevelIncrease + ', remaining hs: ' + remainingHs);
        }

        const newBaseLevel = baseLevel + baseLevelIncrease - 1;
        let optimumAncients = ancientList
          .map(ancient => {
            const optimumLevel = normalize(ancient.level, computeNewLevel(ancient.name, playStyle, newBaseLevel, ancient.level, alpha));
            return {
              name: ancient.name,
              level: ancient.level,
              optimumLevel: optimumLevel,
              delta: optimumLevel - ancient.level};
            })
          .filter(ancient => ancient.optimumLevel !== undefined);
        return optimumAncients;
      }
    };
  }]);
