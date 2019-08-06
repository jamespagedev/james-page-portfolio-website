import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

// globals
import { Colors } from '../../globals/CssMixins.js';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: none;
  width: 100%;
  background: ${Colors.Woodsmoke2};
  z-index: 4001;

  @media(max-width: 900px) {
    display: flex;
    position: fixed;
    top: 8rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const LinkNavItem = styled(Link)`
  color: white;
  font-size: 4rem;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  padding: 2rem;
  border-bottom: 2px solid #4deeea;

  &.active {
    color: #78d0fb;
  }

  &:hover {
    background-color: white;
    color: black;
  }
`;

/********************************************* Component ******************************************/
const PhoneHamburgerDropdown = props => {
  return (
    <DivWrapper onClick={ev => ev.stopPropagation()}>
      <Nav>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`home-phone`}
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
          to={`skills`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          SKILLS
        </LinkNavItem>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`projects`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          PROJECTS
        </LinkNavItem>
        <LinkNavItem
          onClick={ev => props.setHamburgerMenu(ev, false)}
          activeClass="active"
          to={`resumes`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          RESUMES
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

export default PhoneHamburgerDropdown;