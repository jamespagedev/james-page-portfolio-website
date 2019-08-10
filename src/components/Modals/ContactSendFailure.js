import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.failure === 'true' ? 'flex' : 'none'};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 12rem;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 30%;
  z-index: 4005;
`;

const DivMessage = styled.div`
  width: 22%;
  background: white;
`;

const H1Message = styled.h1`
  width: 100%;
  padding-top: 3rem;
  text-align: center;
  font-size: 7rem;
`;

const PError = styled.p`
  font-size: 5rem;
  text-align: center;
  width: 100%;
  margin: 4rem 0;
`

const DivButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 7rem 0;
`;

const ButtonBack = styled.button`
  display: block;
  width: 35%;
  text-align: center;
  font-size: 4rem;
  padding: 2rem 0;
  border-radius: 2.5rem;
  outline: none;
  user-select: none;
`

//=========================================== component ===========================================
const ContactSendFailure = props => {
  return (
    <DivWrapper failure={props.failure.toString()}>
      <DivMessage>
        <H1Message>message failed to send</H1Message>
        <PError>{props.contactError}</PError>
        <DivButton>
          <ButtonBack onClick={ev => props.contactFailureModalButton(ev)}>Back</ButtonBack>
        </DivButton>
      </DivMessage>
    </DivWrapper>
  );
};

export default ContactSendFailure;