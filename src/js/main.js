Ext.require([
    'Ext.form.*',
    'Ext.window.Window'
]);

Ext.onReady(function() { // Lorsque le DOM a finit de chargé

	var	form = Ext.create('Ext.form.Panel', {
	    width: 500,
	    height: 300,
	    title: "FormLayout Panel",
	    // layout: 'form',
	    renderTo: Ext.getBody(),
	    bodyPadding: 5,
	    defaultType: 'textfield',
	    items: [
		    {
		       	fieldLabel : 'Nom',
		        name       : 'name',
		        allowBlank : false
		    }, {
		        fieldLabel : 'Email',
		        vtype      : 'email',
		        name       : 'email'
		    }, {
		        xtype      : 'datefield',
		        fieldLabel : 'Date',
		        name       : 'date'
		    }, {
		    	xtype      : 'numberfield',
		        fieldLabel : 'Age',
		        format     : 'd-m-y',
		        name       : 'age',
		        minValue   : 0,
		        maxValue   : 100
		    }
	    ],
	    buttons : [
	    	{
	    		text    : 'annuler',
	    		handler : function() {

	    		}
	    	}, {
	    		text : 'envoyer',
	    		handler : function () {
	    			var form = this.up('form').getForm();
	    			if (form.isValid()) {
	    				form.submit({
	    				    clientValidation: true,
	    				    url: 'php/form.php',
	    				    success: function(form, action) {
	    				       Ext.Msg.alert('Success', action.result.msg);
	    				    },
	    				    failure: function(form, action) {
	    				        switch (action.failureType) {
	    				            case Ext.form.action.Action.CLIENT_INVALID:
	    				                Ext.Msg.alert('Failure', 'Form fields may not be submitted with invalid values');
	    				                break;
	    				            case Ext.form.action.Action.CONNECT_FAILURE:
	    				                Ext.Msg.alert('Failure', 'Ajax communication failed');
	    				                break;
	    				            case Ext.form.action.Action.SERVER_INVALID:
	    				               Ext.Msg.alert('Failure', action.result.msg);
	    				       }
	    				    }
	    				});
	    			} else {
	    				Ext.Msg.alert('Erreur', 'Le formulaire est invalide !');
	    			}
	    		}
	    	}
	    ]
	});

	var required = '<span style="color:red;font-weight:bold">*</span>';

	var formulaire_1 = Ext.create('Ext.form.Panel',{
        id            : 'id_formulaire_1',
        collapsible   : true,
        frame         : true,
        title         : 'Simple Form with FieldSets',
        bodyPadding   : '5 5 0',
        width         : 350,
        fieldDefaults : {
            // msgTarget: 'side',
            labelWidth: 110
        },
        defaults: {
            anchor: '100%'
        },
        items: [
	        {
	            xtype          : 'fieldset', // type du compoosant
	            checkboxToggle : true, // affiche une case à cocher au niveau du fieldset
	            title          : 'Information sur l\'utilisateur', // titre du fieldset
	            defaultType    : 'textfield', // xtype des items par défaut
	            collapsed      : true, // il est réduit par défaut
	            layout         : 'anchor', // layout anchor qui permet 
	            defaults       : {
	                anchor: '100%'
	            },
	            items :[{
	                fieldLabel     : 'Nom',
	                name           : 'nom',
	                labelSeparator : ' : ',
	                allowBlank     : false
	            },{
	                fieldLabel     : 'Prenom',
	                name           : 'prenom',
	                labelSeparator : ' : ',
	                allowBlank     : false
	            },{
	                fieldLabel     : 'Adresse',
	                name           : 'adresse',
	                labelSeparator : ' : ',
	                allowBlank     : false
	            }, {
	                fieldLabel     : 'Email',
	                name           : 'email',
	                labelSeparator : ' : ',
	                vtype          : 'email',
	                allowBlank     : false
	            }]
	        }, {
	            xtype       : 'fieldset',
	            title       : 'Phone Number',
	            collapsible : true,
	            defaultType : 'textfield',
	            layout      : 'anchor',
	            defaults : {
	                anchor: '100%'
	            },
	            items : [
		            {
		                fieldLabel     : 'Téléphone fixe',
		                name           : 'tel_fixe',
		                labelSeparator : ' : ',
		                value          : '(888) 555-1212'
		            }, {
		                fieldLabel     : 'Téléphone travail',
		                name           : 'tel_travail',
		                labelSeparator : ' : '
		            }, {
		                fieldLabel     : 'Téléphone mobile',
		                name           : 'mobile',
		                labelSeparator : ' : '
		            }, {
		                fieldLabel     : 'Fax',
		                name           : 'fax',
		                labelSeparator : ' : '
		            }
	            ]
	        }
        ],
        buttons: [
	        {
	            text : 'Annuler'
	        }, {
	            text : 'Sauvegarder'
	        }
        ]
    });
	
	var formulaire_2 = Ext.create('Ext.form.Panel', {
        id            : 'id_formulaire_2',
        collapsible   : true,
        frame         : true,
        title         : 'Multi Column, Nested Layouts and Anchoring',
        bodyPadding   : '5 5 0',
        fieldDefaults : {
            labelAlign : 'top',
            msgTarget  : 'side'
        },
        items: [
        	{ 
        		xtype  : 'container', anchor : '100%', layout : 'hbox',
	        	items  : [
	            	{
		                xtype : 'container', flex : 1, layout : 'anchor',
		                items : [
			                { xtype : 'textfield', fieldLabel : 'First Name', afterLabelTextTpl : required, allowBlank : false, name : 'first', anchor : '95%', value : 'Don' }, 
			                { xtype : 'textfield', fieldLabel : 'Company', name : 'company', anchor :'95%'}
		                ]
		            }, {
		            	xtype : 'container', flex : 1, layout : 'anchor',
		                items : [
			                {xtype : 'textfield', fieldLabel : 'Last Name', afterLabelTextTpl : required, allowBlank : false, name : 'last', anchor : '100%', value : 'Griffin'},
			                {xtype : 'textfield', fieldLabel : 'Email', afterLabelTextTpl : required, allowBlank : false, name : 'email', vtype : 'email', anchor : '100%'}
		                ]
		            }
	            ]
	        }, 
	        { xtype : 'htmleditor', name : 'bio', fieldLabel : 'Biography', height : 200, anchor : '100%' }
        ],
        buttons : [
	        {
	            text    : 'Save',
	            handler : function() {
	                this.up('form').getForm().isValid(); 
	                console.log(Ext.getCmp('id_formulaire_2').getForm());               
	                console.log(this.up('form').getForm());               
	            }
	        }, {
	            text    : 'Cancel',
	            handler : function() {
	                this.up('form').getForm().reset();
	            }
	        }
        ]
    });

	var formulaire_3 = Ext.create('Ext.form.Panel', {
	    id            : 'id_formulaire_3',
	    width         : 350,
	    border        : false,
	    bodyBorder    : false,
	    fieldDefaults : {
	        labelWidth : 75,
	        msgTarget : 'side'
	    },
	    items: {
	        xtype :'tabpanel', activeTab: 0,
	        defaults : {
	            bodyPadding: 10,
	            layout: 'anchor'
	        },

	        items:[{
	            title:'Personal Details',
	            defaultType: 'textfield',
	            defaults: {
	                anchor: '100%'
	            },
	            items: [{
	                fieldLabel: 'First Name',
	                name: 'first',
	                afterLabelTextTpl: required,
	                allowBlank: false,
	                value: 'Ed'
	            },{
	                fieldLabel: 'Last Name',
	                afterLabelTextTpl: required,
	                allowBlank: false,
	                name: 'last',
	                value: 'Spencer'
	            },{
	                fieldLabel: 'Company',
	                name: 'company',
	                value: 'Ext JS'
	            }, {
	                fieldLabel: 'Email',
	                afterLabelTextTpl: required,
	                allowBlank: false,
	                name: 'email',
	                vtype:'email'
	            }]
	        },{
	            title: 'Phone Numbers',
	            defaultType: 'textfield',
	            defaults: {
	                anchor: '100%'
	            },
	            items: [{
	                fieldLabel: 'Home',
	                name: 'home',
	                value: '(888) 555-1212'
	            },{
	                fieldLabel: 'Business',
	                name: 'business'
	            },{
	                fieldLabel: 'Mobile',
	                name: 'mobile'
	            },{
	                fieldLabel: 'Fax',
	                name: 'fax'
	            }]
	        }]
	    },

	    buttons: [{
	        text: 'Save',
	        handler: function() {
	            this.up('form').getForm().isValid();
	        }
	    },{
	        text: 'Cancel',
	        handler: function() {
	            this.up('form').getForm().reset();
	        }
	    }]
	});

	var formulaire_4 = Ext.create('Ext.form.Panel',{
	       title: 'Inner Tabs',
	       id: 'id_formulaire_4',
	       collapsible: true,
	       bodyPadding: 5,
	       width: 600,
	       fieldDefaults: {
	           labelAlign: 'top',
	           msgTarget: 'side'
	       },
	       defaults: {
	           anchor: '100%'
	       },

	       items: [{
	           xtype: 'container',
	           layout:'hbox',
	           items:[{
	               xtype: 'container',
	               flex: 1,
	               border:false,
	               layout: 'anchor',
	               defaultType: 'textfield',
	               items: [{
	                   fieldLabel: 'First Name',
	                   afterLabelTextTpl: required,
	                   allowBlank: false,
	                   name: 'first',
	                   anchor:'95%'
	               }, {
	                   fieldLabel: 'Company',
	                   name: 'company',
	                   anchor:'95%'
	               }]
	           },{
	               xtype: 'container',
	               flex: 1,
	               layout: 'anchor',
	               defaultType: 'textfield',
	               items: [{
	                   fieldLabel: 'Last Name',
	                   afterLabelTextTpl: required,
	                   allowBlank: false,
	                   name: 'last',
	                   anchor:'95%'
	               },{
	                   fieldLabel: 'Email',
	                   afterLabelTextTpl: required,
	                   allowBlank: false,
	                   name: 'email',
	                   vtype:'email',
	                   anchor:'95%'
	               }]
	           }]
	       },{
	           xtype:'tabpanel',
	           plain:true,
	           activeTab: 0,
	           height:235,
	           defaults:{
	               bodyPadding: 10
	           },
	           items:[{
	               title:'Personal Details',
	               defaults: {
	                   width: 230
	               },
	               defaultType: 'textfield',

	               items: [{
	                   fieldLabel: 'First Name',
	                   name: 'first',
	                   value: 'Jamie'
	               },{
	                   fieldLabel: 'Last Name',
	                   name: 'last',
	                   value: 'Avins'
	               },{
	                   fieldLabel: 'Company',
	                   name: 'company',
	                   value: 'Ext JS'
	               }, {
	                   fieldLabel: 'Email',
	                   name: 'email',
	                   vtype:'email'
	               }]
	           },{
	               title:'Phone Numbers',
	               defaults: {
	                   width: 230
	               },
	               defaultType: 'textfield',

	               items: [{
	                   fieldLabel: 'Home',
	                   name: 'home',
	                   value: '(888) 555-1212'
	               },{
	                   fieldLabel: 'Business',
	                   name: 'business'
	               },{
	                   fieldLabel: 'Mobile',
	                   name: 'mobile'
	               },{
	                   fieldLabel: 'Fax',
	                   name: 'fax'
	               }]
	           },{
	               cls: 'x-plain',
	               title: 'Biography',
	               layout: 'fit',
	               items: {
	                   xtype: 'htmleditor',
	                   name: 'bio2',
	                   fieldLabel: 'Biography'
	               }
	           }]
	       }],

	       buttons: [{
	           text: 'Save',
	           handler: function() {
	               this.up('form').getForm().isValid();
	           }
	       },{
	           text: 'Cancel',
	           handler: function() {
	               this.up('form').getForm().reset();
	           }
	       }]
	   });

	Ext.create('Ext.container.Viewport', {
	    layout: 'border',
	    items: [{
	        region: 'north',
	        html: '<h1 class="x-panel-header">Page Title</h1>',
	        border: false,
	        margins: '0 0 5 0'
	    }, {
	        region: 'west',
	        collapsible: true,
	        title: 'Navigation',
	        bodyPadding : 10,
	        items : [form]
	        // could use a TreePanel or AccordionLayout for navigational items
	    }, {
	        region: 'south',
	        title: 'South Panel',
	        collapsible: true,
	        html: 'Information goes here',
	        split: true,
	        height: 100,
	        minHeight: 100
	    }, {
	        region: 'east',
	        title: 'East Panel',
	        collapsible: true,
	        split: true,
	        width: 150	        
	    }, {
	        region: 'center',
	        xtype: 'tabpanel', // TabPanel itself has no title
	        activeTab: 0,      // First tab active by default
	        items: [
		        {
		            title: 'Formulaire n°1',
		            padding : 5,
		            flex : 1,
		            items : [formulaire_1]
		        }, {
		        	title: 'Formulaire n°2',
		        	padding : 5,
		        	flex : 1,
		        	items : [formulaire_2]
		        }, {
		        	title: 'Formulaire n°3',
		        	padding : 5,
		        	flex : 1,
		        	items : [formulaire_3]
		        }, {
		        	title: 'Formulaire n°4',
		        	padding : 5,
		        	flex : 1,
		        	items : [formulaire_4]
		        }
	        ]
	    }]
	});


});