import React, { Component } from 'react';
import styled from 'styled-components';
import Card from './Card.js';

// Variables
const pictures = [
  {
    title: 'A.S. Degree',
    picture: "associatesdegree"
  },
  {
    title: 'B.S. Degree',
    picture: "bachelorsdegree"
  },
  {
    title: 'Favorite Books',
    picture: "favoritebooks"
  },
  {
    title: 'Code Bootcamp',
    picture: "lambdabadge"
  }
]
const totalPictures = pictures.length;

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  padding: 0 22rem 5rem 0;

  @media (max-width: 2500px) {
    padding: 0 15rem 5rem 0;
  }

  @media (max-width: 1900px) {
    padding: 0 12rem 5rem 0;
  }

  @media (max-width: 1450px) {
    padding: 0 10rem 5rem 0;
  }

  @media (max-width: 1200px) {
    padding: 0 7rem 5rem 0;
  }

  @media (max-width: 900px) {
    padding: 0;
  }
`;

const NavSelector = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 25px;

  @media (max-width: 500px) {
    margin-bottom: 20px;
  }
`;

const ButtonSelector = styled.button`
  display: flex;
  width: 23%;
  font-size: 2.6rem;
  padding: 15px 7px;
  letter-spacing: 1px;
  font-weight: bold;
  justify-content: center;
  background-color: ${props => props.selected ? '#5E9FB9' : 'white'};
  border: 1px solid black;
  cursor: pointer;
  outline: none;
  &:hover {
    color: white;
    background-color: #9AA5B0;
  }

  @media (max-width: 2400px) {
    font-size: 2rem;
  }

  @media (max-width: 2000px) {
    font-size: 1.6rem;
  }

  @media (max-width: 1700px) {
    font-size: 1.3rem;
  }

  @media (max-width: 1550px) {
    padding: 15px 25px;
  }

  @media (max-width: 500px) {
    padding: 10px 7px;
  }

  @media (max-width: 400px) {
    font-size: 1.1rem;
  }

  @media (max-width: 350px) {
    font-size: 1rem;
  }
`;

/********************************************* Component ******************************************/
class CarouselEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }

  nextImgIndex = (ev) => {
    ev.preventDefault();
    const index = (this.state.index + 1) % totalPictures;
    this.setState({index: index})
  }

  prevImgIndex = (ev) => {
    ev.preventDefault();
    const index = (this.state.index - 1) % totalPictures;
    this.setState({index: index})
  }

  setImgIndex = (ev, index) => {
    ev.preventDefault();
    this.setState({index: index})
  }

  render() {
    return (
      <DivWrapper>
        <NavSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 0)} selected={(this.state.index === 0)}>{pictures[0].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 1)} selected={(this.state.index === 1)}>{pictures[1].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 2)} selected={(this.state.index === 2)}>{pictures[2].title}</ButtonSelector>
          <ButtonSelector type="button" onClick={ev => this.setImgIndex(ev, 3)} selected={(this.state.index === 3)}>{pictures[3].title}</ButtonSelector>
        </NavSelector>
        {/* <H1Title>{pictures[this.state.index].title}</H1Title> */}
        <Card property={pictures[this.state.index]}/>
      </DivWrapper>
    );
  }
};

export default CarouselEducation;