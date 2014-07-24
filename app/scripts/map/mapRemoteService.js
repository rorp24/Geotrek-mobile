'use strict';

var geotrekMap = angular.module('geotrekMap');

geotrekMap.service('mapRemoteService', ['$q', '$localStorage', function ($q, $localStorage) {

    var EMULATED_DOWNLOAD_LOCALSTORAGE_KEY = 'emulated-background-trek-'

    // We don't have to download Map Background in Remote version, only for device offline mode
    this.downloadGlobalBackground = function(url) {
        var deferred = $q.defer();
        deferred.resolve({message: 'No need to download map Background in browser mode'});
        return deferred.promise;
    };

    this.isReady = function() {
        var deferred = $q.defer();
        deferred.resolve({message: 'Tiles are always available in browser mode'});
        return deferred.promise;
    };

    this.getTileLayer = function() {
        var deferred = $q.defer();
        deferred.resolve({
            OSMTopo: {
                name: 'OSMTopo',
                type: 'xyz',
                url: 'http://{s}.livembtiles.makina-corpus.net/makina/OSMTopo/{z}/{x}/{y}.png'
            }
        });

        return deferred.promise;
    };

    this._getLocalStorageKey = function(trekId) {
        return EMULATED_DOWNLOAD_LOCALSTORAGE_KEY + trekId.toString();
    }

    // We want to simulate correct trek background downloading
    this.downloadTrekPreciseBackground = function(trekId) {
        $localStorage[this._getLocalStorageKey(trekId)] = 'OK';
    };

    this.hasTrekPreciseBackground = function(trekId) {
        return angular.isDefined($localStorage[this._getLocalStorageKey(trekId)]);
    };

    this.removeTrekPreciseBackground = function(trekId) {
        delete $localStorage[this._getLocalStorageKey(trekId)];
    };

}]);