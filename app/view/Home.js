Ext.define("JCertifBO.view.Home", {
	extend : 'Ext.container.Viewport',
	requires: [	    
      'JCertifBO.view.Viewer',
      'JCertifBO.view.AdminOptionsList',
      'Ext.layout.container.Border'
  ],
	layout: 'border',
	items: [{
        region: 'north',
        title: 'JCertif BackOffice',
        xtype: 'panel'
    },{
        region: 'center',
        xtype: 'viewer'      
    },{
        region: 'west',
        width: 225,
        xtype: 'adminoptionslist'      
    }]
});