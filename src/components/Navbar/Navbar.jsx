import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import Button from '../Button/Button'
import './Navbar.css'
import logo from '../../assets/logo.png'

const links = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/weddings', label: 'Weddings' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/packages', label: 'Packages' },
  { path: '/contact', label: 'Contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  // Scroll lock when mobile menu is active
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [menuOpen])

  const showSolid = scrolled || !isHome || menuOpen

  return (
    <header className={`navbar ${showSolid ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Bharti Events Logo" className="logo-image" />
          <span className="logo-text">
            Bharti <em>Events</em>
          </span>
        </NavLink>

        <nav className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) => (isActive ? 'active' : '')}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <div className="navbar-mobile-cta">
            <Button to="/booking" variant="primary" onClick={() => setMenuOpen(false)}>
              Get Quote
            </Button>
          </div>
        </nav>

        <div className="navbar-actions">
          <div className="navbar-cta">
            <Button to="/booking" variant="primary">Get Quote</Button>
          </div>
          <button 
            className="navbar-toggle" 
            onClick={() => setMenuOpen(!menuOpen)} 
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && <div className="navbar-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}

export default Navbar