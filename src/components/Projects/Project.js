import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 5rem;

    @media (max-width: 900px) {
      margin-bottom: 3rem;
    }
  }
`;

const DivProjectDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 25px;
  padding: 0 7rem;

  @media (max-width: 3300px) {
    padding: 0 4.9rem;
  }

  @media (max-width: 3000px) {
    padding: 0 4.5rem;
  }

  @media (max-width: 2600px) {
    padding: 0 4rem;
  }

  @media (max-width: 2100px) {
    padding: 0 5rem;
  }

  @media (max-width: 1800px) {
    padding: 0 3.2rem;
  }

  @media (max-width: 1500px) {
    padding: 0 3rem;
  }

  @media (max-width: 1300px) {
    padding: 0 1rem;
  }

  @media (max-width: 900px) {
    padding: 0 2rem;
  }

  @media (max-width: 500px) {
    padding: 0 1rem;
  }
`;

const DivProjectImage = styled.div`
  width: 100%;
  border-bottom: 1px solid black;
`;

const ImgProject = styled.img`
  width: 100%;
  user-select: none;
`;

const H2Title = styled.h2`
  font-size: 6rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;

  @media (max-width: 3000px) {
    font-size: 5rem;
  }

  @media (max-width: 2600px) {
    font-size: 4rem;
  }

  @media (max-width: 2100px) {
    font-size: 3.4rem;
  }

  @media (max-width: 1800px) {
    font-size: 3rem;
  }

  @media (max-width: 1500px) {
    font-size: 2.6rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.9rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.6rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 900px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 750px) {
    font-size: 2.4rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 500px) {
    font-size: 1.9rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1.4rem;
  }
`;

const HRTitle = styled.hr`
  width: 80rem;
  height: 3px;
  background: black;
  margin: 10px 0 35px;

  @media (max-width: 3000px) {
    width: 67rem;
  }

  @media (max-width: 2600px) {
    width: 54rem;
  }

  @media (max-width: 2100px) {
    width: 46rem;
    margin: 5px 0 30px;
  }

  @media (max-width: 1800px) {
    width: 40rem;
    margin: 0 0 25px;
  }

  @media (max-width: 1500px) {
    width: 35rem;
    margin: 0 0 10px;
  }

  @media (max-width: 1300px) {
    width: 26rem;
  }

  @media (max-width: 1100px) {
    width: 22rem;
  }

  @media (max-width: 900px) {
    width: 40.5rem;
  }

  @media (max-width: 750px) {
    width: 32.5rem;
  }

  @media (max-width: 600px) {
    width: 27rem;
  }

  @media (max-width: 500px) {
    width: 25.5rem;
    margin: 0 0 15px;
  }

  @media (max-width: 400px) {
    width: 18.5rem;
  }
`;

const H3Summary = styled.h3`
  font-size: 4rem;
  width: 100%;
  text-align: center;
  margin-bottom: 10rem;
  line-height: 5rem;

  @media (max-width: 3300px) {
    font-size: 3.8rem;
    margin-bottom: 9rem;
  }

  @media (max-width: 3000px) {
    font-size: 3.2rem;
    margin-bottom: 8rem;
  }

  @media (max-width: 2600px) {
    font-size: 2.5rem;
    margin-bottom: 6rem;
  }

  @media (max-width: 2100px) {
    font-size: 2.1rem;
    line-height: 4rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 1800px) {
    font-size: 1.8rem;
    line-height: 3.5rem;
    margin-bottom: 4rem;
  }

  @media (max-width: 1500px) {
    font-size: 1.5rem;
    line-height: 3rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.37rem;
    line-height: 2.5rem;
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1100px) {
    font-size: 1.1rem;
    line-height: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    font-size: 2.1rem;
    line-height: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 1.6rem;
    line-height: 2.5rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    font-size: 1.32rem;
    line-height: 2rem;
  }
`;

const DivLinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10rem;

  @media (max-width: 3300px) {
    margin-bottom: 9rem;
  }

  @media (max-width: 3000px) {
    margin-bottom: 8rem;
  }

  @media (max-width: 2600px) {
    margin-bottom: 6rem;
  }

  @media (max-width: 2100px) {
    margin-bottom: 5rem;
  }

  @media (max-width: 1800px) {
    margin-bottom: 4rem;
  }

  @media (max-width: 1500px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 1300px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 1100px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: 0;
  }
`;

const ALink = styled.a`
  width: 380px;

  @media (max-width: 3300px) {
    width: 340px;
  }

  @media (max-width: 3000px) {
    width: 290px;
  }

  @media (max-width: 2600px) {
    width: 250px;
  }

  @media (max-width: 2100px) {
    width: 200px;
  }

  @media (max-width: 1800px) {
    width: 170px;
  }

  @media (max-width: 1500px) {
    width: 150px;
  }

  @media (max-width: 1300px) {
    width: 120px;
  }

  @media (max-width: 1100px) {
    width: 100px;
  }

  @media (max-width: 900px) {
    width: 40%;
    margin-bottom: 2rem;
  }

  @media (max-width: 750px) {
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
  }
`;

const ButtonLink = styled.button`
  border: 1px solid black;
  background: white;
  color: black;
  font-size: 5rem;
  padding: 2rem 0;
  width: 100%;
  outline: none;

  @media (max-width: 3300px) {
    font-size: 4.2rem
  }

  @media (max-width: 3000px) {
    font-size: 3.6rem
  }

  @media (max-width: 2600px) {
    font-size: 3.2rem;
  }

  @media (max-width: 2100px) {
    font-size: 2.8rem;
  }

  @media (max-width: 1800px) {
    font-size: 2.4rem;
    padding: 1.5rem 0;
  }

  @media (max-width: 1500px) {
    font-size: 2rem;
  }

  @media (max-width: 1300px) {
    font-size: 1.6rem;
    padding: 1rem 0;
  }

  @media (max-width: 1100px) {
    font-size: 1.4rem;
  }

  @media (max-width: 900px) {
    font-size: 3rem;
  }

  @media (max-width: 750px) {
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }

  &:hover {
    cursor: pointer;
    background: #111111;
    color: white;
  }
`;

/********************************************* Component ******************************************/
const Project = props => {
  return (
    <DivWrapper>
      <DivProjectImage>
        {
          props.project.imgType === "gif" ? <ImgProject src={require(`../../assets/img/${props.project.projectPreviewImg}.gif`)} draggable="false" alt="symposium-discussion-boards" /> : <ImgProject src={require(`../../assets/img/${props.project.projectPreviewImg}.png`)} draggable="false" alt="symposium-discussion-boards" />
        }
      </DivProjectImage>
      <DivProjectDetails>
        <H2Title>{props.projectName}</H2Title>
        <HRTitle />
        <H3Summary>{props.project.summary}</H3Summary>
        <DivLinks>
          {(props.project.links.website[0] === 'None') ? (
            <ALink oneLink href={props.project.links.github[0]} target='_blank' draggable="false" rel='noopener noreferrer'><ButtonLink type="button">Github</ButtonLink></ALink>
          ) : (
            <React.Fragment>
              <ALink href={props.project.links.github[0]} target='_blank' draggable="false" rel='noopener noreferrer'><ButtonLink type="button">Github</ButtonLink></ALink>
              <ALink href={props.project.links.website[0]} target='_blank' draggable="false" rel='noopener noreferrer'><ButtonLink type="button">Website</ButtonLink></ALink>
            </React.Fragment>
          )}
        </DivLinks>
      </DivProjectDetails>
    </DivWrapper>
  );
};

export default Project;