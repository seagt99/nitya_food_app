'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "668b6103ca3f75292075a3232d059fe3",
"assets/AssetManifest.bin.json": "0da87456ba5b4eb84b32a9d155e99ab0",
"assets/AssetManifest.json": "1aef41b969467ff333d8c2f2c8298bb6",
"assets/assets/heart-logo.png": "3ed329e0a064235229dc019aa66da6d7",
"assets/assets/intolerances.json": "d21867608fe0002b025b6f5239f0dc68",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c8f7848f843fae774526aa6433f6268b",
"assets/NOTICES": "2ebde292b70834b8231b9f5f5bd13483",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "a9f5f17e5a77b0d150bdb533492c7505",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "22d45a84559aaef8342a447e66b653ce",
"/": "22d45a84559aaef8342a447e66b653ce",
"main.dart.js": "66ace7d9cf6983c4312b10c148c88b14",
"manifest.json": "bff14c4a70139986484583b4504a24dd",
"nitya-app-deploy/.git/config": "b38046f96055639872e0744fb932cfa0",
"nitya-app-deploy/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"nitya-app-deploy/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"nitya-app-deploy/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"nitya-app-deploy/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"nitya-app-deploy/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"nitya-app-deploy/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"nitya-app-deploy/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"nitya-app-deploy/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"nitya-app-deploy/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"nitya-app-deploy/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"nitya-app-deploy/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"nitya-app-deploy/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"nitya-app-deploy/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"nitya-app-deploy/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"nitya-app-deploy/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"nitya-app-deploy/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"nitya-app-deploy/.git/index": "d62c338542b0606b04b4f5b1ceeafeef",
"nitya-app-deploy/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"nitya-app-deploy/.git/logs/HEAD": "17da5eb1c89e2802059710cf94415f86",
"nitya-app-deploy/.git/logs/refs/heads/main": "17da5eb1c89e2802059710cf94415f86",
"nitya-app-deploy/.git/logs/refs/remotes/origin/HEAD": "17da5eb1c89e2802059710cf94415f86",
"nitya-app-deploy/.git/objects/pack/pack-cab032f53962186fcf085bcf82f6f6f848591269.idx": "a3672f82172d4bc7f43ed2a0041d58f6",
"nitya-app-deploy/.git/objects/pack/pack-cab032f53962186fcf085bcf82f6f6f848591269.pack": "147916dde22d752b4880ec67a01a54f7",
"nitya-app-deploy/.git/objects/pack/pack-cab032f53962186fcf085bcf82f6f6f848591269.rev": "a7c64b6eb34f959aa48ce0fbcac165d2",
"nitya-app-deploy/.git/packed-refs": "03534d39c4c9d0de614077c2a4688927",
"nitya-app-deploy/.git/refs/heads/main": "020ba9a331afb43b1f3762e574790781",
"nitya-app-deploy/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"nitya-app-deploy/api/chat.js": "ed6130f7fa855a47fd177f2d96bb0af3",
"nitya-app-deploy/assets/AssetManifest.bin": "668b6103ca3f75292075a3232d059fe3",
"nitya-app-deploy/assets/AssetManifest.bin.json": "0da87456ba5b4eb84b32a9d155e99ab0",
"nitya-app-deploy/assets/AssetManifest.json": "1aef41b969467ff333d8c2f2c8298bb6",
"nitya-app-deploy/assets/assets/heart-logo.png": "3ed329e0a064235229dc019aa66da6d7",
"nitya-app-deploy/assets/assets/intolerances.json": "d21867608fe0002b025b6f5239f0dc68",
"nitya-app-deploy/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"nitya-app-deploy/assets/fonts/MaterialIcons-Regular.otf": "c8f7848f843fae774526aa6433f6268b",
"nitya-app-deploy/assets/NOTICES": "2ebde292b70834b8231b9f5f5bd13483",
"nitya-app-deploy/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"nitya-app-deploy/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"nitya-app-deploy/canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"nitya-app-deploy/canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"nitya-app-deploy/canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"nitya-app-deploy/canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"nitya-app-deploy/canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"nitya-app-deploy/canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"nitya-app-deploy/canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"nitya-app-deploy/canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"nitya-app-deploy/canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"nitya-app-deploy/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"nitya-app-deploy/flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"nitya-app-deploy/flutter_bootstrap.js": "06d9dc011a6370195c5e826652eb3a87",
"nitya-app-deploy/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"nitya-app-deploy/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"nitya-app-deploy/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"nitya-app-deploy/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"nitya-app-deploy/index.html": "22d45a84559aaef8342a447e66b653ce",
"nitya-app-deploy/main.dart.js": "66ace7d9cf6983c4312b10c148c88b14",
"nitya-app-deploy/manifest.json": "bff14c4a70139986484583b4504a24dd",
"nitya-app-deploy/vercel.json": "70e69cf759e072ce5363f89dc3bf4fb0",
"nitya-app-deploy/version.json": "b7a3141e7fdb7abaf22cd82e449179a5",
"nitya-app-deploy/_redirects": "c62c109df475b368db5e075d5e2f0052",
"version.json": "b7a3141e7fdb7abaf22cd82e449179a5"};
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
