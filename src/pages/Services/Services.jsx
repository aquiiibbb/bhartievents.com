import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import Button from '../../components/Button/Button'
import services from '../../data/services'
import useScrollReveal from '../../hooks/useScrollReveal'
import { FaArrowRight } from 'react-icons/fa'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Services.css'

const Services = () => {
  useScrollReveal()
  return (
    <div className="services-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>What We Offer</span>
          <h1>Our Services</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Full-Service Event Management"
            title="Every Occasion, Perfectly Planned"
            subtitle="From intimate gatherings to grand celebrations, Bharti Events offers complete event solutions across Bihar."
          />
          <div className="all-services-grid">
            {services.map((service, i) => (
              <ServiceCard service={service} index={i} key={service.id} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt services-cta">
        <div className="container services-cta-content reveal">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Share your event details with us and we'll recommend the perfect plan for your celebration.</p>
          <Button to="/booking" variant="primary" icon={FaArrowRight}>Request A Free Consultation</Button>
        </div>
      </section>
    </div>
  )
}

export default Services
