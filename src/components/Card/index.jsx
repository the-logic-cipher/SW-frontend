import React from "react";
import "./card.scss";
import {
  MdOutlineShoppingCart,
  MdFavoriteBorder,
  MdOutlineArrowForward,
  MdOutlineStar,
} from "react-icons/md";

const Card = (props) => {
  return (
    <div>
      <div className="cards mt-5">
        <div className="cards-img">
          <img className="img-fluid" src={props.img} alt="" />
          <div className="icons">
          <MdOutlineShoppingCart className="card-icons" />
          <MdFavoriteBorder className="card-icons center-icon" />
          <MdOutlineArrowForward className="card-icons" />
        </div>
        </div>
        <h5 className="fs-4 pt-3">{props.title}</h5>
        <h6 className="fs-5 text-black-50">Rs. {props.price}</h6>
        <div className="rating d-flex">
          <MdOutlineStar className="star" />
          <MdOutlineStar className="star" />
          <MdOutlineStar className="star" />
          <MdOutlineStar className="star" />
          <MdOutlineStar className="star" />
        </div>
      </div>
    </div>
  );
};

export default Card;
