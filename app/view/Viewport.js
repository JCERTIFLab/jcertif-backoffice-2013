Ext.define("JCertifBO.view.Viewport", {
    extend: 'Ext.container.Viewport',
    requires: [
  	    'JCertifBO.view.Login'
    ],
    
    layout: {
      type: 'vbox',
      align: 'center',
      pack: 'center'
    },
    items : [
        {
            region    : 'center',
            xtype     : 'login'
        }
    ]
});