const CACHE_NAME = 'fluency-bridge-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/index.json',
  '/logo.svg',
  '/pwa-setup.js',
  '/tools/transcription.html',
  '/tools/docxtopdf.html',
  '/tools/pdftoepub.html'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME && cacheName !== 'transformers-cache') {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  // Only intercept GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          // Return cached version immediately, but fetch an update in the background for HTML files
          if (event.request.headers.get('accept').includes('text/html')) {
             fetch(event.request).then(fetchRes => {
                if (fetchRes && fetchRes.status === 200) {
                   caches.open(CACHE_NAME).then(cache => cache.put(event.request, fetchRes));
                }
             }).catch(() => {});
          }
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            if(!response || (response.status !== 200 && response.type !== 'opaque')) {
              return response;
            }

            const responseToCache = response.clone();
            const url = new URL(event.request.url);
            
            // Aggressively cache internal tools and CDN dependencies for true offline usage
            const isAllowedDomain = 
                  url.origin === self.location.origin || 
                  url.hostname.includes('cdn.tailwindcss.com') ||
                  url.hostname.includes('jsdelivr.net') ||
                  url.hostname.includes('unpkg.com') ||
                  url.hostname.includes('cdnjs.cloudflare');

            if (isAllowedDomain) {
              caches.open(CACHE_NAME)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                });
            }

            return response;
          }
        ).catch(() => {
            // Provide offline fallback for HTML pages if needed
            if (event.request.headers.get('accept').includes('text/html')) {
                return caches.match('/index.html');
            }
        });
      })
  );
});
