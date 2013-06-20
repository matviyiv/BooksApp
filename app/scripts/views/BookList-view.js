/*global define*/

define([
        'jquery',
        'underscore',
        'backbone',
        'views/BookListItem-view',
], function($, _, Backbone, BookListItemView) {
    'use strict';

    var BookListView = Backbone.View.extend({
        tagName: 'ul',
        attributes: function () {
            return {
                class: 'nav nav-tabs'
            };
        },

        initialize: function() {

        },

        render: function(eventName) {
            _.each(this.model.models, function(book) {
                $(this.el).append(new BookListItemView({
                    model: book
                }).render().el);
            }, this);
            return this;
        }
    });

    return BookListView;
});