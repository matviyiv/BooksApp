'use strict';

angular.module('BooksApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/App', {
        templateUrl: 'views/App.html',
        controller: 'AppCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
