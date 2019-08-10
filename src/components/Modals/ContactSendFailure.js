import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.failure === 'true' ? 'flex' : 'none'};
  position: fixed;
  top: 12rem;
  right: 0;
  left: 0;
  bottom: 0;
  width: 800px;
  height: 400px;
  background: red;
`;

//=========================================== component ===========================================
const ContactSendFailure = props => {
  return (
    <DivWrapper failure={props.failure.toString()}>
      <h1>This is the ContactSendFailure component</h1>
    </DivWrapper>
  );
};

export default ContactSendFailure;