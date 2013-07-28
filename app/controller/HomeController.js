Ext.define('JCertifBO.controller.HomeController', {
	extend : 'Ext.app.Controller',
	views : [ 'Home', ],
	models: ['User'],
  stores: ['Users'],
    
  listeners : {
      'loggedin' : function() {
              html : "Hello User!"
       }
  },
  
  init : function() {
       var allUsers = this.getUsersStore();
	}
});
