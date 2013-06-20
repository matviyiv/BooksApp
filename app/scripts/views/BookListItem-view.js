/*global define*/

define([
        'jquery',
        'underscore',
        'backbone',
        'text!templates/BookListItem.html'
], function($, _, Backbone, html) {
    'use strict';

    var BookListItemView = Backbone.View.extend({
        tagName: "li",

        attributes: function() {
            var newAttr = {},
                urlParameters = window.location.hash;
            if (urlParameters.indexOf('books') > -1 && urlParameters.indexOf(this.model.get('id')) > -1) {
                newAttr = {
                    class: 'active'
                };
            }
            return newAttr;
        },

        template: _.template(html),

        render: function(eventName) {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return BookListItemView;
});