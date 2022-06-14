import { Rating } from 'react-simple-star-rating';
import { useEffect, useState } from 'react';
import sprites from '../../../images/sprite/sprites.svg';

const Rate = ({ update, init, read }) => {
  const [rating, setRating] = useState();

  const handleRating = rate => {
    setRating(rate / 20);
    update(rate / 20);
  };

  return (
    <Rating
      readonly={read}
      initialValue={init}
      onClick={handleRating}
      ratingValue={rating}
      emptyIcon={
        <svg pointerEvents="none" width="17" height="17">
          <use href={`${sprites}#icon-Star`} />
        </svg>
      }
      fullIcon={
        <svg pointerEvents="none" width="17" height="17">
          <use href={`${sprites}#icon-Star-full`} />
        </svg>
      }
    />
  );
};

export default Rate;
