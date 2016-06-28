'use strict';

export default class Mechanics {
  constructor (maths) {
    'ngInject';

    this.ancients = {
      "Solomon":      {id: "3",  cost: maths.getFunctions().polynomial1_5},
      "Libertas":     {id: "4",  cost: maths.getFunctions().linear},
      "Siyalatas":    {id: "5",  cost: maths.getFunctions().linear},
      // Khrysos "6", quadratic
      // Thusia "7", quadratic
      "Mammon":       {id: "8",  cost: maths.getFunctions().linear},
      "Mimzee":       {id: "9",  cost: maths.getFunctions().linear},
      // Pluto "10", linear
      "Dogcog":       {id: "11", cost: maths.getFunctions().exponential},
      "Fortuna":      {id: "12", cost: maths.getFunctions().exponential},
      "Atman":        {id: "13", cost: maths.getFunctions().exponential},
      "Dora":         {id: "14", cost: maths.getFunctions().exponential},
      "Bhaal":        {id: "15", cost: maths.getFunctions().linear},
      "Morgulis":     {id: "16", cost: maths.getFunctions().constant},
      "Chronos":      {id: "17", cost: maths.getFunctions().exponential},
      "Bubos":        {id: "18", cost: maths.getFunctions().exponential},
      "Fragsworth":   {id: "19", cost: maths.getFunctions().linear},
      "Vaagur":       {id: "20", cost: maths.getFunctions().exponential},
      "Kumawakamaru": {id: "21", cost: maths.getFunctions().exponential},
      "Chawedo":      {id: "22", cost: maths.getFunctions().exponential},
      "Hecatoncheir": {id: "23", cost: maths.getFunctions().exponential},
      "Berserker":    {id: "24", cost: maths.getFunctions().exponential},
      "Sniperino":    {id: "25", cost: maths.getFunctions().exponential},
      "Kleptos":      {id: "26", cost: maths.getFunctions().exponential},
      "Energon":      {id: "27", cost: maths.getFunctions().exponential},
      "Argaiv":       {id: "28", cost: maths.getFunctions().linear},
      "Juggernaut":   {id: "29", cost: maths.getFunctions().polynomial1_5},
      // Iris "30", quadratic
      "Revolc":       {id: "31", cost: maths.getFunctions().exponential}
    };

    this.outsiders = {
      "Chor'gorloth": {id: "2"},
      "Phandoryss":   {id: "3"}
    };

  }

  getAncientCostSum(name) {
    return this.ancients[name].cost.sum || this.ancients[name].cost.sumApprox;
  }

  getAncientNameById(id) {
    for (let ancient in this.ancients) {
      if (this.ancients[ancient].id === id) {
        return ancient;
      }
    }
  }

  getOutsiderNameById(id) {
    for (let outsider in this.outsiders) {
      if (this.outsiders[outsider].id === id) {
        return outsider;
      }
    }
  }

  getAncientCost(name) {
    return this.ancients[name].cost.unit;
  }

  // Check edges (+/-1 on edges)
  getAncientUpgradeCost(name, currentLevel, newLevel) {
    return this.getAncientCostSum(name)(newLevel) - this.getAncientCostSum(name)(currentLevel);
  }
}
