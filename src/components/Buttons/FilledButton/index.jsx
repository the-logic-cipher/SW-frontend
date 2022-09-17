import React from "react";
import { Link } from "react-router-dom";
import "./fillbtn.scss";

const FilledButton = (props) => {
  return (
    <div className="btn">
      <Link to={props.link} className="fs-5 text-white text-decoration-none">
        {props.title}
      </Link>
    </div>
  );
};

export default FilledButton;
