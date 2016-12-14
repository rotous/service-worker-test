(function(){

	"use strict";

	if ( 'serviceWorker' in navigator ){
		// Install the service worker
		window.addEventListener('load', function() {
			navigator.serviceWorker.register('sw.js')
				.then(function(registration) {
					// Registration was successful
					console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}).catch(function(err) {
					// registration failed :(
					console.log('ServiceWorker registration failed: ', err);
				});
		});

	}

}());
