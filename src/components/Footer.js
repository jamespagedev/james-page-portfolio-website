import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivFooter = styled.div`
  display: flex;
  width: 100%;
  padding: 10rem;
  background-color: #111111;

  @media(max-width: 3600px) {
    padding: 9.750rem;
  }

  @media(max-width: 3500px) {
    padding: 9.5rem;
  }

  @media(max-width: 3400px) {
    padding: 9.250rem;
  }

  @media(max-width: 3300px) {
    padding: 9rem;
  }

  @media(max-width: 3200px) {
    padding: 8.750rem;
  }

  @media(max-width: 3100px) {
    padding: 8.5rem;
  }

  @media(max-width: 3000px) {
    padding: 8.250rem;
  }

  @media(max-width: 2900px) {
    padding: 8rem;
  }

  @media(max-width: 2800px) {
    padding: 7.750rem;
  }

  @media(max-width: 2700px) {
    padding: 7.5rem;
  }

  @media(max-width: 2600px) {
    padding: 7.250rem;
  }

  @media(max-width: 2500px) {
    padding: 7rem;
  }

  @media(max-width: 2400px) {
    padding: 6.750rem;
  }

  @media(max-width: 2300px) {
    padding: 6.5rem;
  }

  @media(max-width: 2200px) {
    padding: 6.250rem;
  }

  @media(max-width: 2100px) {
    padding: 6rem;
  }

  @media(max-width: 2000px) {
    padding: 5.750rem;
  }

  @media(max-width: 1900px) {
    padding: 5.5rem;
  }

  @media(max-width: 1800px) {
    padding: 5.250rem;
  }

  @media(max-width: 1700px) {
    padding: 5rem;
  }

  @media(max-width: 1600px) {
    padding: 4.750rem;
  }

  @media(max-width: 1500px) {
    padding: 4.5rem;
  }

  @media(max-width: 1400px) {
    padding: 4.250rem;
  }

  @media(max-width: 1300px) {
    padding: 4rem;
  }

  @media(max-width: 1200px) {
    padding: 3.850rem;
  }

  @media(max-width: 1100px) {
    padding: 3.7rem;
  }

  @media(max-width: 1000px) {
    padding: 3.6rem;
  }
`;

const PSignature = styled.p`
  color: white;
  text-align: center;
  width: 100%;
  font-size: 3rem;

  @media(max-width: 3300px) {
    font-size: 2.8rem;
  }

  @media(max-width: 3000px) {
    font-size: 2.6rem;
  }

  @media(max-width: 2700px) {
    font-size: 2.4rem;
  }

  @media(max-width: 2400px) {
    font-size: 2.2rem;
  }

  @media(max-width: 2100px) {
    font-size: 2rem;
  }

  @media(max-width: 1800px) {
    font-size: 1.8rem;
  }

  @media(max-width: 1400px) {
    font-size: 1.6rem;
  }

  @media(max-width: 1000px) {
    font-size: 1.4rem;
  }
`;

/********************************************* Component ******************************************/
const Footer = props => {
  return (
    <DivFooter>
      <PSignature>© Copyright James Page 2019</PSignature>
    </DivFooter>
  );
};

export default Footer;