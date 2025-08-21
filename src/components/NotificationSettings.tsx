import React, { useState, useEffect } from "react";
import styled from "styled-components";
import notificationService from "../utils/notificationService";
import { IconComponent } from "../component/footer";
import {
  MdNotifications,
  MdNotificationsOff,
  MdSettings,
} from "react-icons/md";

interface NotificationStatus {
  isSupported: boolean;
  permission: NotificationPermission;
  isSubscribed: boolean;
}

export const NotificationSettings: React.FC = () => {
  const [status, setStatus] = useState<NotificationStatus | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    checkNotificationStatus();
  }, []);

  const checkNotificationStatus = async () => {
    try {
      const notificationStatus =
        await notificationService.getSubscriptionStatus();
      setStatus(notificationStatus);
    } catch (error) {
      console.error("Lỗi kiểm tra trạng thái:", error);
      setError("Không thể kiểm tra trạng thái thông báo");
    }
  };

  const handleSubscribe = async () => {
    setLoading(true);
    setError(null);

    try {
      await notificationService.subscribeToPush();
      await checkNotificationStatus();
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setError("Không thể đăng ký thông báo. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleUnsubscribe = async () => {
    setLoading(true);
    setError(null);

    try {
      await notificationService.unsubscribeFromPush();
      await checkNotificationStatus();
    } catch (error) {
      console.error("Lỗi hủy đăng ký:", error);
      setError("Không thể hủy đăng ký thông báo. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  const handleTestNotification = async () => {
    try {
      await notificationService.sendTestNotification();
    } catch (error) {
      console.error("Lỗi gửi thông báo test:", error);
      setError("Không thể gửi thông báo test");
    }
  };

  if (!status) {
    return <LoadingContainer>Đang kiểm tra...</LoadingContainer>;
  }

  if (!status.isSupported) {
    return (
      <Container>
        <ErrorCard>
          <IconComponent icon={MdNotificationsOff} size={48} color="#ff6b6b" />
          <ErrorTitle>Không hỗ trợ</ErrorTitle>
          <ErrorText>
            Trình duyệt của bạn không hỗ trợ Push Notifications. Vui lòng sử
            dụng trình duyệt hiện đại như Chrome, Firefox, Safari.
          </ErrorText>
        </ErrorCard>
      </Container>
    );
  }

  return (
    <Container>
      <Header>
        <IconComponent icon={MdSettings} size={24} />
        <HeaderTitle>Cài đặt thông báo</HeaderTitle>
      </Header>

      <StatusCard>
        <StatusItem>
          <StatusLabel>Trạng thái:</StatusLabel>
          <StatusValue status={status.permission}>
            {status.permission === "granted"
              ? "Đã cho phép"
              : status.permission === "denied"
                ? "Đã từ chối"
                : "Chưa xác định"}
          </StatusValue>
        </StatusItem>

        <StatusItem>
          <StatusLabel>Đăng ký:</StatusLabel>
          <StatusValue status={status.isSubscribed ? "granted" : "denied"}>
            {status.isSubscribed ? "Đã đăng ký" : "Chưa đăng ký"}
          </StatusValue>
        </StatusItem>
      </StatusCard>

      {error && (
        <ErrorCard>
          <ErrorText>{error}</ErrorText>
        </ErrorCard>
      )}

      <ActionCard>
        {status.permission === "granted" ? (
          status.isSubscribed ? (
            <>
              <ActionButton onClick={handleUnsubscribe} disabled={loading}>
                {loading ? "Đang hủy..." : "Hủy đăng ký thông báo"}
              </ActionButton>
              <TestButton onClick={handleTestNotification}>
                Gửi thông báo test
              </TestButton>
            </>
          ) : (
            <ActionButton onClick={handleSubscribe} disabled={loading}>
              {loading ? "Đang đăng ký..." : "Đăng ký thông báo"}
            </ActionButton>
          )
        ) : (
          <ActionButton onClick={handleSubscribe} disabled={loading}>
            {loading ? "Đang yêu cầu..." : "Yêu cầu quyền thông báo"}
          </ActionButton>
        )}
      </ActionCard>

      <InfoCard>
        <InfoTitle>Thông báo sẽ bao gồm:</InfoTitle>
        <InfoList>
          <InfoItem>🎵 Bài hát mới từ nghệ sĩ yêu thích</InfoItem>
          <InfoItem>📱 Album mới phát hành</InfoItem>
          <InfoItem>🎧 Playlist được đề xuất</InfoItem>
          <InfoItem>🎉 Sự kiện âm nhạc đặc biệt</InfoItem>
        </InfoList>
      </InfoCard>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
`;

const HeaderTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
`;

const StatusCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const StatusItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

const StatusLabel = styled.span`
  color: #b0b0b0;
  font-size: 0.9rem;
`;

const StatusValue = styled.span<{ status: string }>`
  color: ${(props) =>
    props.status === "granted"
      ? "#4ecdc4"
      : props.status === "denied"
        ? "#ff6b6b"
        : "#f39c12"};
  font-weight: 600;
  font-size: 0.9rem;
`;

const ActionCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

const ActionButton = styled.button`
  background: linear-gradient(45deg, #4ecdc4, #45b7d1);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 12px;
  width: 100%;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(78, 205, 196, 0.3);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const TestButton = styled(ActionButton)`
  background: linear-gradient(45deg, #f39c12, #e67e22);

  &:hover:not(:disabled) {
    box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
  }
`;

const InfoCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const InfoTitle = styled.h3`
  color: #ffffff;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 16px;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const InfoItem = styled.li`
  color: #b0b0b0;
  padding: 8px 0;
  font-size: 0.95rem;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

const ErrorCard = styled.div`
  background: rgba(255, 107, 107, 0.1);
  border: 1px solid rgba(255, 107, 107, 0.3);
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
`;

const ErrorTitle = styled.h3`
  color: #ff6b6b;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 12px 0 8px 0;
`;

const ErrorText = styled.p`
  color: #ff6b6b;
  font-size: 0.9rem;
  margin: 0;
  line-height: 1.5;
`;

const LoadingContainer = styled.div`
  text-align: center;
  padding: 40px;
  color: #b0b0b0;
  font-size: 1rem;
`;

export default NotificationSettings;
