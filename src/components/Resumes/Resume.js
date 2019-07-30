import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/

const DivResumeGutterWidth = styled.div`
  width: 50%;
  height: 40%;

  @media (max-width: 900px) {
    height: 100%;
  }
`;

const DivResume = styled.div`
  position: relative;
  width: 80%;
  background-color: white;
  border: 2px solid black;

  @media (max-width: 3600px) {

  }

  @media (max-width: 3300px) {
  }

  @media (max-width: 3000px) {
  }

  @media (max-width: 2600px) {
  }

  @media (max-width: 2100px) {
  }

  @media (max-width: 1800px) {
  }

  @media (max-width: 1500px) {
  }

  @media (max-width: 1300px) {
  }

  @media (max-width: 1100px) {
  }

  @media (max-width: 900px) {
    width: 85%;
    margin: 3rem;
  }

  @media (max-width: 750px) {
    margin: 2.6rem;
  }

  @media (max-width: 600px) {
    margin: 2.2rem;
  }

  @media (max-width: 500px) {
    margin: 1.8rem;
  }

  @media (max-width: 400px) {
    
    margin: 1.2rem;
  }

&::before {
  content: '';
  font-size: ${props => props.pNamefontSize};
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: linear-gradient(to bottom, #ecd7af 0%, rgba(183, 158, 112, 0) 100%);
  opacity: 0;
  pointer-events: none;
}

&:hover::before {
  opacity: 1;
  transition: all .3s;
}

&:hover {
  box-shadow: 0 15px 45px 0px #888888;
  cursor: pointer;

  p {
    text-decoration: underline;
    z-index: 2;
  }
}
`;

const AWordDownload = styled.a`
  display: flex;
  flex-direction: column;
  color: black;
`;

const PResumeTitle = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-weight: bold;
  user-select: none;
  font-size: 6.5rem;

  @media (max-width: 3600px) {
    font-size: 6rem;
  }

  @media (max-width: 3300px) {
    font-size: 5.5rem;
  }

  @media (max-width: 3000px) {
    font-size: 4.5rem;
  }

  @media (max-width: 2600px) {
    font-size: 3.5rem;
  }

  @media (max-width: 2100px) {
    font-size: 3rem;
  }

  @media (max-width: 1800px) {
    font-size: 2.5rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 1500px) {
    font-size: 2.2rem;
    margin-top: 1.3rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.8rem;
    margin-top: 1rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.4rem;
    margin-top: 0.8rem;
  }

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 2.4rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }

  @media (max-width: 500px) {
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.2rem;
  }
`;

const ImgPdf = styled.img`
  padding: 8rem;
  width: 100%;

  @media (max-width: 3600px) {
    padding: 6rem;
  }

  @media (max-width: 3300px) {
    padding: 5.5rem;
  }

  @media (max-width: 3000px) {
    padding: 5rem;
  }

  @media (max-width: 2600px) {
    padding: 4.5rem;
  }

  @media (max-width: 2100px) {
    padding: 4rem;
  }

  @media (max-width: 1800px) {
    padding: 3.5rem;
  }

  @media (max-width: 1500px) {
    padding: 3rem;
  }

  @media (max-width: 1300px) {
    padding: 2.5rem;
  }

  @media (max-width: 1100px) {
    padding: 2rem;
  }
/* figure out good padding size once resume's are centered */
  @media (max-width: 900px) {
    padding: 2rem;
  }

  @media (max-width: 750px) {
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 500px) {
  }

  @media (max-width: 400px) {
  }
`;

/********************************************* Component ******************************************/
const Resume = props => {
  const { resume } = props
  return (
    <DivResumeGutterWidth>
      <DivResume>
        <AWordDownload href={resume.resumeLink} target='_blank'>
          <PResumeTitle>{resume.resumeTitle}</PResumeTitle>
          <ImgPdf src={require('../../assets/img/pdfpage.svg')}></ImgPdf>
        </AWordDownload>
      </DivResume>
    </DivResumeGutterWidth>
  );
};

export default Resume;