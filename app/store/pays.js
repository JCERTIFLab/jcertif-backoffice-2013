
Ext.define('JCERTIF.store.pays', {

    extend : 'Ext.data.Store',	

    model  : 'JCERTIF.model.pays',
    // autoLoad : true,

	proxy  : {
		type : 'ajax',
		url  : 'data/pays.json'
	}
});