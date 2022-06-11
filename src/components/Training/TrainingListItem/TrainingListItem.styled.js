import styled from '@emotion/styled';
import { ReactComponent as BookIcon } from '../../../images/icons/training/bookIcon.svg';
import { ReactComponent as DeleteIcon } from '../../../images/icons/training/deleteIcon.svg';

export const TrainingListItemStyled = styled.li`
  position: relative;
  width: 100%;
  padding: 22px 35px;
  @media (max-width: 768px) {
    :not(:last-child) {
      border-bottom: 1px solid #e0e5eb;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    padding: 11px 0px;
  }
  @media (min-width: 1280px) {
    padding: 7px 0px;
  }
`;

export const BookIconStyled = styled(BookIcon)`
  width: 22px;
  height: 17px;
  fill: #b1b5c2;
  @media (max-width: 320px) {
    position: absolute;
    top: 25px;
    left: 0;
  }
  @media (min-width: 768px) {
    margin-right: 18px;
  }
`;

export const TrainingListItemTitle = styled.p`
  /* composes: field; */
  @media (max-width: 320px) {
    margin-bottom: 17px;
    min-height: 15px;
  }
  @media (min-width: 768px) {
    width: 206px;
    margin-right: 18px;
  }
  @media (min-width: 1280px) {
    width: 304px;
  }
`;
export const TrainingListItemAuthor = styled.p`
  @media (max-width: 320px) {
    margin-bottom: 17px;
  }
  @media (min-width: 768px) {
    width: 154px;
    margin-right: 18px;
  }
  @media (min-width: 1280px) {
    width: 194px;
  }
`;
export const TrainingListItemYear = styled.p`
  @media (max-width: 320px) {
    margin-bottom: 17px;
  }
  @media (min-width: 768px) {
    width: 42px;
    margin-right: 18px;
    text-align: right;
  }
`;
export const TrainingListItemPages = styled.p`
  @media (min-width: 768px) {
    width: 76px;

    text-align: right;
  }
`;

export const DeleteIconStyled = styled.svg`
  color: #898f9f;
  &:hover {
    color: #ff6b08;
  }
  @media (max-width: 320px) {
    position: absolute;
    top: 25px;
    right: 0;
  }
  @media (min-width: 768px) {
    margin-left: 48px;
  }
  @media (min-width: 1280px) {
    margin-left: 116px;
  }
`;

export const DeleteButton = styled.button`
  /* padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  } */

  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  position: absolute;
  right: 0;
  top: 0;
  @media screen and (min-width: 480px) {
    right: -7px;
  }

  @media screen and (min-width: 768px) {
    right: 20px;
  }

  @media screen and (min-width: 1280px) {
    right: 35px;
  }
`;
