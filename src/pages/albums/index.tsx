// import { SideBarComponent } from "src/component/sideBar";
import React from "react";
import styled from "styled-components";
import { HeaderAlbums } from "./item/HeaderComponent";
import FooterComponent from "src/component/footer";
import { ListMusicTrending } from "./item/ListMusicTrending";
export default function Albums() {
  return (
    <div className="flex flex-col bg-[#181818] pl-[30px] pr-[30px] pt-[26px]">
      <Container>
        <div className="">       <HeaderAlbums />
          <ListMusicTrending /></div>
      </Container>
      <FooterComponent />
    </div>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(90deg,#0B77B3,#053754);
  padding-bottom: 100px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
`