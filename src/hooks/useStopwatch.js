import { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';

const useStopwatch = action => {
  const [countUp, setCountUp] = useState(action);

  useEffect(() => {
    const interval = setInterval(() => {
      switch (action) {
        case 0:
          setCountUp(prevCountUp => prevCountUp === 0);
          break;
        case 1:
          setCountUp(prevCountUp => prevCountUp + 1000);
          break;
        default:
          break;
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [action]);

  return formatTime(countUp);
};

export default useStopwatch;
