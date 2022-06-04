export const formatTime = timer => {
  const daysValue = Math.floor(timer / (1000 * 60 * 60 * 24));
  const hoursValue = Math.floor(
    (timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
  );
  const minutesValue = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
  const secondsValue = Math.floor((timer % (1000 * 60)) / 1000);

  return [daysValue, hoursValue, minutesValue, secondsValue];
};

export default formatTime;
