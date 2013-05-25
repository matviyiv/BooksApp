/*global require*/
'use strict';

require.config({
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
    },
    paths: {
        jquery: '../scripts/vendor/jquery/jquery',
        backbone: '../scripts/vendor/backbone/backbone',
        underscore: '../scripts/vendor/underscore/underscore',
        text: '../scripts/vendor/requirejs/text',
    }
});

require([
    'backbone',
    '../scripts/routes/App-router',
], function (Backbone, AppRouter) {
    var app = new AppRouter();
    Backbone.history.start();
});