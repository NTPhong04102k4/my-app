# 🚀 Push Notifications Setup Guide

## Tổng quan
Hệ thống Push Notifications cho phép gửi thông báo đến thiết bị người dùng ngay cả khi trang web không được mở.

## 📋 Yêu cầu hệ thống

### Frontend (React App)
- ✅ Service Worker (`/public/sw.js`)
- ✅ NotificationService (`/src/utils/notificationService.ts`)
- ✅ NotificationSettings Component (`/src/components/NotificationSettings.tsx`)

### Backend (Node.js Server)
- ✅ Express server (`/server/pushNotification.js`)
- ✅ web-push library
- ✅ VAPID keys

## 🛠️ Cài đặt

### 1. Cài đặt dependencies cho server
```bash
cd server
npm install
```

### 2. Khởi động server
```bash
cd server
npm start
```

Server sẽ chạy trên port 3001 và hiển thị VAPID keys trong console.

### 3. Cập nhật VAPID keys
Sao chép VAPID public key từ console và cập nhật trong `src/utils/notificationService.ts` nếu cần.

## 🔧 Cách hoạt động

### 1. **Service Worker** (`/public/sw.js`)
- Xử lý push events từ server
- Hiển thị notifications
- Xử lý click events trên notifications

### 2. **NotificationService** (`/src/utils/notificationService.ts`)
- Quản lý đăng ký/hủy đăng ký push notifications
- Kiểm tra quyền thông báo
- Giao tiếp với server

### 3. **Server API** (`/server/pushNotification.js`)
- Lưu trữ subscriptions
- Gửi push notifications
- Quản lý VAPID keys

## 📱 Sử dụng

### 1. **Đăng ký thông báo**
```typescript
import notificationService from './utils/notificationService';

// Đăng ký push notifications
await notificationService.subscribeToPush();
```

### 2. **Kiểm tra trạng thái**
```typescript
const status = await notificationService.getSubscriptionStatus();
console.log(status);
// {
//   isSupported: true,
//   permission: 'granted',
//   isSubscribed: true
// }
```

### 3. **Gửi thông báo test**
```typescript
// Gửi thông báo test
await notificationService.sendTestNotification();
```

### 4. **Gửi thông báo từ server**
```bash
# Gửi cho tất cả người dùng
curl -X POST http://localhost:3001/api/push/send \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Bài hát mới!",
    "body": "Taylor Swift vừa phát hành album mới",
    "icon": "/logo192.png"
  }'

# Gửi cho user cụ thể
curl -X POST http://localhost:3001/api/push/send-to-user \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "user123",
    "title": "Playlist mới",
    "body": "Playlist của bạn đã được cập nhật"
  }'
```

## 🎯 Tính năng

### ✅ **Đã hoàn thành**
- [x] Đăng ký/hủy đăng ký push notifications
- [x] Kiểm tra quyền thông báo
- [x] Gửi thông báo test
- [x] Gửi thông báo từ server
- [x] Xử lý click events trên notifications
- [x] UI quản lý cài đặt thông báo
- [x] Responsive design

### 🔄 **Cần cải thiện**
- [ ] Lưu trữ subscriptions trong database
- [ ] Authentication cho API
- [ ] Rate limiting
- [ ] Analytics cho notifications
- [ ] A/B testing cho notifications

## 🚨 Lưu ý quan trọng

### 1. **HTTPS Required**
Push notifications chỉ hoạt động trên HTTPS (trừ localhost).

### 2. **Browser Support**
- ✅ Chrome 42+
- ✅ Firefox 44+
- ✅ Safari 16+
- ❌ Internet Explorer

### 3. **VAPID Keys**
- Public key: Sử dụng ở frontend
- Private key: Chỉ sử dụng ở server
- Không bao giờ expose private key

### 4. **Service Worker**
- Phải được đặt ở root directory (`/public/sw.js`)
- Phải được serve qua HTTPS
- Có thể mất vài giây để register

## 🐛 Troubleshooting

### Lỗi thường gặp

#### 1. **"Service Worker không được hỗ trợ"**
- Kiểm tra browser support
- Đảm bảo đang dùng HTTPS

#### 2. **"Quyền thông báo bị từ chối"**
- User đã từ chối quyền
- Hướng dẫn user vào Settings > Site Settings > Notifications

#### 3. **"Lỗi đăng ký Push Subscription"**
- Kiểm tra VAPID keys
- Đảm bảo server đang chạy
- Kiểm tra network connection

#### 4. **"Notifications không hiển thị"**
- Kiểm tra browser notification settings
- Đảm bảo trang web không bị block
- Kiểm tra focus state của browser

## 📊 Testing

### 1. **Test đăng ký**
```javascript
// Trong browser console
const service = await import('./utils/notificationService');
const status = await service.default.getSubscriptionStatus();
console.log(status);
```

### 2. **Test gửi notification**
```javascript
// Gửi test notification
await service.default.sendTestNotification();
```

### 3. **Test server API**
```bash
# Kiểm tra server status
curl http://localhost:3001/api/push/vapid-public-key

# Gửi test notification
curl -X POST http://localhost:3001/api/push/send \
  -H "Content-Type: application/json" \
  -d '{"title": "Test", "body": "Test notification"}'
```

## 🔒 Security

### 1. **VAPID Keys**
- Private key chỉ dùng ở server
- Public key có thể expose ở frontend
- Rotate keys định kỳ

### 2. **API Security**
- Implement authentication
- Rate limiting
- Input validation
- CORS configuration

### 3. **Data Privacy**
- Chỉ lưu endpoint, không lưu personal data
- Implement data retention policy
- GDPR compliance

## 📈 Performance

### 1. **Optimization**
- Batch notifications
- Implement retry logic
- Monitor delivery rates
- Clean up expired subscriptions

### 2. **Monitoring**
- Track subscription rates
- Monitor notification delivery
- Analyze user engagement
- Error tracking

## 🎉 Kết luận

Push notifications là công cụ mạnh mẽ để tăng engagement với người dùng. Hệ thống này cung cấp:

- ✅ Setup đơn giản
- ✅ UI thân thiện
- ✅ Error handling tốt
- ✅ Scalable architecture
- ✅ Security best practices

Với setup này, bạn có thể gửi thông báo về:
- 🎵 Bài hát mới từ nghệ sĩ yêu thích
- 📱 Album mới phát hành
- 🎧 Playlist được đề xuất
- 🎉 Sự kiện âm nhạc đặc biệt
- 💝 Khuyến mãi và ưu đãi

Happy coding! 🚀
