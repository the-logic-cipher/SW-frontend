import React, { useState } from "react";
import "./productDetail.scss";
import FilledButton from "../Buttons/FilledButton";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowDown,
  MdOutlineStar,
} from "react-icons/md";
import ReviewCard from "../ReviewCard";

const ProductDetail = () => {
  const [counter, setCounter] = useState(1);

  const up = () => {
    setCounter(counter + 1);
  };
  const down = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const initialValues ={
    name : '',
    email : '',
    phone : '',
    subject : '',
    message : ''
  }

 const [formValue, setFormValue] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault()

  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <div className="mx-lg-5 px-lg-5 mx-4 px-sm-4">
      <div className="product-detail d-lg-flex mb-5 pb-lg-5">
       <div className="d-flex col-lg-6">
       <section className="col-2 mt-lg-5 p-0">
        <img className="img-fluid mb-3" src="/Imgs/glasses.jpg" alt="" />
        <img className="img-fluid mb-3" src="/Imgs/glasses.jpg" alt="" />
        <img className="img-fluid" src="/Imgs/glasses.jpg" alt="" />
        </section>

        <section className="product-detail-images col-10">
          <div>
            <div className="grid">
              <div className="pt-lg-5 px-md-4 d-flex justify-content-center">
                <img className="img-fluid" src="/Imgs/glasses.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
       </div>

        <section className="product-detail-data d-block mt-5 ps-lg-5 col-lg-6">
          <h4 className="fs-2">Brown Glasses</h4>

          <div className="my-3 d-flex justify-content-between">
            <h5 className="fs-4 mb-0">Rs. 3000</h5>
            <div className="rating d-flex">
              <MdOutlineStar className="star me-1" />
              <MdOutlineStar className="star me-1" />
              <MdOutlineStar className="star me-1" />
              <MdOutlineStar className="star me-1" />
              <MdOutlineStar className="star" />
            </div>
          </div>

          <div className="text-start mt-5">
            <p className="text-black-50 mt-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              dolorum ullam fuga hic soluta architecto ab veritatis cupiditate
              dicta? Dicta eaque incidunt aperiam tempora expedita cum quidem
              ipsa pariatur, <br /> <br /> vitae saepe nesciunt esse accusamus
              similique, sint exercitationem at inventore quisquam id voluptatem
              nostrum perferendis nihil et?
            </p>
          </div>

          <div className="d-sm-flex">
            <div className="d-flex counter justify-content-end">
              <p className="fs-6 fw-bold text-black mt-2">
                {counter} &nbsp; &nbsp;
              </p>
              <div className="me-2 mt-1 d-flex flex-column">
                <MdKeyboardArrowUp sx={{ fontSize: 20 }} onClick={up} />
                {/* <br /> */}
                <MdKeyboardArrowDown sx={{ fontSize: 20 }} onClick={down} />
              </div>
            </div>
            <div className="d-none d-sm-block">&nbsp; &nbsp; &nbsp;</div>
            <div className="mt-4 pt-2">
              <FilledButton title="Add To Cart" link="/" />
            </div>
          </div>

          <div className="mt-5">
            <p className="mb-1">
              Category: <span className="text-black-50">Man</span>
            </p>
            <p>
              ProductId: <span className="text-black-50">12345</span>
            </p>
          </div>
        </section>
      </div>
        
      {/* --------------- Reviews ---------------- */}

      <section className="d-lg-flex mt-5 pt-5">
        <div className="col-lg-6">
          <h3 className="mb-4">Review for Shashky Washkay</h3>
          <ReviewCard/>
          <ReviewCard/>
        </div>
        {/* <div className="col-md-1"></div> */}
        <div className="col-lg-6 mt-5 mt-lg-0">
          <h3 className="mb-4">Add a Review</h3>
          <p className="text-black-50 mb-4">Your email address will not be published.</p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="Name">Name</label>
              <input
                type="name"
                id="name"
                name="name"
                value={formValue.name}
                onChange={handleChange}
              />
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                onChange={handleChange}
              />
              <label htmlFor="Rating">Rating</label>

              <label htmlFor="Review">Review</label>
              <input
                type="review"
                id="review"
                name="review"
                value={formValue.review}
                onChange={handleChange}
              />
              <br />
              <br />
              <br />
              <FilledButton title="Submit" link="/"/>
            </form>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
