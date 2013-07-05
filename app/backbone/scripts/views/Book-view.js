/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/Book.html',
], function ($, _, Backbone, html) {
    'use strict';

    var BookView = Backbone.View.extend({
        template:_.template(html),
 
	    render:function (eventName) {
	        $(this.el).html(this.template(this.model.toJSON()[0]));
	        return this;
	    }
    });

    return BookView;
});