Ext.define('JCertifBO.store.AuthProviders', {
	extend : 'Ext.data.Store',
	model : 'JCertifBO.model.AuthProvider',
	autoLoad : true,

	data: [
        {name: 'userpass', authorizationUrl: BACKEND_URL + '/admin', accessTokenUrl: BACKEND_URL + '/token/new', requestTokenUrl: BACKEND_URL + '/token/new'},
        {name: 'google', authorizationUrl: 'https://accounts.google.com/o/oauth2/auth', accessTokenUrl: 'https://accounts.google.com/o/oauth2/token', clientId: '854354618002.apps.googleusercontent.com', scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'},
        {name: 'github', authorizationUrl: 'https://github.com/login/oauth/authorize', accessTokenUrl: 'https://github.com/login/oauth/access_token', clientId: '2d0dfe17261d3b10583c', clientSecret: 'ba91b90968bb0221b1a10d142e27bb8773a9a40d', scope: 'user:email'}
    ]
});