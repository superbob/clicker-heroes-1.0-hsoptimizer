'use strict';

/**
 * @ngdoc overview
 * @name chRotTranscendApp
 * @description
 * # chRotTranscendApp
 *
 * Main module of the application.
 */
angular
  .module('chRotTranscendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
