import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
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
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin-bottom: 6rem;
`;

const H2Contact = styled.h2`
  font-size: 6rem;
  margin-bottom: 1rem;
`;

const InputContact = styled.input`
  width: 87%;
  outline: none;
  font-size: 6rem;
  padding: 15px;
  border-radius: 25px;
`;

const DivTextArea = styled.div`
  display: flex;
  width: 90%;
  margin-bottom: 6rem;
  flex-direction: column;

  textarea {
    height: 300px;
    border-radius: 15px;
    outline: none;
    padding: 25px;
    resize: none;
    font-size: 9em;
    margin-top: 3rem;
  }
`;

const DivButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 10rem;
`;

const ButtonContact = styled.button`
  width: 20%;
  outline: none;
  font-size: 6rem;
  padding: 2rem 0;
  border-radius: 2rem;
  background-color: ${props => props.submit ? 'Green' : '#dddddd'};
  background: ${props => props.submit ? 'linear-gradient(to top, #00c800, #008c00)' : 'linear-gradient(to top, #dddddd, #ffffff)'};
  border-color: ${props => props.submit ? '#008c00' : '#dddddd'};
  cursor: pointer;

  &:active {
    background: ${props => props.submit ? 'linear-gradient(to top, #008c00, #00c800)' : 'linear-gradient(to top, #ffffff, #dddddd)'};
  }
`;

/********************************************* Component ******************************************/
const ContactForm = props => {
  return (
    <DivContactContainer>
      <FormContact>
        <DivInput>
          <H2Contact name="true">Name:&nbsp;</H2Contact>
          <InputContact type="text" name="name" />
        </DivInput>
        <DivInput>
          <H2Contact email="true">Email:&nbsp;</H2Contact>
          <InputContact type="email" name="email" />
        </DivInput>
        <DivInput>
          <H2Contact subject="true">Subject:&nbsp;</H2Contact>
          <InputContact type="text" name="subject" autoComplete="off" />
        </DivInput>
        <DivTextArea>
          <H2Contact>Message:</H2Contact>
          <textarea type="text" name="message" />
        </DivTextArea>
        <DivButtons>
          <ButtonContact submit type="button">Submit</ButtonContact>
          <ButtonContact type="button">Clear</ButtonContact>
        </DivButtons>
      </FormContact>
    </DivContactContainer>
  );
};

export default ContactForm;