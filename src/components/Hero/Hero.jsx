import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa'
import Button from '../Button/Button'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg" />
      <div className="hero-overlay" />
      <div className="hero-particle p1" />
      <div className="hero-particle p2" />
      <div className="hero-particle p3" />

      <div className="container hero-content">
        <span className="hero-eyebrow reveal">बिहार का अपना इवेंट पार्टनर &middot; Bihar&rsquo;s Trusted Event Partner</span>
        <h1 className="hero-title reveal">
          Bharti <span className="gold-text">Events</span>
        </h1>
        <p className="hero-tagline reveal">Har Khushi Ka Jashn, Bharti Events Ke Sang</p>
        <p className="hero-desc reveal">
          From grand weddings to intimate celebrations, Bharti Events brings creativity,
          elegance and flawless event management to every occasion across Bihar.
        </p>
        <div className="hero-actions reveal">
          <Button to="/booking" variant="primary" icon={FaArrowRight}>Plan Your Event</Button>
          <Button to="/gallery" variant="outline" icon={FaPlay}>Explore Our Work</Button>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <span />
      </div>
    </section>
  )
}

export default Hero
