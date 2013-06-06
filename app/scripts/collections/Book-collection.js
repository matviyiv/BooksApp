/*global define*/

define([
		'underscore',
		'backbone',
		'models/Book-model'
], function(_, Backbone, BookModel) {
	'use strict';

	var BookCollection = Backbone.Collection.extend({
		model: BookModel,
		url: './books.json'
	});

	return BookCollection;
});