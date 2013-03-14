Ext.define('JCertifAdmin.view.Viewport', {
	renderTo : Ext.getBody(),
	extend : 'Ext.container.Viewport',
	requires : ['Ext.tab.Panel', 'Ext.layout.container.Border'],
	initComponent : function() {

		var me = this;
		Ext.applyIf(me, {

			items : [{
				xtype : 'panel',
				layout : 'fit',
				bodyPadding: 10,
				collapsible :true,
				title : 'Interface administration de JCertif ',
				html : '<h1>Bienvenu sur le projet communautaire OPEN-SOURCE avec EXTJS 4</h1>',
				height :500,
				width : 600
			}]

		});

		me.callParent(arguments);
	}

});
