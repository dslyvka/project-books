import styled from '@emotion/styled';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiOutlineCalendar, HiChevronDown } from 'react-icons/hi';

export const DatePickerWrapper = styled.div`
  position: relative;
  border: 1px solid #a6abb9;
  :not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 768px) {
    :not(:last-child) {
      margin-bottom: 0;
      margin-right: 45px;
    }
  }
`;

export const DatePickerStyled = styled(DatePicker)`
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  width: 100%;
  height: 42px;
  padding: 5px 47px;
  border: none;
  outline: none;
  font-weight: inherit;
  line-height: 2.71;
  color: #a6abb9;
  background-color: transparent;
  &::placeholder {
    color: #a6abb9;
  }
`;

export const CalendarIcon = styled(HiOutlineCalendar)`
  position: absolute;
  top: 50%;
  left: 13px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #a6abb9;
`;

export const ChevronDownIcon = styled(HiChevronDown)`
  position: absolute;
  top: 50%;
  right: 13px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #232a37;
`;
