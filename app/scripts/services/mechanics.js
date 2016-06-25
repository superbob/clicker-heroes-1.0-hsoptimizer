'use strict';

/**
 * @ngdoc service
 * @name chRotTranscendApp.ancients
 * @description
 * # ancients
 * Service in the chRotTranscendApp.
 */
angular.module('chRotTranscendApp')
  .service('mechanics', ['maths', function (maths) {
    // Khrysos, Thusia, Pluto and Iris don't exist anymore after transcending.
    // They should be reintroduced in a pre-transcendent mode
    const ancients = {
      "Solomon":      {id: "3",  cost: maths.polynomial1_5.unit},
      "Libertas":     {id: "4",  cost: maths.linear.unit},
      "Siyalatas":    {id: "5",  cost: maths.linear.unit},
      // Khrysos "6", quadratic
      // Thusia "7", quadratic
      "Mammon":       {id: "8",  cost: maths.linear.unit},
      "Mimzee":       {id: "9",  cost: maths.linear.unit},
      // Pluto "10", linear
      "Dogcog":       {id: "11", cost: maths.exponential.unit},
      "Fortuna":      {id: "12", cost: maths.exponential.unit},
      "Atman":        {id: "13", cost: maths.exponential.unit},
      "Dora":         {id: "14", cost: maths.exponential.unit},
      "Bhaal":        {id: "15", cost: maths.linear.unit},
      "Morgulis":     {id: "16", cost: maths.constant.unit},
      "Chronos":      {id: "17", cost: maths.exponential.unit},
      "Bubos":        {id: "18", cost: maths.exponential.unit},
      "Fragsworth":   {id: "19", cost: maths.linear.unit},
      "Vaagur":       {id: "20", cost: maths.exponential.unit},
      "Kumawakamaru": {id: "21", cost: maths.exponential.unit},
      "Chawedo":      {id: "22", cost: maths.exponential.unit},
      "Hecatoncheir": {id: "23", cost: maths.exponential.unit},
      "Berserker":    {id: "24", cost: maths.exponential.unit},
      "Sniperino":    {id: "25", cost: maths.exponential.unit},
      "Kleptos":      {id: "26", cost: maths.exponential.unit},
      "Energon":      {id: "27", cost: maths.exponential.unit},
      "Argaiv":       {id: "28", cost: maths.linear.unit},
      "Juggernaut":   {id: "29", cost: maths.polynomial1_5.unit},
      // Iris "30", quadratic
      "Revolc":       {id: "31", cost: maths.exponential.unit}
    };

    const outsiders = {
      "Chor'gorloth": {id: "2"},
      "Phandoryss":   {id: "3"}
    };

    return {
      getAncientNameById: id => {
        for (let ancient in ancients) {
          if (ancients[ancient].id === id) {
            return ancient;
          }
        }
      },
      getOutsiderNameById: id => {
        for (let outsider in outsiders) {
          if (outsiders[outsider].id === id) {
            return outsider;
          }
        }
      },
      getAncientCost: name => ancients[name].cost
    };
  }]);
