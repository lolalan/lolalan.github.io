'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/assets/icon.png": "3a037591c011ca08ed28cb80d19d5c06",
"assets/fonts/MaterialIcons-Regular.otf": "2b5eead0bc5d0fcd09ed62c53cd2f797",
"assets/AssetManifest.json": "3d9e2ad6574fd948dba0e85b707eca63",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "ceac9c7fc035367b220b73ce537c5799",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/NOTICES": "b6bae4630299eda4c1becd851dc5ce83",
"robots.txt": "1b0f3bfe6c36c53c05349ab6d379f011",
"version.json": "95d4c05c5d7df283fbb11ac426802a8f",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432",
"favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"manifest.json": "c896748e44c2fc9b85bce098f415e452",
"index.html": "ecd1f9b25f89bb2e12bde505bf6105c5",
"/": "71aeed828550b3632bc8ae89dda16415",
"favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"CNAME": "8c45886f65c2c082a87b6d9e24db7983",
"sitemap.xml": "234c270549bb49687e6194cfcd3043ce",
"icons/Icon-192.png": "4e23080fffb252c5ecf99db87852b62d",
"icons/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"icons/favicon.ico": "9ffb1e850f2efdbf2cab1e67df2b7bbe",
"icons/icon-192-maskable.png": "835a6f03975966576b3fe3d14ff1fe58",
"icons/Icon-maskable-192.png": "83ebc3108a7bfad0a30624bc11732fa2",
"icons/Icon-512.png": "7930ca4ec678adb3a9d47af2f6a46fbe",
"icons/Icon-maskable-512.png": "0d169028553edf58d63007dfd3f5a87d",
"icons/icon-512-maskable.png": "d796bbb909467d5909d04a4c6565d9cd",
"welcome/feed.xml": "a00653bb2957b7d879d9c1cf13d7d49e",
"welcome/contact/index.html": "1989956a18a40ab360955a08c3fa070e",
"welcome/js/main.js": "4df423d1361f4059651714a3b7d9b673",
"welcome/images/artwork.png": "02934bc4a0082616d99b9bd8f594885e",
"welcome/images/logo/light.svg": "8053fac4cc83b6ab402b41c5cadc9b61",
"welcome/images/logo/dark.svg": "c1808e0d05d5d29a39c4fb3498634cc0",
"welcome/images/screenshot2.png": "d509e7be3af41fbf1305de33a30d64fd",
"welcome/images/screenshot-buttons.svg": "679c3685e5d2b80107bd86e74de77cad",
"welcome/images/artwork2.jpg": "d8bcbb63e945a127d7788881869bc584",
"welcome/images/favicon.png": "5b62957709c3bcaa672440fb3f7033e7",
"welcome/images/artwork.webp": "d2ff9c0cacdcfe10bb7e02c3bda70888",
"welcome/images/screenshot1.png": "bf626213fb532479651d9157889df184",
"welcome/images/screenshot3.png": "e8a512fccb7967a9499b85ec5ae5b954",
"welcome/apple-touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/index.html": "83fbcae6196ca0c645b9ce8f3142cef0",
"welcome/blog/index.html": "14b42de6d91823abc399918c58d34bd1",
"welcome/2023/08/30/fast-test-faq/index.html": "14a961ca720ec07a5fe026d46a905262",
"welcome/2023/07/10/tips-to-find-cfu/index.html": "acceb0e4d0cb86f2016dd60e9295b1ec",
"welcome/about/index.html": "71aeed828550b3632bc8ae89dda16415",
"welcome/404.html": "91816bb9603e978c015df680cbc575ad",
"welcome/css/screen.css": "4de2b033d7230af86bde5f813df799b1",
"welcome/LICENSE": "a302334768be7ca47dbdeb0275aaf69e",
"welcome/touch-icon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"welcome/siteicon.png": "1ba448e6bb7cf6c8ca7a2e9ce80cbc80",
"event_worker.js": "3224bd528a119c37f70dae987929472a",
"main.dart.js": "5e1b5f9d4389c903c4ae103feaaf9f58",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9"};
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
