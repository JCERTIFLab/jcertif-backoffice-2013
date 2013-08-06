Ext.define("JCertifBO.view.speaker.Add", {
    extend : 'Ext.window.Window',
  	alias : 'widget.speakeradd',
  	title : "Ajout d'un nouveau pr&eacute;sentateur",
  	width : 400,
  	height : 500,
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
  	
  	store : 'Titles',
  	
  	initComponent : function() {
        
  		this.items = [ {
  			xtype : 'form',
  			border : 0,
  			items : [ {
  					xtype : 'textfield',
  					vtype : 'email',
  					fieldLabel : 'Email',
  					name : 'email',
  					itemId : 'email',
  					emptyText : 'email',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Password',
  					name : 'password',
  					itemId : 'password',
  					emptyText : 'password',
  					minLength: 8,
  					allowblank : false,
  				},{
  					xtype : 'combo',
  					fieldLabel : 'Title',
  					store: this.store,
  					displayField: 'label',
            valueField: 'label',
  					name : 'title',
  					itemId : 'title',
  					emptyText : 'title'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Lastname',
  					name : 'lastname',
  					itemId : 'lastname',
  					emptyText : 'lastname',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Firstname',
  					name : 'firstname',
  					itemId : 'firstname',
  					emptyText : 'firstname',
  					allowblank : false,
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Website',
  					name : 'website',
  					itemId : 'website',
  					emptyText : 'website'
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
  					fieldLabel : 'Company',
  					name : 'company',
  					itemId : 'company',
  					emptyText : 'company'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Phone',
  					name : 'phone',
  					itemId : 'phone',
  					emptyText : 'phone'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Photo',
  					name : 'photo',
  					itemId : 'photo',
  					emptyText : 'photo'
  				},{
  					xtype : 'textfield',
  					fieldLabel : 'Biography',
  					name : 'biography',
  					itemId : 'biography',
  					emptyText : 'biography'
  				},{
  					xtype : 'textfield',
  					name : 'provider',
  					itemId : 'provider',
  					hidden: true
  				},{
  					xtype : 'textfield',
  					name : 'user',
  					itemId : 'user',
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