


Ext.application({
    requires   : ['Ext.container.Viewport'], // liste les composants requis par l'application
    name       : 'JCERTIF',
    appFolder  : 'app',
    controllers : [
        'mainController'
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
                                    xtype : 'formulaire'                          
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
