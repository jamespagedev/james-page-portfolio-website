import React from 'react';
import styled from 'styled-components';

// components
import TabletHamburgerDropdown from './TabletHamburgerDropdown.js';
import PhoneHamburgerDropdown from './PhoneHamburgerDropdown.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  position: fixed;
  top: 8rem;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  max-height: ${props => props.hamburgeropen === 'true' ? '100%' : '0'};
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 4000;
  transition: max-height 0.3s ease-in-out;
`;

//=========================================== component ===========================================
const Modals = props => {
  return (
    <DivWrapper hamburgeropen={props.hamburgerOpen.toString()} onClick={ev => props.setHamburgerMenu(ev, false)}>
      <TabletHamburgerDropdown hamburgeropen={props.hamburgerOpen} setHamburgerMenu={props.setHamburgerMenu}/>
      <PhoneHamburgerDropdown hamburgeropen={props.hamburgerOpen} setHamburgerMenu={props.setHamburgerMenu}/>
    </DivWrapper>
  );
};

export default Modals;