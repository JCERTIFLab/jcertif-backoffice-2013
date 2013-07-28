Ext.define('JCertifBO.controller.AdminOptionsController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions'],
    models: ['AdminOption', 'Referentiel'],
    
    views: [
        'AdminOptionsList'
    ],


    refs: [
        {ref: 'adminOptionsList', selector: 'adminoptionslist'},
        {ref: 'optionShow', selector: 'optionshow'},
        {ref: 'adminOptionsData', selector: 'adminoptionslist dataview'},
        {ref: 'optionGrid', selector: 'optiongrid'},
    ],
    
    requires: [
        'JCertifBO.store.AdminOptions'
    ],
    
    init: function() {
        this.control({
            'adminoptionslist': {
                render: this.onRenderList
            },
            'adminoptionslist dataview': {
                selectionchange: this.loadData
            }
        });
    },
    
    onRenderList: function() {
        var dataview = this.getAdminOptionsData(),
            store = this.getAdminOptionsStore();
            
        dataview.bindStore(store);
        dataview.getSelectionModel().select(store.getAt(0));
    },
    
    loadData: function(selModel, selected) {
        
        var grid = this.getOptionGrid(),
            option = selected[0];
            
        var store = Ext.create('Ext.data.Store', {
            model: option.get('model'),
            proxy: {
                type: 'ajax',
                url : BACKEND_URL + option.get('loadUrl'),
                reader: {
                    type: 'json'
                }
            },
            autoLoad: true
        });
        if (option) {
            this.getOptionShow().setTitle(option.get('name'));
            grid.enable(); 
            var fields = store.model.prototype.fields;
            var columns = [];
						for (var i = 0; i < fields.keys.length; i++) {
							var columnName = fields.keys[i];
							columns.push({
								header:     columnName,
								dataIndex:  columnName,
								filterable: true
							});
						}
						grid.reconfigure(store, columns);
            grid.getSelectionModel().select(store.getAt(0));           
        }
        
    }
});
