Ext.define('JCertifBO.controller.AdminOptionsShowController', {
    extend: 'Ext.app.Controller',
    
    models: ['AdminOption', 'Referentiel', 'Sponsor', 'Site', 'Room', 'Session', 'Speaker', 'Participant'],
    
    views: [
        'option.Show',
        'option.Add'
    ],


    refs: [
        {ref: 'viewer', selector: 'viewer'}
    ],
    
    init: function() {
        this.control({
            'optiongrid button[action=add]': {
                click: this.addOption
            }
        });
    },
    
    addOption: function(){
      Ext.create('JCertifBO.view.referentiel.Add');
    }
});
