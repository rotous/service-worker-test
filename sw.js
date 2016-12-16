var CACHE_NAME = 'my-site-cache-v1';
var BASE_PATH = self.location.pathname.substr(0, self.location.pathname.length - 5);

var urlsToCache = [
	BASE_PATH,
	BASE_PATH + 'index.html',
	BASE_PATH + 'sw.js',
	BASE_PATH + 'js/install.js',
	BASE_PATH + 'css/reset.css',
	BASE_PATH + 'css/main.css',
	BASE_PATH + 'images/bg.png'
];

self.addEventListener('install', function(event) {
	// Perform install steps
	event.waitUntil(
	caches.open(CACHE_NAME)
		.then(function(cache) {
			return cache.addAll(urlsToCache);
		})
	);
});


self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
				// Cache hit - return response
				if (response) {
					return response;
				}
				return fetch(event.request);
			}
		)
	);
});