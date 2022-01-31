import React from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  HamburgerIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

import logo from '../../assets/Ideaoryx.png'

function Navbar({ toggle }) {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="home" smooth={true} spy={true} exact="true" offset={-60} >
              <img src={logo} alt="logo" style={{width:'100%'}} />
          </NavLogo>

          <HamburgerIcon onClick = {toggle}>
            <FaBars />
          </HamburgerIcon>

          <NavMenu>
            <NavItem>
              <NavLink to="home"  smooth={true} spy={true} exact="true" offset={-60} >Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="about" smooth={true} spy={true} exact="true" offset={-60} >About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="timeline"  smooth={true} spy={true} exact="true" offset={-60} >Timeline</NavLink>
            </NavItem>
            
          </NavMenu>
          <NavBtn>
            <NavBtnLink href="https://forms.gle/BK7EHuQHAxv3T8Vi9">Register</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
