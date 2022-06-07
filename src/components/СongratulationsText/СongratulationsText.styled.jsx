import styled from '@emotion/styled';

export const Container = styled.div`
  display: block;
  flex-direction: column;
  background: #ffffff;
  padding: 40px 20px;
  width: 280px;
  @media (min-width: 768px) {
    width: 394px;
  }
`;

export const Title = styled.p`
  margin-bottom: 24px;
  margin-top: 14px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #242a37;
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 130px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  background-color: #ff6b08;
  color: #ffffff;
  border: none;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  transition-duration: 400ms;
  :hover,
  :focus {
    transform: scale(1.05);
  }
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const LinkStyled = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  width: 54px;
  height: 54px;
  fill: #ff6b08;
`;
