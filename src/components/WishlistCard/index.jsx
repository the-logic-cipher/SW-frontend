import React from 'react'
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-router-dom';

const WishlistCard = (props) => {

  return (
    <div>
      <div className='container'>
          <div className="cart-content d-sm-flex me-0 p-4">
            <div className='col-sm-1'></div>
            <div className="col-sm-3 justify-content-start d-md-flex">
                <Link to='/'><img src="/Imgs/glasses.jpg" className="img-fluid col-md-6" alt="" /></Link>
                <div className='d-none d-md-block'></div>
            </div>
              <div className="m-sm-5 m-3 m-md-0 col-sm-4 d-flex justify-content-center align-items-center flex-column ">
                <Link to='/'><p className="text-black ms-sm-4 mb-2">Brown Glasses</p></Link>
                <h6 className="fs-5 fw-bold ms-sm-4 mb-0">$ 300</h6>
              </div>
            <div className="col-sm-3 pe-sm-3 d-flex align-items-center justify-content-md-end justify-content-center">
              <div className="close d-flex align-items-center justify-content-center">
                <CloseIcon sx={{ fontSize: 20 }} />
              </div>
            </div>
            <div className='col-sm-1'></div>
          </div>
    </div>
    </div>
  )
}

export default WishlistCard
