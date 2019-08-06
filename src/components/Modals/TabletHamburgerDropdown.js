import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: none;
  width: 100%;
  height: 200px;
  background: red;
  z-index: 4001;

  @media(max-width: 1200px) {
    display: flex;
  }

  @media(max-width: 900px) {
    display: none;
  }
`;

/********************************************* Component ******************************************/
const TabletHamburgerDropdown = props => {
  return (
    <DivWrapper>
      <h1>This is the TabletHamburgerDropdown component</h1>
    </DivWrapper>
  );
};

export default TabletHamburgerDropdown;