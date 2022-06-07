import sprite from '../../../images/sprite/sprites.svg';
import { Svg } from './LibraryIcon.styled';

export default function LibraryIcon({ book = 'going' }) {
  return (
    <span>
      <Svg loop={book} width="20" height="20">
        <use href={`${sprite}#icon-book`}></use>
      </Svg>
    </span>
  );
}
