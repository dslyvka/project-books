import styled from '@emotion/styled';

export const DivStyled = styled.div`
  max-width: 477px;
`;

export const Title = styled.h1`
  /* font-family: 'Abril Fatface'; */
  font-style: normal;
  font-weight: 400;
  font-size: 34px;
  line-height: 38px;

  color: #242a37;

  text-align: center;
`;

export const SubTitle = styled.h2`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.9;

  
  margin-bottom: 14px;
`;

export const LiStyled = styled.li`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.21;

  max-width: 270px;
  margin: 0 auto;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    max-width: 477px;
  }

  padding-left: 16px;

  ::nth-of-type(6) {
    margin-bottom: 0px;
  }

  position: relative;

  svg {
    width: 4px;
    height: 8px;
    position: absolute;
    top: 5px;
    left: 0;
  }
`;
