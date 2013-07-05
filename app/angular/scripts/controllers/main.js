'use strict';

angular.module('BooksApp')
	.controller('MainCtrl', function($scope) {
	$scope.booksList = [{
			"id": 1,
			"title": "The Art of Computer Programming",
			"pages": 100
		}, {
			"id": 2,
			"title": "The C Programming Language",
			"pages": 150
		}, {
			"id": 3,
			"title": "Unix Network Programming",
			"pages": 60
		}
	];
});