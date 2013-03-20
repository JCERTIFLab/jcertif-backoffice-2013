
Ext.define('JCERTIF.controller.mainController', {

	extend : 'Ext.app.Controller',

	stores: [
		'pays',
		'grid',
		'grid2'
	],
	
    models: [
    	'pays',
    	'grid'
    ],

	views : [
	    'formulaire',
	    'dragNdrop'
	],

	init : function() {

		this.control(
			{
	            'formulaire button[action=envoyer]': {
	                click : this.afficheDonnee
	            },
	            'formulaire button[action=reset]': {
	                click : this.resetDonnee
	            },
	            '#refreshGrid' : {
	            	click : this.onResetClick
	            }
	        }
        );
	},

	afficheDonnee : function(btn) {
		var form = btn.up('formulaire').getForm();

        if (form.isValid()) {
        	var msg = '';

            Ext.Object.each(form.getValues(), function(key, value, myself) {
                msg += key + ":" + value + '<br>';
            });

            Ext.MessageBox.alert('Donnés envoyées', msg);
        }
	},

	resetDonnee : function(btn) {
		btn.up('formulaire').getForm().reset();
	},

	onResetClick: function(btn){
	    //refresh source grid
	    this.getGridStore().load();

	    //purge destination grid
	    this.getGrid2Store().load();
	}
});