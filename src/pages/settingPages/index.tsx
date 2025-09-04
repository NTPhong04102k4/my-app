import { SideBarComponent } from "src/component/sideBar";
import React, { useState } from "react";

// Mock data cho gói premium
const premiumPlans = [
  {
    id: "monthly",
    name: "Gói Tháng",
    price: "99.000",
    originalPrice: "99.000",
    period: "1 tháng",
    features: [
      "Nghe nhạc không giới hạn",
      "Chất lượng âm thanh cao",
      "Tải nhạc offline",
      "Không quảng cáo",
      "Phát nhạc theo thứ tự",
    ],
    popular: false,
  },
  {
    id: "quarterly",
    name: "Gói 3 Tháng",
    price: "249.000",
    originalPrice: "297.000",
    period: "3 tháng",
    features: [
      "Nghe nhạc không giới hạn",
      "Chất lượng âm thanh cao",
      "Tải nhạc offline",
      "Không quảng cáo",
      "Phát nhạc theo thứ tự",
      "Tiết kiệm 16%",
    ],
    popular: true,
  },
  {
    id: "semiannual",
    name: "Gói 6 Tháng",
    price: "449.000",
    originalPrice: "594.000",
    period: "6 tháng",
    features: [
      "Nghe nhạc không giới hạn",
      "Chất lượng âm thanh cao",
      "Tải nhạc offline",
      "Không quảng cáo",
      "Phát nhạc theo thứ tự",
      "Tiết kiệm 24%",
    ],
    popular: false,
  },
];

// Mock data cho ngôn ngữ
const languages = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

export default function SettingPages() {
  const [activeTab, setActiveTab] = useState("general");
  const [selectedLanguage, setSelectedLanguage] = useState("vi");
  const [showPremiumModal, setShowPremiumModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [audioQuality, setAudioQuality] = useState("high");
  const [autoPlay, setAutoPlay] = useState(true);
  const [crossfade, setCrossfade] = useState(false);
  const [crossfadeDuration, setCrossfadeDuration] = useState(3);
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const tabs = [
    { id: "general", label: "Cài đặt chung", icon: "⚙️" },
    { id: "premium", label: "Gói Premium", icon: "👑" },
    { id: "audio", label: "Âm thanh", icon: "🎵" },
    { id: "privacy", label: "Quyền riêng tư", icon: "🔒" },
  ];

  const handleLanguageChange = (languageCode: string) => {
    setSelectedLanguage(languageCode);
    // Xử lý thay đổi ngôn ngữ ở đây
    console.log("Language changed to:", languageCode);
  };

  const handlePremiumSubscribe = (planId: string) => {
    setSelectedPlan(planId);
    setShowPremiumModal(true);
  };

  const handleConfirmSubscription = () => {
    // Xử lý đăng ký gói premium ở đây
    console.log("Subscribing to plan:", selectedPlan);
    setShowPremiumModal(false);
    setSelectedPlan(null);
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      {/* Language Settings */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Ngôn ngữ</h3>
        <div className="space-y-3">
          {languages.map((language) => (
            <label
              key={language.code}
              className="flex items-center p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
            >
              <input
                type="radio"
                name="language"
                value={language.code}
                checked={selectedLanguage === language.code}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="w-4 h-4 text-[#602139] bg-white/10 border-white/20 focus:ring-white/40"
              />
              <span className="text-2xl ml-3">{language.flag}</span>
              <span className="text-white ml-3">{language.name}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Theme Settings */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Giao diện</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Chế độ tối</p>
              <p className="text-gray-300 text-sm">Sử dụng giao diện tối</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={(e) => setDarkMode(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Thông báo</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Thông báo đẩy</p>
              <p className="text-gray-300 text-sm">
                Nhận thông báo về bài hát mới
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={notifications}
                onChange={(e) => setNotifications(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPremiumSettings = () => (
    <div className="space-y-6">
      {/* Current Plan */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Gói hiện tại</h3>
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Gói Miễn phí</p>
              <p className="text-gray-300 text-sm">Hạn chế một số tính năng</p>
            </div>
            <button
              onClick={() => setShowPremiumModal(true)}
              className="bg-white text-[#602139] px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Nâng cấp
            </button>
          </div>
        </div>
      </div>

      {/* Premium Plans */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Chọn gói Premium
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {premiumPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white/10 rounded-lg p-4 border-2 transition-colors ${
                plan.popular
                  ? "border-yellow-400 bg-yellow-400/10"
                  : "border-transparent hover:border-white/20"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-[#602139] px-3 py-1 rounded-full text-xs font-semibold">
                    Phổ biến
                  </span>
                </div>
              )}

              <div className="text-center mb-4">
                <h4 className="text-white font-semibold text-lg">
                  {plan.name}
                </h4>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-white">
                    {plan.price}đ
                  </span>
                  {plan.originalPrice !== plan.price && (
                    <span className="text-gray-400 line-through ml-2">
                      {plan.originalPrice}đ
                    </span>
                  )}
                </div>
                <p className="text-gray-300 text-sm">{plan.period}</p>
              </div>

              <ul className="space-y-2 mb-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="w-4 h-4 text-green-400 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handlePremiumSubscribe(plan.id)}
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  plan.popular
                    ? "bg-yellow-400 text-[#602139] hover:bg-yellow-300"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                Chọn gói
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAudioSettings = () => (
    <div className="space-y-6">
      {/* Audio Quality */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Chất lượng âm thanh
        </h3>
        <div className="space-y-3">
          {[
            {
              value: "low",
              label: "Thấp (128 kbps)",
              desc: "Tiết kiệm dữ liệu",
            },
            {
              value: "medium",
              label: "Trung bình (256 kbps)",
              desc: "Cân bằng chất lượng và dữ liệu",
            },
            {
              value: "high",
              label: "Cao (320 kbps)",
              desc: "Chất lượng tốt nhất",
            },
          ].map((quality) => (
            <label
              key={quality.value}
              className="flex items-center p-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition-colors"
            >
              <input
                type="radio"
                name="audioQuality"
                value={quality.value}
                checked={audioQuality === quality.value}
                onChange={(e) => setAudioQuality(e.target.value)}
                className="w-4 h-4 text-[#602139] bg-white/10 border-white/20 focus:ring-white/40"
              />
              <div className="ml-3">
                <p className="text-white font-medium">{quality.label}</p>
                <p className="text-gray-300 text-sm">{quality.desc}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* Playback Settings */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Phát nhạc</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Tự động phát</p>
              <p className="text-gray-300 text-sm">
                Tự động phát bài hát tiếp theo
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={autoPlay}
                onChange={(e) => setAutoPlay(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Crossfade</p>
              <p className="text-gray-300 text-sm">
                Làm mượt chuyển đổi giữa các bài hát
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={crossfade}
                onChange={(e) => setCrossfade(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>

          {crossfade && (
            <div className="ml-6">
              <label className="text-white text-sm">
                Thời gian crossfade: {crossfadeDuration}s
              </label>
              <input
                type="range"
                min="1"
                max="12"
                value={crossfadeDuration}
                onChange={(e) => setCrossfadeDuration(Number(e.target.value))}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderPrivacySettings = () => (
    <div className="space-y-6">
      {/* Privacy Settings */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">
          Quyền riêng tư
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Hiển thị hoạt động</p>
              <p className="text-gray-300 text-sm">
                Cho phép người khác xem bài hát bạn đang nghe
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={false}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-white font-medium">Chia sẻ playlist</p>
              <p className="text-gray-300 text-sm">
                Cho phép người khác xem playlist công khai
              </p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={true}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-white"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Account Actions */}
      <div className="bg-white/5 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Tài khoản</h3>
        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <p className="text-white font-medium">Đổi mật khẩu</p>
            <p className="text-gray-300 text-sm">Cập nhật mật khẩu tài khoản</p>
          </button>

          <button className="w-full text-left p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
            <p className="text-white font-medium">Xuất dữ liệu</p>
            <p className="text-gray-300 text-sm">Tải xuống dữ liệu tài khoản</p>
          </button>

          <button className="w-full text-left p-3 bg-red-500/20 rounded-lg hover:bg-red-500/30 transition-colors">
            <p className="text-red-400 font-medium">Xóa tài khoản</p>
            <p className="text-red-300 text-sm">Xóa vĩnh viễn tài khoản</p>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex bg-[#602139] min-h-screen">
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Cài đặt</h1>
          <p className="text-gray-300">
            Tùy chỉnh trải nghiệm nghe nhạc của bạn
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 rounded-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center p-3 rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? "bg-white text-[#602139]"
                        : "text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg mr-3">{tab.icon}</span>
                    <span className="font-medium">{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === "general" && renderGeneralSettings()}
            {activeTab === "premium" && renderPremiumSettings()}
            {activeTab === "audio" && renderAudioSettings()}
            {activeTab === "privacy" && renderPrivacySettings()}
          </div>
        </div>

        {/* Premium Subscription Modal */}
        {showPremiumModal && selectedPlan && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-[#602139] rounded-lg p-6 max-w-md w-full mx-4">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">👑</div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  Nâng cấp Premium
                </h2>
                <p className="text-gray-300">
                  Bạn có chắc chắn muốn đăng ký gói Premium?
                </p>
              </div>

              <div className="bg-white/10 rounded-lg p-4 mb-6">
                <h3 className="text-white font-semibold mb-2">
                  {premiumPlans.find((p) => p.id === selectedPlan)?.name}
                </h3>
                <p className="text-white text-2xl font-bold">
                  {premiumPlans.find((p) => p.id === selectedPlan)?.price}đ
                </p>
                <p className="text-gray-300 text-sm">
                  {premiumPlans.find((p) => p.id === selectedPlan)?.period}
                </p>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => setShowPremiumModal(false)}
                  className="flex-1 bg-white/10 text-white px-4 py-3 rounded-lg hover:bg-white/20 transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={handleConfirmSubscription}
                  className="flex-1 bg-white text-[#602139] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Xác nhận
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
