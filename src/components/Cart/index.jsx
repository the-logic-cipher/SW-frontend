import React from "react";
import { useState } from "react";
import "../Cart/cart.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloseIcon from "@mui/icons-material/Close";

const Cart = () => {
  return (
    <div>
      <div className="cart-content d-flex me-0">
        <div className="col-md-2 col-6 d-md-flex py-3 my-2">
          <img src="/Imgs/glasses.jpg" className="img-fluid" alt="" />
        </div>
        <div className="col-md-8 col-6 d-md-flex ps-md-0 ps-sm-5 ps-3 mt-md-0 mt-4">
          <div className="col-md-5 d-md-flex justify-content-center align-items-center">
            {/* <h6 className="d-block d-md-none mt-4 fs-5 fw-bold">Title</h6> */}
            <p className="text-black ms-md-4 mt-md-0 mt-2 mb-0">
              Brown Glasses <span className="fw-bold"> &nbsp; - &nbsp; S </span>
            </p>
          </div>
          <div className="col-md-4 d-md-flex align-items-center justify-content-center my-md-0 my-3">
            <div className="d-flex counter justify-content-end">
              <p className="fs-6 fw-bold text-black mt-2">1 &nbsp; &nbsp;</p>
              <div className="me-2 d-flex flex-column">
                <KeyboardArrowUpIcon sx={{ fontSize: 20 }} />
                {/* <br /> */}
                <KeyboardArrowDownIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
          </div>
          <div className="col-md-3 d-md-flex align-items-center justify-content-center">
            {/* <h6 className="d-block d-md-none mt-4 fs-5 fw-bold">Price</h6> */}
            <p className="fw-bold m-0">Rs. 3000</p>
          </div>
          <div className="col-md-2 pe-3 d-flex align-items-md-center align-items-end  justify-content-end">
            <div className="close d-flex align-items-center justify-content-center">
              <CloseIcon sx={{ fontSize: 20 }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
