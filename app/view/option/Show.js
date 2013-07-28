Ext.define("JCertifBO.view.option.Show", {
    extend: 'Ext.panel.Panel',
    alias: 'widget.optionshow',
    
    requires: [
        'JCertifBO.view.option.Grid'
    ],

    closable: false,
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        Ext.apply(this, {
            items: [{
                xtype: 'optiongrid',
                flex: 1
            }]
        });

        this.callParent(arguments);
    }
});