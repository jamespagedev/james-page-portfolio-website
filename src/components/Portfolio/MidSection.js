import React from 'react';
import styled from 'styled-components';

// components
import Projects from '../Projects/Projects.js';
import Resumes from '../Resumes/Resumes.js';

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
    background-color: #4deeea;
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

/*-------------------------------------------- projects ------------------------------------------*/
const DivProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-start;
  padding: 0 0 0 3.5rem;
  z-index: 3;

  @media (max-width: 900px) {
    width: 100%;
    justify-content: center;
    clip-path: none;
    padding: 0 2.5rem 0;
    border-bottom: 4px solid #4deeea;
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Projects = styled.h1`
  color: white;
  width: 87%;
  text-align: center;
  user-select: none;
  font-size: 9rem;
  margin: 3.5rem 0;

  @media (max-width: 2600px) {
    font-size: 7rem;
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

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin: 2rem 0;
    font-size: 3rem;
  }
`;

/*-------------------------------------------- resumes -------------------------------------------*/
const DivResumeSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: flex-end;

  @media (max-width: 900px) {
    width: 100%;
    clip-path: none;
    padding: 0 2.5rem 0;
    border-bottom: 4px solid #4deeea;
  }

  @media (max-width: 500px) {
    padding: 2rem 2.5rem 0;
  }
`;

const H1Resumes = styled.h1`
  color: white;
  width: 95%;
  text-align: center;
  user-select: none;
  font-size: 9rem;
  margin: 3.5rem 0;

  @media (max-width: 2600px) {
    font-size: 7rem;
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

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 500px) {
    margin: 2rem 0;
    font-size: 3rem;
  }
`;

const H4ClickToView = styled.h4`
color: white;
width: 95%;
text-align: center;
user-select: none;
font-size: 4rem;
margin: 0 0 8.5rem;

@media (max-width: 3600px) {
  margin: 0 0 8rem;
}

@media (max-width: 3300px) {
  margin: 0 0 7.5rem;
}

@media (max-width: 3000px) {
  margin: 0 0 7rem;
}

@media (max-width: 2600px) {
  font-size: 3.2rem;
  margin: 0 0 6.5rem;
}

@media (max-width: 2100px) {
  font-size: 2.4rem;
  margin: 0 0 6rem;
}

@media (max-width: 1800px) {
  font-size: 2rem;
  margin: 0 0 5.5rem;
}

@media (max-width: 1500px) {
  margin: 0 0 5rem;
}

@media (max-width: 1300px) {
  font-size: 1.4rem;
  margin: 0 0 4.5rem;
}

@media (max-width: 1100px) {
  margin: 0 0 4rem;
}

@media (max-width: 900px) {
  width: 100%;
}

@media (max-width: 500px) {
  margin: 1rem 0 2rem;
}
`;

/********************************************* Component ******************************************/
const MidSection = props => {
  return (
    <DivMidBackground>
      <DivProjectSection>
        <H1Projects>Project(s)</H1Projects>
        <Projects />
      </DivProjectSection>
      <DivResumeSection>
        <H1Resumes>Resume(s)</H1Resumes>
        <H4ClickToView>(click to view)</H4ClickToView>
        <Resumes />
      </DivResumeSection>
    </DivMidBackground>
  );
};

export default MidSection;