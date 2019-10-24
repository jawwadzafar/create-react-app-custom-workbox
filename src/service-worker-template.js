if ("function" === typeof importScripts) {
  importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");
  /* global workbox */
  if (workbox) {
    console.log("Workbox is loaded");

    precachObj = {
      bootstrap: "Bootstrap",
      bootstrap: "Bootstrap"
    };

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([]);

    // to test thrid party libraries: this code can be removed
    workbox.routing.registerRoute(
      /^https:\/\/maxcdn\.bootstrapcdn\.com/,
      new workbox.strategies.CacheFirst({
        cacheName: precachObj.bootstrap
      })
    );

    self.addEventListener("install", event => event.waitUntil(self.skipWaiting()));
    self.addEventListener("activate", event => event.waitUntil(self.clients.claim()));
  } else {
    console.log("Workbox could not be loaded. No Offline support");
  }
}
