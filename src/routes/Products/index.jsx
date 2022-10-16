import React, { useState } from "react";
import "./Product.scss";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import data from "../../components/Card/data";
import Card from "../../components/Card";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Meta from "../../components/layout/Meta";

const Products = () => {
  const valuetext = (value) => {
    return `${value}°C`;
  };

  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Meta title="Products" />

      <div className="container-fluid p-head py-5 my-5 text-center">
        <div className="container p-head-1">
          <h2 className="mb-3">Products</h2>
          <p className="mb-0 text-black-50">
            <Link to="/productDetail" className="text-black-50">
              Home
            </Link>{" "}
            <MdKeyboardArrowRight
              sx={{ fontSize: 16, color: "black", marginTop: -0.5 }}
            />{" "}
            Products
          </p>
        </div>
      </div>
      <div className="mx-sm-5 mx-4 px-xl-5 px-lg-3 px-md-2 px-sm-0">
        <div className="row">
          <div className="col-lg-9 col-xxl-9">
            <div className="d-flex justify-content-between">
              <div>Showing 10 of 5 results</div>

              <div className="me-5">
                Sort by Price:
                <select name="" id="">
                  <option value="">all</option>
                  <option value="asc">price(asc)</option>
                  <option value="dsc">price(dsc)</option>
                </select>
              </div>
            </div>
            <div className="data">
              {data.map((val) => {
                return (
                  <div className="car">
                    <Card img={val.img} title={val.title} price={val.price} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-lg-3 col-xxl-3 filter-bar px-4">
            <div className="mt-5 pt-4">
              <h5 className="mb-4">Search</h5>
              <input type="text" placeholder="   Search" />
            </div>
            <div className="mt-4">
              <h5 className="mb-4">Categories</h5>
              <ul>
                <li className="fs-6 mb-2">Men</li>
                <li className="fs-6 mb-2">Women</li>
                <li className="fs-6 mb-2">Kids</li>
              </ul>
            </div>
            <div className="my-5">
              <h5 className="mb-3">Filter</h5>
              <Box sx={{ width: 230 }}>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  onChange={handleChange}
                  valueLabelDisplay="auto"
                  getAriaValueText={valuetext}
                />
              </Box>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
