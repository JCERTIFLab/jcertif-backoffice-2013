
Ext.define('JCERTIF.store.grid2', {

    extend : 'Ext.data.Store',	

    model  : 'JCERTIF.model.grid',
    autoLoad : true,

	proxy  : {
		type : 'ajax',
		url  : 'data/grid2.json'
	}
});