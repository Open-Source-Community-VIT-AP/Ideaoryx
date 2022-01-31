import React from "react";
import heroimg from "../../assets/heroimg.png";
import {
  HeroContainer,
  HeroText,
  HeroText2,
  NavBtnLink,
  HeroImage,
} from "../../components/heroSection/HeroElements";

function hero() {
  return (
    <>
      <HeroContainer id="home">
        <div>
          <HeroText>IdeaOryx</HeroText>
          <HeroText2>Ideate, Create and Innovate.</HeroText2>
            <br />
          
            <NavBtnLink href="https://forms.gle/BK7EHuQHAxv3T8Vi9">Register</NavBtnLink>
          
        </div>
        {/* <HeroImage src={heroimg}></HeroImage> */}
      </HeroContainer>
    </>
  );
}

export default hero;
