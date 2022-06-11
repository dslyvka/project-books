import styled from '@emotion/styled';

const MyGoalStyled = styled.div`
  height: 320px;
  margin: 0 auto 30px;
  display: block;
  /* flex-wrap: wrap; */
  justify-content: center;
  order: 2;
  background: var(--secondary-background);
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  .bookTitle {
    height: 60px;
    /* left: 25px;
    top: 90px; */
    background: #b1b5c2;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    color: #fff;
    padding-top: 15px;
    text-align: center;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1.9;
    padding-top: 12px;
    padding-bottom: 12px;
  }
  .booksCounterContainer {
    height: 100px;
    width: 100%;
    padding: 55px 25px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    /* padding: 30px 10px 0 10px;
  margin-bottom: 15px; */
  }
  .counterNumber {
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 45px;
    line-height: 1.18;
    padding: 25%;
  }
  .booksCounter {
    width: 100px;
    height: 100px;
    background: var(--main-background);
    box-shadow: 4px 4px 8px rgba(36, 42, 55, 0.15);
    text-align: center;
  }
  .counterLabelContainer {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 14px;
  }
  .counterLabel {
    width: 66px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 0.82;
    text-align: center;
    color: var(--secondary-text);
  }
  @media (min-width: 768px) {
    width: 680px;
    height: 105px;
    margin: 0 auto;
    padding: 22px 0 23px 45px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: nowrap;
    .bookTitle {
      width: 270px;
    }

    .booksCounterContainer {
      padding: 0;
      width: auto;
      align-items: center;
      justify-content: space-evenly;
      padding-top: 12px;
    }
    .booksCounter {
      height: 60px;
    }
    .counterNumber {
      padding: 0;
      height: 100%;
    }
    .counterLabelContainer {
      margin-top: -12px;
      justify-content: space-evenly;
    }
    .counterLabel {
      width: 100px;
      font-size: 11px;
    }
  }
  @media (min-width: 1280px) {
    width: 275px;
    height: 318px;
    margin: 40px auto;
    padding: 0;
    flex-wrap: wrap;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    .booksCounter {
      height: 100px;
      margin-bottom: 15px;
    }
    .bookTitle {
      margin-bottom: auto;
    }
    .booksCounterContainer {
      padding: 0 0 0 0;
      margin-bottom: 80px;
    }
    .counterNumber {
      padding: 25%;
    }
    .counterLabel {
      width: 66px;
      font-size: 14px;
      line-height: 0.9;
    }
    .counterLabelContainer {
      margin: 0;
    }
  }
`;
export default MyGoalStyled;
