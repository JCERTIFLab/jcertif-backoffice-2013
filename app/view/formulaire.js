Ext.define('JCERTIF.view.formulaire', {

			extend : 'Ext.form.Panel',
			alias : 'widget.formulaire',
			title : 'connexion administrateur JCertif',
			padding : 10,
			bodyPadding : 10,

			initComponent : function() {

				this.items = [{
							xtype : 'fieldset',
							title : 'Identification administrateur',
							frame : true,
							width : 420,
							bodyPadding : 10,
							defaultType: 'textfield',
							defaults : {
								allowBlank : false,
								msgTarget : 'side',
								labelWidth : 200,
								anchor : '100%',
								width : 300
							},
							items : [
								
									 {
										allowBlank : false,
										fieldLabel : 'Mot de passe',
										name : 'clef',
										emptyText : 'password',
										inputType : 'password'
									}, {
										xtype : 'checkbox',
										fieldLabel : 'Se souvenir de moi',
										name : 'remember'
									}]
						}];
				this.buttons = [{
							text : 'Annuler',
							action : 'annuler'
						}, {
							text : 'Envoyer',
							action : 'envoyer'
						}];

				this.callParent(arguments);
			}
		});