import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';

export const DatePickerStyled = styled(DatePicker)`
  display: flex;
  position: relative;
  margin-top: 4px;
  align-items: center;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  width: 110px;
  height: 42px;
  padding: 10px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 32px;
  padding: 20px;
  width: 280px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 32px 96px;
    margin-top: 40px;
  }
  @media screen and (min-width: 1280px) {
    margin: 0;
    width: 288px;
    padding: 20px 24px;
    margin-top: 0px;
    height: 340px;
  }
`;

export const TextStyled = styled.span`
  margin: 0 auto;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 12px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    flex-direction: row;
    margin-top: 28px;
    justify-content: space-between;
    align-items: end;
  }
`;

export const LabelText = styled.span`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #898f9f;
`;

export const Input = styled.input`
  margin-top: 4px;
  background: #f6f7fb;
  border: 1px solid #a6abb9;
  width: 110px;
  height: 42px;
  padding: 13px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #242a37;
`;

export const UlStyled = styled.ul`
  display: flex;

  margin-left: -20px;
  margin-bottom: 28px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 0;
  }
`;

export const LiStyled = styled.li`
  margin-left: 20px;
  position: relative;
  width: 110px;
`;

export const SvgStyled = styled.svg`
  // margin-top:4px
  position: absolute;
  top: 50%;
  left: 85%;
  pointer-events: none;
  cursor: pointer;
  transform: translate(-50%, 50%);
`;

export const ButtonStyled = styled.button`
  height: 40px;
  width: 240px;
  border: none;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  background-color: #ff6b08;
  color: #ffffff;
  transition-duration: 400ms;
  :hover,
  :focus {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    transform: scale(1.05);
  }
  @media (min-width: 768px) {
    width: 240px;
  }
`;

export const Statistic = styled.div`
  display: flex;
  margin-top: 24px;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 240px;
  }
`;
export const TextStatistic = styled.span`
  margin: 0 auto;
  position: relative;
  width: fit-content;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  text-align: center;
  text-transform: uppercase;
  color: #242a37;
  :before {
    margin-right: 4px;
    display: block;
    width: 72px;
    content: '';
    position: absolute;
    border-bottom: 1px solid #e0e5eb;
    top: 50%;
    right: 100%;
  }
  :after {
    margin-left: 4px;
    display: block;
    width: 72px;
    content: '';
    position: absolute;
    border-bottom: 1px solid #e0e5eb;
    top: 50%;
    left: 100%;
  }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    font-size: 14px;
    line-height: 17px;
    margin: 0;
    :before {
      display: none;
    }
    :after {
      margin-left: 8px;
      width: 130px;
    }
  }
`;

export const StatisticList = styled.ul`
  margin-top: 4px;
  margin-bottom: -4px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-top: 6px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 4px;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #242a37;
`;

export const TimeStyled = styled.span`
  color: #898f9f;
`;
