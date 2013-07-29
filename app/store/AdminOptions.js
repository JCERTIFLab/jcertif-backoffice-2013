Ext.define('JCertifBO.store.AdminOptions', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.AdminOption',
	autoLoad : true,

	data: [
        {name: 'Cat&eacute;gories', createUrl: '/ref/category/new', loadUrl: '/ref/category/list', updateUrl: '/ref/category/update', model: 'JCertifBO.model.Referentiel'},
        {name: 'Statuts de session', createUrl: '/ref/sessionstatus/new', loadUrl: '/ref/sessionstatus/list', updateUrl: '/ref/sessionstatus/update', model: 'JCertifBO.model.Referentiel'},
        {name: 'Niveaux de sponsoring', createUrl: '/ref/sponsorlevel/new', loadUrl: '/ref/sponsorlevel/list', updateUrl: '/ref/sponsorlevel/update', model: 'JCertifBO.model.Referentiel'},
        {name: 'Civilit&eacute;', createUrl: '/ref/title/new', loadUrl: '/ref/title/list', updateUrl: '/ref/title/update', model: 'JCertifBO.model.Referentiel'},
        {name: 'Sponsors', createUrl: '/sponsor/new', loadUrl: '/sponsor/list', updateUrl: '/rsponsor/update', model: 'JCertifBO.model.Sponsor'},
        {name: 'Sites', createUrl: '/site/new', loadUrl: '/site/list', updateUrl: '/site/update', model: 'JCertifBO.model.Site'},
        {name: 'Salles', createUrl: '/room/new', loadUrl: '/room/list', updateUrl: '/room/update', model: 'JCertifBO.model.Room'},
        {name: 'Sessions', createUrl: '/session/new', loadUrl: '/session/list', updateUrl: '/session/update', model: 'JCertifBO.model.Session'},
        {name: 'Pr&eacute;sentateurs', createUrl: '/speaker/new', loadUrl: '/speaker/list', updateUrl: '/speaker/update', model: 'JCertifBO.model.Speaker'},
        {name: 'Participants', createUrl: '/participant/new', loadUrl: '/participant/list', updateUrl: '/participant/update', model: 'JCertifBO.model.Participant'}
    ]
});