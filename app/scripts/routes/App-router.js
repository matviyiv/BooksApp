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
					$('#bookList').delegate('li', 'click', function (evt) {
						$(evt.target).closest('li').attr('class', 'active').siblings().removeClass('active');
					});
				};
			if (this.bookList.length === 0) {
				this.bookList.fetch({
					success: function() {
						that.bookListView = new BookListView({
							model: that.bookList
						});
						$('#bookList').prepend(that.bookListView.render().el);
						setEventListeners();
					}
				});
			} else {
				$('#bookList').prepend(that.bookListView.el);
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
			// in case if user enters URL directly
			if ($('#bookList>ul').length === 0) {
				this.list();
				//$('#bookList>ul a[data-id="' + id + '"]').closest('li').attr('class', 'active');
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