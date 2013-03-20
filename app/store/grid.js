
Ext.define('JCERTIF.store.grid', {

    extend : 'Ext.data.Store',	

    model  : 'JCERTIF.model.grid',
    autoLoad : true,

	proxy  : {
		type : 'ajax',
		url  : 'data/grid.json'
	}
});