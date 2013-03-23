BACKEND_URL='http://jcertif-backend.roddet.cloudbees.net';


Ext.application({
    requires   : ['Ext.container.Viewport'], // liste les composants requis par l'application
    name       : 'JCERTIF',
    appFolder  : 'app',
    controllers : [
        'MainController',
        'LoginController'
    ],

    launch : function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
            items : [
                {
                    region    : 'center',
                    xtype     : 'tabpanel', // TabPanel itself has no title
                    activeTab : 0,      // First tab active by default
                    items     : [
                        {
                            title : 'Connexion administrateur JCertif',
                            items : [
                                {
                                    xtype : 'Login'                          
                                }
                            ]
                        },
                        {
                            title : 'Test Jcertif 2',
                            items : [
                                {
                                    xtype : 'drop'
                                }
                            ]
                        }
                    ]
                }
            ]
        });
    }
});
