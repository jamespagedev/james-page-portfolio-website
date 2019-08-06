import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: none;
  width: 100%;
  height: 200px;
  background: yellow;
  z-index: 4001;

  @media(max-width: 900px) {
    display: flex;
  }
`;

/********************************************* Component ******************************************/
const PhoneHamburgerDropdown = props => {
  return (
    <DivWrapper>
      <h1>This is the PhoneHamburgerDropdown component</h1>
    </DivWrapper>
  );
};

export default PhoneHamburgerDropdown;