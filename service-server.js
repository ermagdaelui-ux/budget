const CACHE_NAME = "budget-tracker-cache";

const urlsToCache = [
  "index.html",
  "manifest.json",
  "style.css",
  "script.js",
  "icon-192.png",
  "icon-512.png",
  
];

self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function(response){
      return response || fetch(e.request);
    })
  );
});