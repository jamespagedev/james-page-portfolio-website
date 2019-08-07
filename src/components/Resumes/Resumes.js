import React from 'react';
import styled from 'styled-components';

// globals
import { rWidths } from '../../globals/CssMixins.js';

// components
import Resume from './Resume.js';

// variables
const Data = [
  {
    resumeTitle: "Full Stack Dev",
    resumeLink: "https://drive.google.com/file/d/18WVpEbOGspnGwwNXCkvC94iekShFIDhz/view?usp=sharing",
  },
  {
    resumeTitle: "Software Dev",
    resumeLink: "https://drive.google.com/file/d/1ueYLYSHeW6jvfcXVtMNJKntYDxFoqTZ7/view?usp=sharing",
  },
  {
    resumeTitle: "Front-End Dev",
    resumeLink: "https://drive.google.com/file/d/1dSPD8WwO2nEYHY_yMpCvCokBcDwqDVSr/view?usp=sharing",
  },
  {
    resumeTitle: "Backend-End Dev",
    resumeLink: "https://drive.google.com/file/d/1spnELVYF5o9kxpHw6YZ6rfIbXUktvi0D/view?usp=sharing",
  },
  {
    resumeTitle: "Test Engineer",
    resumeLink: "https://drive.google.com/file/d/1W1s_5ig_oaombliBUqZKvYe6F4xTElZ-/view?usp=sharing",
  },
  {
    resumeTitle: "IT Admin",
    resumeLink: "https://drive.google.com/file/d/1Qk5eoTx-lqZ330oMHiFpUnIqpN00OKGD/view?usp=sharing",
  }
]

//============================================ styles =============================================
const DivWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  width: 87%;
  margin-bottom: 5rem;

  @media (max-width: ${rWidths.phone}) {
    width: 100%;
  }
`;

//=========================================== component ===========================================
const Resumes = () => {
  return (
    <DivWrapper>
      {Data.map((resume, resumeNumber) => {
        return <Resume resume={resume} key={resumeNumber} />
      })}
    </DivWrapper>
  );
};

export default Resumes;