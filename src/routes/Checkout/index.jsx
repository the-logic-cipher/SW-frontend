import React, { useState, useEffect } from "react";
import DoneIcon from "@mui/icons-material/Done";
import { Link } from "react-router-dom";
import FilledButton from "../../components/Buttons/FilledButton";

const Checkout = () => {

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    email: "",
    phone: "",
  };

  const [formValue, setFormValue] = useState(initialValues);

  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


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

  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValue);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const emailRegex = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regex = new RegExp(/^[0-9\b]+$/);

    if (!values.firstName) {
      errors.firstName = "Enter First Name!";
    }
    if (!values.lastName) {
      errors.lastName = "Enter Last Name!";
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
    } 
    else if (!regex.test(values.phone)) {
      errors.phone = "You Can Enter Only Number!";
    } 
    else if (values.phone.length != 11) {
      errors.phone = "Enter a valid Phone Number!";
    }
    if (!values.email) {
      errors.email = "Enter Your email!";
    } else if (!emailRegex.test(values.email)) {
      errors.email = "Enter a valid Email";
    }
    return errors;
  };

  return (
    <div>
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
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">2</span> Checkout
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">3</span> Payment{" "}
            </h6>
            <div className="bar"></div>
            <h6 className="mb-0">
              <span className="count fs-5 fw-bold text-white pb-1">4</span> Confirm
              Order
            </h6>
          </div>
        </div>
      </div>
      <div>
        <div className="my-5 py-5 mx-sm-5 mx-4 px-xl-5 px-lg-3 px-md-2 px-sm-0">
          <div className="d-lg-flex">
            <div className="d-flex flex-column col-lg-8">
              <h6 className="fw-bold fs-6 mb-4">INFORMATION</h6>
              <form onSubmit={onSubmit}>
                <div className="d-sm-flex">
                  <div className="form-group w-100">
                    <label htmlFor="username">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formValue.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                    />
                    <p className="text-danger">{formErrors.firstName}</p>
                  </div>
                  <div className="mx-md-3 mx-sm-2"></div>
                  <div className="form-group w-100">
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formValue.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                    />
                    <p className="text-danger">{formErrors.lastName}</p>
                  </div>
                </div>
                <div className="form-group">
                  <label id="address">Address *</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formValue.address}
                    onChange={handleChange}
                    placeholder="Address"
                  />
                </div>
                <p className="text-danger">{formErrors.address}</p>
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
                    <p className="text-danger">{formErrors.postalCode}</p>
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
                </div>
                <p className="text-danger">{formErrors.phone}</p>
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValue.email}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <p className="text-danger">{formErrors.email}</p>
                <div className="d-flex justify-content-end mt-5 d-lg-block d-none">
                  {/* <button className="border-0 bg-black text-white px-4 py-2 mt-3">
                    CONTINUE PAYMENT
                  </button> */}
                  <FilledButton title="Continue Payment" link="/payment" />
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <h6 className="fw-bold fs-6 ms-lg-5 ms-0 mt-5 mt-lg-0">PAYMENT</h6>
              <div className="cart py-5 px-4 ms-lg-5 ms-0 mt-4">
                <h6 className="fw-bold fs-6 mb-5">CART TOTAL</h6>
                <div className="d-flex justify-content-between">
                  <p className="fs-6 text-black">SubTotal</p>
                  <h5 className="fs-5 fw-bold">$ 300</h5>
                </div>
                <div className="d-flex total justify-content-between ">
                  <p className="fs-6 text-black mb-2">
                    Shipping calculated at next step.
                  </p>
                </div>
                <hr />
                <div className="d-flex justify-content-between mt-4">
                  <p className="fs-6 text-black mb-0">Total</p>
                  <h5 className="fs-5 fw-bold mb-0">$ 300</h5>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end mt-5 d-block d-lg-none">
                  {/* <button className="border-0 bg-black text-white px-4 py-2 mt-3">
                    CONTINUE PAYMENT
                  </button> */}
                  <FilledButton title="Continue Payment" link="/payment" />
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
