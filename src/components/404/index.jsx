import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center my-24">
      <h1 className="text-9xl lg:text-[16rem] text-primary font-semibold">404</h1>
      <h2 className="text-primary font-medium text-2xl mb-24 mt-8">
        Oops! It looks like this page doesn’t exist.
      </h2>
      <Link to="/">
        <h3 className="text-lg font-medium text-primary underline underline-offset-4">
          Go back to home page
        </h3>
      </Link>
    </div>
  );
};

export default NotFound;
