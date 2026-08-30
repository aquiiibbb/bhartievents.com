import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import decorations from '../../data/decorations'
import useScrollReveal from '../../hooks/useScrollReveal'
import { FaArrowRight } from 'react-icons/fa'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Decorations.css'

const Decorations = () => {
  useScrollReveal()
  return (
    <div className="decorations-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Décor Styles</span>
          <h1>Decoration Crafted To Your Theme</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Explore Our Styles"
            title="Decoration Categories"
            subtitle="From royal grandeur to minimal elegance — find the style that speaks to your celebration."
          />
          <div className="decor-full-grid">
            {decorations.map((d, i) => (
              <div className="decor-full-card reveal" key={d.id} style={{ transitionDelay: `${(i % 5) * 0.06}s` }}>
                <img src={d.image} alt={d.title} loading="lazy" />
                <div className="decor-full-label"><span>{d.title}</span></div>
              </div>
            ))}
          </div>
          <div className="section-cta reveal">
            <Button to="/booking" variant="primary" icon={FaArrowRight}>Get A Custom Décor Quote</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Decorations
