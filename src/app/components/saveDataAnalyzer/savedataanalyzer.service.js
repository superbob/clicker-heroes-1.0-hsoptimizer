'use strict';

/**
 * @ngdoc service
 * @name chRotTranscendApp.savedataanalyzer
 * @description
 * # savedataanalyzer
 * Service in the chRotTranscendApp.
 */
angular.module('chRotTranscendApp')
  .service('saveDataAnalyzer', ['mechanics', function (mechanics) {
    var getAncients = saveData => Object.keys(saveData.ancients.ancients).map(id => ({
      name: mechanics.getAncientNameById(id),
      level: Math.floor(saveData.ancients.ancients[id].level)}));

    return {
      getAncients: getAncients,
      getOutsiders:
        saveData => Object.keys(saveData.outsiders.outsiders).map(id => ({
          name: mechanics.getOutsiderNameById(id),
          level: Math.round(saveData.outsiders.outsiders[id].level)})),
      getHsInStock:
        saveData => Math.round(saveData.heroSouls),
      getAncientSoulsTotal:
        saveData => Math.round(saveData.ancientSoulsTotal),
      getAscendZone:
        saveData => Math.round(saveData.highestFinishedZonePersist),
      detectPlayStyle:
        saveData => getAncients(saveData)
            .filter(ancient => ancient.name === "Siyalatas" || ancient.name === "Fragsworth")
            .map(ancient => ancient.name === "Siyalatas" ? "idle" : "active")
            .reduce((finalStyle, unitPlayStyle) => finalStyle === undefined ? unitPlayStyle : "hybrid", undefined)
    };
  }]);
