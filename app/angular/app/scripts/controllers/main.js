'use strict';

angular.module('BooksApp')
	.controller('MainCtrl', function($scope) {
	$scope.booksList = [{
			"id": 1,
			"title": "The Art of Computer Programming"
		}, {
			"id": 2,
			"title": "The C Programming Language"
		}, {
			"id": 3,
			"title": "Unix Network Programming"
		}
	];
});