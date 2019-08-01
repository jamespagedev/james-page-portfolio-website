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
`;

const H2ContactTitle = styled.div`
  font-size: 7rem;
  width: 90%;
  margin-bottom: 17rem;
  font-weight: lighter;
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