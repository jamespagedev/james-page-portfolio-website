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
  height: 54px;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 70%;
  }
`;

const Nav = styled.nav`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-evenly;
`;

const LinkIntroSkills = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  width: 100%;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#7fff00` : `white`)};
  text-decoration: none;

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
  font-size: 1.6rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  width: 100%;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#7fff00` : `white`)};
  text-decoration: none;

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
  font-size: 1.6rem;
  font-weight: 300;
  font-style: normal;
  font-family: sans-serif;
  letter-spacing: 0.2em;
  width: 100%;
  color: ${props => (props.selectedmainheaderpage === 'true' ? `#7fff00` : `white`)};
  text-decoration: none;

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
        <LinkIntroSkills
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.introskills).toString()}
          to={`${props.introSkillsSubLink}`}
        >
          INTRO/SKILLS
        </LinkIntroSkills>
        <LinkPortfolio
          selectedmainheaderpage={(props.pathname === ClientUrlLinks.projectsresumes).toString()}
          to={`${props.projectsResumesSubLink}`}
        >
          PROJECTS\RESUMES
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
