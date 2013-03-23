Ext.define('JCERTIF.controller.LoginController', {
	extend : 'Ext.app.Controller',
	views : [
	    'Login',
	],
	init : function() {
		this.control(
			{
	            'Login button[action=envoyer]': {
	                click : this.connect
	            },
	            'Login button[action=reset]': {
	                click : this.reset
	            },
	            'Login button[action=categories]': {
	            	click : this.showCategories
	            }
	        }
        );
	},
	connect : function(btn) {
		var form = btn.up('Login').getForm();

        if (form.isValid()) {		
            Ext.Ajax.request({
    			url: BACKEND_URL + '/admin',
    			jsonData : Ext.JSON.encode(form.getValues()),
			    success: function(response){

			        Ext.MessageBox.alert('Reponse positive du serveur : (positive et vide = normal) ' , response.responseText);
			    },
			    failure: function(response){
			    	Ext.MessageBox.alert('Reponse négative du serveur : ' ,response.responseText);
			    }
			});
        }

      

	},
	reset : function(btn) {
		btn.up('Login').getForm().reset();
	},
	  // Autre exemple à supprimer d'appel au service Récupération de la liste des catégories
	showCategories : function(btn){
		Ext.Ajax.request({
    			url: BACKEND_URL + '/ref/category/list',
			    success: function(response){
			        Ext.MessageBox.alert('Reponse positive du serveur : ' , response.responseText);
			    },
			    failure: function(response){
			    	Ext.MessageBox.alert('Reponse négative du serveur : ' ,response.responseText);
			    }
			});
	}
});