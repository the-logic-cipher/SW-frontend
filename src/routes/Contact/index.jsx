import React, { useState } from "react";
import { TbPhoneCall } from "react-icons/tb";
import { MdOutlineMailOutline, MdOutlineLocationOn } from "react-icons/md";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import FilledButton from "../../components/Buttons/FilledButton";
import "./contact.scss";
import Meta from "../../components/layout/Meta";

const Contact = () => {
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };

  const [formValue, setFormValue] = useState(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  return (
    <div className="contact">

      <Meta title="Contact Us" />

      <div className="d-lg-flex text-center my-5 py-5 info">
        <div className="d-md-flex col-lg-8">
          <div className="col-md-6 bord">
            <TbPhoneCall className="icons mb-3" />
            <h5>Phone</h5>
            <p className="p">+92 300 0000000</p>
          </div>
          <div className="col-md-6 bords">
            <MdOutlineMailOutline className="icons mb-3" />
            <h5>Email</h5>
            <p className="p">shashkaywashkay@gmail.com</p>
          </div>
        </div>
        <div className="col-lg-4 mt-lg-0 mt-sm-5">
          <MdOutlineLocationOn className="icons mb-3" />
          <h5>Location</h5>
          <p className="p">Rahim Yar Khan, Pakistan</p>
        </div>
      </div>
      <div className="row mx-lg-5 mx-md-3 px-lg-5">
        <div className="col-md-5">
          <h2 className="fs-2 fw-bold mb-4">Contact Us</h2>
          <p>
            As you might expect of a company that began as a high-end <br />
            interiors contractor, we pay strict attention.
          </p>
          <p>
            Rahim Yar Khan, Pakistan <br />
          </p>
          <div>
            <FaWhatsapp className="contact-icons" />
            <FaFacebookF className="contact-icons" />
            <FaInstagram className="contact-icons" />
          </div>
        </div>
        <div className="col-md-7 form">
          <form onSubmit={handleSubmit}>
            <div className="d-sm-flex">
              <input
                type="name"
                id="name"
                name="name"
                value={formValue.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <div className="margin"></div>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="d-sm-flex">
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formValue.phone}
                placeholder="Phone"
                onChange={handleChange}
              />
              <div className="margin"></div>
              <input
                type="subject"
                id="subject"
                name="subject"
                value={formValue.subject}
                placeholder="Subject"
                onChange={handleChange}
              />
            </div>
            <input
              type="message"
              id="message"
              name="message"
              value={formValue.message}
              placeholder="Message"
              onChange={handleChange}
            />
            <br />
            <br />
            <br />
            <FilledButton title="Message" link="/" />
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Contact;
