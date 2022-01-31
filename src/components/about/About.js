import React from 'react'
import aboutimg from '../../assets/aboutimg.png'
import { AboutContainer, TextContainer, Heading, Para, AboutImage } from './AboutElements'

function About() {
    return (
        <>
            <AboutContainer id = "about">
                <TextContainer>
                    <Heading>
                        What is Ideaoryx ?
                    </Heading>
                    <Para>
                        An idea not coupled with action will never get any bigger than the brain cell it occupied. So, it's not always about ideas but it's about making "ideas" happen.
We strongly believe that anything in existence is fabricated out of our enthusiasm to sketch out an idea and the proposition of visualising the desired result brings that idea to life.
Hackathons give rise to several great ideas that could be put into actual use by people from all over the world. At this brainstorming event, participants from all branches have to come up with some creative ideas that contribute in improving the standard of life. As part of this 48-hour-long event, participants will get a chance to manifest their ideas. 
                </Para>
                </TextContainer>
                <br />
                <AboutImage src ={aboutimg}></AboutImage>
            </AboutContainer>
        </>
    )
}

export default About
