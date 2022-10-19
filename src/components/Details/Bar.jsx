import React, { useEffect, useState } from "react";
import ActiveRating from "../../assets/rating-active.svg";
import NoRating from "../../assets/rating.svg";
const Bar = ({ data }) => {
  const [rates, setRates] = useState([]);

  const {
    title,
    description,
    host,
    rating,
    Location,
    location,
    Amenities,
    tags,
  } = data;

  const stars = () => {
    const arr = [];
    for (let i = 0; i < rating; i++) {
      arr.push(ActiveRating);
    }
    if (rating < 5) {
      const index = 5 - rating;
      for (let i = 0; i < index; i++) {
        arr.push(NoRating);
      }
    }
    return setRates(arr);
  };

  useEffect(() => {
    stars();
  }, []);

  return (
    <div className="container mx-auto ">
      <div className="flex flex-col  lg:flex-row justify-between mt-10">
        <div className="left">
          <h1 className="text-3xl text-primary text-left">{title}</h1>
          <p className="text-primary text-lg text-left mt-2">
            {Location || location}
          </p>
          <div className="flex flex-wrap gap-5 my-4">
            {tags.map((item, i) => (
              <span
                key={i}
                className="py-1 px-3 w-32 lg:w-44 rounded-lg lg:rounded-xl text-white bg-primary text-md"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="right overflow-hidden flex flex-row-reverse lg:flex-col justify-between lg:justify-start  items-center">
          <div className="host flex lg:flex-row  gap-3 items-center justify-end mb-5">
            <h3 className="text-lg text-primary text-right">{host.name}</h3>
            <img
              className="rounded-full w-10 h-10 lg:w-14 lg:h-14 object-cover"
              src={host.picture}
              alt={host.name}
            />
          </div>
          <div className="rating flex gap-1 lg:gap-3 mt-3 lg:mt-0  self-start">
            {rates.map((star, i) => (
              <img className="w-4 lg:w-7 " key={i} src={star} alt={`${rating} stars`} />
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Bar;
