import React from "react";
import logo from '../../assets/IdeaOryx.svg'
import {
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterInnerContainer,
  WsocLogo,
  FooterBottom,
  FooterClubs,
  ClubName,
  SocialIcons,
  FooterLink,
  FooterCopyright,
} from "./FooterElements";

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterInnerContainer>
          <WsocLogo src={logo} />
          <FooterBottom>
            <FooterClubs>
              <ClubName>Open Source Comunity: VIT-AP</ClubName>
              <SocialIcons>
                <FooterLink target="_blank" href ="https://www.instagram.com/osc.vitap/">
                  <FaInstagram />
                </FooterLink>
                <FooterLink target="_blank" href ="https://www.youtube.com/channel/UCL7e5F8GJIkLDKiu5pv2NAw"> <FaYoutube /> </FooterLink>
                <FooterLink target="_blank" href ="https://www.linkedin.com/company/oscvitap/"> <FaLinkedinIn /> </FooterLink>
              </SocialIcons>
            </FooterClubs>

            <FooterClubs>
            <ClubName> Women in Open Source chapter: VIT-AP</ClubName>
              <SocialIcons>
                <FooterLink target="_blank" href ="https://www.instagram.com/wios_vitap/?utm_medium=copy_link/">
                  <FaInstagram />
                </FooterLink>
                <FooterLink target="_blank" href ="https://www.youtube.com/channel/UCc7KEMTSZaCVq-vKF9vkwQw"> <FaYoutube /> </FooterLink>
                <FooterLink target="_blank" href ="https://www.linkedin.com/company/women-in-open-source-vit-ap/"> <FaLinkedinIn /> </FooterLink>
              </SocialIcons>
            </FooterClubs>
          </FooterBottom>
          <br />
          <br />
          <FooterCopyright>© 2021 Open Source Community: VIT-AP</FooterCopyright>
          <br />
        </FooterInnerContainer>
      </FooterContainer>
    </>
  );
}

export default Footer;
