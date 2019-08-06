import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Link } from 'react-scroll';

// globals
import { Colors } from '../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: none;
  width: 100%;
  background: ${Colors.Woodsmoke2};
  z-index: 4001;

  @media(max-width: 1200px) {
    display: flex;
    position: fixed;
    top: 8rem;
    transition: all 0.3s;
  }

  @media(max-width: 900px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem 0;
`;

const LinkNavItem = styled(Link)`
  color: white;
  text-align: center;
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;

  &.active {
    color: #78d0fb;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

/********************************************* Component ******************************************/
const TabletHamburgerDropdown = props => {
  return (
    <DivWrapper onClick={ev => ev.stopPropagation()} hamburgerOpen={props.hamburgerOpen}>
      <Nav>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`home`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          HOME
        </LinkNavItem>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`work`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          WORK
        </LinkNavItem>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`contact`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          CONTACT
        </LinkNavItem>
      </Nav>
    </DivWrapper>
  );
};

export default TabletHamburgerDropdown;