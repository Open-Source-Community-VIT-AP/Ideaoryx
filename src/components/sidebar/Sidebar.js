import React from "react";
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarBtn } from "./SidebarElements";

function Sidebar({isOpen, toggle}) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="home" onClick={toggle} >Home</SidebarLink>
          <SidebarLink to="about" onClick={toggle} >About</SidebarLink>
          <SidebarLink to="timeline" onClick={toggle} >Timeline</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarBtn href = "#">
              Register
          </SidebarBtn>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
