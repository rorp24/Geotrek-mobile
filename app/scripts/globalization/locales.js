'use strict';

var geotrekGlobalization = angular.module('geotrekGlobalization');

// App translatable strings (.po/.mo equivalent)
geotrekGlobalization.constant('locales', {
    'fr': {
        'init.loading': 'Chargement des données en cours...',
        'init.data': 'Randonnées',
        'init.map': 'Carte',
        'init.error_loading': 'Problème lors du chargement des données. Si c\'est la première fois que vous utilisez Geotrek-Mobile, veuillez avoir une connexion Internet active.',
        'init.error_first_loading': 'Connectez-vous au réseau lors du premier lancement de l\'application.',
        'map_trek_detail.more_details': ' + de détails',
        'map_trek_detail.usages': 'Pratiques : ',
        'map_trek_detail.markers_display': 'Catégories à afficher',
        'nav_trek_map.ways': 'Itinéraires',
        'nav_trek_map.map': 'Carte',
        'nav_trek_map.cancel': 'Annuler',
        'nav_trek_map.theme': 'Tous les thèmes',
        'nav_trek_map.use': 'Pratique',
        'nav_trek_map.route': 'Tous les parcours',
        'nav_trek_map.valley': 'Toutes les vallées',
        'nav_trek_map.city': 'Toutes les communes',
        'nav_trek_map.accessibility': 'Toutes les accessibilités',
        'nav_trek_map.reset': 'Réinitialiser',
        'nav_trek_map.search': 'Rechercher',
        'nav_trek_map.offline': 'Carte détaillée déjà téléchargée',
        'nav_trek_map.difficulty': 'Difficulté',
        'nav_trek_map.duration': 'Durée',
        'nav_trek_map.elevation': 'Dénivelé',
        'nav_trek_map.length': 'Longueur',
        'nav_trek_map.advanced': 'Avancés',
        'static_page.cancel': 'Annuler',
        'static_page.back': 'Retour',
        'trek_detail.download_trek': 'Télécharger pour utilisation hors ligne',
        'trek_detail.trek_downloaded': 'Disponible hors ligne',
        'trek_detail.download_in_progress': 'Téléchargement en cours : ',
        'trek_detail.description': 'Description',
        'trek_detail.cities': 'Communes :',
        'trek_detail.on_road': 'Patrimoines',
        'trek_detail.touristics': 'Services',
        'trek_detail.children': 'Etapes',
        'trek_detail.parents': 'Séjours',
        'trek_detail.parent': 'Séjour :',
        'trek_detail.departure': 'Départ :',
        'trek_detail.arrival': 'Arrivée :',
        'trek_detail.departure_arrival': 'Départ / Arrivée :',
        'trek_detail.themes': 'Thématiques : ',
        'trek_detail.rules': 'Règlementation',
        'trek_detail.advice': 'Recommandations',
        'trek_detail.transport': 'Transport',
        'trek_detail.advised_parking': 'Parking conseillé',
        'trek_detail.public_transport': 'Transports en commun',
        'trek_detail.road_access': 'Accès routier',
        'trek_detail.park_centered': 'Cet itinéraire est dans le coeur du parc national, veuillez respecter la réglementation.',
        'trek_detail.networks': 'Balisage : ',
        'trek_detail.elevation': 'Profil altimétrique',
        'trek_detail.min_elevation': 'Altitude minimum',
        'trek_detail.max_elevation': 'Altitude maximum',
        'trek_detail.disabled_infrastructure': 'Aménagements pour handicapés',
        'trek_detail.information_desks': 'Lieux de renseignement',
        'trek_detail.website': 'Site web',
        'trek_detail.email': 'Mail',
        'trek_detail.at': 'à',
        'trek_list.trek': 'Itinéraire',
        'trek_list.departure': 'Départ',
        'trek_list.distance': 'Distance',
        'trek_list.distance.to': 'à ',
        'trek_controller_no_network_title': 'Réseau inaccessible',
        'trek_controller_no_network_label': 'Vérifiez votre connexion, elle est nécessaire pour obtenir la carte détaillée de l\'itinéraire.',
        'trek_controller_download_confirm_title': 'Télécharger la carte de l\'itinéraire',
        'trek_controller_download_confirm_message': 'Vous allez télécharger la carte détaillée et les images de cet itinéraire. Êtes-vous sûr ?',
        'trek_controller_donwload_warning_title': 'Attention',
        'trek_controller_donwload_warning_message': 'vous n\'êtes pas connecté en Wifi, veuillez noter que le volume de données transféré sera important.',
        'trek_controller_donwload_cancel': 'Annuler',
        'user_parameters.global': 'Général',
        'user_parameters.back': 'Retour',
        'user_parameters.cancel': 'Annuler',
        'user_parameters.language': 'Langage',
        'user_parameters.synchronization_mode': 'Sync. des données',
        'user_parameters.poi_alert': 'Alerte près d\'un POI (si GPS)',
        'user_parameters.map': 'Carte',
        'user_parameters.clean_maps': 'Nettoyer les cartes',
        'user_parameters.clean': 'Suppression',
        'user_parameters.network': 'Réseau',
        'user_parameters.is_connected': 'Connecté ?',
        'user_parameters.network_reachable': 'Oui',
        'user_parameters.network_not_reachable': 'Non',
        'user_parameters.exit': 'Quitter',
        'user_parameters.exit_label': 'Quitter l\'application',
        'user_parameters.exit_button': 'Quitter',
        'usersettings_controller_cleanmaps_confirm_title': 'Supprimer les cartes détaillées',
        'usersettings_controller_cleanmaps_confirm_label': 'Êtes-vous sûr ?',
        'image.connect': 'Veuillez vous connecter pour voir cette image',
        'error_message': 'Une erreur est survenue',
        'error_title': 'Erreur',
        'cancel': 'Retour',
        'maj_title': 'Données mises à jour',
        'maj_message': 'Les données concernant les randonnées ont été mises à jour. Si vous avez téléchargé des contenus détaillés, veuillez les supprimer via les paramètres de l\'application puis les re-télécharger pour mettre à jour leurs images et leurs fonds de carte.',
        'contact': 'Contact',
        'pratical_infos':'Informations pratiques'
    },
    'en': {
        'init.loading': 'Loading data...',
        'init.data': 'Treks',
        'init.map': 'Map',
        'init.error_loading': 'Problem while loading data. If you start Geotrek-Mobile for the first time, please have an active Internet connection.',
        'init.error_first_loading': 'If you start Geotrek-Mobile for the first time, please have an active Internet connection..',
        'map_trek_detail.more_details': ' more details',
        'map_trek_detail.usages': 'Usages: ',
        'map_trek_detail.markers_display': 'Categories to display',
        'nav_trek_map.ways': 'Ways',
        'nav_trek_map.map': 'Map',
        'nav_trek_map.cancel': 'Cancel',
        'nav_trek_map.theme': 'All thematics',
        'nav_trek_map.use': 'Practice',
        'nav_trek_map.route': 'All routes',
        'nav_trek_map.valley': 'All valley',
        'nav_trek_map.city': 'All municipalities',
        'nav_trek_map.accessibility': 'All accessibility',
        'nav_trek_map.reset': 'Reset',
        'nav_trek_map.search': 'Search',
        'nav_trek_map.offline': 'Trek map already downloaded',
        'nav_trek_map.difficulty': 'Difficulty',
        'nav_trek_map.duration': 'Duration',
        'nav_trek_map.elevation': 'Ascent',
        'nav_trek_map.length': 'Length',
        'nav_trek_map.advanced': 'Advanced',
        'static_page.cancel': 'Cancel',
        'static_page.back': 'Back',
        'trek_detail.download_trek': 'Download for offline use',
        'trek_detail.trek_downloaded': 'Available offline',
        'trek_detail.download_in_progress': 'Download in progress : ',
        'trek_detail.description': 'Description',
        'trek_detail.cities': 'Cities:',
        'trek_detail.departure': 'Departure:',
        'trek_detail.arrival': 'Arrival:',
        'trek_detail.departure_arrival': 'Departure / Arrival :',
        'trek_detail.on_road': 'Heritages',
        'trek_detail.touristics': 'Services',
        'trek_detail.children': 'Steps',
        'trek_detail.parents': 'Multi-day trekking',
        'trek_detail.parent': 'Multi-day trek:',
        'trek_detail.themes': 'Themes: ',
        'trek_detail.rules': 'Rules',
        'trek_detail.advice': 'Advices',
        'trek_detail.transport': 'Transport',
        'trek_detail.advised_parking': 'Advised parking',
        'trek_detail.public_transport': 'Public transports',
        'trek_detail.road_access': 'Road access',
        'trek_detail.park_centered': 'This trek is within park center, please respect access rules.',
        'trek_detail.networks': 'Markings: ',
        'trek_detail.elevation': 'Elevation',
        'trek_detail.min_elevation': 'Minimum elevation',
        'trek_detail.max_elevation': 'Maximum elevation',
        'trek_detail.disabled_infrastructure': 'Disabled-friendly infrastructures',
        'trek_detail.information_desks': 'Information desks',
        'trek_detail.website': 'Website',
        'trek_detail.email': 'Email',
        'trek_detail.at': 'at',
        'trek_list.trek': 'Trek',
        'trek_list.departure': 'Departure',
        'trek_list.distance': 'Distance',
        'trek_list.distance.to': '',
        'trek_controller_no_network_title': 'Network cannot be reached',
        'trek_controller_no_network_label': 'Check your network connection, needed to download trek precise maps',
        'trek_controller_download_confirm_title': 'Download trek map',
        'trek_controller_download_confirm_message': 'You will download precise map and images for this trek. Are you sure ?',
        'trek_controller_donwload_warning_title': 'Warning',
        'trek_controller_donwload_warning_message': 'you are not WiFi connected, be aware the transfered data volume might be important.',
        'trek_controller_donwload_cancel': 'Cancel',
        'user_parameters.global': 'Global',
        'user_parameters.back': 'Back',
        'user_parameters.cancel': 'Cancel',
        'user_parameters.language': 'Language',
        'user_parameters.synchronization_mode': 'Synchronization mode',
        'user_parameters.poi_alert': 'POI alert (GPS only)',
        'user_parameters.map': 'Map settings',
        'user_parameters.clean_maps': 'Clean maps',
        'user_parameters.clean': 'Delete',
        'user_parameters.network': 'Network',
        'user_parameters.is_connected': 'Online ?',
        'user_parameters.network_reachable': 'Yes',
        'user_parameters.network_not_reachable': 'No',
        'user_parameters.exit': 'Exit',
        'user_parameters.exit_label': 'Exit application',
        'user_parameters.exit_button': 'Exit',
        'usersettings_controller_cleanmaps_confirm_title': 'Remove detailled maps',
        'usersettings_controller_cleanmaps_confirm_label': 'Are you sure?',
        'image.connect': 'You need network connexion in order to see this image',
        'error_message': 'An error occured',
        'error_title': 'Error',
        'cancel': 'Cancel',
        'maj_title': 'Data updated',
        'maj_message': 'Treks data where updated. If you had downloaded details informations on a trek, please remove them and download again in order to have updated pictures and detailed map layers',
        'contact': 'Contact',
        'pratical_infos':'Practical informations'
    },
    'it': {
        'init.loading': 'Caricamento dei dati in corso...',
        'init.data': 'Escursione',
        'init.map': 'Carta',
        'init.error_loading': 'Problema durante il caricamento dei dati. Se è la prima volta che lei usa Geotrek-mobile, per favore collegarsi all\'internet attivo.',
        'init.error_first_loading': 'Se è la prima volta che si utilizza Geotrek -Mobile , si prega di avere una connessione Internet attiva ..',
        'map_trek_detail.more_details': ' + di detagli',
        'map_trek_detail.usages': 'Usi : ',
        'map_trek_detail.markers_display': 'Categorie da mostrare',
        'nav_trek_map.ways': 'Percorso',
        'nav_trek_map.map': 'Carta',
        'nav_trek_map.cancel': 'Cancellare',
        'nav_trek_map.theme': 'Tutti i temi',
        'nav_trek_map.use': 'Pratiche',
        'nav_trek_map.route': 'Tutti i percorsi',
        'nav_trek_map.valley': 'Tutte le valli',
        'nav_trek_map.city': 'Tutti i communi',
        'nav_trek_map.accessibility': 'tutto l\'accessibilità',
        'nav_trek_map.reset': 'Reset',
        'nav_trek_map.search': 'Cercare',
        'nav_trek_map.offline': 'Carta dettagliata già caricata',
        'nav_trek_map.difficulty': 'Difficoltà',
        'nav_trek_map.duration': 'Durata',
        'nav_trek_map.elevation': 'Salita',
        'nav_trek_map.length': 'Lunghezza',
        'nav_trek_map.advanced': 'Avanzato',
        'static_page.cancel': 'Cancellare',
        'static_page.back': 'Ritorno',
        'trek_detail.download_trek': 'Scaricare per l\'utilizzo offline',
        'trek_detail.trek_downloaded': 'disponibile offline',
        'trek_detail.download_in_progress':  'Scarica in corso :',
        'trek_detail.description': 'Descrizione',
        'trek_detail.cities': 'Communi :',
        'trek_detail.departure': 'Partenza:',
        'trek_detail.arrival': 'Arrivo :',
        'trek_detail.departure_arrival': 'Partenza / Arrivo :',
        'trek_detail.on_road': 'Sull cammino',
        'trek_detail.touristics': 'Servizi',
        'trek_detail.children': 'Tappe',
        'trek_detail.parents': 'Escursionismo itinerante',
        'trek_detail.parent': 'Escursionismo itinerante :',
        'trek_detail.themes': 'Thematiche : ',
        'trek_detail.rules': 'Regole',
        'trek_detail.advice': 'Raccomendazioni',
        'trek_detail.transport': 'Trasporti',
        'trek_detail.advised_parking': 'Parcheggio :',
        'trek_detail.public_transport': 'Trasporti pubblici',
        'trek_detail.road_access': 'Strada di accesso',
        'trek_detail.park_centered': 'Questo itinerario si snoda nella parte centrale del Parco nazionale, lei à invitata a leggere le regole di accesso.',
        'trek_detail.networks': 'Segnalazione: ',
        'trek_detail.elevation': 'Profilo altimetrico',
        'trek_detail.min_elevation': 'Altitudine minima',
        'trek_detail.max_elevation': 'Altitudine massima',
        'trek_detail.disabled_infrastructure': 'Servizi per disabili',
        'trek_detail.information_desks': 'Punto informativo',
        'trek_detail.website': 'Sito web',
        'trek_detail.email': 'E-mail',
        'trek_detail.at': 'a',
        'trek_list.departure': 'Partenza',
        'trek_list.distance': 'Distanza',
        'trek_list.distance.to': '',
        'trek_controller_no_network_title': 'Rete non accessibile',
        'trek_controller_no_network_label': 'Verificare la propria connezione, è necessaria per ottenere la carta dettagliata del percorso.',
        'trek_controller_download_confirm_title': 'Caricare la mappa del percorso',
        'trek_controller_download_confirm_message': 'Lei sta per caricare la carta dettagliata di questo percorso. Ne è sicura ?',
        'trek_controller_donwload_warning_title': 'Attenzione',
        'trek_controller_donwload_warning_message': 'Lei non è collegata all wifi, si nota che il volume dei dati trasferito sarà importante.',
        'trek_controller_donwload_cancel': 'Cancellare',
        'user_parameters.global': 'Generale',
        'user_parameters.back': 'Ritorno',
        'user_parameters.cancel': 'Cancellare',
        'user_parameters.language': 'Lingua',
        'user_parameters.synchronization_mode': 'Sinc. dei dati',
        'user_parameters.poi_alert': 'Allerte vicino da un POI (se GPS)',
        'user_parameters.map': 'Carta',
        'user_parameters.clean_maps': 'Pullire le carte',
        'user_parameters.clean': 'Rimuovere',
        'user_parameters.network': 'Rete',
        'user_parameters.is_connected': 'Collegato?',
        'user_parameters.network_reachable': 'Si',
        'user_parameters.network_not_reachable': 'No',
        'user_parameters.exit': 'Lasciare',
        'user_parameters.exit_label': 'Lasciare l\'applicazione',
        'user_parameters.exit_button': 'Lasciare',
        'usersettings_controller_cleanmaps_confirm_title': 'Rimuovere le carte caricate',
        'usersettings_controller_cleanmaps_confirm_label': 'Lei è sicura ?',
        'image.connect': 'Per favore, lei si collega alla rete per vedere questa immagine',
        'error_message': 'Un errore si è verificata',
        'error_title': 'Errore',
        'cancel': 'Cancellare',
        'maj_title': 'Dati aggiornati',
        'maj_message': 'I dati concernando l\'escusione sono stati aggiornati. Se lei ha caricato dei contenuti dettagliati, per favore, rimuoverli poi caricarli di nuovo per aggiornare le loro immagini et le loro mappe.',
        'contact': 'Contatti',
        'pratical_infos':'Informazioni pratiche'
    }
})

// Locale settings to allow user to change app locale
.constant('localeSettings', {
    'fr': {
        label: 'Français',
        locale: 'fr'
    },
    'en': {
        label: 'English',
        locale: 'en'
    },
    'it': {
        label: 'Italiano',
        locale: 'it'
    }
});
