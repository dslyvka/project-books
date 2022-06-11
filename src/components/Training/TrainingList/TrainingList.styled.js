import styled from '@emotion/styled';

export const TrainingListContainer = styled.div`
  margin-bottom: 30px;
  border-top: 1px solid #e0e5eb;
  border-bottom: 1px solid #e0e5eb;
  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const TrainingListHeader = styled.div`
  display: none;
  border-bottom: 1px solid #e0e5eb;
  line-height: 2.7;
  color: #898f9f;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const TrainingListHeaderBookTitle = styled.p`
  margin-right: 18px;
  width: 246px;
  @media (min-width: 1280px) {
    width: 344px;
  }
`;
export const TrainingListHeaderBookAuthor = styled.p`
  margin-right: 18px;
  width: 144px;
  @media (min-width: 1280px) {
    width: 184px;
  }
`;
export const TrainingListHeaderBookYear = styled.p`
  margin-right: 18px;
  width: 52px;
  text-align: right;
`;
export const TrainingListHeaderBookPages = styled.p`
  margin-right: 18px;
  width: 76px;
  text-align: right;
`;

export const TrainingListStyled = styled.ul`
  @media (min-width: 768px) {
    max-height: 182px;
    overflow-y: scroll;
    padding-top: 12px;
    padding-bottom: 12px;
  }
`;
