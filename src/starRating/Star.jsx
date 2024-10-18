import React, { useState } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";

const Star = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(index) {
    setRating(index);
  }

  function handleMouseEnter(index) {
    setHover(index);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="flex justify-center align-middle text-center bg-slate-400 p-10">
      {[...Array(10)].map((_, index) => {
        const starIndex = index + 1;
        return (
          <div key={index} className="">
            {starIndex <= (hover || rating) ? (
              <StarIcon
                fontSize="large"
                className="text-yellow-300"
                onClick={() => handleClick(starIndex)}
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
              />
            ) : (
              <StarBorderIcon
                fontSize="large"
                className="text-yellow-300"
                onClick={() => handleClick(starIndex)}
                onMouseEnter={() => handleMouseEnter(starIndex)}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </div>
        );
      })}
      <div className="ml-4 text-xl">Rating: {rating}</div>
    </div>
  );
};

export default Star;
