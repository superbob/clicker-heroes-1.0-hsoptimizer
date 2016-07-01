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
      $scope.includeSoulsFromAscend = false;
      $scope.saveDataError = false;
    };

    resetForm();

    $scope.$watch('encodedSaveData', function(encodedData) {
      /* jshint -W117 */
      angular.element('#saveData').parent().removeClass('has-error');
      /* jshint +W117 */
      resetForm();
      // TODO add validation of savedata
      if (encodedData) {
        try {
          $scope.saveData = saveDecoder.decryptSave(encodedData);
        } catch (e) {
          $log.debug(e);
          $scope.saveDataError = true;
          /* jshint -W117 */
          angular.element('#saveData').parent().addClass('has-error');
          /* jshint +W117 */
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
        $log.debug("Computing...");
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
        $log.debug("Computing done");
      }
    });
  }
}
