/*! coi-serviceworker v0.1.7 - Guido Zuidhof and contributors, licensed under MIT */
/*! mini-coi - Andrea Giammarchi and contributors, licensed under MIT */
(({ document, navigator: { serviceWorker } }) => {
  if (document) {
    const { currentScript } = document;
    const scope = currentScript.getAttribute('scope') || '.';
    serviceWorker.register(currentScript.src, { scope }).then(registration => {
      registration.addEventListener('updatefound', () => location.reload());
      if (registration.active && !serviceWorker.controller) location.reload();
    });
  }
  else {
    addEventListener('install', () => skipWaiting());
    addEventListener('activate', event => event.waitUntil(clients.claim()));
    addEventListener('fetch', event => {
      const { request: r } = event;
      if (r.cache === 'only-if-cached' && r.mode !== 'same-origin') return;
      event.respondWith(fetch(r).then(response => {
        const { body, status, statusText } = response;
        if (!status || status > 399) return response;
        const headers = new Headers(response.headers);
        headers.set('Cross-Origin-Opener-Policy', 'same-origin');
        headers.set('Cross-Origin-Embedder-Policy', 'require-corp');
        headers.set('Cross-Origin-Resource-Policy', 'cross-origin');
        return new Response(body, { status, statusText, headers });
      }));
    });
  }
})(self);
