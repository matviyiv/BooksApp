/*global define*/

define([
    'jquery',
    'backbone',
    'collections/Book-collection',
    'views/BookList-view',
    'views/Book-view',
], function ($, Backbone, BookCollection, BookListView, BookView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
        	"":"list",
        	"books/:id":"bookDetails"
        },

        initialize:function () {
        	this.bookList = new BookCollection();
        },

        list:function () {
    		var that = this;
	    	this.bookList.fetch({
	    		success: function () {
	    			that.bookListView = new BookListView({model:that.bookList});
					$('#content').html(that.bookListView.render().el);
	    		}
	    	});	
		},

		bookDetails:function (id) {
			var that = this;
			this.bookList.fetch({
				url: '/books/' + id,
				dataType: 'json',
	    		success: function () {
	    			that.bookView = new BookView({model:that.bookList});
					$('#content').html(that.bookView.render().el);
	    		}
	    	});			
		}

    });

    return AppRouter;
});