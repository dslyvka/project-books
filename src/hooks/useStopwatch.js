import { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';
import { useSelector } from 'react-redux';

const useStopwatch = action => {
  const [countUp, setCountUp] = useState(action);
  const endDate = useSelector(state => state.training.endDate);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (action) {
        case 0:
          setCountUp(prevCountUp => prevCountUp === 0);
          break;
        case 1:
          setCountUp(Math.abs(new Date() - new Date(endDate)));
          break;
        default:
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [action, endDate]);

  return formatTime(countUp);
};

export default useStopwatch;
