import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Main = ({ data }) => {
  return (
    <div className="bg-slate-100 p-6 md:p-8 my-10 rounded-2xl container mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {data &&
        data.map((item, i) => <Link key={i} to={`/details/${item.id}`}><Card title={item.title} cover={item.cover} /></Link>)}
      {!data && <p>No data available</p>}
    </div>
  );
};

export default Main;
