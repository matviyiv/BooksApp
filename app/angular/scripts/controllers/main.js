'use strict';

angular.module('BooksApp')
	.controller('MainCtrl', function($scope, $http) {
		$http.get('../books').success(function(data) {
			$scope.booksList = data;
		});

		$scope.orderProp = 'pages';

		$scope.bookClick = function(book) {
			$scope.selected = book;
		};
	})
	.controller('BookDetailCtrl', function($scope, $http, $stateParams) {
		var bookId = $stateParams.bookId;

		$http.get('../books/' + bookId).success(function(data) {
			$scope.book = data;
		});
	});