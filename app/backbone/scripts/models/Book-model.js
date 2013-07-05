/*global define*/

define([
        'underscore',
        'backbone'
], function(_, Backbone) {
    'use strict';

    var BookModel = Backbone.Model.extend({
        defaults: {
            "id": "",
            "title": ""
        }
    });

    return BookModel;
});