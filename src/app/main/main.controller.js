'use strict';

//TOTO read "numberDisplayMode" and "transcendent"

export class MainController {
  constructor ($scope, $log, saveDecoder, formulas, saveDataAnalyzer, hsoptimizer) {
    'ngInject';

    const resetForm = () => {
      $scope.saveData = null;
      $scope.hsInStock = 0;
      $scope.ascendZone = 0;
      $scope.ancients = [];
      $scope.playStyle = "idle";
      $scope.hsFromAscend = 0;
      $scope.includeSoulsFromAscend = false;
      $scope.error = undefined;

      angular.element('#saveData').parent().removeClass('has-error');
    };

    resetForm();

    $scope.$watch('encodedSaveData', function(encodedData) {
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

    $scope.$watch('saveData', function(saveData) {
      if (saveData) {
        $scope.hsInStock = saveDataAnalyzer.getHsInStock(saveData);
        $scope.ascendZone = saveDataAnalyzer.getAscendZone(saveData);
        $scope.playStyle = saveDataAnalyzer.detectPlayStyle(saveData);
        $scope.hsFromAscend = saveDataAnalyzer.getHsUponAscend(saveData);
      }
    });

    // see http://stackoverflow.com/questions/21088845/can-i-debounce-or-throttle-a-watched-input-in-angularjs-using-lodash
    // TODO debounce (lodash)
    $scope.$watchGroup(['saveData', 'ascendZone', 'playStyle', 'includeSoulsFromAscend'], function([saveData, ascendZone, playStyle, includeSoulsFromAscend]) {
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
          playStyle);
      }
    });
  }
}
