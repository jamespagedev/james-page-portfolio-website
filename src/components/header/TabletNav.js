import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivHamburger = styled.div`
  display: none;

  &:hover {
    cursor: pointer;
  }

  @media(max-width: 1200px) {
    display: inline-block;
    padding: 0.8rem 3.5rem;
  }

  @media(max-width: 900px) {
    display: inline-block;
    padding: 0.8rem 1.5rem;
  }
`;

const DivBarTop = styled.div`
  width: 4rem;
  height: 0.5rem;
  background-color: white;
  margin: 1rem 0;
  transition: 0.4s;

  -webkit-transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(-45deg) translate(-1rem,1rem)'};
  transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(-45deg) translate(-1rem,1rem)'};

  @media(max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
    -webkit-transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(-45deg) translate(-0.8rem, 0.7rem)'};
    transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(-45deg) translate(-0.8rem, 0.7rem)'};
  }
`;

const DivBarMid = styled.div`
  width: 4rem;
  height: 0.5rem;
  background-color: white;
  margin: 1rem 0;
  transition: 0.4s;

  opacity: ${ props => props.hamburgerOpen === 'true' && '0'};

  @media(max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
  }
`;

const DivBarBot = styled.div`
  width: 4rem;
  height: 0.5rem;
  background-color: white;
  margin: 1rem 0;
  transition: 0.4s;

  -webkit-transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(46deg) translate(-1.1rem,-1.1rem)'};
  transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(46deg) translate(-1.1rem,-1.1rem)'};

  @media(max-width: 380px) {
    width: 3.5rem;
    margin: 0.6rem 0;
    -webkit-transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(45deg) translate(-0.8rem, -0.8rem)'};
    transform: ${ props => props.hamburgerOpen === 'true' && 'rotate(45deg) translate(-0.8rem, -0.8rem)'};
  }
`;

/********************************************* Component ******************************************/
const TabletNav = props => {
  return (
    <DivHamburger>
      <DivBarTop hamburgerOpen="false" />
      <DivBarMid hamburgerOpen="false" />
      <DivBarBot hamburgerOpen="false" />
    </DivHamburger>
  );
};

export default TabletNav;