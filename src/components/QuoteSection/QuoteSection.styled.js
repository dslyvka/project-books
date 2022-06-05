import styled from '@emotion/styled';
import { ButtonStyled } from '../RegularButton/Button.styled';

const bp = [320, 768, 1280];

export const Section = styled.section`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;

  padding: 32px 25px 40px;
  height: 100vh;

  @media (min-width: ${bp[0]}px) {
    min-width: 320px;
  }
  @media (min-width: ${bp[1]}px) {
    min-width: 768px;
    padding: 64px 145px 88px 145px;
  }
  @media (min-width: ${bp[2]}px) {
    min-width: 1280px;
  } ;
`;

export const Container = styled.div`
  // min-width: 320px;
  // margin-left: auto;
  // margin-right: auto;
  // height: fit-content;
  // @media (min-width: ${bp[0]}px) {
  //   width: 320px;
  // }
  // @media (min-width: ${bp[1]}px) {
  //   width: 768px;
  // }
  // @media (min-width: ${bp[2]}px) {
  //   width: 1280px;
  // } ;
`;

export const Title = styled.h1`
  font-family: 'Abril Fatface';
  margin-bottom: 32px;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.118;

  color: #242a37;

  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin: 60px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginButton = styled(ButtonStyled)`
  // display: inline-block;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  width: 130px;
  height: 40px;
  margin: 0;
  margin-right: 20px;
  padding: 12px 24px;

  color: #242a37;
  background-color: transparent;
  border: 2px solid #242a37;
`;

export const RegisterButton = styled(LoginButton)`
  margin-right: 0;

  color: #ffffff;
  background-color: #ff6b08;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border: 0;
`;
