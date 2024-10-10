import { Songs } from "src/component/Item/interface";
import { IconType } from "react-icons";
import { FaPlus } from "react-icons/fa";
import styled from "styled-components";

export const TopMusic = ({
  data,
  title,
  type,
  componentIcon: ComponentIcon,
  color,
}: {
  data: Songs[];
  title?: string;
  type?: string;
  componentIcon?: IconType;
  color: string;
}) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Type style={{ color }}>{type}</Type>
      </Header>
      <div className="inline-flex">
        <MusicList>
          {data &&
            data.map((item, index) => (
              <MusicItem key={index}>
                <MusicImage src={item.src} alt={`${index}`} />
                <ContentWrapper>
                  <TextWrapper>
                    <SongTitle>{item.nameSong}</SongTitle>
                    <Details>
                      <SingerName>{item.nameSinger}</SingerName>
                    </Details>
                  </TextWrapper>
                  <IconWrapper>
                    {ComponentIcon ? <ComponentIcon size={16} color={color}/> : null} {/* Dynamic Icon */}
                  </IconWrapper>
                </ContentWrapper>
              </MusicItem>
            ))}
        </MusicList>
        <ViewAllContainer>
          <AddButton>
            <FaPlus color="#FFF" size={24} />
          </AddButton>
          <ViewAllText>View All</ViewAllText>
        </ViewAllContainer>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  display: inline-flex;
  margin-bottom: 18px;
  margin-top: 40px;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 500;
`;

const Type = styled.h1`
  color: #ee10b0;
  font-size: 32px;
  margin-left: 0.5rem;
  font-weight: 500;
`;

const MusicList = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const MusicItem = styled.button`
  padding: 10px;
  background-color: #1f1f1f;
  border-radius: 10px;
  width: 169px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 5px 5px #000;
    transform: scale(1.01);
  }
`;

const MusicImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover; /* Ensure image covers the container */
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  position: relative;
  margin-top: 9px;
`;

const TextWrapper = styled.div`
  flex: 1;
`;

const SongTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  width: 125px;
  text-align: start;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SingerName = styled.h3`
  font-size: 12px;
  font-family: serif;
  color: #fff;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 0px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #1e1e1e;
  border-radius: 50%;
  &:active {
    opacity: 0.7;
  }
`;

const ViewAllText = styled.h3`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
  text-align: center;
  width: 60px;
`;
