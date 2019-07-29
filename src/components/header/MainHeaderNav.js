// Libraries
import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Colors } from '../../globals/CssMixins';

// Globals
const { ClientUrlLinks } = require('../../globals/Variables.js');



/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  margin: 0;
  background: ${Colors.Vulcan};
  width: 60%;
  height: 14rem;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 2600px) {
    height: 11rem;
  }

  @media (max-width: 2100px) {
    height: 10rem;
  }

  @media (max-width: 1800px) {
    height: 9rem;
  }

  @media (max-width: 1300px) {
    height: 8rem;
  }
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
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#ababab` : `white`)};
  text-decoration: none;

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
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#ababab` : `white`)};
  text-decoration: none;

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

const LinkCareer = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  width: 100%;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#ababab` : `white`)};
  text-decoration: none;

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
  return (
    <DivWrapper>
      <Nav>
        <LinkHome
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.home).toString()}
          to={`${props.homeSubLink}`}
        >
          HOME
        </LinkHome>
        <LinkPortfolio
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.work).toString()}
          to={`${props.workSubLink}`}
        >
          WORK
        </LinkPortfolio>
        <LinkCareer
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.contact).toString()}
          to={`${props.contactSubLink}`}
        >
          CONTACT
        </LinkCareer>
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
