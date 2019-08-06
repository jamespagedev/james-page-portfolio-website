import React from 'react';
import styled from 'styled-components';

// components
import TabletHamburgerDropdown from './TabletHamburgerDropdown.js';
import PhoneHamburgerDropdown from './PhoneHamburgerDropdown.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 8rem;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4000;
`;

const DivVoid = styled.div`
  display: none;
`;

/********************************************* Component ******************************************/
const Modals = props => {
  if (props.hamburgerOpen){
    return (
      <DivWrapper onClick={ev => props.setHamburgerMenu(ev, false)}>
        <TabletHamburgerDropdown hamburgerOpen={props.hamburgerOpen} setHamburgerMenu={props.setHamburgerMenu}/>
        <PhoneHamburgerDropdown />
      </DivWrapper>
    );
  }
  return (
    <DivVoid />
  );
};

export default Modals;