import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.pending === 'true' ? 'flex' : 'none'};
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

const ImgSpinner = styled.img`
  width: 13%;
  height: 26%;
`;

const DivSpinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 11rem 0;
`;

//=========================================== component ===========================================
const ContactSendPending = props => {
  return (
    <DivWrapper pending={props.pending.toString()}>
      <DivMessage>
        <H1Message>message sending...</H1Message>
        <DivSpinner>
          <ImgSpinner src={require('../../assets/img/spinner.gif')}></ImgSpinner>
        </DivSpinner>
      </DivMessage>
    </DivWrapper>
  );
};

export default ContactSendPending;