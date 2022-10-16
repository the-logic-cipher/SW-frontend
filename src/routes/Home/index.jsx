import React from "react";
import Slider from "../../components/Slider";
import Featured from "../../components/Featured";
import "./home.scss";
import { TbTruckDelivery, TbBrandInstagram } from "react-icons/tb";
import {
  MdOutlinePayments,
  MdOutlineAssignmentReturn,
  MdOutlineContactMail,
} from "react-icons/md";
import FilledButton from "../../components/Buttons/FilledButton";
import YouMayLike from "../../components/YouMayLike";
import Meta from "../../components/layout/Meta";

const Home = () => {
  return (
    <div>
      {/* --------------- Title -------------- */}

      <Meta title="Shashkay Washkay" />

      {/* --------------- Slider -------------- */}

      <Slider />

      {/* --------------- Featured Products -------------- */}

      <Featured />

      {/* --------------- Glasses Advertisement -------------- */}

      <div className="d-md-flex container my-5 py-5">
        <div className="col-md-5">
          <img
            className="img-fluid"
            src="./Imgs/glasses-woman.jpg"
            alt="glasses-woman"
          />
        </div>
        <div className="col-md-1"></div>
        <div className="col-md-6 g-para">
          <h6 className="fs-6 mb-3">SMART GLASSES</h6>
          <h2 className="mb-4">
            We create stylish eyewear for your perfect look.
          </h2>
          <p className="para">
            Many people like to wear fashion eyeglasses as a style accessory,
            not only for vision correction. Come and choose your perfect
            glasses!
          </p>
          <img
            className="img-fluid"
            src="./Imgs/glasses-man.jpg"
            alt="glasses-man"
          />
        </div>
      </div>

      {/* --------------- You May Also Like -------------- */}

      <YouMayLike />

      {/* --------------- Instagram -------------- */}

      <div className="d-lg-flex container my-5 py-5">
        <div className="col-lg-5 pe-5 mb-5 mb-lg-0 pb-4 pb-lg-0">
          <TbBrandInstagram className="insta" />
          <h1 className="fs-1 mt-4 mb-4">Get Inspired With Our Instagram</h1>
          <p className="pb-xxl-5 pb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
            placeat sapiente explicabo incidunt veniam repellendus laboriosam
            iure quia. Possimus necessitatibus.
          </p>
          <FilledButton title="View Page" link="/" />
        </div>
        <div className="col-lg-7 d-flex justify-content-end">
          <img
            className="img-fluid"
            src="./Imgs/instagram.webp"
            alt="instagram"
            width={700}
          />
        </div>
      </div>

      {/* --------------- Qualities -------------- */}

      <div className="d-lg-flex text-center container my-5 py-5">
        <div className="col-lg-6 d-sm-flex mb-sm-5 mb-lg-0">
          <div className="bord col-sm-6 mb-5 mb-sm-0">
            <TbTruckDelivery className="icons mb-3" />
            <h5>Fast Delivery</h5>
            <p>Delivery within 3-5 days.</p>
          </div>
          <div className="bords col-sm-6 mb-5 mb-sm-0">
            <MdOutlinePayments className="icons mb-3" />
            <h5>Secure Payment</h5>
            <p>Cash & Card Payment.</p>
          </div>
        </div>
        <div className="col-lg-6 d-sm-flex mb-sm-5 mb-lg-0">
          <div className="bord col-sm-6 mb-5 mb-sm-0">
            <MdOutlineAssignmentReturn className="icons mb-3" />
            <h5>Money Back Guarantee</h5>
            <p>Return within 7 days.</p>
          </div>
          <div className=" col-sm-6 mb-5 mb-sm-0">
            <MdOutlineContactMail className="icons mb-3" />
            <h5>Online Support</h5>
            <p>Contact Us via Email.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
