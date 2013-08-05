Ext.define("JCertifBO.view.sponsor.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.sponsoradd',
  	title : "Ajout d'un nouveau sponsor",
  	width : 400,
  	height : 400,
  	autoShow : true,
  	closable : true,
  	draggable : true,
  	shadow : 'frame',
  	shadowOffset : 10,
  	padding : 10,
  	bodyPadding : 10,
  	layout : {
  		type : 'vbox',
  		align : 'center',
  		pack : 'center'
  	},
  
  	initComponent : function() {
  
  		this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  					xtype : 'textfield',
  					fieldLabel : 'Email',
  					name : 'email',
  					itemId : 'email',
  					emptyText : 'email',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Name',
  					name : 'name',
  					itemId : 'name',
  					emptyText : 'name',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Level',
  					name : 'level',
  					itemId : 'level',
  					emptyText : 'level',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Website',
  					name : 'website',
  					itemId : 'website',
  					emptyText : 'website',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Logo',
  					name : 'logo',
  					itemId : 'logo',
  					emptyText : 'logo',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'City',
  					name : 'city',
  					itemId : 'city',
  					emptyText : 'city',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Country',
  					name : 'country',
  					itemId : 'country',
  					emptyText : 'country',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Phone',
  					name : 'phone',
  					itemId : 'phone',
  					emptyText : 'phone'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'About',
  					name : 'about',
  					itemId : 'about',
  					emptyText : 'about'
  				},{
  					xtype : 'textfield',
  					name : 'provider',
  					itemId : 'provider',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'email',
  					itemId : 'email',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'access_token',
  					itemId : 'access_token',
  					hidden: true
  				}]
  		} ];
  		this.buttons = [ {
  			text : 'Cancel',
  			action : 'cancel'
  		}, {
  			text : 'Add',
  			action : 'add'
  		} ];
  
  		this.callParent(arguments);
  	}
});