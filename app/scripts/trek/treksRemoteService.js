'use strict';

var geotrekTreks = angular.module('geotrekTreks');

geotrekTreks.service('treksRemoteService', ['$resource', '$rootScope', '$window', '$q', function ($resource, $rootScope, $window, $q) {

    //var CACHED_FILE = 'trek.geojson';
    var DOMAIN_NAME = 'http://rando.makina-corpus.net',
        REMOTE_FILE = DOMAIN_NAME + '/fr/filesapi/trek/trek.geojson';

    // We don't have to download Treks in Remote version, only for device offline mode
    this.downloadTreks = function(url) {
        var deferred = $q.defer();
        deferred.resolve({message: 'No need to download treks in browser mode'});
        return deferred.promise;
    };

    this.replaceImgURLs = function(trekData) {
        var copy = angular.copy(trekData, {});

        // Parse trek pictures, and change their URL
        angular.forEach(copy.features, function(trek) {
            var currentTrekId = trek.id;
            angular.forEach(trek.properties.pictures, function(picture) {
                picture.url = DOMAIN_NAME + picture.url;                
            });
        });
        return copy;
    };

    this.getTreks = function() {
        var requests = $resource(REMOTE_FILE, {}, {
                query: {
                    method: 'GET',
                    cache: true
                }
            }),
            deferred = $q.defer(),
            _this = this;

        requests.query().$promise
            .then(function(file) {
                var data = angular.fromJson(file),
                    convertedData = _this.replaceImgURLs(data);
                deferred.resolve(convertedData);
            });

        return deferred.promise;
    };

}]);