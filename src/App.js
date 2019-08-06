import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import MainHeader from './components/header/MainHeader';
import Modals from './components/Modals/Modals.js';
import PortfolioPage from './pageviews/PortfolioPage.js';
import Footer from './components/Footer.js';

// Globals
import { Colors } from './globals/CssMixins';

/***************************************************************************************************
 ********************************************** Styles **********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
`;

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  body,
  #root {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    background-color: ${Colors.Vulcan};
    height: 100%;
    font-size: 62.5%;
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
      hamburgerOpen: false
    };
  }

  setHamburgerMenu = (ev, status) => {
    ev.preventDefault();
    this.setState({hamburgerOpen: status});
  }

  render() {
    return (
      <DivWrapper>
        <GlobalStyle />
        <MainHeader hamburgerOpen={this.state.hamburgerOpen} setHamburgerMenu={this.setHamburgerMenu}/>
        <Modals hamburgerOpen={this.state.hamburgerOpen} setHamburgerMenu={this.setHamburgerMenu}/>
        <PortfolioPage />
        <Footer />
      </DivWrapper>
    );
  }
}

export default App;
