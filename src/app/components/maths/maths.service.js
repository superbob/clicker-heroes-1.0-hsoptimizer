'use strict';

/**
 * @ngdoc service
 * @name chRotTranscendApp.maths
 * @description
 * # maths
 * Service in the chRotTranscendApp.
 */
angular.module('chRotTranscendApp')
  .service('maths', function () {
    return {
      'linear': {
        'unit': n => n,
        'sum': n => n * (n + 1) / 2},

      'constant': {
        'unit': () => 1,
        'sum': n => n + 1},

      'exponential': {
        'unit': n => Math.pow(2, n),
        'sum': n => Math.pow(2, n + 1) - 1},

      // TODO remove ciel
      'polynomial1_5': {
        'unit': n => Math.ceil(Math.pow(n, 1.5)),
        // Using approximation from Euler-Maclaurin formula:
        // https://en.wikipedia.org/wiki/Euler%E2%80%93Maclaurin_formula#The_formula
        // Inspired by;
        // http://math.stackexchange.com/questions/1393811/sum-of-1-5-powers-of-natural-numbers
        // return Infinity when n = 0, it should be 0, can be added as an 'exception'
        // return 2 when n = 1, it should be 1, can be added as an 'exception'
        'sumApprox': n => Math.ceil(0.4 * Math.pow(n, 2.5) + 0.5 * Math.pow(n, 1.5) + 0.125 * Math.pow(n, 0.5) + 0.000520833 * Math.pow(n, - 1.5))},

      'sum': fn => n => {
        let sum = 0;
        for (let i = 0; i <= n; i++) {
          sum += fn(i);
        }
        return sum;
      }};
  });
