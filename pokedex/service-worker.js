const CACHE_NAME = 'pokedex-pwa-cache-v1';
const urlsToCache = [
  './index.html',
  './style.css',
  './functions.js',
  './pokeball.webp',
  './wall.webp',
  './none.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
      .catch(error => {
        console.error('Error al precachear recursos:', error);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.filter(cacheName => cacheName !== CACHE_NAME)
            .map(cacheName => caches.delete(cacheName))
        );
      })
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request)
          .then(networkResponse => {
            // Se clona la respuesta antes de almacenarla en caché,
            // ya que la respuesta se consumirá por el navegador para mostrarla
            const clonedResponse = networkResponse.clone();
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, clonedResponse);
              });
            return networkResponse;
          })
          .catch(error => {
            console.error('Error al recuperar el recurso desde la red:', error);
            // Aquí puedes responder con una página de "Sin conexión" o cualquier otra lógica de manejo de errores
          });
      })
  );
});
