const cacheName = 'readify-v1';
const assets = [
  './',
  './Home.html',
  './style.css',
  './Logo.png',
  './main(logic).js'
];

// Install Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// Fetching content
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});