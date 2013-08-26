var BACKEND_URL='http://jcertif-backend.msomda.cloudbees.net';
var BACKOFFICE_URL='http://jcertiflab.github.io/jcertif-backoffice-2013';
var VERSION='0.6-SNAPSHOT';

var splashscreen;

Ext.application({
    name       : 'JCertifBO',
    appFolder  : 'app',
        
    paths: {
        'Ext.ux': 'ext/src/ux/'
    },
    
    controllers : [
        'LoginController',
        'HomeController',
        'AdminOptionsController',
        'ReferentielController',
        'SponsorController',
        'SiteController',
        'RoomController',
        'SessionController',
        'SpeakerController',
        'ParticipantController',
        'CountryController',
        'CityController'
    ],      
    autoCreateViewport: true
});

Ext.onReady(function () {
    Ext.tip.QuickTipManager.init();
});
