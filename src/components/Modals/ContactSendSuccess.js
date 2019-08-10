import React from 'react';
import styled from 'styled-components';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: ${props => props.success === 'true' ? 'flex' : 'none'};
  position: fixed;
  top: 12rem;
  right: 0;
  left: 0;
  bottom: 0;
  width: 800px;
  height: 400px;
  background: green;
`;

//=========================================== component ===========================================
const ContactSendSuccess = props => {
  return (
    <DivWrapper success={props.success.toString()}>
      <h1>This is the ContactSendSuccess component</h1>
    </DivWrapper>
  );
};

export default ContactSendSuccess;