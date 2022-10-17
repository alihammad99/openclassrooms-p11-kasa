import React, { useEffect, useState } from "react";
import Photo from "../../assets/hero.png";
import Main from "./Main";
import dataFile from "../../data/home.json";

const centerStyle =
  "translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]";

const Hero = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(dataFile);
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="container h-32 lg:h-56 rounded-2xl lg:rounded-3xl mx-auto overflow-hidden relative">
        <h1 className={`text-2xl lg:text-4xl text-white ${centerStyle} left-10 translate-x-0 text-left md:text-center z-10`}>
          Home anywhere and everywhere
        </h1>
        <div
          className={`bg-black h-full w-full opacity-30 ${centerStyle}`}
        ></div>
        <img className="object-cover w-full h-full" src={Photo} alt="hero" />
      </div>
      <Main data={data} />
    </>
  );
};

export default Hero;
