import React from 'react';
import styled from 'styled-components';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ImgSkill = styled.img`
`;

/********************************************* Component ******************************************/
const Card = ({property}) => {
  const {picture} = property;
  return (
      <DivWrapper>
          <ImgSkill src={require(`../../assets/img/${picture}.png`)} draggable="false" alt='card' />
      </DivWrapper>
  )
}

export default Card;