import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../globals/CssMixins';

// components
import ContactForm from '../ContactForm.js';

/********************************************** Styles ********************************************/
const DivBotBackground = styled.div`
display: flex;
width: 100%;
background-color: ${Colors.Vulcan};
position: relative;
color: white;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -2px;
    left: 0;
    right: 0;
    background-color: ${Colors.Vulcan};
    z-index: 2;
    clip-path: polygon(0% 100%, 55.5% 100%, 55.5% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #4deeea;
    z-index: 1;
    clip-path: polygon(0% 100%, 56% 100%, 56% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/*-------------------------------------------- contact -------------------------------------------*/
const DivContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 55%;
  z-index: 3;
  padding: 4rem 0;

  @media (max-width: 2100px) {
    padding: 2rem 0;
  }

  @media (max-width: 900px) {
    width: 100%;
    border-bottom: 4px solid #4deeea;
  }
`;

const H2ContactTitle = styled.div`
  font-size: 7rem;
  width: 90%;
  margin-bottom: 17rem;
  font-weight: lighter;

  @media (max-width: 3600px) {
    font-size: 6.5rem;
    margin-bottom: 14rem;
  }

  @media (max-width: 3400px) {
    font-size: 6rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.5rem;
    margin-bottom: 12rem;
  }

  @media (max-width: 3200px) {
    font-size: 5rem;
    margin-bottom: 11rem;
  }

  @media (max-width: 3100px) {
    font-size: 4.5rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 3000px) {
    font-size: 4.5rem;
    margin-bottom: 10rem;
  }

  @media (max-width: 2800px) {
    font-size: 4.2rem;
    margin-bottom: 9rem;
  }

  @media (max-width: 2700px) {
    width: 81%;
    margin-bottom: 8rem;
  }

  @media (max-width: 2500px) {
    font-size: 3.9rem;
    margin-bottom: 7rem;
  }

  @media (max-width: 2400px) {
    font-size: 3.7rem;
  }

  @media (max-width: 2300px) {
    margin-bottom: 6rem;
  }

  @media (max-width: 2200px) {
    font-size: 3.3rem;
  }

  @media (max-width: 2000px) {
    font-size: 3.1rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1600px) {
    font-size: 2.8rem;
  }

  @media (max-width: 900px) {
    width: 83%;
    font-size: 3.2rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 800px) {
    font-size: 2.8rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 700px) {
    font-size: 2.6rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 400px) {
    width: 81%;
  }
`;

/*------------------------------------------ social media ----------------------------------------*/
const DivSocialMediaSection = styled.div``;

const DivSocialMediaContainer = styled.div``;

const DivLinkedin = styled.div``;

const DivGithub = styled.div``;

/********************************************* Component ******************************************/
const BotSection = props => {
  return (
    <DivBotBackground>
      <DivContactSection>
        <H2ContactTitle>Looking to gain a position where I can use my dev skills to build great software. Lets chat... </H2ContactTitle>
        <ContactForm />
      </DivContactSection>
      <DivSocialMediaSection>
        <DivSocialMediaContainer>
          <DivLinkedin></DivLinkedin>
          <DivGithub></DivGithub>
        </DivSocialMediaContainer>
      </DivSocialMediaSection>
    </DivBotBackground>
  );
};

export default BotSection;