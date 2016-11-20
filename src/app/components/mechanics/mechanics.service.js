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
      "Revolc":       {id: "31", cost: maths.exponential},
      "Nogardnit":    {id: "32", cost: maths.polynomial1_5}
    };

    this.outsiders = {
      "Xyliqil":      {id: "1", cost: maths.constant},
      "Chor'gorloth": {id: "2", cost: maths.linear10},
      "Phandoryss":   {id: "3", cost: maths.linear},
      "Borb":         {id: "4", cost: maths.constant},
      "Ponyboy":      {id: "5", cost: maths.constant}
    };

    this.sum = maths.sum;

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

  getAncientCost(name) {
    return this.ancients[name].cost.unit;
  }

  getAncientCostMultiplier(chorgorlothLevel) {
    return Math.pow(0.95, chorgorlothLevel);
  }

  // Check edges (+/-1 on edges)
  getAncientUpgradeCost(name, currentLevel, newLevel, chorgorlothLevel = 0) {
    return Math.ceil(
      (this.getAncientCostSum(name)(newLevel)
        - this.getAncientCostSum(name)(currentLevel))
      * this.getAncientCostMultiplier(chorgorlothLevel));
  }

  getOutsiderNameById(id) {
    for (let outsider in this.outsiders) {
      if (this.outsiders[outsider].id === id) {
        return outsider;
      }
    }
  }

  getOutsiderUpgradeCost(name, currentLevel, newLevel) {
    const sum = this.sum(this.outsiders[name].cost.unit);
    return sum(newLevel) - sum(currentLevel);
  }
}
