import React from "react";
import Card from "./Card";

const Main = ({ data }) => {
  return (
    <div className="bg-slate-100 p-8 my-10 rounded-2xl container mx-auto grid gap-6 grid-cols-3">
      {data &&
        data.map((item) => <Card title={item.title} cover={item.cover} />)}
      {!data && <p>No data available</p>}
    </div>
  );
};

export default Main;
