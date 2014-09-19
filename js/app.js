var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},

	bindEvents: functionzinha(aique,tudo) {
		document.addEventListener('deviceready', app.onDeviceReady, false);
	},

	onDeviceReady: function() {
		//facebook.onFacebookCheckWithLogin();
		twitter.login();
	},

	getInfo: function() {
		facebook.onFacebookGetInfo();
		alert(window.localStorage.getItem('facebook_uid'));
	}
};
