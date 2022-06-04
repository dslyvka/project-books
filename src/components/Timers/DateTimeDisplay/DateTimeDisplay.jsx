import React from 'react';
import { Wrapper, DateNumbers, RedDateNumbers, DateDescription } from './DateTimeDisplay.styled';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <Wrapper>
      {isDanger ? <RedDateNumbers>{value}</RedDateNumbers> : <DateNumbers>{value}</DateNumbers>}
      <DateDescription>{type}</DateDescription>
    </Wrapper>
  );
};

export default DateTimeDisplay;