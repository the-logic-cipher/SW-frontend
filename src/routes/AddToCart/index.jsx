import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";
import "./addToCart.scss";
import FilledButton from "../../components/Buttons/FilledButton";

const AddToCart = () => {
  return (
    <div>
      <div className="p-head py-5">
        <div className="container text-center px-3">
          <div className=" d-flex justify-content-center">
          <div className="d-md-flex">
          <p className="col-sm-6 count fs-sm-5 fs-6 fw-bold text-white mb-0">1</p>
          <h6 className="col-sm-6 mt-1 mb-0">
               Cart
            </h6>
          </div>

            <div className="bar"></div>
            <div className="d-md-flex">
          <p className="col-sm-4 count fs-sm-5 fs-6 fw-bold text-white mb-0 ms-md-0 ms-3">2</p>
          <h6 className="col-sm-8 mt-1 mb-0">
               Checkout
            </h6>
          </div>
            <div className="bar"></div>
            <div className="d-md-flex">
          <p className="col-sm-4 count fs-sm-5 fs-6 fw-bold text-white mb-0 ms-md-0 ms-3">3</p>
          <h6 className="col-sm-8 mt-1 mb-0">
               Payment
            </h6>
          </div>
            <div className="bar"></div>
            <div className="d-md-flex">
          <p className="col-sm-4 count fs-sm-5 fs-6 fw-bold text-white mb-0 ms-md-0 ms-3">4</p>
          <h6 className="col-sm-8 mt-1 mb-0">
               Confirm
            </h6>
          </div>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="d-lg-flex">
          <div className="col-lg-8">
            <div className="cart-head row pb-3 me-0">
              <h6 className="fw-bold fs-6 col-md-5">PRODUCT</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center d-md-block d-none">QUANTITY</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center d-md-block d-none">TOTAL</h6>
              <div className="col-md-1"></div>
            </div>
            <Cart/>
            <Cart/>
            <div className="mt-5">
              <FilledButton title="Continue Shopping" link="/products" />
            </div>
          </div>
          <div className="col-lg-4 mt-lg-0 mt-5 pt-3 pt-lg-0">
            <h6 className="fw-bold fs-6 ms-lg-5">PAYMENT</h6>
            <div className="cart px-sm-5 py-5 px-4 ms-lg-5 mt-4">
              <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
              <div className="d-flex justify-content-between">
                <p className="fs-6 text-black">SubTotal</p>
                <h5 className="fs-5 fw-bold">$ 300</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-4">
                <p className="fs-6 text-black mb-0">Total</p>
                <h5 className="fs-5 fw-bold mb-0">$ 300</h5>
              </div>
              <div className="d-flex justify-content-center mt-5">
                <FilledButton title="Checkout" link="/checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
