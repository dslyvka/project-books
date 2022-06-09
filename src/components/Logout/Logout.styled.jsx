import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  background: #ffffff;
  padding: 48px 22px;
  width: 280px;
  @media (min-width: 768px) {
    width: 394px;
  }
`;

export const Title = styled.p`
  margin-bottom: 20px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  @media (min-width: 768px) {
    font-size: 17px;
    margin-bottom: 24px;
  }
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 97px;
  background-color: inherit;
  border: 1px solid #242a37;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #242a37;
  transition-duration: 400ms;
  :hover,
  :focus {
    background-color: #ff6b08;
    color: #ffffff;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 130px;
  }
`;

export const ContainerButton = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;
