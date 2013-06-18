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
			var that = this,
				setEventListeners = function () {
					$('#content').delegate('a', 'click', function (evt) {
						var id = $(evt.target).attr('data-id');
						that.bookDetails.call(that, id);
						return false;
					});
				};
			if (this.bookList.length === 0) {
				this.bookList.fetch({
					success: function() {
						that.bookListView = new BookListView({
							model: that.bookList
						});
						$('#content').html(that.bookListView.render().el);
						//setEventListeners();
					}
				});
			} else {
				$('#content').html(that.bookListView.el);
			}
		},

		bookDetails: function(id) {
			var that = this,
				details = {},
				setEventListeners = function () {
					$('#content').delegate('a', 'click', function (evt) {
						that.list();
						return false;
					});
				};

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