import React from 'react';
import styled from 'styled-components';
import MainHeaderNav from './MainHeaderNav';
import { Colors } from '../../globals/CssMixins';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-top: 3px solid ${Colors.Rhino};
  border-bottom: 3px solid ${Colors.Rhino};
  background-color: ${Colors.Vulcan};
  width: 100%;
  position: fixed;
  z-index: 5000;
`;
// font-family: 'Charm', cursive;
const H1Logo = styled.h1`
  margin: 1.5rem 4rem 3.5rem 5rem;
  user-select: none;
  color: #4deeea;
  filter: contrast(1.75);
  font-weight: bold;
  text-shadow: 2px 3px rgba(0, 0, 0, 0.7);
  font-size: 9rem;

  @media (max-width: 2600px) {
    font-size: 7rem;
    margin: 1rem 4rem 3rem 5rem;
  }

  @media (max-width: 2100px) {
    font-size: 6rem;
  }

  @media (max-width: 1800px) {
    font-size: 5rem;
  }

  @media (max-width: 1300px) {
    font-size: 4rem;
  }
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const MainHeader = props => {
  return (
    <DivWrapper>
      <link href='https://fonts.googleapis.com/css?family=Charm:700' rel='stylesheet' />
      <H1Logo>James&nbsp;C.&nbsp;Page</H1Logo>
      <MainHeaderNav {...props} />
    </DivWrapper>
  );
};

export default MainHeader;
