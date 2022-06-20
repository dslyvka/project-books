import styled from '@emotion/styled';
import { ReactComponent as BookIcon } from '../../../images/icons/training/bookIcon.svg';

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

  animation: 1000ms show ease;

  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const BookIconStyled = styled(BookIcon)`
  width: 22px;
  height: 17px;
  fill: ${props => props.fill};
  @media (max-width: 319px) {
    position: absolute;
    top: 20px;
    left: 0;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    top: 20px;
    left: 0;
  }
  @media (min-width: 768px) {
    margin-right: 18px;
  }
`;

export const TrainingListItemTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #242a37;
  /* composes: field; */
  @media (max-width: 767px) {
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #242a37;
  @media (max-width: 767px) {
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #242a37;
  @media (max-width: 767px) {
    margin-bottom: 17px;
  }
  @media (min-width: 768px) {
    width: 42px;
    margin-right: 18px;
    text-align: right;
  }
`;
export const TrainingListItemPages = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #242a37;
  @media (min-width: 768px) {
    width: 76px;

    text-align: right;
  }
`;

export const DeleteButton = styled.button`
  padding: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background-color: transparent;
  border-style: none;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  & > svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    transition: 1000ms;
    :active,
    :focus,
    :hover {
      margin-right: 5px;
      transition: 500ms;
      transform: rotate(45deg);
      cursor: pointer;
      fill: #ff6b08;
    }
  }
  color: #898f9f;
  &:hove {
    color: #ff6b09;
  }
  @media (max-width: 319px) {
    position: absolute;
    top: 25px;
    right: 0;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    position: absolute;
    top: 25px;
    right: 0;
  }

  @media (min-width: 768px) {
    margin-left: 80px;
  }
  @media (min-width: 1280px) {
    margin-left: 180px;
  }
`;
export const TrainingListItemHead = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #898f9f;
  margin-right: 20px;
  @media (min-width: 768px) {
    display: none;
  }
`;

// export const DeleteIconStyled = styled(DeleteIcon)`
//   /* width: 22px;
//   height: 17px;
//   fill: #b1b5c2;
//   @media (max-width: 320px) {
//     top: 25px;
//     right: 0;
//   }
//   @media (min-width: 768px) {
//     margin-left: 48px;
//   }
//   @media (min-width: 1280px) {
//     margin-left: 116px;
//   } */
// `;
