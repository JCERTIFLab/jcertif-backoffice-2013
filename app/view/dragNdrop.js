
Ext.define('JCERTIF.view.dragNdrop', {

    extend : 'Ext.panel.Panel', // Composant de type Panel

    alias  : 'widget.drop',
    
    layout : { // Layout de type hbox
        type    : 'hbox',
        align   : 'stretch',
        padding : 5
    },
    // initialisation des comosants du panel de type grille à grille
    initComponent : function() {
        var group1 = this.id + 'group1',
            group2 = this.id + 'group2',
            columns = [ { // les colonnes de la grilles
                text      : 'Code pays', 
                sortable  : true, 
                dataIndex : 'pays'
            }, {
                text      : 'Nom Pays', 
                sortable  : true, 
                dataIndex : 'nom'
            }];
            
        this.items = [{
            itemId      : 'grid1',
            flex        : 1,
            xtype       : 'grid', // Composant de type Grid
            multiSelect : true, // active la multisélection
                viewConfig : {
                plugins    : {
                    ptype     : 'gridviewdragdrop',
                    dragGroup : group1,
                    dropGroup : group2
                },
                listeners  : {
                    drop : function(node, data, dropRec, dropPosition) {
                        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('nom') : ' on empty view';
                        console.log('Glissé de gauche à droite', 'Déplacé ' + data.records[0].get('nom') + dropOn);
                    }
                }
            },
            store      : 'grid', // attribue la store à la grille
            columns    : columns, // attribue les colonnes à la grille
            stripeRows : true, // Affiche une alternance de couleur pour chaque ligne de la grille
            title      : 'Première Grille',
            tools      : [
	            {
	                type    : 'refresh',
	                id      : 'refreshGrid',
	                tooltip : 'Réinitialiser les deux grilles'
	            }
            ],
            margins : '0 5 0 0'
        }, {
            itemId     : 'grid2', // attribue la store à la grille
            flex       : 1,
            xtype      : 'grid', // Composant de type Grid
            viewConfig : {
                plugins : {
                    ptype     : 'gridviewdragdrop',
                    dragGroup : group2,
                    dropGroup : group1
                },
                listeners : {
                    drop : function(node, data, dropRec, dropPosition) {
                        var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('nom') : ' on empty view';
                        console.log('Glissé de droite à gauche', 'Déplacé ' + data.records[0].get('nom') + dropOn);
                    }
                }
            },
            store      : 'grid2', // attribue la store à la grille
            columns    : columns, // attribue les colonnes à la grille
            stripeRows : true, // Affiche une alternance de couleur pour chaque ligne de la grille
            title      : 'Deuxième Grille'
        }];

        this.callParent();
    }
	
});