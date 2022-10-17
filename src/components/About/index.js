import React from "react";
import Photo from "../../assets/about-hero.png";
import Slider from "../Sliders/Slider";

const centerStyle =
  "translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]";

const index = () => {
  return (
    <>
      <div className="container h-56 rounded-3xl mx-auto overflow-hidden relative">
        <div
          className={`bg-black h-full w-full opacity-30 ${centerStyle}`}
        ></div>
        <img className="object-cover w-full" src={Photo} alt="hero" />
      </div>
      <div className="container mx-auto">
        <Slider
          width="wide"
          title="Reliability"
          size="wide"
          description="The ads posted on Kasa guarantee total reliability of the place. The photos are consistent with the accommodations, and all information is regularly checked by our teams."
        />
        <Slider
          width="wide"
          title="Respect"
          size="wide"
          description="Caring is one of the founding values of Kasa. Any discriminatory behavior or disruptive behavior in the neighborhood will result in exclusion from our platform."
        />
        <Slider
          width="wide"
          title="Service"
          size="wide"
          description="Our teams are at your disposal to provide you with the best experience. Please do not hesitate to contact us if you have any questions."
        />
        <Slider
          width="wide"
          title="Safty"
          size="wide"
          description="Safety is Kasa's priority. Both for our guests and for travelers, each accommodation is compliant with the safety criteria established by our services. By leaving a note for both the host and the tenant, our teams can verify that the standards are respected. We also organize workshops on home security for our guests."
        />
      </div>
    </>
  );
};

export default index;
