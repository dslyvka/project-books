import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';
import sprites from '../../../images/sprite/sprites.svg';

const Rate = ({ update, init, read }) => {
  const [rating, setRating] = useState();

  const handleRating = rate => {
    setRating(rate / 20);
    update(rate / 20);
  };

  return (
    <Rating
      transition
      readonly={read}
      initialValue={init}
      onClick={handleRating}
      ratingValue={rating}
      emptyIcon={
        <svg width="17" height="17">
          <use href={`${sprites}#icon-Star`} />
        </svg>
      }
      fullIcon={
        <svg width="17" height="17">
          <use href={`${sprites}#icon-Star-full`} />
        </svg>
      }
    />
  );
};

export default Rate;
