import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Rating() {
  const [activeStars, setActiveStars] = useState(0);

  const handleClick = (index) => {
    setActiveStars(index + 1);
  };

  return (
    <div className='rating'>
      {[...Array(5)].map((_, index) => (
        <FontAwesomeIcon
          key={index}
          icon="fa-solid fa-star"
          className={`ratingEl ${index < activeStars ? 'active' : ''}`}
          onClick={() => handleClick(index)}
        />
      ))}
     
    </div>
  );
}

export default Rating;
