import React from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <h2>yummE</h2>
      <p>Admin panel</p>
      <img className='profile' src={assets.profile_image} alt="" />
    </div>
  )
}

export default Navbar
