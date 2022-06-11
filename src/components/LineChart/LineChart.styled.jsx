import styled from '@emotion/styled';

export const Wrapper = styled.div`
position: relative;
width: 280px;
height: 290px;
padding-left: 20px;
padding-top: 0;
padding-right: 20px;
padding-bottom: 20px;
margin-left: auto;
margin-right: auto;
background-color: #FFFFFF;

  @media screen and (min-width: 768px) {
    width: 700px;
    height: 340px;
    padding-left: 40px;
    padding-top: 10px;
    padding-right: 40px;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1280px) {
    width: 930px;
    height: 340px;
    padding-left: 35px;
    padding-top: 10px;
    padding-right: 75px;
    padding-bottom: 30px;
  }
`;

export const PagesValue = styled.div`
  background-color: #F5F7FA;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  position: absolute;
  top: 13px;
  right: 35px;
  z-index: 1;
  font-family: "'Montserrat', sans-serif";
  font-weight: 500;
  font-size: 12;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    top: 23px;
    right: 435px;
  }

  @media screen and (min-width: 1280px) {
    right: 670px;
  }

`;