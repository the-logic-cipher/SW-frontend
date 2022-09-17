import React from "react";
import { Link } from "react-router-dom";
import "./outbtn.scss";

const OutlinedButton = (props) => {
  return (
    <div className="obtn">
      <Link to={props.link} className="fs-5 text-decoration-none">
        {props.title}
      </Link>
    </div>
  );
};

export default OutlinedButton;
