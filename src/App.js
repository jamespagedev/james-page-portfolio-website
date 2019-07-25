import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import MainHeader from './components/header/MainHeader';
import PortfolioPage from './pageviews/PortfolioPage.js';

// Globals
import { Colors } from './globals/CssMixins';
const { ClientUrlLinks } = require('./globals/Variables.js');

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif, cursive;
    background-color: ${Colors.Vulcan};
    height: 100%;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }

  img {
    width: 100%;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerScrolledOpacity: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenHeaderScrollEvent);
  }

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <MainHeader
          home={`${ClientUrlLinks.home}`}
          introSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.intro}`}
          skillsSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.skills}`}
          introSkillsSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.introskills}`}
          projectsSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.projects}`}
          resumesSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.resumes}`}
          projectsResumesSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.projectsresumes}`}
          contactSubLink={`${ClientUrlLinks.home}${ClientUrlLinks.contact}`}
          pathname={this.props.location.hash}
        />
        <Route path={`${ClientUrlLinks.home}`} component={PortfolioPage} />
      </DivWrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    mainPageTitles: state.mainPageTitles
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
