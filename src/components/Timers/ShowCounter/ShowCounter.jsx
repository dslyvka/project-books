import React from 'react';
import DateTimeDisplay from '../DateTimeDisplay';
import { Wrapper, Separator, RedSeparator } from './ShowCounter.styled';

const ShowCounter = ({ days, hours, minutes, seconds, isDanger }) => {
  return (
    <Wrapper>
        <DateTimeDisplay value={days} type={'дн'} isDanger={isDanger} />
        {isDanger ? <RedSeparator>:</RedSeparator> : <Separator>:</Separator>}
        <DateTimeDisplay value={hours} type={'год'} isDanger={isDanger} />
        {isDanger ? <RedSeparator>:</RedSeparator> : <Separator>:</Separator>}
        <DateTimeDisplay value={minutes} type={'хв'} isDanger={isDanger} />
        {isDanger ? <RedSeparator>:</RedSeparator> : <Separator>:</Separator>}
        <DateTimeDisplay value={seconds} type={'сек'} isDanger={isDanger} />
    </Wrapper>
  );
};

export default ShowCounter;