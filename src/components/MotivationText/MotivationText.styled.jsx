import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  background: #ffffff;
  padding: 44px 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 394px;
    padding: 40px 20px 48px 20px;
  }
`;

export const Title = styled.p`
  margin-bottom: 24px;
  margin-top: 4px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
  @media (min-width: 768px) {
    margin-bottom: 24px;
    margin-top: 14px;
  }
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 152px;
  margin-bottom: 20px;
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
    margin: 0;
  }
`;

export const ContainerButton = styled.ul`
  display: flex;
  margin-bottom: -20px;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 0;
  }
`;

export const LinkStyled = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  fill: #a6abb9;
`;
