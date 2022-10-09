import React from 'react'
// import component 👇
import Drawer from 'react-modern-drawer'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
//import styles 👇
import 'react-modern-drawer/dist/index.css'
import './sidebar.scss'

const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <>
      <MenuIcon onClick={toggleDrawer} style={{ color: '#243c68', cursor: 'pointer' }} />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction='left'
        className='drawer1'
        overlayOpacity='.5'
        size='300px'
      >
        <div className='drawer'>
          <img src="/Imgs/glasses-logo.png" width={100} alt="" />
          <Link onClick={toggleDrawer} to='/'><h5 style={{marginTop:40}}>Home</h5></Link>
          <Link onClick={toggleDrawer} to='/products'><h5>Products</h5></Link>
          <Link onClick={toggleDrawer} to='/products'><h6>Man</h6></Link>
          <Link onClick={toggleDrawer} to='/products'><h6>Woman</h6></Link>
          <Link onClick={toggleDrawer} to='/products'><h6>Kid</h6></Link>
          <Link onClick={toggleDrawer} to='/contact'><h5>Contact</h5></Link>
          <Link onClick={toggleDrawer} to='/cart'><h5>Cart</h5></Link>
          <Link onClick={toggleDrawer} to=''><h5 className='login'>Login</h5></Link>
        </div>
      </Drawer>
    </>
  )
}

export default Sidebar
