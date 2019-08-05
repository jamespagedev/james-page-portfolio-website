import React from 'react';
import styled from 'styled-components';
import MainHeaderNav from './MainHeaderNav';
import { Colors } from '../../globals/CssMixins';

// images
import myFaceImgImg from '../../assets/img/myFace.png';

/***************************************************************************************************
 ********************************************** Styles *********************************************
 **************************************************************************************************/
const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  border-bottom: 4px solid #4deeea;
  background-color: ${Colors.Vulcan};
  width: 100%;
  height: 8rem;
  position: fixed;
  z-index: 5000;
`;

const DivImgName= styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin-left: 5rem;
`;

const ImgFace = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 15px;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
  pointer-events: none;
`;

const H1Logo = styled.h1`
  padding: 0 0 1rem 2rem;
  user-select: none;
  color: #5c8ad2;
  filter: contrast(1.75);
  font-weight: bold;
  font-size: 5rem;
`;

/***************************************************************************************************
 ********************************************* Component *******************************************
 **************************************************************************************************/
const MainHeader = props => {
  return (
    <DivWrapper>
      <DivImgName>
        <ImgFace src={`${myFaceImgImg}`} draggable="false" alt='' />
        <H1Logo>James&nbsp;C.&nbsp;Page</H1Logo>
      </DivImgName>
      <MainHeaderNav {...props} />
    </DivWrapper>
  );
};

export default MainHeader;
