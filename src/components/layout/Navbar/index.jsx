import React from 'react'
import './Navbar.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'; 
import Sidebar from '../Sidebar'
const Navbar = () => {
  return (
    <>
    
    <nav className='container-fluid'>
      <div className=""><Sidebar />
        {/* <MenuIcon style={{color:'#243c68'}}/> */}
      </div>
      <div className="">
        <img src="/Imgs/sw-logo.png" alt="logo" />
      </div>
      <div className="a">
      <ShoppingCartOutlinedIcon style={{color:'#243c68'}}/>
      </div>
      </nav>
    </>
  )
}

export default Navbar
