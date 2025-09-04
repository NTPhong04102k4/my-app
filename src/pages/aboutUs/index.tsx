import React from "react";
import styled from "styled-components";
import { HeaderComponent } from "src/component/header";
import { FooterComponent } from "src/component/footer";
import {
  MdMusicNote,
  MdHeadphones,
  MdPlaylistPlay,
  MdTrendingUp,
  MdFavorite,
  MdShare,
  MdDownload,
  MdHighQuality,
} from "react-icons/md";
import { IconComponent } from "src/component/IconComponent";
export default function AboutUs() {
  return (
    <Container>
      <HeaderComponent />
      <MainContent>
        <HeroSection>
          <HeroTitle>Khám phá thế giới âm nhạc</HeroTitle>
          <HeroSubtitle>
            Nền tảng âm nhạc hàng đầu với hàng triệu bài hát, album và playlist
            từ các nghệ sĩ nổi tiếng nhất thế giới
          </HeroSubtitle>
        </HeroSection>

        <FeaturesSection>
          <SectionTitle>Tại sao chọn chúng tôi?</SectionTitle>
          <FeaturesGrid>
            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdMusicNote} size={40} />
              </FeatureIcon>
              <FeatureTitle>Thư viện âm nhạc khổng lồ</FeatureTitle>
              <FeatureDescription>
                Hơn 100 triệu bài hát từ các thể loại đa dạng, từ Pop, Rock, Rap
                đến Classical và Jazz
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdHeadphones} size={40} />
              </FeatureIcon>
              <FeatureTitle>Chất lượng âm thanh cao</FeatureTitle>
              <FeatureDescription>
                Trải nghiệm âm thanh lossless với chất lượng lên đến 320kbps và
                hỗ trợ Hi-Fi
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdPlaylistPlay} size={40} />
              </FeatureIcon>
              <FeatureTitle>Playlist cá nhân hóa</FeatureTitle>
              <FeatureDescription>
                AI thông minh tạo playlist phù hợp với sở thích và thói quen
                nghe nhạc của bạn
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdTrendingUp} size={40} />
              </FeatureIcon>
              <FeatureTitle>Xu hướng âm nhạc mới nhất</FeatureTitle>
              <FeatureDescription>
                Cập nhật liên tục các bài hát hot nhất, album mới và xu hướng âm
                nhạc toàn cầu
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdFavorite} size={40} />
              </FeatureIcon>
              <FeatureTitle>Yêu thích không giới hạn</FeatureTitle>
              <FeatureDescription>
                Lưu trữ và quản lý danh sách yêu thích của bạn một cách dễ dàng
                và thuận tiện
              </FeatureDescription>
            </FeatureCard>

            <FeatureCard>
              <FeatureIcon>
                <IconComponent icon={MdDownload} size={40} />
              </FeatureIcon>
              <FeatureTitle>Tải nhạc offline</FeatureTitle>
              <FeatureDescription>
                Tải bài hát về thiết bị để nghe offline mọi lúc, mọi nơi
              </FeatureDescription>
            </FeatureCard>
          </FeaturesGrid>
        </FeaturesSection>

        <StatsSection>
          <StatsContainer>
            <StatItem>
              <StatNumber>100M+</StatNumber>
              <StatLabel>Bài hát</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>50M+</StatNumber>
              <StatLabel>Người dùng</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>10M+</StatNumber>
              <StatLabel>Playlist</StatLabel>
            </StatItem>
            <StatItem>
              <StatNumber>200+</StatNumber>
              <StatLabel>Quốc gia</StatLabel>
            </StatItem>
          </StatsContainer>
        </StatsSection>

        <AboutSection>
          <AboutContent>
            <AboutTitle>Về chúng tôi</AboutTitle>
            <AboutText>
              Được thành lập vào năm 2020, chúng tôi là nền tảng âm nhạc trực
              tuyến hàng đầu với sứ mệnh mang âm nhạc đến mọi người trên khắp
              thế giới. Với đội ngũ chuyên gia âm nhạc và công nghệ giàu kinh
              nghiệm, chúng tôi cam kết cung cấp trải nghiệm nghe nhạc tốt nhất
              cho người dùng.
            </AboutText>
            <AboutText>
              Chúng tôi hợp tác với các hãng thu âm lớn nhất thế giới để mang
              đến cho bạn những bản nhạc chất lượng cao nhất. Đồng thời, chúng
              tôi cũng hỗ trợ các nghệ sĩ độc lập và mới nổi, tạo cơ hội để họ
              tiếp cận với khán giả toàn cầu.
            </AboutText>
          </AboutContent>
        </AboutSection>

        <ContactSection>
          <ContactTitle>Liên hệ với chúng tôi</ContactTitle>
          <ContactInfo>
            <ContactItem>
              <ContactLabel>Email:</ContactLabel>
              <ContactValue>support@musicapp.com</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Điện thoại:</ContactLabel>
              <ContactValue>+84 123 456 789</ContactValue>
            </ContactItem>
            <ContactItem>
              <ContactLabel>Địa chỉ:</ContactLabel>
              <ContactValue>
                123 Đường ABC, Quận 1, TP.HCM, Việt Nam
              </ContactValue>
            </ContactItem>
          </ContactInfo>
        </ContactSection>

        <NotificationSection>
          <NotificationTitle>Cài đặt thông báo</NotificationTitle>
          <NotificationDescription>
            Đăng ký nhận thông báo về bài hát mới, album mới và các sự kiện âm
            nhạc đặc biệt
          </NotificationDescription>
        </NotificationSection>
      </MainContent>
      <FooterComponent />
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #181818 0%, #1a1a2e 50%, #16213e 100%);
  color: white;
`;

const MainContent = styled.main`
  padding: 0 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const HeroSection = styled.section`
  text-align: center;
  padding: 80px 0 60px;
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: gradient 3s ease infinite;
  margin-bottom: 20px;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #b0b0b0;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
`;

const FeaturesSection = styled.section`
  padding: 80px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 60px;
  color: #ffffff;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
`;

const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 40px 30px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

const FeatureIcon = styled.div`
  color: #4ecdc4;
  margin-bottom: 20px;
`;

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: #ffffff;
`;

const FeatureDescription = styled.p`
  color: #b0b0b0;
  line-height: 1.6;
  font-size: 0.95rem;
`;

const StatsSection = styled.section`
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  margin: 40px 0;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  text-align: center;
`;

const StatItem = styled.div`
  padding: 20px;
`;

const StatNumber = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #4ecdc4;
  margin-bottom: 10px;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #b0b0b0;
  font-weight: 500;
`;

const AboutSection = styled.section`
  padding: 80px 0;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const AboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #ffffff;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #b0b0b0;
  line-height: 1.8;
  margin-bottom: 20px;
  text-align: left;
`;

const ContactSection = styled.section`
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  margin: 40px 0;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
  color: #ffffff;
`;

const ContactInfo = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

const ContactLabel = styled.span`
  font-weight: 600;
  color: #4ecdc4;
  font-size: 1.1rem;
`;

const ContactValue = styled.span`
  color: #b0b0b0;
  font-size: 1rem;
`;

const NotificationSection = styled.section`
  padding: 80px 0;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  margin: 40px 0;
`;

const NotificationTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`;

const NotificationDescription = styled.p`
  text-align: center;
  color: #b0b0b0;
  font-size: 1.1rem;
  margin-bottom: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;
