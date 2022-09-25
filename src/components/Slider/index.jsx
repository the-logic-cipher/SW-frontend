import React from "react";
import Carousel from "react-bootstrap/Carousel";
import FilledButton from "../Buttons/FilledButton";
import "./slider.scss";

function Slider() {
  return (
    <div className="mb-5 pb-5">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Imgs/img2.jpg"
            alt="First slide"
          />
          <div className="text">
            <h4 className="pb-xl-4 pb-3">New Eyewear Collection</h4>
            <h1 className="pb-xl-5 pb-4">Choose Your <br/> Best Pair</h1>
            <FilledButton title="Shop Now" link="/" />
          </div>
          <div></div>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./Imgs/img1.jpg"
            alt="Second slide"
          />
          <div className="text">
            <h4 className="pb-xl-4 pb-3">Perfect UV Protection</h4>
            <h1 className="pb-xl-5 pb-4">Blue Light <br /> Glasses</h1>
            <FilledButton title="Shop Now" link="/" />
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
