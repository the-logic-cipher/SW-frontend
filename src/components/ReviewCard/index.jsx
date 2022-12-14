import React from 'react'
import { MdOutlineStar } from 'react-icons/md'

const ReviewCard = () => {
  return (
    <div className='d-flex pt-4'>
       <div className="col-lg-2 col-md-1">
        <img src="./Imgs/glasses-man.jpg" alt="" width={70} height={70} style={{borderRadius:50}}/>
       </div>
       <div className='col-lg-10 ms-lg-3 ms-md-5 ms-sm-4 ms-3 col-md-11'>
          <p className='mb-0'> <span className='fs-5'>Abdul Hanan</span> - <span className='text-black-50'>June 24, 2005</span></p>
          <div className="rating d-flex me-5 mb-3 mt-1">
              <MdOutlineStar style={{color:"#ecc33b"}} />
              <MdOutlineStar style={{color:"#ecc33b"}} />
              <MdOutlineStar style={{color:"#ecc33b"}} />
              <MdOutlineStar style={{color:"#ecc33b"}} />
              <MdOutlineStar style={{color:"#ecc33b"}} />
            </div>
          <p className='text-black-50 pe-lg-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, id!</p>
       </div>
    </div>
  )
}

export default ReviewCard
