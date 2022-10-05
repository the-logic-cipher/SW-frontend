import React from 'react'
import './Navbar.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom'; 
import Sidebar from '../Sidebar'
import Badge from '@mui/material/Badge';
const Navbar = () => {
  return (
    <>
    
    <nav className='container-fluid'>
      <div className="">
        <Sidebar />
      </div>
      <div className="">
        <Link to='/'><img src="/Imgs/sw-logo.png" alt="logo" /></Link>
      </div>
      <div className="a">
      <Badge badgeContent={4} color="primary">
      <Link to='/cart'><ShoppingCartOutlinedIcon style={{color:'#243c68'}}/></Link>
      </Badge>
      </div>
      </nav>
    </>
  )
}

export default Navbar
