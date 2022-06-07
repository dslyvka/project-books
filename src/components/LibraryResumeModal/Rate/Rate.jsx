import { Rating } from 'react-simple-star-rating';
import { useState } from 'react';

const Rate = ({ emptyIcon, fullIcon, update }) => {
  const [rating, setRating] = useState(0);

  const handleRating = rate => {
    setRating(rate);
    update(rate);
  };

  return (
    <Rating
      onClick={handleRating}
      ratingValue={rating}
      emptyIcon={emptyIcon}
      fullIcon={fullIcon}
    />
  );
};

export default Rate;
