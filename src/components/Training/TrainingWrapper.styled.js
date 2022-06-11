import styled from '@emotion/styled';

export const TrainingWrapperStyled = styled.div`
  position: relative;
  padding-top: 30px;
  padding-bottom: 50px;
  @media (min-width: 768px) {
    padding-bottom: 60px;
  }
  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
  }
`;

export const TrainingWrapperStyledUpperPart = styled.div`
  @media (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TrainingWrapperTrainingInfo = styled.div`
  flex-grow: 1;
  padding-right: 40px;
`;
