'use strict';

angular.module('BooksApp', ['ui.state', 'bookFilters', 'bookServices'])
  .config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/books");
    $stateProvider
    .state('books', {
        url: "/books",
        templateUrl: "views/main.html",
        controller: 'MainCtrl'
    })
      .state('books.details', {
          url: "/:bookId",
          templateUrl: "views/book-detail.html",
          controller: 'BookDetailCtrl'
      });
});