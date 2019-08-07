import React from 'react';
import styled from 'styled-components';

// components
import TopSection from '../components/Portfolio/TopSection.js';
import MidSection from '../components/Portfolio/MidSection.js';
import BotSection from '../components/Portfolio/BotSection.js';

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 8rem;
`;

//=========================================== component ===========================================
const PortfolioPage = () => {
  return (
    <DivWrapper>
      <TopSection />
      <MidSection />
      <BotSection />
    </DivWrapper>
  );
};

export default PortfolioPage;