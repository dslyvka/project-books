import styled from '@emotion/styled';

export const Wrapper = styled.div`
  margin: 0;
  position: relative;
  width: 280px;
  height: 290px;
  padding-left: 20px;
  padding-top: 0;
  padding-right: 20px;
  padding-bottom: 20px;
  background-color: #ffffff;

  @media screen and (min-width: 768px) {
    width: 100%;
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
  background-color: #f5f7fa;
  padding-left: 3.5px;
  padding-right: 3.5px;
  padding-top: 2.5px;
  padding-bottom: 2.5px;
  position: absolute;
  top: 13px;
  right: 35px;
  z-index: 1;
  font-family: "'Montserrat', sans-serif";
  font-weight: 600;
  font-size: 14px;
  line-height: 1.25;
  @media screen and (min-width: 768px) {
    top: 23px;
    right: 435px;
  }

  @media screen and (min-width: 1280px) {
    right: 670px;
  }
`;

export const PlanAnotation = styled(PagesValue)`
  background-color: #f5f7fa;
  color: #ff6b08;
  border-radius: 3px;
  padding-left: 5px;
  padding-right: 6px;
  padding-top: 7px;
  padding-bottom: 5px;
  top: 40px;
  right: 158px;
  font-size: 12px;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    right: 365px;
    top: 50px;
  }

  @media screen and (min-width: 1280px) {
    right: 505px;
  }
`;
export const FactAnotation = styled(PlanAnotation)`
  color: #242a37;
  right: 75px;
  @media screen and (min-width: 768px) {
    right: 290px;
  }

  @media screen and (min-width: 1280px) {
    right: 420px;
  }
`;
