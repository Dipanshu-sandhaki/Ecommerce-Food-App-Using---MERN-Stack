import React from 'react'
import './Header.css'

// simple: behaves exactly like navbar's <a href="#explore-menu" onClick={() => setMenu("menu")}>
const Header = ({ setMenu }) => {
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Namaste. Welcome to yummE — your ultimate destination for culinary delights delivered right to your doorstep! 
          Dive into a world of flavor where every craving meets its match. Whether you're in the mood for savory classics, 
          exotic cuisines, or sweet indulgences, YummE has you covered. Explore our diverse menu, place your order with ease, 
          and let us bring the feast to you. Elevate your dining experience with yummE where taste knows no bounds.
        </p>

        {/* EXACT same behaviour as navbar's Menu link */}
        <a
          href="#explore-menu"
          onClick={() => setMenu("menu")}
          className="view-menu-btn"
        >
          View Menu
        </a>
      </div>
    </div>
  )
}

export default Header
