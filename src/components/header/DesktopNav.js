// Libraries
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Colors } from '../../globals/CssMixins';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  margin: 0;
  background: ${Colors.Vulcan};
  width: 60%;
  justify-content: center;

  @media(max-width: 1200px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

const LinkNavItem = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  width: 100%;
  color: white;
  &.active {
    color: #ababab;
  }
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    transition: all 0.4s ease-in;
    color: #78d0fb;
    text-decoration: underline;
  }

  @media (max-width: 2100px) {
    font-size: 4rem;
  }

  @media (max-width: 1800px) {
    font-size: 3.2rem;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const DesktopNav = props => {
  return (
    <DivWrapper>
      <Nav>
        <LinkNavItem
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

export default DesktopNav;
