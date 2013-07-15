'use strict';

angular.module('BooksApp')
	.controller('MainCtrl', function($scope, Book) {

		$scope.booksList = Book.query();
		$scope.orderProp = 'pages';

		$scope.bookClick = function(book) {
			$scope.selected = book;
		};
	})
	.controller('BookDetailCtrl', function($scope, $stateParams, Book) {
		var bookId = $stateParams.bookId;

		$scope.book = Book.get({
			bookId: $stateParams.bookId
		}, function(book) {
			//console.log(book);
		});
	});