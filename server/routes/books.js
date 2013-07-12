/*
 * GET Books lists.
 */

exports.list = function(req, res) {
	var bookList = [{
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
	res.setHeader('Content-Type', 'text/json');
	res.end(JSON.stringify(bookList));
};

exports.details = function(req, res) {
	var booksDetails = {
		1: {
			"id": 1,
			"title": "The Art of Computer Programming",
			"author": "Donald Knuth",
			"description": "A classic of computer science literature.",
			"imgpath": "images/book1.jpg",
			"present": true
		},
		2: {
			"id": 2,
			"title": "The C Programming Language",
			"author": "Some Auther",
			"description": "Description for The C Programming Language",
			"imgpath": "images/book2.jpg",
			"present": false
		},
		3: {
			"id": 3,
			"title": "Unix Network Programming",
			"author": "Some Auther",
			"description": "Description for Unix Network Programming",
			"imgpath": "images/book4.jpg",
			"present": true
		}
	},
		responseJSON = {};
	for (book in booksDetails) {
		if (book == req.params.id) {
			responseJSON = booksDetails[book];
		}
	}
	res.setHeader('Content-Type', 'text/json');
	res.end(JSON.stringify(responseJSON));
};