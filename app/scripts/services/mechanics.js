'use strict';

/**
 * @ngdoc service
 * @name chRotTranscendApp.ancients
 * @description
 * # ancients
 * Service in the chRotTranscendApp.
 */
angular.module('chRotTranscendApp')
  .service('mechanics', function () {
    const polynomial15 = n => Math.ceil(Math.pow(n, 1.5)); //unit form
    // const nsum = fn => {
    //   return n => {
    //     let res = 0;
    //     for (let i = 0; i < n; i++) {
    //       res += fn(i+1);
    //     }
    //     return res;
    //   }
    // };
    // // TODO use approximation such as in calc or https://kepow.org/clickerheroes
    // const polynomial15 = nsum(n => Math.ceil(Math.pow(n, 1.5)));

    const linear       = n => n; //unit form
    // const linear       = n => n * (n + 1) / 2;
    const constant     = () => 1; //unit form
    // const constant     = n => n;
    // const linearThird  = n => Math.ceil(n / 3);
    // const cubic        = n => Math.pow(n, 3);
    const exponential  = n => Math.pow(2, n); //unit form
    // const exponential  = n => Math.pow(2, n + 1) - 1;

    // Update ancient prices formulas (mostly done)
    // https://kepow.org/clickerheroes/data/ClickerHeroes_v6575.js
    // Khrysos, Thusia, Pluto and Iris don't exist anymore after transcending.
    // They should be reintroduced in a pre-transcendent mode
    const ancients = {
      "Solomon":      {id: "3",  cost: polynomial15},
    	"Libertas":     {id: "4",  cost: linear},
    	"Siyalatas":    {id: "5",  cost: linear},
      // Khrysos "6", quadratic
      // Thusia "7", quadratic
      "Mammon":       {id: "8",  cost: linear},
      "Mimzee":       {id: "9",  cost: linear},
      // Pluto "10", linear
      "Dogcog":       {id: "11", cost: exponential},
    	"Fortuna":      {id: "12", cost: exponential},
    	"Atman":        {id: "13", cost: exponential},
    	"Dora":         {id: "14", cost: exponential},
    	"Bhaal":        {id: "15", cost: linear},
    	"Morgulis":     {id: "16", cost: constant},
    	"Chronos":      {id: "17", cost: exponential},
    	"Bubos":        {id: "18", cost: exponential},
    	"Fragsworth":   {id: "19", cost: linear},
    	"Vaagur":       {id: "20", cost: exponential},
    	"Kumawakamaru": {id: "21", cost: exponential},
    	"Chawedo":      {id: "22", cost: exponential},
    	"Hecatoncheir": {id: "23", cost: exponential},
    	"Berserker":    {id: "24", cost: exponential},
    	"Sniperino":    {id: "25", cost: exponential},
    	"Kleptos":      {id: "26", cost: exponential},
    	"Energon":      {id: "27", cost: exponential},
    	"Argaiv":       {id: "28", cost: linear},
    	"Juggernaut":   {id: "29", cost: polynomial15},
    	// Iris "30", quadratic
    	"Revolc":       {id: "31", cost: exponential}
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
  });
