import React from "react";

const Card = ({ title, cover }) => {
  return (
    <div className={`w-full h-72 lg:w-72 xl:h-96 xl:w-96 rounded-xl overflow-hidden bg-primary relative`}>
      <div className="text-left absolute bottom-4 left-4 z-10">
        <h2 className="text-white text-md">Accommodation</h2>
        <h3 className="text-white text-md">{title}</h3>
      </div>

      <div className="bg-gradient-to-t from-black opacity-60 absolute top-0 left-0 w-full h-full"></div>
      <img className="object-cover h-full w-full" src={cover} alt={title} />
    </div>
  );
};

export default Card;
