import React from 'react';
import styled from 'styled-components';

// Components
import TopSection from '../components/Portfolio/TopSection.js';
import MidSection from '../components/Portfolio/MidSection.js';
import BotSection from '../components/Portfolio/BotSection.js';

/********************************************** Styles ********************************************/
// Note: phone view 650 width.
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8rem;
`;

/********************************************* Component ******************************************/
const PortfolioPage = props => {
  return (
    <DivWrapper>
      <TopSection />
      <MidSection />
      <BotSection />
    </DivWrapper>
  );
};

export default PortfolioPage;