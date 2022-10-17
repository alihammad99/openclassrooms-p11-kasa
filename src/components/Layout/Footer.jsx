import React from "react";
import Logo from "../../assets/logo-light.svg";

const Footer = () => {
  return (
    <div className="py-10 bg-black">
      <img className="mx-auto mt-3" src={Logo} alt="logo" />
      <p className="text-white text-center mt-8 text-lg">
        &#169; 2020 Kasa. All rights reserved
      </p>
    </div>
  );
};

export default Footer;
