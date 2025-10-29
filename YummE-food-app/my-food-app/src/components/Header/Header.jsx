import React from 'react'
import './Header.css'

// 1. 'setMenu' ko props mein receive kiya
const Header = ({ setMenu }) => {

  const scrollToMenu = () => {
    const menuElement = document.getElementById('explore-menu');
    
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
      
      // 2. YAHAN HAI MAIN FIX:
      // Scroll karne ke saath-saath Navbar ka state bhi update kiya
      setMenu("menu"); // "menu" string Navbar se match honi chahiye
    }
  }

  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Namaste. welcome to yummE, your ultimate destination for culinary delights delivered right to your doorstep! Dive into a world of flavor where every craving meets its match. Whether you're in the mood for savory classics, exotic cuisines, or sweet indulgences, YummE has you covered. Explore our diverse menu, place your order with ease, and let us bring the feast to you. Elevate your dining experience with yummE where taste knows no bounds.</p>
        
        {/* 3. Yeh button ab dono kaam karega */}
        <button onClick={scrollToMenu}>View Menu</button>

      </div>
    </div>
  )
}

export default Header
