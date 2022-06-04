import { useEffect, useState } from 'react';
import { formatTime } from '../utils/formatTime';

const useCountdown = targetDate => {
  const [countDown, setCountDown] = useState(new Date(targetDate) - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(new Date(targetDate) - new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return formatTime(countDown);
};

export default useCountdown;
