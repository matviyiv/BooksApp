/*global define*/

define([
        'underscore',
        'backbone'
], function(_, Backbone) {
    'use strict';

    var DetailsModel = Backbone.Model.extend({
        defaults: {
            "id": "",
            "title": "",
            "auther": ""
        }
    });

    return DetailsModel;
});