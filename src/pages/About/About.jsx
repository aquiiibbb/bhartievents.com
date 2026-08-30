import React from 'react'
import { FaAward, FaUsers, FaLightbulb, FaHeart, FaArrowRight } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './About.css'

const values = [
  { icon: FaAward, title: 'Years Of Experience', desc: 'Trusted by hundreds of families and businesses across Bihar for flawless event execution.' },
  { icon: FaUsers, title: 'Professional Team', desc: 'A dedicated crew of planners, decorators and coordinators working in perfect sync.' },
  { icon: FaLightbulb, title: 'Creative Planning', desc: 'Every event is designed around a unique concept tailored to your story.' },
  { icon: FaHeart, title: 'Customer Satisfaction', desc: 'Your happiness is the true measure of our success — always has been.' },
]

const About = () => {
  useScrollReveal()
  return (
    <div className="about-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>About Bharti Events</span>
          <h1>Creating Moments That Stay Forever</h1>
        </div>
      </div>

      <section className="section about-story">
        <div className="container about-story-grid">
          <div className="about-story-images reveal">
            <img src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=700&q=80" alt="Wedding décor" className="img-a" />
            <img src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=500&q=80" alt="Mandap detail" className="img-b" />
            <img src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=500&q=80" alt="Floral decoration" className="img-c" />
          </div>
          <div className="about-story-content reveal">
            <span className="eyebrow">Our Story</span>
            <h2>Bihar's Trusted Name In Event Management</h2>
            <p className="about-hindi-line">बिहार से, बिहार के लिए — हर जश्न अपनों जैसा।</p>
            <p>
              Bharti Events was founded with a simple belief — that every celebration deserves
              to feel personal, beautiful and completely stress-free for the family hosting it.
              Based in Bihar, we have grown into a full-service event management and decoration
              company trusted for weddings, corporate gatherings, religious functions and every
              milestone worth celebrating.
            </p>
            <p>
              Our team blends traditional Bihari warmth with modern design sensibility, creating
              celebrations that feel both rooted and refined. From the first consultation to the
              final farewell, we manage every detail so you can be fully present for your special day.
            </p>
            <Button to="/booking" variant="dark-outline" icon={FaArrowRight}>Start Planning With Us</Button>
          </div>
        </div>
      </section>

      <section className="section section-alt about-stats-section">
        <div className="container stats-grid">
          <div className="stat-box reveal"><h3>50+</h3><p>Events</p></div>
          <div className="stat-box reveal"><h3>100+</h3><p>Happy Clients</p></div>
          <div className="stat-box reveal"><h3>30+</h3><p>Venues</p></div>
          <div className="stat-box reveal"><h3>100%</h3><p>Commitment</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Our Values" title="What Sets Us Apart" />
          <div className="values-grid">
            {values.map((v, i) => (
              <div className="value-card reveal" key={v.title} style={{ transitionDelay: `${(i % 4) * 0.1}s` }}>
                <div className="value-icon"><v.icon /></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt about-mission">
        <div className="container mission-grid">
          <div className="mission-card reveal">
            <h3>Our Mission</h3>
            <p>To design and manage celebrations that reflect the true spirit of every family, delivered with professionalism, creativity and heart.</p>
          </div>
          <div className="mission-card reveal">
            <h3>Our Vision</h3>
            <p>To be Bihar's most trusted event management brand, known for elegance, reliability and a genuine connection to local culture.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
