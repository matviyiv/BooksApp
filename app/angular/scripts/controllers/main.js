'use strict';

angular.module('BooksApp')
	.factory('CacheAjax', function($cacheFactory) {
	    return $cacheFactory('cacheAjax');
	})
	.controller('MainCtrl', function($scope, Book) {

		$scope.booksList = Book.query();
		$scope.orderProp = 'pages';

		$scope.bookClick = function(book) {
			$scope.selected = book;
		};
	})
	.controller('BookDetailCtrl', function($scope, $stateParams, Book, CacheAjax) {
		var bookId = $stateParams.bookId,
			cachedResponse = CacheAjax.get('bookId-' + bookId);

		if (cachedResponse) {
			$scope.book = cachedResponse;
		} else {
			$scope.book = Book.get({
				bookId: $stateParams.bookId
			}, function(book) {
				CacheAjax.put('bookId-' + bookId, book);
			});
		}
	});