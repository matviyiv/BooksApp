/*global define*/

define([
		'jquery',
		'backbone',
		'collections/Book-collection',
		'views/BookList-view',
		'views/Book-view'
], function($, Backbone, BookCollection, BookListView, BookView) {
	'use strict';

	var AppRouter = Backbone.Router.extend({
		routes: {
			"": "list",
			"books/:id": "bookDetails"
		},

		initialize: function() {
			this.bookList = new BookCollection();
		},

		list: function() {
			var that = this;

			if (this.bookList.length === 0) {
				this.bookList.fetch({
					success: function() {
						that.bookListView = new BookListView({
							model: that.bookList
						});
						$('#bookList').prepend(that.bookListView.render().el);
					}
				});
			} else {
				$('#bookList').prepend(that.bookListView.el);
			}
		},

		bookDetails: function(id) {
			var that = this,
				details = {};

			// in case if user enters URL directly
			if ($('#bookList>ul').length === 0) {
				this.list();
			}

			this.bookList.getDetails(id, function (collection) {
				that.bookView = new BookView({
					model: collection
				});
				$('#content').html(that.bookView.render().el);
			});
		}

	});

	return AppRouter;
});