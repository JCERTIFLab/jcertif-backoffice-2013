Ext.define("JCertifBO.view.option.Grid", {
    extend: 'Ext.grid.Panel',
    alias: 'widget.optiongrid',
    
    cls: 'admin-options-grid',

    requires: ['Ext.toolbar.Toolbar'],
    
    border: false,
    
    initComponent: function() {
        Ext.apply(this, {
            store: this.store,

            columns: [{
                text: 'defaultText',
                dataIndex: 'defaultIndex',
                flex: 1
            }],

            dockedItems: [{
                xtype: 'toolbar',
                items: [{
                    iconCls: 'admin-options-add',
                    text: 'Add',
                    action: 'add'
                }, {
                    iconCls: 'admin-options-remove',
                    text: 'Remove',
                    disabled: true,
                    action: 'remove'
                }]
            }],
            
            listeners: {
                selectionchange: this.onSelectionChange,
                scope: this
            }
        });

        this.callParent(arguments);
    },
    
    onSelectionChange: function(selmodel, selection) {
        var selected = selection[0],
            button = this.down('button[action=remove]');
        if (selected) {
            button.enable();
        }
        else {
            button.disable();
        }
    }
});