BACKEND_URL='http://jcertif-backend.msomda.cloudbees.net';
BACKOFFICE_URL='http://jcertiflab.github.io/jcertif-backoffice-2013';
VERSION='0.2-SNAPSHOT';

var splashscreen;

Ext.application({
    name       : 'JCertifBO',
    appFolder  : 'app',
    
    
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
        'ParticipantController'
    ],      
    autoCreateViewport: true
});
