import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import Swal from 'sweetalert2'

const Navbar = ({ menu, setMenu, setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
  const navigate = useNavigate()
  const location = useLocation()
  const headerRef = useRef(null)
  const [headerHeight, setHeaderHeight] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const measure = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.getBoundingClientRect().height)
      }
    }
    
    const handleScroll = () => {
      const scrollPos = window.scrollY
      setScrolled(scrollPos > 20)

      if (location.pathname === '/') {
        if (scrollPos < 300) {
          setMenu('home')
        } else {
          const sections = [
            { id: 'explore-menu', name: 'menu' },
            { id: 'app-download', name: 'mobile-app' },
            { id: 'footer', name: 'contact-us' }
          ]

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id)
            if (section && scrollPos >= section.offsetTop - 150) {
              setMenu(sections[i].name)
              break
            }
          }
        }
      }
    }

    measure()
    window.addEventListener('resize', measure)
    window.addEventListener('scroll', handleScroll)
    
    handleScroll()

    return () => {
      window.removeEventListener('resize', measure)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [setMenu, location.pathname])

  const logout = async () => {
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#f43f5e',
      cancelButtonColor: '#94a3b8',
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

  const handleNavClick = (key) => {
    setMenu(key)
    setMobileOpen(false)
  }

  return (
    <>
      <header ref={headerRef} className={`navbar-fixed ${scrolled ? 'scrolled' : ''}`} role="banner">
        <div className="navbar-inner">
          <Link to='/' className="logo-link" onClick={() => handleNavClick('home')}>
            <img src={assets.logo} alt="Logo" className="logo" />
          </Link>

          <nav className="nav-desktop" aria-label="Primary navigation">
            <ul className="navbar-menu" role="menubar">
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
            <div className="navbar-search-icon">
              <Link to='/cart' aria-label="Cart" onClick={() => setMobileOpen(false)}>
                <img src={assets.basket_icon} alt="Basket" />
              </Link>
              <div className={getTotalCartAmount() === 0 ? "" : "dot"} aria-hidden={getTotalCartAmount() === 0}></div>
            </div>

            {!token ? (
              <button className="signin-btn" onClick={() => { setShowLogin(true); setMobileOpen(false); }}>Sign in</button>
            ) : (
              <div className='navbar-profile'>
                <img src={assets.profile_icon} alt="Profile" className="profile-avatar" />
                <ul className="nav-profile-dropdown" role="menu">
                  <li role="menuitem" className="profile-item"><img src={assets.bag_icon} alt="" /><span>Orders</span></li>
                  <hr />
                  <li role="menuitem" onClick={logout} className="profile-item"><img src={assets.logout_icon} alt="" /><span>Logout</span></li>
                </ul>
              </div>
            )}

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

        <div className={`mobile-dropdown ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          <ul>
            <li><Link to='/' onClick={() => handleNavClick("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
            <li><a href='#explore-menu' onClick={() => handleNavClick("menu")} className={menu === "menu" ? "active" : ""}>Menu</a></li>
            <li><a href='#app-download' onClick={() => handleNavClick("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-app</a></li>
            <li><a href='#footer' onClick={() => handleNavClick("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</a></li>
          </ul>
        </div>
      </header>

      <div style={{ height: headerHeight }} aria-hidden="true" />
    </>
  )
}

export default Navbar