/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/BookListItem.html',
], function ($, _, Backbone, html) {
    'use strict';

    var BookListItemView = Backbone.View.extend({
        tagName:"li",
 
	    template:_.template(html),
	 
	    render:function (eventName) {
	        $(this.el).html(this.template(this.model.toJSON()));
	        return this;
	    }
    });

    return BookListItemView;
});