'use strict';

/**
 * @ngdoc overview
 * @name 03NgBootstrapApp
 * @description
 * # 03NgBootstrapApp
 *
 * Main module of the application.
 */
angular
  .module('03NgBootstrapApp', [
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
