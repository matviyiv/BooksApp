/*global define*/

define([
		'underscore',
		'backbone',
		'models/Book-model',
		'collections/Details-collection'
], function(_, Backbone, BookModel, DetailsCollection) {
	'use strict';

	var BookCollection = Backbone.Collection.extend({
		model: BookModel,
		url: './books',
		bookDetails: {},
		getDetails: function (id, callback) {
			var that = this;
			if (this.bookDetails[id] === undefined) {
				this.bookDetails[id] = new DetailsCollection();
				this.bookDetails[id].url = './books/' + id;
				this.bookDetails[id].fetch({
					success: function () {
						callback(that.bookDetails[id]);
					}
				});
			} else {
				callback(that.bookDetails[id]);
			}
		}
	});

	return BookCollection;
});