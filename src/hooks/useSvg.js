import sprites from '../images/sprite/sprites.svg';

export const useSvg = (icon, width, height) => {
  return (
    <svg pointerEvents="none" width={width} height={height}>
      <use href={`${sprites}#${icon}`} />
    </svg>
  );
};
