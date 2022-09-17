import React from "react";
import Card from "../Card";
import data from "../Card/data";

const Featured = () => {
  return (
    <div className="container featured my-5 py-5">
      <h6 className="fs-6 text-center mb-2">BEST CHOICE</h6>
      <h2 className="text-center mb-5">Featured Products</h2>
      <div className="d-flex justify-content-between">
        {data.map((val) => {
          return <Card img={val.img} title={val.title} price={val.price} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
