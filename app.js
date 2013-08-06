BACKEND_URL='http://jcertif-backend.msomda.cloudbees.net';

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


Ext.onReady(function(){
    // setup the state provider, all state information will be saved to a cookie
    Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
});
