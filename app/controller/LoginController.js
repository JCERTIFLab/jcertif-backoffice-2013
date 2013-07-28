Ext.define('JCertifBO.controller.LoginController', {
	extend : 'Ext.app.Controller',
	views : ['Login'],
	model : 'User',
	init : function() {
		this.control({
			'login button[action=login]' : {
				click : this.connect
			},
			'login button[action=reset]' : {
				click : this.reset
			}
		});
	},
	connect : function(btn) {
		var win = btn.up('window'), form = win.down('form').getForm(), emailData = win.down('form').down('#email').getValue();
					
		if (form.isValid()) {
			Ext.Ajax.request({
				url : BACKEND_URL + '/admin',
				jsonData : Ext.JSON.encode(form.getValues()),
				success : function(response) {
				  
				  var user = Ext.create('JCertifBO.model.User', { email: emailData });			  
					Ext.create('JCertifBO.view.Home', {});				
					win.close();
					
				},
				failure : function(response) {
					Ext.MessageBox.show({
						title : 'Login Failed',
						msg : response.responseText,
						buttons : Ext.MessageBox.OK,
						icon : Ext.MessageBox.ERROR
					});
				}
			});
		}

	},
	
	reset : function(btn) {
		btn.up('window').down('form').getForm().reset();
	}
});