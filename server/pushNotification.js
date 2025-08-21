const webpush = require("web-push");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Tạo VAPID keys (chạy một lần để tạo keys)
const vapidKeys = webpush.generateVAPIDKeys();

// Cấu hình VAPID
webpush.setVapidDetails(
  "mailto:your-email@example.com", // Thay thế bằng email của bạn
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// Lưu trữ subscriptions (trong thực tế nên dùng database)
let subscriptions = [];

// API để lưu subscription
app.post("/api/push/subscribe", (req, res) => {
  const { subscription, userId } = req.body;

  // Kiểm tra xem subscription đã tồn tại chưa
  const existingIndex = subscriptions.findIndex(
    (sub) => sub.subscription.endpoint === subscription.endpoint
  );

  if (existingIndex >= 0) {
    // Cập nhật subscription hiện tại
    subscriptions[existingIndex] = { subscription, userId };
  } else {
    // Thêm subscription mới
    subscriptions.push({ subscription, userId });
  }

  console.log("Subscription saved:", subscription.endpoint);
  res.status(200).json({ message: "Subscription saved successfully" });
});

// API để gửi thông báo cho tất cả người dùng
app.post("/api/push/send", async (req, res) => {
  const { title, body, icon, data } = req.body;

  const payload = JSON.stringify({
    title: title || "Music App",
    body: body || "Bạn có thông báo mới!",
    icon: icon || "/logo192.png",
    data: data || {},
  });

  const results = [];

  for (const { subscription } of subscriptions) {
    try {
      await webpush.sendNotification(subscription, payload);
      results.push({ success: true, endpoint: subscription.endpoint });
    } catch (error) {
      console.error("Error sending notification:", error);
      results.push({
        success: false,
        endpoint: subscription.endpoint,
        error: error.message,
      });
    }
  }

  res.json({
    message: "Notifications sent",
    results,
    total: subscriptions.length,
    successful: results.filter((r) => r.success).length,
  });
});

// API để gửi thông báo cho user cụ thể
app.post("/api/push/send-to-user", async (req, res) => {
  const { userId, title, body, icon, data } = req.body;

  const userSubscriptions = subscriptions.filter(
    (sub) => sub.userId === userId
  );

  if (userSubscriptions.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }

  const payload = JSON.stringify({
    title: title || "Music App",
    body: body || "Bạn có thông báo mới!",
    icon: icon || "/logo192.png",
    data: data || {},
  });

  const results = [];

  for (const { subscription } of userSubscriptions) {
    try {
      await webpush.sendNotification(subscription, payload);
      results.push({ success: true, endpoint: subscription.endpoint });
    } catch (error) {
      console.error("Error sending notification:", error);
      results.push({
        success: false,
        endpoint: subscription.endpoint,
        error: error.message,
      });
    }
  }

  res.json({
    message: "Notifications sent to user",
    results,
    total: userSubscriptions.length,
    successful: results.filter((r) => r.success).length,
  });
});

// API để lấy VAPID public key
app.get("/api/push/vapid-public-key", (req, res) => {
  res.json({ publicKey: vapidKeys.publicKey });
});

// API để xóa subscription
app.delete("/api/push/unsubscribe", (req, res) => {
  const { endpoint } = req.body;

  const index = subscriptions.findIndex(
    (sub) => sub.subscription.endpoint === endpoint
  );

  if (index >= 0) {
    subscriptions.splice(index, 1);
    res.json({ message: "Subscription removed successfully" });
  } else {
    res.status(404).json({ message: "Subscription not found" });
  }
});

// API để lấy danh sách subscriptions (chỉ dùng cho admin)
app.get("/api/push/subscriptions", (req, res) => {
  res.json({
    subscriptions: subscriptions.map((sub) => ({
      userId: sub.userId,
      endpoint: sub.subscription.endpoint,
    })),
    total: subscriptions.length,
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Push notification server running on port ${PORT}`);
  console.log("VAPID Public Key:", vapidKeys.publicKey);
  console.log("VAPID Private Key:", vapidKeys.privateKey);
});

module.exports = app;
