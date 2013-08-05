Ext.define('JCertifBO.controller.AdminOptionsController', {
    extend: 'Ext.app.Controller',
    
    stores: ['AdminOptions'],
    models: ['AdminOption', 'Category', 'SponsorLevel', 'Title', 'SessionStatus', 'Sponsor', 'Site', 'Room', 'Session', 'Speaker', 'Participant'],
    
    views: [
        'AdminOptionsList'
    ],


    refs: [
        {ref: 'adminOptionsList', selector: 'adminoptionslist'},
        {ref: 'optionShow', selector: 'optionshow'},
        {ref: 'adminOptionsData', selector: 'adminoptionslist dataview'},
        {ref: 'referentielGrid', selector: 'referentielgrid'},
        {ref: 'sponsorGrid', selector: 'sponsorgrid'},
        {ref: 'siteGrid', selector: 'sitegrid'},
        {ref: 'roomGrid', selector: 'roomgrid'},
        {ref: 'sessionGrid', selector: 'sessiongrid'},
        {ref: 'speakerGrid', selector: 'speakergrid'},
        {ref: 'participantGrid', selector: 'participantgrid'}
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
    
    loadData: function(selModel, records) {
        
        var option = records[0], gridName = option.get('grid');
        this.getOptionShow().removeAll();
        this.getOptionShow().add({xtype: gridName, flex: 1});
        var grid = this.getGrid(gridName);
            
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
						grid.reconfigure(store);
            grid.getSelectionModel().select(store.getAt(0));           
        }
        
    },
    
    getGrid: function(gridName) {
      if('referentielgrid' == gridName){
        return this.getReferentielGrid();
      }else if('sponsorgrid' == gridName){
        return this.getSponsorGrid();
      }else if('sitegrid' == gridName){
        return this.getSiteGrid();
      }else if('roomgrid' == gridName){
        return this.getRoomGrid();
      }else if('sessiongrid' == gridName){
        return this.getSessionGrid();
      }else if('speakergrid' == gridName){
        return this.getSpeakerGrid();
      }else if('participantgrid' == gridName){
        return this.getParticipantGrid();
      }else{
        console.log('What the fuck!')
      }
    }
});
