
Ext.define('JCERTIF.controller.MainController', {
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
	    'dragNdrop'
	],
	init : function() {
		this.control(
			{
	            
	            '#refreshGrid' : {
	            	click : this.onResetClick
	            }
	        }
        );
	},
	onResetClick: function(btn){
	    //refresh source grid
	    this.getGridStore().load();

	    //purge destination grid
	    this.getGrid2Store().load();
	}
});