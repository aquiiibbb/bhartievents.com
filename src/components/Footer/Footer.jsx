import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaFacebookF, FaWhatsapp, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import MithilaBorder from '../MithilaBorder/MithilaBorder'
import logo from '../../assets/logo.png'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <MithilaBorder variant="gold" />
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img height="50" src={logo} alt="Bharti Events Logo" className="logo-image" />
            <span className="logo-text">Bharti <em>Events</em></span>
          </div>
          <p className="footer-tagline">Har Khushi Ka Jashn, Bharti Events Ke Sang</p>
          <p className="footer-tagline-hindi">बिहार की माटी, बिहार की शान</p>
          <p className="footer-about">
            Bihar-based event management and decoration company crafting beautiful,
            memorable celebrations for weddings, corporate events and every joyous occasion.
          </p>
          <div className="footer-social">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
            <a href="https://wa.me/918969956612" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/weddings">Weddings</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/packages">Packages</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services">Wedding Planning</Link></li>
            <li><Link to="/services">Wedding Decoration</Link></li>
            <li><Link to="/services">Corporate Events</Link></li>
            <li><Link to="/services">Birthday Events</Link></li>
            <li><Link to="/services">Religious Events</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <ul className="footer-contact">
            <li><FaMapMarkerAlt />Bhagwanpur Parsauni Kishun East Champaran 845416</li>
            <li><FaPhoneAlt /> +91 89699 56612</li>
            <li><FaEnvelope />bhartidecorationevent@email.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Bharti Events. All Rights Reserved.</p>
                <p>&copy;Devloper Aquib ali</p>

      </div>
    </footer>
  )
}

export default Footer
