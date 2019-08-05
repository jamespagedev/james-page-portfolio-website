// Libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
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
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

const LinkHome = styled(Link)`
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

  @media (max-width: 2600px) {
    font-size: 4.2rem;
  }

  @media (max-width: 2100px) {
    font-size: 3.4rem;
  }

  @media (max-width: 1800px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }

  &:hover {
    transition: all 0.4s ease-in;
    color: #78d0fb;
    text-decoration: underline;
  }
`;

const LinkPortfolio = styled(Link)`
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

  @media (max-width: 2600px) {
    font-size: 4.2rem;
  }

  @media (max-width: 2100px) {
    font-size: 3.4rem;
  }

  @media (max-width: 1800px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }

  &:hover {
    transition: all 0.4s ease-in;
    color: #78d0fb;
    text-decoration: underline;
  }
`;

const LinkContact = styled(Link)`
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
  color: white;
  &.active {
    color: #ababab;
  }
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  @media (max-width: 2600px) {
    font-size: 4.2rem;
  }

  @media (max-width: 2100px) {
    font-size: 3.2rem;
  }

  @media (max-width: 1800px) {
    font-size: 2.4rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.6rem;
  }

  &:hover {
    transition: all 0.4s ease-in;
    color: #78d0fb;
    text-decoration: underline;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const MainHeaderNav = props => {
  console.log('props =', props.pathname)
  return (
    <DivWrapper>
      <Nav>
        <LinkHome
          activeClass="active"
          to={`home`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          HOME
        </LinkHome>
        <LinkPortfolio
          activeClass="active"
          to={`work`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          WORK
        </LinkPortfolio>
        <LinkContact
          activeClass="active"
          to={`contact`}
          spy={true}
          smooth={true}
          offset={-80}
          duration={500}
        >
          CONTACT
        </LinkContact>
      </Nav>
    </DivWrapper>
  );
};

const mapStateToProps = state => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  { }
)(MainHeaderNav);
