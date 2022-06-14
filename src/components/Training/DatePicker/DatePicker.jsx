import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { HiOutlineCalendar, HiChevronDown } from 'react-icons/hi';
import {
  DatePickerWrapper,
  DatePickerStyled,
  CalendarIcon,
  ChevronDownIcon,
} from './DatePicker.styled';

const DatePickerInput = ({ pickedDate, placeholderText, onChange }) => {
  return (
    <DatePickerWrapper>
      <DatePickerStyled
        onChange={date => {
          console.log(date);
          onChange(date);
        }}
        selected={pickedDate}
        dateFormat="yyyy-MM-dd"
        placeholderText={placeholderText}
        minDate={new Date()}
        name="date"
      />
      <CalendarIcon />
      <ChevronDownIcon />
    </DatePickerWrapper>
  );
};

export default DatePickerInput;
