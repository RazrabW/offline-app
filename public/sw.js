var CACHE_NAME = 'save_list';
var urlsToCache = [
	'index.html',
	'js/vue.min.js',
	'js/offline.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      caches.match(event.request).then(function(response) {
        return response;
        console.log(1)
      }
    );
});