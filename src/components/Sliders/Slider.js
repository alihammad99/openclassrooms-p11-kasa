import React, { useState } from "react";
import Arrow from "../../assets/arrow.svg";

const Slider = ({ size, title, description, opened = false, type }) => {
  const [isOpened, setIsOpened] = useState(opened);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };


  return (
    <div
      className={`w-full ${
        !isOpened && "h-12"
      } bg-zinc-100 rounded-lg overflow-hidden z-20  my-7`}
    >
      <button
        onClick={handleClick}
        className="flex flex-row justify-between rounded-lg w-full bg-primary py-2 px-6 text-xl h-12 overflow-hidden"
      >
        <p className="text-white">{title}</p>
        <img
          className={isOpened && "rotate-180"}
          src={Arrow}
          width="30"
          alt="arrow"
        />
      </button>
      {type == "list" ? (
        <ul className="text-primary text-xl text-left m-5 ">{description}</ul>
      ) : (
        <p className="text-primary text-xl text-left m-5 ">{description}</p>
      )}
    </div>
  );
};

export default Slider;
