/*global StatusBar*/

'use strict';

var geotrekApp = angular.module('geotrekMobileApp',
    ['ionic', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap.buttons', 'geotrekTreks',
     'geotrekPois', 'geotrekMap', 'geotrekInit', 'geotrekGeolocation', 'ngCordova', 'geotrekLocales',
     // angular-translate module for i18n/l10n (http://angular-translate.github.io/)
     'pascalprecht.translate']);

// Wait for 'deviceready' Cordova event
window.ionic.Platform.ready(function() {
    if(window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
    }

    // Now launch the app
    angular.bootstrap(document, ['geotrekMobileApp']);

});

geotrekApp.config(['$urlRouterProvider', '$compileProvider', '$logProvider', '$translateProvider', 'geoTreklocales',
    function($urlRouterProvider, $compileProvider, $logProvider, $translateProvider, geoTreklocales) {

    $urlRouterProvider.otherwise('/trek');
    // Root url is defined in init module

    $logProvider.debugEnabled = true;

    // Add cdvfile to allowed protocols in ng-src directive
    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|file|blob|cdvfile):|data:image\//);

    $translateProvider.translations('fr', geoTreklocales['fr']);
    $translateProvider.translations('en', geoTreklocales['en']);
    $translateProvider.translations('es', geoTreklocales['es']);
    $translateProvider.preferredLanguage('fr');

}])
.run(['$rootScope', '$log', function($rootScope, $log) {
    $rootScope.$on('$stateChangeError', function (evt, to, toParams, from, fromParams, error) {
        if (!!window.cordova) {
            if (error.message) {
                console.error('$stateChangeError : ' + error.message);
            } else {
                console.error('$stateChangeError : ' + JSON.stringify(error));
            }
        } else {
            console.error('$stateChangeError :', error);
        }
    });
 
    $rootScope.network_available = true;

    function onlineCallback() {
        $log.info('online');
        $rootScope.network_available = true;
        $rootScope.$digest();
    }

    function offlineCallback() {
        $log.info('offline');
        $rootScope.network_available = false;
        $rootScope.$digest();
    }

    document.addEventListener("online", onlineCallback, false);
    document.addEventListener("offline", offlineCallback, false);
}]);
