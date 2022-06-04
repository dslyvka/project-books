import styled from '@emotion/styled';

const bp = [320, 768, 1280];

export const Section = styled.section`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  height: 100vh;
  @media (min-width: ${bp[0]}px) {
    min-width: 320px;
  }
  @media (min-width: ${bp[1]}px) {
    min-width: 768px;
  }
  @media (min-width: ${bp[2]}px) {
    min-width: 1280px;
  } ;
`;

export const Container = styled.div`
  min-width: 320px;
  margin-left: auto;
  margin-right: auto;
  height: fit-content;
  @media (min-width: ${bp[0]}px) {
    width: 320px;
  }
  @media (min-width: ${bp[1]}px) {
    width: 768px;
  }
  @media (min-width: ${bp[2]}px) {
    width: 1280px;
  } ;
`;

export const Title = styled.h1`
  font-family: 'Abril Fatface';
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 34px;
  line-height: 1.118;

  color: #242a37;

  text-align: center;
`;

export const ButtonWrapper = styled.span`
  @media (min-width: 767px) {
    display: none;
    visibility: hidden;
  } ;
`;
