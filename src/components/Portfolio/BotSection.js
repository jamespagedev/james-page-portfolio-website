import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../globals/CssMixins';

// ${Colors.Vulcan};

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

const DivContactSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  z-index: 3;
`;

const DivContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FormContact = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const DivInput = styled.div`
  display: flex;
  width: 90%;
  margin: 15px;

  input {
    width: 100%;
    outline: none;
    font-size: 1.6em;
    padding: 15px;
  }
`;

const H2Name = styled.h2`
  margin-right: 26px;
`;

const H2Email = styled.h2`
  margin-right: 31px;
`;

const H2Subject = styled.h2`
  margin-right: 10px;
`;

const DivTextArea = styled.div`
  display: flex;
  width: 90%;
  margin: 15px;
  flex-direction: column;

  textarea {
    height: 300px;
    border-radius: 15px;
    outline: none;
    padding: 25px;
    resize: none;
    font-size: 1.6em;
  }
`;

const DivSocialMediaSection = styled.div``;

const DivSocialMediaContainer = styled.div``;

const DivLinkedin = styled.div``;

const DivGithub = styled.div``;

/********************************************* Component ******************************************/
const BotSection = props => {
  return (
    <DivBotBackground>
      <DivContactSection>
        <DivContactContainer>
          <FormContact>
            <DivInput>
              <H2Name name="true">Name:&nbsp;</H2Name>
              <input type="text" name="name" />
            </DivInput>
            <DivInput>
              <H2Email email="true">Email:&nbsp;</H2Email>
              <input type="email" name="email" />
            </DivInput>
            <DivInput>
              <H2Subject subject="true">Subject:&nbsp;</H2Subject>
              <input type="text" name="subject" autoComplete="off" />
            </DivInput>
            <DivTextArea>
              <h3>Message:&nbsp;</h3>
              <textarea type="text" name="message" />
            </DivTextArea>
          </FormContact>
        </DivContactContainer>
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