'use strict';

// TODO remove $scope when possible
export class MainController {
  constructor ($scope, $log, saveDecoder, formulas, saveDataAnalyzer, hsoptimizer, mechanics) {
    'ngInject';

    this.mechanics = mechanics;

    const resetForm = () => {
      $scope.saveData = null;
      $scope.hsInStock = 0;
      $scope.ascendZone = 0;
      $scope.ancients = [];
      $scope.playStyle = "idle";
      $scope.hsFromAscend = 0;
      $scope.includeSoulsFromAscend = false;
      $scope.asTotal = 0;
      $scope.error = undefined;

      angular.element('#saveData').parent().removeClass('has-error');
      $scope.useScientificNotation = false;
      $scope.hybridRatio = 0.5;
      $scope.slider.value = 0.5;
    };

    $scope.slider = {
      value: 0.5,
      options: {
        stepsArray: [
          {value: 0.1},
          {value: 0.2},
          {value: 0.3},
          {value: 0.4},
          {value: 0.5},
          {value: 0.6},
          {value: 0.7},
          {value: 0.8},
          {value: 0.9},
          {value: 1},
          {value: 1.5},
          {value: 2},
          {value: 2.5},
          {value: 3},
          {value: 4},
          {value: 5},
          {value: 6},
          {value: 7},
          {value: 8},
          {value: 9},
          {value: 10}
        ],
        onChange: (id, value) => {
          $scope.hybridRatio = value
        }
      }
    };

    resetForm();

    $scope.$watch('encodedSaveData', encodedData => {
      resetForm();

      if (encodedData) {
        try {
          const saveData = saveDecoder.decryptSave(encodedData);
          if (!saveDataAnalyzer.hasTranscended(saveData)) {
            $scope.error = "Sorry, you need to have transcended at least once to use this calculator";
            angular.element('#saveData').parent().addClass('has-error');
          } else if (!saveDataAnalyzer.detectPlayStyle(saveData)) {
            $scope.error = "Sorry, you need to have at least Siyalatas or Fragsworth to use this calculator";
            angular.element('#saveData').parent().addClass('has-error');
          } else {
            $scope.saveData = saveData;
          }
        } catch (e) {
          $log.debug(e);
          $scope.error = "Save data is invalid";
          angular.element('#saveData').parent().addClass('has-error');
        }
      }
    });

    $scope.$watch('saveData', saveData => {
      if (saveData) {
        $scope.hsInStock = saveDataAnalyzer.getHsInStock(saveData);
        $scope.ascendZone = saveDataAnalyzer.getAscendZone(saveData);
        $scope.playStyle = saveDataAnalyzer.detectPlayStyle(saveData);
        $scope.hsFromAscend = saveDataAnalyzer.getHsUponAscend(saveData);
        $scope.useScientificNotation = saveDataAnalyzer.getNumberDisplayMode(saveData);
        $scope.asTotal = saveDataAnalyzer.getAncientSoulsTotal(saveData);
      }
    });

    // see http://stackoverflow.com/questions/21088845/can-i-debounce-or-throttle-a-watched-input-in-angularjs-using-lodash
    // TODO debounce (lodash)
    $scope.$watchGroup(
      ['saveData', 'ascendZone', 'playStyle', 'includeSoulsFromAscend', 'hybridRatio'],
      ([saveData, ascendZone, playStyle, includeSoulsFromAscend, hybridRatio]) => {
      if (saveData) {
        let hs = $scope.hsInStock;
        if (includeSoulsFromAscend) {
          hs += $scope.hsFromAscend;
        }
        $scope.ancients = hsoptimizer.computeOptimumLevels(
          saveDataAnalyzer.getAncients(saveData),
          saveDataAnalyzer.getOutsiders(saveData),
          hs,
          ascendZone,
          saveDataAnalyzer.getAncientSoulsTotal(saveData),
          playStyle,
          hybridRatio);
        const chorgorlothLevel = saveDataAnalyzer.getOutsiders($scope.saveData)
          .filter(outsider => outsider.name === 'Chor\'gorloth')[0].level;

        $scope.totalCost = this.totalCost(mechanics, $scope.ancients, chorgorlothLevel);

        $scope.outsiders = hsoptimizer.computeOptimumAncientSouls(
          saveDataAnalyzer.getOutsiders(saveData),
          saveDataAnalyzer.getAncientSoulsTotal(saveData),
          playStyle
        );
      }
    });

    $scope.getAncientUpgradeCost = (name, currentLevel, newLevel) => {
      const chorgorlothLevel = saveDataAnalyzer.getOutsiders($scope.saveData)
        .filter(outsider => outsider.name === 'Chor\'gorloth')[0].level;
      return mechanics.getAncientUpgradeCost(name, currentLevel, newLevel, chorgorlothLevel);
    };

    $scope.getOutsiderUpgradeCost = (name, currentLevel, newLevel) => {
      return mechanics.getOutsiderUpgradeCost(name, currentLevel, newLevel);
    };

    // Must return $scope to be able to use the 'dot notation' in the view
    // http://stackoverflow.com/questions/25306582/angulars-controlleras-not-working-in-routeprovider/38197324#38197324
    return $scope;
  }

  totalCost (mechanics, ancients, chorgorlothLevel) {
    return ancients.reduce(
      (total, ancient) => total + mechanics.getAncientUpgradeCost(ancient.name, ancient.level, ancient.optimumLevel, chorgorlothLevel),
      0);
  }
}
