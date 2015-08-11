'use strict';

var settingsConstants = {

	API_URL: 'http://prod-rando-fr.makina-corpus.net/data',
	DEFAULT_LANGUAGE: 'fr',

	CONNECTED_REDIRECTION: 'root.treks_list',
	DISCONNECTED_REDIRECTION: 'root.treks_list',

	POI_NOTIF_MAX_DIST: 1, // in km


	// CONSTANTS //
	//
	//

	FILE_DOWNLOADED: 1,
	FILE_ALREADY_THERE: 2,

	TREK_DOWNLOADED: 1,
	TREK_DELETED: 2,

	FORCE_DOWNLOAD: false,


	// PATHS AND DIRECTORY //
	//
	//

	API_DIR: 'api',
	TREKS_DIR: 'treks',
	TILES_DIR: 'tiles',
	TREKS_FILE: 'treks.geojson',
	POI_FILE: 'pois.geojson',
	FLAT_FILE: 'flatpages.geojson',
	DEM_FILE: 'dem.json',
	PROFILE_FILE: 'profile.png',
	ZIP_DIR: 'zip',


	// LOCAL FILES AND DIRECTORIES //
	//
	//

	GLOBAL_ZIP: 'global.zip',
	GLOBAL_DIR: 'global',

	leaflet : {
		global : {
			LATITUDE: 47.36,
			LONGITUDE: -1.5,
			DEFAULT_ZOOM: 10,
			DEFAULT_MIN_ZOOM: 8,
			DEFAULT_MAX_ZOOM: 14
		},

		detailed : {
			DEFAULT_ZOOM: 13,
			DEFAULT_MIN_ZOOM: 12,
			DEFAULT_MAX_ZOOM: 16
		},

		LEAFLET_BACKGROUND_URL: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',

		GLOBAL_MAP_ATTRIBUTION: '(c) IGN Geoportail',
		TREK_COLOR: '#F89406'
	}
};

module.exports = {
	settingsConstants: settingsConstants
};