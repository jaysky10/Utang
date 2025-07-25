const CACHE_NAME = 'loan-app-cache-v1';
const URLS_TO_CACHE = [
  '/Utang/index.html',
  '/Utang/manifest.json',
  '/Utang/icon.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
