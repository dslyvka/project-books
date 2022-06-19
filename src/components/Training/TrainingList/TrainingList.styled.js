import styled from '@emotion/styled';
import { ReactComponent as BookIcon } from '../../../images/icons/training/bookIcon.svg';

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
export const TrainingListEmpty = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  } ;
`;
export const TrainingListEmptyItem = styled.span`
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #898f9f;
  padding-left: 40px;
`;
export const TrainingListEmptyItemTitle = styled.div`
  margin-top: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #898f9f;
`;
export const BookIconEmptyStyled = styled(BookIcon)`
  width: 22px;
  height: 17px;
  fill: ${props => props.fill};
  margin-right: 18px;
  @media (max-width: 319px) {
    position: absolute;
    top: 25px;
    left: 0;
  }
  @media (min-width: 768px) {
    margin-right: 18px;
  }
`;
