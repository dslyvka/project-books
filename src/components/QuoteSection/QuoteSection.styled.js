import styled from '@emotion/styled';

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
    // min-width: 768px;
    padding: 179px 0 239px;
  }
  // @media (min-width: ${bp[2]}px) {
  //   min-width: 1280px;
  // } ;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 270px;

  @media (min-width: ${bp[1]}px) {
    // width: 768px;
    // margin: 0 auto;
    max-width: 477px;
    margin: 0 auto;
  }
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
  :disabled {
    background: #6d7a8d;
    :hover,
    :focus {
      background-color: #6d7a8d;
      color: #ffffff;
      border: none;
      transform: none;
    }
  }
  :hover,
  :focus {
    background-color: #ff6b08;
    color: #ffffff;
    border: none;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
  }
  &:first-of-type {
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
  width: 130px;
  height: 40px;
`;
