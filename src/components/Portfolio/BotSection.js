import React from 'react';
import styled from 'styled-components';

// Variables
import { Colors } from '../../globals/CssMixins';

/********************************************** Styles ********************************************/
const DivWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: calc(100% - 60px);
  background-color: ${Colors.Vulcan};
  background: linear-gradient(90deg, transparent 52.75%, #7FFF00 53%, #7FFF00 calc(53% + 3px), transparent calc(50% + 4px));

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

/********************************************* Component ******************************************/
const BotSection = props => {
  return (
    <DivWrapper>
      <h1>This is the BotSection component</h1>
    </DivWrapper>
  );
};

export default BotSection;