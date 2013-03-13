Ext.define('JCertifAdmin.view.Viewport', {
			renderTo : Ext.getBody(),
			extend : 'Ext.container.Viewport',
			requires : ['Ext.tab.Panel', 'Ext.layout.container.Border'],

			items : [{
						xtype : 'panel',
						layout : 'fit',
						title : 'Interface administration de JCertif '
						
					}]
		});