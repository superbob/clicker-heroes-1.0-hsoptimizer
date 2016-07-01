'use strict';

export default class Mechanics {
  constructor (maths) {
    'ngInject';

    this.ancients = {
      "Solomon":      {id: "3",  cost: maths.polynomial1_5},
      "Libertas":     {id: "4",  cost: maths.linear},
      "Siyalatas":    {id: "5",  cost: maths.linear},
      // Khrysos "6", quadratic
      // Thusia "7", quadratic
      "Mammon":       {id: "8",  cost: maths.linear},
      "Mimzee":       {id: "9",  cost: maths.linear},
      // Pluto "10", linear
      "Dogcog":       {id: "11", cost: maths.exponential},
      "Fortuna":      {id: "12", cost: maths.exponential},
      "Atman":        {id: "13", cost: maths.exponential},
      "Dora":         {id: "14", cost: maths.exponential},
      "Bhaal":        {id: "15", cost: maths.linear},
      "Morgulis":     {id: "16", cost: maths.constant},
      "Chronos":      {id: "17", cost: maths.exponential},
      "Bubos":        {id: "18", cost: maths.exponential},
      "Fragsworth":   {id: "19", cost: maths.linear},
      "Vaagur":       {id: "20", cost: maths.exponential},
      "Kumawakamaru": {id: "21", cost: maths.exponential},
      "Chawedo":      {id: "22", cost: maths.exponential},
      "Hecatoncheir": {id: "23", cost: maths.exponential},
      "Berserker":    {id: "24", cost: maths.exponential},
      "Sniperino":    {id: "25", cost: maths.exponential},
      "Kleptos":      {id: "26", cost: maths.exponential},
      "Energon":      {id: "27", cost: maths.exponential},
      "Argaiv":       {id: "28", cost: maths.linear},
      "Juggernaut":   {id: "29", cost: maths.polynomial1_5},
      // Iris "30", quadratic
      "Revolc":       {id: "31", cost: maths.exponential}
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
    return this.getAncientCostSum(name)(newLevel - 1) - this.getAncientCostSum(name)(currentLevel - 1);
  }
}
