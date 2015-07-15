'use strict';

var dependencies = [
'ionic',
'ngResource',
'ngCordova',
'pascalprecht.translate',

'app.layout',
'app.settings',
'app.commons',
'app.init',
'app.filters',
'app.treks',
'app.pois',
'app.map',
'app.favorites',
'app.list_display',
'app.trek_preview',
'app.detailed_trek',
'app.flat_pages'
];


var angularApp = angular.module('app', dependencies);

window.L = require('leaflet');
require('angular-translate');

require('./layout');
require('./settings');
require('./commons');
require('./init');
require('./filters');
require('./treks');
require('./pois');
require('./map');
require('./favorites');
require('./list_display');
require('./trek_preview');
require('./detailed_trek');
require('./flat_pages');


angularApp.run(function ($ionicPlatform, $cordovaNetwork) {
	$ionicPlatform.ready(function() {
		// Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
		// for form inputs)
		// if(window.cordova && window.cordova.plugins.Keyboard) {
		//   window.cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		// }

		if(window.StatusBar) {
			StatusBar.styleDefault();
		}
	});
});
