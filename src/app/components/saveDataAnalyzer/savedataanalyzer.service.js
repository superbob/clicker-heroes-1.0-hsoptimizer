'use strict';

const playStyleReducer =
  (style1, style2) => (style1 && style2) ? "hybrid" : (style1 || style2)

export default class SaveDataAnalyzer {
  constructor (mechanics) {
    'ngInject';
    this.mechanics = mechanics;
  }

  getAncients(saveData) {
    return Object.keys(saveData.ancients.ancients).map(id => ({
      name: this.mechanics.getAncientNameById(id),
      level: Math.floor(saveData.ancients.ancients[id].level)}))
  }

  getOutsiders(saveData) {
    return Object.keys(saveData.outsiders.outsiders).map(id => ({
      name: this.mechanics.getOutsiderNameById(id),
      level: Math.round(saveData.outsiders.outsiders[id].level)}));
  }

  getHsInStock(saveData) {
    return Math.round(saveData.heroSouls);
  }

  getHsUponAscend(saveData) {
    return Math.round(saveData.primalSouls);
  }

  getAncientSoulsTotal(saveData) {
    return Math.round(saveData.ancientSoulsTotal);
  }

  getAscendZone(saveData) {
    return Math.round(saveData.highestFinishedZonePersist);
  }

  detectPlayStyle(saveData) {
    return this.getAncients(saveData)
        .filter(ancient => ancient.name === "Siyalatas" || ancient.name === "Fragsworth")
        .map(ancient => ancient.name === "Siyalatas" ? "idle" : "active")
        .reduce(playStyleReducer, undefined);
  }

  hasTranscended(saveData) {
    return !!saveData.transcendent;
  }

}
