'use strict';

/**
 * @ngdoc function
 * @name chRotTranscendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the chRotTranscendApp
 */
angular.module('chRotTranscendApp')
  .controller('MainCtrl', ['$scope', 'saveDecoder', 'formulas', 'saveDataAnalyzer', 'hsoptimizer', function ($scope, saveDecoder, formulas, saveDataAnalyzer, hsoptimizer) {
    $scope.hsInStock = 0;
    $scope.ascendZone = 0;

    $scope.ancients = [];

    $scope.playStyle = "idle";

    $scope.$watch('encodedSaveData', function(encodedData) {
      /* jshint -W117 */
      $('#saveData').parent().removeClass('has-error');
      /* jshint +W117 */
      // TODO add validation of savedata
      if (encodedData) {
        try {
          $scope.saveData = saveDecoder(encodedData);
          console.log($scope.saveData.ancients.ancients);
        } catch (e) {
          /* jshint -W117 */
          $('#saveData').parent().addClass('has-error');
          /* jshint +W117 */
        }
      }
    });

    $scope.$watch('saveData', function(saveData) {
      if (saveData) {
        $scope.hsInStock = saveDataAnalyzer.getHsInStock(saveData);
        $scope.ascendZone = saveDataAnalyzer.getAscendZone(saveData);
        $scope.playStyle = saveDataAnalyzer.detectPlayStyle(saveData);
      }
    });

    // see http://stackoverflow.com/questions/21088845/can-i-debounce-or-throttle-a-watched-input-in-angularjs-using-lodash
    // TODO debounce (lodash)
    $scope.$watchGroup(['saveData', 'ascendZone', 'playStyle'], function([saveData, ascendZone, playStyle]) {
      if (saveData) {
        console.log("Computing...");
        $scope.ancients = hsoptimizer.computeOptimumLevels(
          saveDataAnalyzer.getAncients(saveData),
          saveDataAnalyzer.getOutsiders(saveData),
          $scope.hsInStock,
          ascendZone,
          saveDataAnalyzer.getAncientSoulsTotal(saveData),
          playStyle);
      }
    });
  }]);
