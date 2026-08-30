import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './WhatsAppButton.css'

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/918969956612"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
      <span className="whatsapp-ping" />
    </a>
  )
}

export default WhatsAppButton
