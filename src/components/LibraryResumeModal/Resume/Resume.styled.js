import styled from '@emotion/styled';

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  justify-content: space-between;
  width: 280px;
  height: 395px;
  overflow: hidden;
  padding: 27px 20px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  background-color: rgba(255, 255, 255, 1);
  @media (min-width: 768px) {
    width: 608px;
    height: 399px;
    padding: 20px;
  }
`;

export const Title = styled.h3`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #242a37;
`;
export const ButtonWrapper = styled.span`
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
export const Button = styled.button`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #fff;
  box-sizing: border-box;
  border: none;
  background: #ff6b08;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transition-duration: 400ms;
  :hover,
  :focus {
    background-color: #ff6b08;
    color: #ffffff;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
  }
  &:first-child {
    color: #242a37;
    background: #ffffff;
    border: 1px solid #242a37;
    box-shadow: none;
    transition-duration: 400ms;
    :hover,
    :focus {
      background-color: #ff6b08;
      color: #ffffff;
      border: none;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
      transform: scale(1.05);
    }
  }
  margin: 8px;
  @media (min-width: 768px) {
    width: 130px;
    margin: 16px;
  }
  width: 97px;
  height: 40px;
`;
