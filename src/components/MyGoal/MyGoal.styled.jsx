import styled from '@emotion/styled';

const MyGoalStyled = styled.div`
  width: 270px;
  height: 270px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  margin: 0 auto;
  margin-top: 0px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    align-items: flex-start;
    margin-top: 0;
    height: ${props => (props.startTraining ? '125px' : '105px')};
    width: 678px;
    padding: 23px 45px 11px 45px;
    padding: ${props => (props.startTraining ? '0' : '23px 45px 11px 45px')};
    display: flex;
    justify-content: ${props =>
      props.startTraining ? 'space-around' : 'space-between'};
  }
  @media screen and (min-width: 1280px) {
    margin-top: ${props => (props.startTraining ? '25px' : '40px')};
    height: 318px;
    width: 275px;
  }
  .statistic-title {
       box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    color: #fff;
    background-color: #b1b5c2;
    padding-top: 15px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
    padding-top: 12px;
    padding-bottom: 12px;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: ${props => (props.startTraining ? '23px' : '0px')};
      padding: 11px 28px;
    }
  }
  .statistic {
    display: flex;
    justify-content: center;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      margin-top: ${props => (props.startTraining ? '20px' : '0')};
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
    margin-right: ${props => (props.startTraining ? '20px' : '0px')};
  }
  .statistic__cell {
    @media (max-width: 767px) {
      margin-top: 30px;
    }
    margin-top: ${props => (props.startTraining ? '72px' : '55px')};
    margin-bottom: 15px;
    width: ${props => (props.startTraining ? '66px' : '100px')};
    height: ${props => (props.startTraining ? '66px' : '100px')};
    padding-top: ${props => (props.startTraining ? '14px' : '24px')};
    padding-bottom: ${props => (props.startTraining ? '14px' : '24px')};
    font-family: 'Open Sans';
    font-weight: 700;
    font-size: ${props => (props.startTraining ? '36px' : '45px')};
    line-height: ${props => (props.startTraining ? '1.08' : '0.84')};
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
    font-style: normal;
    text-align: center;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      font-size: 40px;
      line-height: 0.95;
    }
  }
  .statistic__text {
    width: 66px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    
    text-align: center;
    margin-top:4px;
    line-height: 0.90;
      margin-left:12px;
    
    font-size: ${props => (props.startTraining ? '12px' : '14px')};
    color: #898f9f;
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 100px;
      font-size: 11px;
      line-height: 0.84;
      margin-left:1px;
      
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
