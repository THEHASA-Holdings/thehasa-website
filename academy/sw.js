// Keeps the Academy pages and Module 1 available offline. Class dates and records always come fresh from the network when online.
var C = 'dmam-v3';
var FILES = ['./', 'index.html', 'manifest.json', 'img/skills-artisans-1-s.webp', 'img/skills-artisans-2-s.webp', 'img/icon-192.png'];
self.addEventListener('install', function(e){ e.waitUntil(caches.open(C).then(function(c){ return c.addAll(FILES); })); self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(caches.keys().then(function(k){ return Promise.all(k.filter(function(x){ return x !== C; }).map(function(x){ return caches.delete(x); })); })); self.clients.claim(); });
self.addEventListener('fetch', function(e){
  var u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) { return; }
  e.respondWith(fetch(e.request).then(function(r){ var copy = r.clone(); caches.open(C).then(function(c){ c.put(e.request, copy); }); return r; }).catch(function(){ return caches.match(e.request).then(function(m){ return m || caches.match('index.html'); }); }));
});
