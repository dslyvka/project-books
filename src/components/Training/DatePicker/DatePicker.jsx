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

import { useSelector } from 'react-redux';

const DatePickerInput = ({
  pickedDate,
  placeholderText,
  onChange,
  minDate,
  maxDate,
}) => {
  const isStarted = useSelector(state => state.training.isStarted);
  return (
    <DatePickerWrapper>
      <DatePickerStyled
        onKeyDown={e => {
          e.preventDefault();
        }}
        disabled={isStarted ? true : false}
        onChange={date => {
          console.log(date);
          onChange(date);
        }}
        selected={pickedDate}
        dateFormat="yyyy-MM-dd"
        placeholderText={placeholderText}
        minDate={minDate}
        maxDate={maxDate}
        name="date"
      />
      <CalendarIcon />
      <ChevronDownIcon />
    </DatePickerWrapper>
  );
};

export default DatePickerInput;
