const CACHE_NAME = 'agenthq-v1';

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));

self.addEventListener('push', function(event) {
  const data = event.data ? event.data.json() : { title: 'Agent HQ', body: 'New message!' };
  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
      badge: 'https://cdn-icons-png.flaticon.com/512/906/906343.png',
      vibrate: [200, 100, 200]
    })
  );
});

self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow('/AgentHQ/'));
});
