'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"worker.js": "f916974921b8b3d98f9fdfc4b68e5432",
"manifest.json": "c896748e44c2fc9b85bce098f415e452",
"favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"index.html": "4f63d8c7ca3c54144e6f005e210263a7",
"/": "b52732a121b80e3d1e81650f67e3d045",
"main.dart.js": "812c26ea2c7568f50226e837708de5f2",
"robots.txt": "1b0f3bfe6c36c53c05349ab6d379f011",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/AssetManifest.json": "3d9e2ad6574fd948dba0e85b707eca63",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/AssetManifest.bin": "ceac9c7fc035367b220b73ce537c5799",
"assets/assets/icon.png": "3a037591c011ca08ed28cb80d19d5c06",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/fonts/MaterialIcons-Regular.otf": "591a133d885021c5dbe3fffd706a2975",
"assets/NOTICES": "3b9fbc061dc578faf1b4f6e1e30b586c",
"assets/AssetManifest.bin.json": "c266003e0b6d849df1525a784f895bca",
"event_worker.js": "3224bd528a119c37f70dae987929472a",
"version.json": "95d4c05c5d7df283fbb11ac426802a8f",
"CNAME": "8c45886f65c2c082a87b6d9e24db7983",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"sitemap.xml": "03c4079011a76577377f60d98eb11469",
"icons/Icon-512.png": "7930ca4ec678adb3a9d47af2f6a46fbe",
"icons/Icon-maskable-512.png": "0d169028553edf58d63007dfd3f5a87d",
"icons/icon-512-maskable.png": "d796bbb909467d5909d04a4c6565d9cd",
"icons/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"icons/Icon-192.png": "4e23080fffb252c5ecf99db87852b62d",
"icons/icon-192-maskable.png": "835a6f03975966576b3fe3d14ff1fe58",
"icons/Icon-maskable-192.png": "83ebc3108a7bfad0a30624bc11732fa2",
"icons/favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"welcome/LICENSE": "a302334768be7ca47dbdeb0275aaf69e",
"welcome/index.html": "83fbcae6196ca0c645b9ce8f3142cef0",
"welcome/feed.xml": "736b2216a5c69f24d5888d780a90d9c5",
"welcome/images/artwork2.jpg": "d8bcbb63e945a127d7788881869bc584",
"welcome/images/favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"welcome/images/screenshot3.png": "e8a512fccb7967a9499b85ec5ae5b954",
"welcome/images/artwork.png": "02934bc4a0082616d99b9bd8f594885e",
"welcome/images/screenshot2.png": "d509e7be3af41fbf1305de33a30d64fd",
"welcome/images/artwork.webp": "d2ff9c0cacdcfe10bb7e02c3bda70888",
"welcome/images/logo/light.svg": "8053fac4cc83b6ab402b41c5cadc9b61",
"welcome/images/logo/dark.svg": "c1808e0d05d5d29a39c4fb3498634cc0",
"welcome/images/screenshot-buttons.svg": "679c3685e5d2b80107bd86e74de77cad",
"welcome/images/screenshot1.png": "bf626213fb532479651d9157889df184",
"welcome/contact/index.html": "1989956a18a40ab360955a08c3fa070e",
"welcome/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/about/index.html": "71aeed828550b3632bc8ae89dda16415",
"welcome/2023/07/10/tips-to-find-cfu/index.html": "acceb0e4d0cb86f2016dd60e9295b1ec",
"welcome/2023/08/30/fast-test-faq/index.html": "4849e7a8ad9af222a94a89d416cfde47",
"welcome/2023/10/05/announcement-relay-duplicate/index.html": "35f1ddaed1550f52e7dddf36c9776b19",
"welcome/2023/09/02/driving-test-in-poor-weather/index.html": "4faeaf18dc6e87f241a37be81ca3e4a1",
"welcome/css/screen.css": "4de2b033d7230af86bde5f813df799b1",
"welcome/blog/index.html": "b52732a121b80e3d1e81650f67e3d045",
"welcome/siteicon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/404.html": "91816bb9603e978c015df680cbc575ad",
"welcome/touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/js/main.js": "4df423d1361f4059651714a3b7d9b673"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
