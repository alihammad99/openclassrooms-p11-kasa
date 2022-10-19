import React, { useEffect, useState } from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import Arrow from "../../assets/arrow.svg";

const Carousel = ({ photos, alt }) => {
  const length = photos.length;
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);



  if (photos) {
    return (
      <div className="container mx-auto overflow-hidden relative">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={windowSize.innerWidth > 400 ? 45 : 78}
          totalSlides={length}
          infinite={true}
          interval={4000}
          isPlaying={true}
        >
          <ButtonBack>
            <img
              src={Arrow}
              alt="previous"
              className="w-10 lg:w-24 drop-shadow translate-y-[-40%] rotate-90 absolute left-0 top-[50%] z-20"
            />
          </ButtonBack>
          <ButtonNext>
            <img
              src={Arrow}
              alt="next"
              className="w-10 lg:w-24 drop-shadow translate-y-[-40%] -rotate-90 absolute right-0 top-[50%] z-20"
            />
          </ButtonNext>

          {
            <Slider className="rounded-xl lg:rounded-3xl overflow-hidden z-10">
              {photos.map((photo, i) => (
                <Slide key={i} index={i}>
                  <div className="relative">
                    <p className="text-lg lg:text-xl text-white bg-black bg-opacity-30 px-2 py-1 rounded-xl absolute translate-x-[-50%] left-[50%] bottom-5">
                      {i+1}/{length}
                    </p>
                    <img
                      className="object-cover h-72 lg:h-[36rem] w-full"
                      src={photo}
                      alt={alt}
                    />
                  </div>
                </Slide>
              ))}
            </Slider>
          }
        </CarouselProvider>
      </div>
    );
  }
};

export default Carousel;
