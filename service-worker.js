// service-worker.js

const CACHE_NAME = 'fc24m-transfer-cache-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/screenshot.png', // Add other resource paths as needed
                // Add more resources to cache here...
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
