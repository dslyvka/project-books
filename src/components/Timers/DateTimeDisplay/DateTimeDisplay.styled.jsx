import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  :first-of-type {padding-left: 33px;
    margin-left: 0;
  }
  :last-of-type {padding-right: 33px;
    margin-right: 0;
}
  `;

export const DateNumbers = styled.p`
font-family: 'Open Sans';
font-style: normal;
font-weight: 700;
font-size: 25px;
line-height: 38px;
margin: 0;
padding: 0;
color: #091E3F;
`;

export const RedDateNumbers = styled(DateNumbers)`
color: #FF0000;
`;

export const DateDescription = styled(DateNumbers)`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 12px;
text-align: center;
color: #898F9F;
`;