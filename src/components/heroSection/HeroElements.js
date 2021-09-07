import styled from 'styled-components';
import heroimg from "../../assets/heroimg.png";


export const HeroContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* max-width: 1400px; */
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    padding: 0 24px;
    background-image: url(${heroimg});
    
    /* blend background with black */
    background-color: rgba(0,0,0,0.9);
    background-blend-mode: multiply;
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    
    
`

export const HeroText = styled.h1`
    /* max-width: 805px; */
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 120px;
    /* display: flex; */
    /* align-items: center; */
    letter-spacing: 0.02em;
    color: #FAC344;
    @media screen and (max-width: 768px) {
        font-size: 60px;
    }
`
export const HeroText2 = styled.h1`
    /* max-width: 805px; */
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    /* display: flex; */
    /* align-items: center; */
    letter-spacing: 0.02em;
    color: #fff;
    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
`
export const HeroImage = styled.img`
    max-width: 700px;
    align-self: flex-end;
    width: 100%;

`


export const NavBtnLink = styled.a`
    border-radius: 5px;
    background: #FAC344;    white-space: nowrap;
    padding: 10px 22px;
    color: #000;
    font-size: 24px;
    outline: none;
    border:none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 0.5px;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #000;
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`