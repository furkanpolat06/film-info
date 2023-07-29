// src/components/StarRank.jsx
import React, { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const StarRank = ({ filmRate }) => {
  const [ratingValue, setRatingValue] = useState(filmRate / 2);

  return (
    <Rating allowHover={false} allowFraction initialValue={filmRate / 2} />
  );
};

export default StarRank;
