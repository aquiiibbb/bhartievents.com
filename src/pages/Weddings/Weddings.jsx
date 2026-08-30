import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import EventCard from '../../components/EventCard/EventCard'
import Button from '../../components/Button/Button'
import weddingCategories from '../../data/weddings'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Weddings.css'

const Weddings = () => {
  useScrollReveal()
  return (
    <div className="weddings-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Weddings By Bharti Events</span>
          <h1>Your Dream Wedding, Beautifully Designed</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Every Ritual, Perfected"
            title="Wedding Ceremonies We Specialise In"
            subtitle="Each ritual styled with care, from the first Haldi to the final Reception farewell."
          />
          <div className="wedding-full-grid">
            {weddingCategories.map((cat, i) => (
              <EventCard key={cat.id} title={cat.title} image={cat.image} description={cat.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt wedding-process">
        <div className="container">
          <SectionTitle eyebrow="How It Works" title="Planning Your Wedding With Us" align="center" />
          <div className="process-grid">
            <div className="process-step reveal">
              <span>01</span>
              <h4>Consultation</h4>
              <p>We understand your vision, budget and cultural preferences.</p>
            </div>
            <div className="process-step reveal">
              <span>02</span>
              <h4>Design & Planning</h4>
              <p>A custom theme, mood board and detailed event timeline are created.</p>
            </div>
            <div className="process-step reveal">
              <span>03</span>
              <h4>Execution</h4>
              <p>Our team manages setup, vendors and coordination on the day.</p>
            </div>
            <div className="process-step reveal">
              <span>04</span>
              <h4>Celebration</h4>
              <p>You celebrate stress-free while we handle every detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="container final-cta-content reveal">
          <h2>Ready To Plan Your Dream Wedding?</h2>
          <p>Let Bharti Events design a wedding that reflects your story.</p>
          <Button to="/booking" variant="primary" icon={FaArrowRight}>Plan My Wedding</Button>
        </div>
      </section>
    </div>
  )
}

export default Weddings
