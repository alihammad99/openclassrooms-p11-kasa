import React from "react";
import { useParams } from "react-router-dom";
import dataFile from "../../data/home.json";
import Carousel from "./Carousel";
import Slider from "../Sliders/Slider";
import Bar from "./Bar";
const Details = () => {
  const { id } = useParams();
  const [data] = dataFile.filter((item) => item.id == id);
  const { pictures, name, description, Amenities, equipments } = data;

  return (
    <>
      <Carousel photos={pictures} alt={`${name}'s photo`} />
      <Bar data={data} />
      <div className="container mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[47%]">
          <Slider
            opened={true}
            size="small"
            title="Description"
            description={description}
          />
        </div>
        <div className="w-full lg:w-[47%]">
          <Slider
            opened={true}
            size="small"
            title="Equipements"
            type="list"
            description={
              Amenities
                ? Amenities.map((item, i) => <li key={i}>{item}</li>)
                : equipments.map((item, i) => <li key={i}>{item}</li>)
            }
          />
        </div>
      </div>
    </>
  );
};

export default Details;
