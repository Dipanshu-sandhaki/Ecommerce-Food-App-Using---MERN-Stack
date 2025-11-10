import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import Swal from 'sweetalert2'

const Navbar = ({ menu, setMenu, setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()

  // ref to header to measure height
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)

  // mobile hamburger state (minimal)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const logout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout!'
    })

    if (result.isConfirmed) {
      localStorage.removeItem("token")
      setToken("")
      navigate("/")
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Logged out successfully!",
        showConfirmButton: false,
        timer: 1500
      })
    }
  }

  // handle nav click both desktop & mobile (closes mobile menu)
  const handleNavClick = (key) => {
    setMenu(key)
    setMobileOpen(false)
  }

  return (
    <>
      {/* Fixed full-width navbar */}
      <header ref={headerRef} className="navbar-fixed" role="banner">
        <div className="navbar-inner">
          <Link to='/' className="logo-link" onClick={() => handleNavClick('home')}>
            <img src={assets.logo} alt="Logo" className="logo" />
          </Link>

          <nav className="nav-desktop" aria-label="Primary navigation">
            <ul className="navbar-menu" role="menubar" aria-label="Primary">
              <li role="none">
                <Link role="menuitem" to='/' onClick={() => handleNavClick("home")} className={menu === "home" ? "active" : ""}>Home</Link>
              </li>
              <li role="none">
                <a role="menuitem" href='#explore-menu' onClick={() => handleNavClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
              </li>
              <li role="none">
                <a role="menuitem" href='#app-download' onClick={() => handleNavClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a>
              </li>
              <li role="none">
                <a role="menuitem" href='#footer' onClick={() => handleNavClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a>
              </li>
            </ul>
          </nav>

          <div className="navbar-right">
            <button className="icon-btn" aria-label="Search">
              <img src={assets.search_icon} alt="Search" />
            </button>

            <div className="navbar-search-icon" aria-hidden="false">
              <Link to='/cart' aria-label="Cart" onClick={() => setMobileOpen(false)}>
                <img src={assets.basket_icon} alt="Basket" />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"} aria-hidden={getTotalCartAmount() === 0}></div>
            </div>

            {!token ? (
              <button className="signin-btn" onClick={() => { setShowLogin(true); setMobileOpen(false); }}>Sign in</button>
            ) : (
              <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="Profile" />
                <ul className="nav-profile-dropdown" role="menu" aria-label="Profile menu">
                  <li role="menuitem" className="profile-item"><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                  <hr />
                  <li role="menuitem" onClick={logout} className="profile-item"><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                </ul>
              </div>
            )}

            {/* Hamburger (visible on mobile only via CSS) */}
            <button
              className={`hamburger ${mobileOpen ? 'is-open' : ''}`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(prev => !prev)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile dropdown (minimal, matches desktop links and closes on click) */}
        <div className={`mobile-dropdown ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          <ul>
            <li><Link to='/' onClick={() => handleNavClick("home")}>Home</Link></li>
            <li><a href='#explore-menu' onClick={() => handleNavClick("menu")}>Menu</a></li>
            <li><a href='#app-download' onClick={() => handleNavClick("mobile-app")}>Mobile-app</a></li>
            <li><a href='#footer' onClick={() => handleNavClick("contact-us")}>Contact us</a></li>
          </ul>
        </div>
      </header>

      {/* Spacer that keeps the page content from going under the fixed navbar */}
      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  )
}

export default Navbar
