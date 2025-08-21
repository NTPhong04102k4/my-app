// Service Worker cho Push Notifications
self.addEventListener("push", function (event) {
  console.log("Push event received:", event);

  const options = {
    body: event.data ? event.data.text() : "Bạn có thông báo mới!",
    icon: "/logo192.png",
    badge: "/logo192.png",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "Xem ngay",
        icon: "/logo192.png",
      },
      {
        action: "close",
        title: "Đóng",
        icon: "/logo192.png",
      },
    ],
  };

  event.waitUntil(self.registration.showNotification("Music App", options));
});

self.addEventListener("notificationclick", function (event) {
  console.log("Notification click received:", event);

  event.notification.close();

  if (event.action === "explore") {
    // Mở trang web khi click vào "Xem ngay"
    event.waitUntil(clients.openWindow("/"));
  }
});

self.addEventListener("notificationclose", function (event) {
  console.log("Notification closed:", event);
});
