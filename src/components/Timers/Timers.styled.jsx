import styled from '@emotion/styled';

export const Header = styled.h2`
  font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: center;
margin: 0;
padding: 0;
margin-bottom: 8px;
color: #898F9F;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 194px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    width: 612px;
    height: 85px;
  }

  @media screen and (min-width: 1280px) {
    width: 654px;
  }
`;