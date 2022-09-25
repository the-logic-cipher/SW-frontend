import React, { useEffect, useState } from "react";
import Cart from "../../components/Cart";
import { Link } from "react-router-dom";
import "./addToCart.scss";
import FilledButton from "../../components/Buttons/FilledButton";

const AddToCart = () => {
  return (
    <div>
      <div className="p-head py-5">
        <div className="container text-center">
          <div className=" d-flex justify-content-center">
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">1</span> Cart
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">2</span> Checkout
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">3</span> Payment
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">4</span> Confirm
              Order
            </h6>
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-md-8">
            <div className="cart-head row pb-3 me-0">
              <h6 className="fw-bold fs-6 col-md-5">PRODUCT</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center">QUANTITY</h6>
              <h6 className="fw-bold fs-6 col-md-3 text-center">TOTAL</h6>
              <div className="col-md-1"></div>
            </div>
            <Cart/>
            <Cart/>
            <div className="mt-5">
              <FilledButton title="Continue Shopping" link="/products" />
            </div>
          </div>
          <div className="col-md-4">
            <h6 className="fw-bold fs-6 ms-5">PAYMENT</h6>
            <div className="cart p-5 ms-5 mt-4">
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
                <FilledButton title="Proceed To Checkout" link="/checkout" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
