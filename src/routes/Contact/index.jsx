import React,{useState} from 'react'
import { TbPhoneCall } from 'react-icons/tb'
import { MdOutlineMailOutline,MdOutlineLocationOn } from 'react-icons/md'
import {FaInstagram, FaFacebookF, FaWhatsapp} from 'react-icons/fa'
import FilledButton from '../../components/Buttons/FilledButton'
import "./contact.scss";

const Contact = () => {

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
    <div className='container'>
      <div className="d-flex text-center my-5 py-5">
        <div className="col-md-4 bord">
          <TbPhoneCall className="icons mb-3"/>
          <h5>Phone</h5>
          <p>+92 300 0000000</p>
        </div>
        <div className="col-md-4 bord">
          <MdOutlineMailOutline className="icons mb-3"/>
          <h5>Email</h5>
          <p>shashkaywashkay@gmail.com</p>
        </div>
        <div className="col-md-4">
          <MdOutlineLocationOn className="icons mb-3"/>
          <h5>Location</h5>
          <p>Rahim Yar Khan, Pakistan</p>
        </div>
      </div>
      <div className="row">
          <div className="col-md-5">
            <h2 className="fs-2 fw-bold mb-4">Contact Us</h2>
            <p>
              As you might expect of a company that began as a high-end <br/>
              interiors contractor, we pay strict attention.
            </p>
            <p>
              Rahim Yar Khan, Pakistan <br /> 
            </p>
            <div>
              <FaWhatsapp className='contact-icons'/>
              <FaFacebookF className='contact-icons'/>
              <FaInstagram className='contact-icons'/>
            </div>
          </div>
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              <div className='d-flex'>
              <input
                type="name"
                id="name"
                name="name"
                value={formValue.name}
                placeholder="Name"
                onChange={handleChange}
              />
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
              <input
                type="email"
                id="email"
                name="email"
                value={formValue.email}
                placeholder="Email"
                onChange={handleChange}
              />
              </div>
              <div className='d-flex'>
              <input
                type="phone"
                id="phone"
                name="phone"
                value={formValue.phone}
                placeholder="Phone"
                onChange={handleChange}
              />
              <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
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
              <FilledButton title="Message" link="/"/>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Contact
