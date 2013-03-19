var fsf = Ext.widget({
	xtype : 'form',
	id : 'fieldSetForm',
	collapsible : true,
	url : 'save-form.php',
	frame : true,
	title : 'Connectez-vous ici',
	bodyPadding : '30 30 30 30',
	width : 150,
	fieldDefaults : {
		msgTarget : 'side',
		labelWidth : 50
	},
	defaults : {
		anchor : '50%'
	},

	items : [ {
		xtype : 'fieldset',
		title : 'Identification',
		collapsible : true,
		defaultType : 'textfield',
		layout : 'anchor',
		items : [ {
			fieldLabel : 'Login',
			name : 'home',
			value : 'login'
		} ]

	}],
	buttons: [{
        text: 'Save'
    },{
        text: 'Cancel'
    }]

});

Ext.define('JCertifAdmin.view.Viewport', {
	renderTo : Ext.getBody(),
	extend : 'Ext.container.Viewport',
	requires : [ 'Ext.tab.Panel', 'Ext.layout.container.Border' ],

	initComponent : function() {

		var me = this;
		Ext.applyIf(me, {
			xtype : 'panel',
			width : 300,
			height : 200,
			title : 'Border Layout',
			layout : 'border',
			items : [ {
				title : 'Interface de gestion administration JCertif',
				region : 'center', // center region is required,
				xtype : 'panel',
				layout : 'fit',
				margins : '30 30 30 30',
				items : [ fsf ]
			} ]
		});

		me.callParent(arguments);
	}

});
