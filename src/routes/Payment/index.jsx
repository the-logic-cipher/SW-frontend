import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import DoneIcon from "@mui/icons-material/Done";
import FilledButton from "../../components/Buttons/FilledButton";
import Meta from "../../components/layout/Meta";

const Payment = () => {
  const initialValues = {
    paymentMethod: "",
    addressMethod: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  };

  const [formValue, setFormValue] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValue));
    setIsSubmit(true);

    isSubmit && navigate("/confirmOrder");
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = new RegExp(/^[0-9\b]+$/);

    if (values.addressMethod === "") {
      errors.addressMethod = "Choose Address Option!";
    }
    if (values.paymentMethod === "") {
      errors.paymentMethod = "Choose Payment Method!";
    }
    if (!values.address) {
      errors.address = "Enter Your Address!";
    }
    if (!values.city) {
      errors.city = "Enter Your City!";
    }
    if (!values.postalCode) {
      errors.postalCode = "Enter Your Postal Code!";
    }
    if (!values.phone) {
      errors.phone = "Enter Your phone Number!";
    } else if (!regex.test(values.phone)) {
      errors.phone = "You Can Enter Only Number!";
    } else if (values.phone.length != 11) {
      errors.phone = "Enter a valid Phone Number!";
    }
    return errors;
  };

  const [showAddress, setShowAddress] = useState("");
  const [showForm, setShowForm] = useState("");

  return (
    <div>
      <Meta title="Payment" />

      <div className="p-head py-5">
        <div className="container text-center">
          <div className=" d-flex justify-content-center">
            <h6>
              <Link to="/cart" className="mb-0 text-black fw-bold">
                <span className="counts fs-5 fw-bold text-white">
                  <DoneIcon sx={{ marginTop: -0.5 }} />
                </span>{" "}
                Cart
              </Link>
            </h6>
            <div className="bar"></div>
            <h6>
              <Link to="/checkout" className="mb-0 text-black fw-bold">
                <span className="counts fs-5 fw-bold text-white">
                  <DoneIcon sx={{ marginTop: -0.5 }} />
                </span>{" "}
                Checkout
              </Link>
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">3</span>{" "}
              Payment{" "}
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">4</span>{" "}
              Confirm Order
            </h6>
          </div>
        </div>
      </div>
      <div className="my-5 py-5 mx-sm-5 mx-4 px-xl-5 px-lg-3 px-md-2 px-sm-0">
        <div className="d-lg-flex">
          <div className="d-flex flex-column col-lg-8">
            <h6 className="fw-bold fs-6 mb-2">PAYMENT METHOD</h6>

            <div className="p-3 border mt-3">
              <form action="" onSubmit={onSubmit}>
                <div class="form-check mb-2">
                  <input
                    class="form-check-input p-2"
                    type="radio"
                    name="paymentMethod"
                    id="flexRadioDefault1"
                    value="cashOnDelivery"
                    onChange={handleChange}
                    checked={formValue.paymentMethod === "cashOnDelivery"}
                    onClick={() => setShowAddress(true)}
                  />
                  <label
                    class="form-check-label mt-0 fs-6"
                    for="flexRadioDefault1"
                  >
                    Cash On Delivery
                  </label>
                </div>
                <div>
                  {showAddress && (
                    <div className="p-3">
                      <div class="form-check mb-2">
                        <input
                          class="form-check-input mb-0 p-2"
                          type="radio"
                          name="addressMethod"
                          id="flexRadio1"
                          value="sameAddress"
                          onChange={handleChange}
                          checked={formValue.addressMethod === "sameAddress"}
                          onClick={() => setShowForm(false)}
                        />
                        <label
                          class="form-check-label mt-0 fs-6"
                          for="flexRadio1"
                        >
                          Billing Address will be same as Shipping Address
                        </label>
                      </div>
                      <div></div>
                      <div class="form-check">
                        <input
                          class="form-check-input mb-0 p-2"
                          type="radio"
                          name="addressMethod"
                          id="flexRadio2"
                          value="diffAddress"
                          onChange={handleChange}
                          checked={formValue.addressMethod === "diffAddress"}
                          onClick={() => setShowForm(true)}
                        />
                        <label
                          class="form-check-label mt-0 fs-6"
                          for="flexRadio2"
                        >
                          Use different Billing Address
                        </label>
                      </div>
                      <p className="text-danger">{formErrors.addressMethod}</p>
                      {showForm && (
                        <form className="my-4">
                          <div className="form-group col-md-12">
                            <label id="address">Address *</label>
                            <input
                              type="text"
                              id="address"
                              name="address"
                              value={formValue.address}
                              onChange={handleChange}
                              placeholder="Address"
                            />
                            <p className="text-danger">{formErrors.address}</p>
                          </div>
                          <div className="d-sm-flex">
                            <div className="form-group w-100">
                              <label htmlFor="city">City Name*</label>
                              <input
                                type="text"
                                id="city"
                                name="city"
                                value={formValue.city}
                                onChange={handleChange}
                                placeholder="City Name"
                              />
                              <p className="text-danger">{formErrors.city}</p>
                            </div>
                            <div className="mx-md-3 mx-sm-2"></div>
                            <div className="form-group w-100">
                              <label htmlFor="postalCode">Postal Code *</label>
                              <input
                                type="text"
                                id="postalCode"
                                name="postalCode"
                                value={formValue.postalCode}
                                onChange={handleChange}
                                placeholder="Postal Code"
                              />
                              <p className="text-danger">
                                {formErrors.postalCode}
                              </p>
                            </div>
                          </div>
                          <div className="form-group">
                            <label htmlFor="postalCode">Phone Number *</label>
                            <input
                              type="text"
                              id="phone"
                              name="phone"
                              value={formValue.phone}
                              onChange={handleChange}
                              placeholder="Phone Number"
                            />
                            <p className="text-danger">{formErrors.phone}</p>
                          </div>
                        </form>
                      )}
                    </div>
                  )}
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input mb-0 p-2"
                    type="radio"
                    name="paymentMethod"
                    id="flexRadioDefault2"
                    value="cardPayment"
                    onChange={handleChange}
                    checked={formValue.paymentMethod === "cardPayment"}
                    onClick={() => setShowAddress(false)}
                  />
                  <label
                    class="form-check-label mt-0 fs-6"
                    for="flexRadioDefault2"
                  >
                    Card Payment
                  </label>
                </div>
                <p className="text-danger">{formErrors.paymentMethod}</p>
                <div className="d-lg-flex justify-content-end d-none mb-3">
                  {formValue.paymentMethod === "cardPayment" ? (
                    <button
                      className="fs-4 fs-lg-5 border-0 text-white mt-3 me-2"
                      style={{
                        paddingRight: 22,
                        paddingLeft: 22,
                        paddingTop: 12,
                        paddingBottom: 12,
                        backgroundColor: "#243c68",
                      }}
                    >
                      Confirm Order
                    </button>
                  ) : (
                    <FilledButton title="Confirm Order" link="/confirm" />
                  )}
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-4">
            <h6 className="fw-bold fs-6 ms-lg-5 mt-5 mt-lg-0">PAYMENT</h6>
            <div className="cart py-5 px-4 ms-lg-5 mt-4">
              <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
              <div className="d-flex justify-content-between">
                <p className="fs-6 text-black">SubTotal</p>
                <h5 className="fs-5 fw-bold">Rs. 100</h5>
              </div>
              <div className="d-flex total justify-content-between ">
                <p className="fs-6 text-black mb-2">Shipping</p>
                <h5 className="fs-5 fw-bold mb-2">Rs. 100</h5>
              </div>
              <hr />
              <div className="d-flex justify-content-between mt-4">
                <p className="fs-6 text-black mb-0">Total</p>
                <h5 className="fs-5 fw-bold mb-0">Rs.200</h5>
              </div>
              <div className="d-flex justify-content-center mt-4"></div>
            </div>
          </div>
          <div className="d-flex justify-content-sm-end justify-content-center d-lg-none d-block mt-5">
            {formValue.paymentMethod === "cardPayment" ? (
              <button
                className="fs-4 fs-lg-5 border-0 text-white mt-3 mb-2 me-2"
                style={{
                  paddingRight: 22,
                  paddingLeft: 22,
                  paddingTop: 12,
                  paddingBottom: 12,
                  backgroundColor: "#243c68",
                }}
              >
                Confirm Order
              </button>
            ) : (
              <FilledButton title="Confirm Order" link="/confirm" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
