Ext.application({
	
    controllers: ["Main"],
    views: ["Main"],
    name: 'JCertifAdmin',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Interface administration de JCertif',
                    html : 'Ensemble Innovons, bienvenu dans le projet JCertif Back-Office'
                }
            ]
        });
    }
});
