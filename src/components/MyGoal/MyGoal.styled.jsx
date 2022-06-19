import styled from '@emotion/styled';

const MyGoalStyled = styled.div`
  /* width: 270px; */
  height: 270px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin: 0 auto;
  margin-top: 30px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 28px;
    align-items: flex-start;
    margin-top: 30px;
    height: 125px;
    /* width: 678px; */
    margin-bottom: 28px;
    padding: 11px 45px 11px 45px;
    display: flex;
    justify-content: space-around;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 40px;
    height: 318px;
    width: 288px;
  }
  .statistic-title {
    padding: 11px 0;
    line-height: 1.92;
    font-size: 20px;
    font-family: 'Montserrat';
    font-weight: 600;
    font-style: normal;
    background-color: #b1b5c2;
    color: #ffffff;
    text-align: center;
    height: 60px;
    margin-top: 40px;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 23px;
      padding: 11px 28px;
      margin-right: 20px;
    }
    @media (min-width: 1280px) {
      margin-top: 0;
    }
  }
  .statistic {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: 20px;
    }
  }
  .statistic-book {
    margin-right: 20px;
    @media (min-width: 1280px) {
      margin-bottom: 76px;
    }
  }
  .statistic-day {
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    margin-right: 20px;
  }
  .statistic__cell {
    @media (max-width: 767px) {
      margin-top: 30px;
    }
    margin-top: 72px;
    margin-bottom: 15px;
    margin-left: auto;
    margin-right: auto;
    width: 66px;
    height: 66px;
    padding-top: 14px;
    padding-bottom: 14px;
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: 36px;
    line-height: 1.08;
    background-color: #f5f7fa;
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 100px;
      height: 60px;
      padding: 11px 0;
      margin: 0;
    }
  }
  .statistic-reading .statistic__number {
    color: #ff6b08;
  }
  .statistic__number {
    display: block;
    font-family: 'Open Sans';
    font-weight: 700;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      font-size: 40px;
      line-height: 0.95;
    }
  }
  .statistic__text {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 12px;
    color: #898f9f;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;

      font-size: 11px;
      margin-top: 4px;
    }
  }
  .statistic-reading .statistic__text {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: flex;
      flex-direction: column;
    }
  }
  .statistic__text span {
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-left: 5px;
    }
  }
`;

export default MyGoalStyled;
