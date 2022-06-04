import React from 'react';
import useCountdown from '../../../hooks/useCountdown';
import useStopwatch from '../../../hooks/useStopwatch';
import ShowCounter from '../ShowCounter';

const Timer = ({ targetDate, action }) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    const [daysValue, hoursValue, minutesValue, secondsValue] = useStopwatch(action);
  if (days + hours + minutes + seconds <= 0) {
       return (
        <ShowCounter
        isDanger={true}
        days={daysValue}
        hours={hoursValue}
        minutes={minutesValue}
        seconds={secondsValue}
      />);
  } else {
    return (
      <ShowCounter
        isDanger={false}
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default Timer;