Ext.define("JCertifBO.view.sponsor.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.sponsorgrid',
    
    cls: 'admin-options-grid',

    requires: [
        'Ext.toolbar.Toolbar',
        'Ext.form.field.ComboBox',
        'JCertifBO.store.Countries',
        'JCertifBO.store.Cities',
    ],
    
    border: false,
    
    initComponent: function() {
        
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'Email',
                dataIndex: 'email',
                flex: 1
            }, {
                text: 'Name',
                dataIndex: 'name',
                flex: 1
            }, {
                text: 'Logo',
                dataIndex: 'logo',
                flex: 1
            }, {
                text: 'Level',
                dataIndex: 'level',
                flex: 1
            }, {
                text: 'Website',
                dataIndex: 'website',
                flex: 1
            }, {
                text: 'Country',
                dataIndex: 'country',
                flex: 1
            }, {
                text: 'City',
                dataIndex: 'city',
                flex: 1
            }, {
                text: 'Phone',
                dataIndex: 'phone',
                flex: 1
            }, {
                text: 'About',
                dataIndex: 'about',
                flex: 1
            }, {
                text: 'version',
                dataIndex: 'version',
                hidden: true,
                width: 200
            }, {
                text: 'delete',
                dataIndex: 'delete',
                hidden: true,
                width: 200
            }],
            
            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'admin-options-add',
                    text: 'Add',
                    action: 'add'
                },{
                    iconCls: 'admin-options-remove',
                    text: 'Remove',
                    itemId: 'removeSponsor',
                    action: 'remove',
                    disabled: true
                },{
                    iconCls: 'admin-options-refresh',
                    text: 'Refresh',
                    action: 'refresh'
                }]
            }],

            listeners: {
                'selectionchange': function(selectionModel, records) {
                  this.down('#removeSponsor').setDisabled(!records.length);
                }
            }
        });

        this.callParent(arguments);
    }
});