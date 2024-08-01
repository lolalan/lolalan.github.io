'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"event_worker.js": "3224bd528a119c37f70dae987929472a",
"assets/NOTICES": "12069e21522ae3a5794604a44b2a3c06",
"assets/AssetManifest.bin.json": "ce708c2ee08eca418396e1f1311f88ea",
"assets/FontManifest.json": "cb7c7bc65885ed904d1930888b95caad",
"assets/assets/icon.png": "3a037591c011ca08ed28cb80d19d5c06",
"assets/fonts/MaterialIcons-Regular.otf": "db68437266e1dc782a54cf5b76e01d33",
"assets/AssetManifest.json": "772cb54dec37faed79d08867c96ab793",
"assets/AssetManifest.bin": "c266c3ff2046bff95b2fd49cbf721dd5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/firebase_ui_auth/fonts/SocialIcons.ttf": "c6d1e3f66e3ca5b37c7578e6f80f37d8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"CNAME": "8c45886f65c2c082a87b6d9e24db7983",
"index.html": "a51a84bcc78e752f0a83f896636670a2",
"/": "a51a84bcc78e752f0a83f896636670a2",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"flutter_bootstrap.js": "4c9227dbabff57fde9f2b3b795decbe1",
"welcome/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/siteicon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/contact/index.html": "1989956a18a40ab360955a08c3fa070e",
"welcome/index.html": "83fbcae6196ca0c645b9ce8f3142cef0",
"welcome/css/screen.css": "4de2b033d7230af86bde5f813df799b1",
"welcome/images/screenshot2.png": "d509e7be3af41fbf1305de33a30d64fd",
"welcome/images/artwork2.jpg": "d8bcbb63e945a127d7788881869bc584",
"welcome/images/screenshot3.png": "e8a512fccb7967a9499b85ec5ae5b954",
"welcome/images/artwork.webp": "d2ff9c0cacdcfe10bb7e02c3bda70888",
"welcome/images/logo/dark.svg": "c1808e0d05d5d29a39c4fb3498634cc0",
"welcome/images/logo/light.svg": "8053fac4cc83b6ab402b41c5cadc9b61",
"welcome/images/favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"welcome/images/artwork.png": "02934bc4a0082616d99b9bd8f594885e",
"welcome/images/screenshot-buttons.svg": "679c3685e5d2b80107bd86e74de77cad",
"welcome/images/screenshot1.png": "bf626213fb532479651d9157889df184",
"welcome/about/index.html": "71aeed828550b3632bc8ae89dda16415",
"welcome/feed.xml": "736b2216a5c69f24d5888d780a90d9c5",
"welcome/js/main.js": "4df423d1361f4059651714a3b7d9b673",
"welcome/404.html": "91816bb9603e978c015df680cbc575ad",
"welcome/LICENSE": "a302334768be7ca47dbdeb0275aaf69e",
"welcome/blog/index.html": "b52732a121b80e3d1e81650f67e3d045",
"welcome/2023/09/02/driving-test-in-poor-weather/index.html": "4faeaf18dc6e87f241a37be81ca3e4a1",
"welcome/2023/07/10/tips-to-find-cfu/index.html": "acceb0e4d0cb86f2016dd60e9295b1ec",
"welcome/2023/10/05/announcement-relay-duplicate/index.html": "35f1ddaed1550f52e7dddf36c9776b19",
"welcome/2023/08/30/fast-test-faq/index.html": "4849e7a8ad9af222a94a89d416cfde47",
"welcome/touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"main.dart.js": "593107a7cf1106255b28a4e4b354e30b",
"robots.txt": "1b0f3bfe6c36c53c05349ab6d379f011",
"sitemap.xml": "03c4079011a76577377f60d98eb11469",
"icons/Icon-maskable-512.png": "0d169028553edf58d63007dfd3f5a87d",
"icons/icon-192-maskable.png": "835a6f03975966576b3fe3d14ff1fe58",
"icons/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"icons/favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"icons/Icon-maskable-192.png": "83ebc3108a7bfad0a30624bc11732fa2",
"icons/Icon-512.png": "7930ca4ec678adb3a9d47af2f6a46fbe",
"icons/Icon-192.png": "4e23080fffb252c5ecf99db87852b62d",
"icons/icon-512-maskable.png": "d796bbb909467d5909d04a4c6565d9cd",
"manifest.json": "c896748e44c2fc9b85bce098f415e452",
"version.json": "95d4c05c5d7df283fbb11ac426802a8f",
"favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
