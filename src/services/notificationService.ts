// export class NotificationService {
//   private static instance: NotificationService;
//   private swRegistration: ServiceWorkerRegistration | null = null;
//   private subscription: PushSubscription | null = null;

//   private constructor() {}

//   public static getInstance(): NotificationService {
//     if (!NotificationService.instance) {
//       NotificationService.instance = new NotificationService();
//     }
//     return NotificationService.instance;
//   }

//   // Kiểm tra xem trình duyệt có hỗ trợ Push Notifications không
//   public isSupported(): boolean {
//     return "serviceWorker" in navigator && "PushManager" in window;
//   }

//   // Kiểm tra quyền thông báo
//   public async checkPermission(): Promise<NotificationPermission> {
//     if (!this.isSupported()) {
//       throw new Error("Push notifications không được hỗ trợ");
//     }
//     return Notification.permission;
//   }

//   // Đăng ký Service Worker
//   public async registerServiceWorker(): Promise<ServiceWorkerRegistration> {
//     if (!this.isSupported()) {
//       throw new Error("Service Worker không được hỗ trợ");
//     }

//     try {
//       this.swRegistration = await navigator.serviceWorker.register("/sw.js");
//       console.log("Service Worker đã đăng ký:", this.swRegistration);
//       return this.swRegistration;
//     } catch (error) {
//       console.error("Lỗi đăng ký Service Worker:", error);
//       throw error;
//     }
//   }

//   // Yêu cầu quyền thông báo
//   public async requestPermission(): Promise<NotificationPermission> {
//     if (!this.isSupported()) {
//       throw new Error("Push notifications không được hỗ trợ");
//     }

//     const permission = await Notification.requestPermission();
//     console.log("Quyền thông báo:", permission);
//     return permission;
//   }

//   // Đăng ký Push Subscription
//   public async subscribeToPush(): Promise<PushSubscription | null> {
//     if (!this.swRegistration) {
//       await this.registerServiceWorker();
//     }

//     const permission = await this.checkPermission();
//     if (permission !== "granted") {
//       const newPermission = await this.requestPermission();
//       if (newPermission !== "granted") {
//         throw new Error("Quyền thông báo bị từ chối");
//       }
//     }

//     try {
//       // Lấy VAPID public key từ server
//       const response = await fetch(
//         "http://localhost:3001/api/push/vapid-public-key"
//       );
//       const { publicKey } = await response.json();

//       this.subscription = await this.swRegistration!.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: this.urlBase64ToUint8Array(publicKey),
//       });

//       console.log("Push Subscription:", this.subscription);

//       // Gửi subscription lên server để lưu trữ
//       await this.sendSubscriptionToServer(this.subscription);

//       return this.subscription;
//     } catch (error) {
//       console.error("Lỗi đăng ký Push Subscription:", error);
//       throw error;
//     }
//   }

//   // Hủy đăng ký Push Subscription
//   public async unsubscribeFromPush(): Promise<boolean> {
//     if (!this.subscription) {
//       return false;
//     }

//     try {
//       await this.subscription.unsubscribe();
//       this.subscription = null;
//       console.log("Đã hủy đăng ký Push Subscription");
//       return true;
//     } catch (error) {
//       console.error("Lỗi hủy đăng ký:", error);
//       return false;
//     }
//   }

//   // Gửi subscription lên server
//   private async sendSubscriptionToServer(
//     subscription: PushSubscription
//   ): Promise<void> {
//     try {
//       const response = await fetch("http://localhost:3001/api/push/subscribe", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           subscription: subscription.toJSON(),
//           userId: "user_id_here", // Thay thế bằng user ID thực
//         }),
//       });

//       if (!response.ok) {
//         throw new Error("Lỗi gửi subscription lên server");
//       }

//       console.log("Subscription đã được gửi lên server");
//     } catch (error) {
//       console.error("Lỗi gửi subscription:", error);
//       throw error;
//     }
//   }

//   // Chuyển đổi VAPID key từ base64 sang Uint8Array
//   private urlBase64ToUint8Array(base64String: string): Uint8Array {
//     const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
//     const base64 = (base64String + padding)
//       .replace(/-/g, "+")
//       .replace(/_/g, "/");

//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);

//     for (let i = 0; i < rawData.length; ++i) {
//       outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
//   }

//   // Kiểm tra trạng thái đăng ký
//   public async getSubscriptionStatus(): Promise<{
//     isSupported: boolean;
//     permission: NotificationPermission;
//     isSubscribed: boolean;
//   }> {
//     const isSupported = this.isSupported();
//     const permission = await this.checkPermission();

//     let isSubscribed = false;
//     if (this.swRegistration) {
//       const subscription =
//         await this.swRegistration.pushManager.getSubscription();
//       isSubscribed = !!subscription;
//     }

//     return {
//       isSupported,
//       permission,
//       isSubscribed,
//     };
//   }

//   // Gửi thông báo test (chỉ dùng cho development)
//   public async sendTestNotification(): Promise<void> {
//     if (!this.swRegistration) {
//       throw new Error("Service Worker chưa được đăng ký");
//     }

//     await this.swRegistration.showNotification("Test Notification", {
//       body: "Đây là thông báo test từ Music App!",
//       icon: "/logo192.png",
//       badge: "/logo192.png",
//       data: {
//         url: "/",
//         vibrate: [100, 50, 100, 50],
//         sound: "/notification.mp3",
//         actions: [
//           {
//             action: "explore",
//             title: "Xem ngay",
//             icon: "/logo192.png",
//           },
//         ],
//       },
//     });
//   }
// }

// export default NotificationService.getInstance();
