import React from 'react'
import "../ProductDetails/productDetails.scss"
import { Link} from 'react-router-dom'
import Featured from "../../components/Featured"
import { MdKeyboardArrowRight } from 'react-icons/md'
import ProductDetail from "../../components/ProductDetail";

const ProductDetails = () => {
  return (
    <div>
            <div className="container-fluid p-head py-5 my-5 text-center">
        <div className="container p-head-1">
          <h2 className="mb-3">Product Detail</h2>
          <p className="mb-0 text-black-50">
            <Link to="/productDetail" className="text-black-50">
              Home
            </Link>{" "}
            <MdKeyboardArrowRight
              sx={{ fontSize: 16, color: "black", marginTop: -0.5 }}
            />{" "}
             <Link to="/productDetail" className="text-black-50">
              Products
            </Link>{" "}
            <MdKeyboardArrowRight
              sx={{ fontSize: 16, color: "black", marginTop: -0.5 }}
            />{" "}
            Product Detail
          </p>
        </div>
      </div>

      <section className='my-5'>
        <ProductDetail/>
      </section> 

      <section className='container my-5 py-4'>
        <Featured/>
      </section>

    </div>
  )
}

export default ProductDetails
