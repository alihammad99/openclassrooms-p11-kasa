import React from "react";
import { useParams } from "react-router-dom";
import dataFile from "../../data/home.json";
import Carousel from "./Carousel";
const Details = () => {
  const { id } = useParams();
  const [data] = dataFile.filter((item) => item.id == id);

  return (
    <>
      <Carousel photos={data.pictures} alt={`${data.name}'s photo`} />
      <h2>{data.title}</h2>
    </>
  );
};

export default Details;
