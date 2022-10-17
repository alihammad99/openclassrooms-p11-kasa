import React, { useState } from "react";
import Arrow from "../../assets/arrow.svg";

const Slider = ({ size, title, description }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  const width = size === "wide" ? "w-10/12 mx-auto" : "w-5/12";

  return (
    <div
      className={`${width} ${
        !isOpened && "h-12"
      } bg-zinc-100 rounded-lg overflow-hidden z-20  my-7`}
    >
      <button
        onClick={handleClick}
        className="flex flex-row justify-between w-full bg-primary py-2 px-6 text-xl h-12 overflow-hidden"
      >
        <p className="text-white">{title}</p>
        <img
          className={isOpened && "rotate-180"}
          src={Arrow}
          width="30"
          alt="arrow"
        />
      </button>
      <p className="text-primary text-xl text-left m-5 ">{description}</p>
    </div>
  );
};

export default Slider;
