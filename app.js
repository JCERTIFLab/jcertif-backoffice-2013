BACKEND_URL='http://jcertif-backend.msomda.cloudbees.net';


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
