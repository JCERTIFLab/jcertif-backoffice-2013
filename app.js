BACKEND_URL='http://jcertif-backend.roddet.cloudbees.net';


Ext.application({
    name       : 'JCertifBO',
    appFolder  : 'app',
    controllers : [
        'LoginController',
        'HomeController',
        'AdminOptionsController'
    ],

    autoCreateViewport: true
});
