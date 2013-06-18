/*global define*/

define([
		'underscore',
		'backbone',
		'models/Details-model'
], function(_, Backbone, DetailsModel) {
	'use strict';

	var DetailsCollection = Backbone.Collection.extend({
		model: DetailsModel
	});

	return DetailsCollection;
});