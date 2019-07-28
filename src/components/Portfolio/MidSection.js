import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivMidBackground = styled.div`
  display: flex;
  width: 100%;
  background-color: #004e95;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: -2px;
    left: 0;
    right: 0;
    background-color: #013a6b;
    z-index: 2;
    clip-path: polygon(0% 100%, 55.5% 100%, 44.5% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #7FFF00;
    z-index: 1;
    clip-path: polygon(0% 100%, 56% 100%, 45% 0%, 0% 0%);

    @media (max-width: 900px) {
      display: none
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const DivProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  z-index: 3;

  @media (max-width: 660px) {
    width: 100%;
    align-items: center;
    border-top: 2px solid #7FFF00;
    border-bottom: 2px solid #7FFF00;
  }
`;

const DivProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: center;
  padding-left: 25px;

  @media (max-width: 660px) {
    padding: 0;
  }
`;

const DivProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: gray;
  margin-bottom: 25px;
`;

const DivResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;

  @media (max-width: 660px) {
    width: 100%;
    border-top: 2px solid #7FFF00;
    border-bottom: 2px solid #7FFF00;
    align-items: center;
  }
`;

const H1Projects = styled.h1`
  align-self: center;
  user-select: none;
  color: white;
`;

const H1Resumes = styled.h1`
  margin: 0.67em 0 0 0;
  align-self: center;
  user-select: none;
  color: white;
`;

const H4ClickToView = styled.h4`
  margin: 0 0 0.67em 0;
  align-self: center;
  user-select: none;
  color: white;
`;

const DivResumeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0 20px;

  @media (max-width: 500px) {
    margin: 0;
  }
`;

const DivResume = styled.div`
  position: relative;
  width: 23%;
  background-color: white;
  border: 2px solid black;

  @media (max-width: 650px) {
    margin: 0 0 30px 0;
    width: 26%;
  }

  @media (max-width: 600px) {
    margin: 0 0 17px 0;
    width: 28%;
  }

  @media (max-width: 500px) {
    margin: 15px;
    width: 39%;
  }

  @media (max-width: 370px) {
    margin: 15px;
    width: 39%;
  }

  @media (max-width: 345px) {
    margin: 15px;
    margin: 10px auto;
    width: 43%;
  }
`;

const AWordDownload = styled.a`
  display: flex;
  flex-direction: column;
`;

const ImgPdf = styled.img`
  margin: 15px auto;
  width: 100%;

  @media (max-width: 650px) {
    margin: 0 auto 20px;
    width: 80%;
  }

  @media (max-width: 500px) {
    margin: 15px auto;
    width: 85%;
  }

  @media (max-width: 370px) {
    margin: 15px auto;
    width: 85%;
  }

  @media (max-width: 345px) {
    margin: 15px auto;
    width: 85%;
  }
`;

const PResumeTitle = styled.p`
  margin: 0;
  text-align: center;
  font-weight: bold;
  user-select: none;
  font-size: 16px;
  padding: 5px 0 10px;

  @media (max-width: 800px) {
    font-size: 15px;
  }

  @media (max-width: 660px) {
    font-size: 14px;
  }
`;



/********************************************* Component ******************************************/
const MidSection = props => {
  return (
    <DivMidBackground>
        <DivProjectSection>
          <H1Projects>Project(s)</H1Projects>
          <DivProjectsContainer>
            <DivProject></DivProject>
            <DivProject></DivProject>
            <DivProject></DivProject>
            <DivProject></DivProject>
          </DivProjectsContainer>
        </DivProjectSection>
        <DivResumeSection>
          <H1Resumes>Resume(s)</H1Resumes>
          <H4ClickToView>(click to view)</H4ClickToView>
          <DivResumeContainer>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>Front-End&nbsp;Dev</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>Full&nbsp;Stack&nbsp;Dev</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>Back-End&nbsp;Dev</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>Software&nbsp;Dev</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>IT&nbsp;Admin</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
            <DivResume>
              <AWordDownload>
                <PResumeTitle>Test&nbsp;Engineer</PResumeTitle>
                <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
              </AWordDownload>
            </DivResume>
          </DivResumeContainer>
        </DivResumeSection>
    </DivMidBackground>
  );
};

export default MidSection;