import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaPaintBrush, FaTasks, FaUsers, FaGem, FaSlidersH, FaClock, FaArrowRight
} from 'react-icons/fa'
import Hero from '../../components/Hero/Hero'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ServiceCard from '../../components/ServiceCard/ServiceCard'
import EventCard from '../../components/EventCard/EventCard'
import PackageCard from '../../components/PackageCard/PackageCard'
import Testimonial from '../../components/Testimonial/Testimonial'
import Button from '../../components/Button/Button'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import services from '../../data/services'
import weddingCategories from '../../data/weddings'
import decorations from '../../data/decorations'
import packages from '../../data/packages'
import useScrollReveal from '../../hooks/useScrollReveal'
import './Home.css'

const whyChoose = [
  { icon: FaPaintBrush, title: 'Creative Decoration', desc: 'Unique themes designed around your story and style.' },
  { icon: FaTasks, title: 'Complete Event Management', desc: 'From planning to execution, we handle every detail.' },
  { icon: FaUsers, title: 'Experienced Team', desc: 'Skilled professionals with years of celebration expertise.' },
  { icon: FaGem, title: 'Premium Quality', desc: 'Only the finest materials, florals and finishing.' },
  { icon: FaSlidersH, title: 'Customized Packages', desc: 'Flexible plans that fit every budget and vision.' },
  { icon: FaClock, title: 'On-Time Execution', desc: 'Punctual setup so you can relax and enjoy the day.' },
]

const Home = () => {
  useScrollReveal()

  return (
    <div className="home">
      <Hero />
      <MithilaBorder variant="maroon" />

      {/* WHY CHOOSE US */}
      <section className="section why-choose">
        <div className="container">
          <SectionTitle
            eyebrow="Why Bharti Events"
            title="Why Choose Bharti Events"
            subtitle="A dedicated team that turns your vision into a beautifully executed celebration."
          />
          <div className="why-grid">
            {whyChoose.map((item, i) => (
              <div className="why-card reveal" key={item.title} style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                <div className="why-icon"><item.icon /></div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section section-alt about-preview">
        <div className="container about-preview-grid">
          <div className="about-preview-images reveal">
            <img className="img-main" src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=700&q=80" alt="Bharti Events decoration" />
            <img className="img-sub" src="https://images.unsplash.com/photo-1478146059778-26028b07395a?auto=format&fit=crop&w=500&q=80" alt="Floral decoration" />
            <div className="about-stat-badge">
              <h3>500+</h3>
              <p>Events Delivered</p>
            </div>
          </div>

          <div className="about-preview-content reveal">
            <span className="eyebrow">About Bharti Events</span>
            <h2>Creating Moments That Stay Forever</h2>
            <p>
              Bharti Events is a Bihar-based event planning and decoration company dedicated to
              crafting beautiful, memorable and professionally managed celebrations. From intimate
              gatherings to grand weddings, we bring creativity, discipline and heartfelt care to
              every occasion.
            </p>
            <ul className="about-points">
              <li>Years of trusted experience across Bihar</li>
              <li>A professional, detail-oriented team</li>
              <li>Thoughtful, creative event planning</li>
              <li>Premium decoration and finishing</li>
              <li>Genuine focus on customer satisfaction</li>
            </ul>
            <div className="about-stats-row">
              <div><h4>500+</h4><span>Events</span></div>
              <div><h4>1000+</h4><span>Happy Clients</span></div>
              <div><h4>50+</h4><span>Venues</span></div>
              <div><h4>100%</h4><span>Commitment</span></div>
            </div>
            <Button to="/about" variant="dark-outline" icon={FaArrowRight}>Know More About Us</Button>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section">
        <div className="container">
          <SectionTitle
            eyebrow="What We Offer"
            title="Our Signature Services"
            subtitle="Comprehensive event solutions crafted for every celebration, big or small."
          />
          <div className="services-grid">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard service={service} index={i} key={service.id} />
            ))}
          </div>
          <div className="section-cta reveal">
            <Button to="/services" variant="dark-outline" icon={FaArrowRight}>View All Services</Button>
          </div>
        </div>
      </section>

      {/* WEDDING SECTION */}
      <section className="section section-alt wedding-section">
        <div className="container">
          <SectionTitle
            eyebrow="Weddings By Bharti Events"
            title="Your Dream Wedding, Beautifully Designed"
            subtitle="Every wedding ritual, styled with tradition, elegance and unmatched attention to detail."
          />
          <div className="wedding-grid">
            {weddingCategories.map((cat, i) => (
              <EventCard key={cat.id} title={cat.title} image={cat.image} description={cat.description} index={i} />
            ))}
          </div>
          <div className="section-cta reveal">
            <Button to="/booking" variant="primary" icon={FaArrowRight}>Plan My Wedding</Button>
          </div>
        </div>
      </section>

      {/* DECORATION SECTION */}
      <section className="section decoration-section">
        <div className="container">
          <SectionTitle
            eyebrow="Décor Styles"
            title="Decoration Crafted To Your Theme"
            subtitle="Explore the decoration styles that define every Bharti Events celebration."
          />
          <div className="decor-grid">
            {decorations.map((d, i) => (
              <div className="decor-card reveal" key={d.id} style={{ transitionDelay: `${(i % 5) * 0.06}s` }}>
                <img src={d.image} alt={d.title} loading="lazy" />
                <div className="decor-card-label"><span>{d.title}</span></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BIHAR CULTURE SECTION */}
      <section className="section bihar-culture">
        <div className="bihar-culture-overlay" />
        <MithilaBorder variant="gold" />
        <div className="container bihar-culture-content">
          <span className="bihar-hindi-tag reveal">बिहार की शान, बिहार की जान</span>
          <SectionTitle
            eyebrow="Rooted In Tradition"
            title="Celebrations With The Spirit Of Bihar"
            subtitle="What makes Bharti Events different — a genuine connection to the culture we celebrate."
            align="center"
          />
          <div className="bihar-grid">
            <div className="bihar-point reveal">
              <h4>Traditional Bihar Weddings</h4>
              <p>Rituals honoured with authenticity, from Haldi to Kohbar, styled with modern elegance.</p>
            </div>
            <div className="bihar-point reveal">
              <h4>Mithila-Inspired Décor</h4>
              <p>Subtle motifs and colour palettes inspired by the timeless art of Mithila.</p>
            </div>
            <div className="bihar-point reveal">
              <h4>Madhubani Artistic Elements</h4>
              <p>Refined artistic touches that celebrate Bihar's rich painting heritage.</p>
            </div>
            <div className="bihar-point reveal">
              <h4>Traditional Floral Decoration</h4>
              <p>Marigold, jasmine and fresh regional blooms styled with a premium finish.</p>
            </div>
            <div className="bihar-point reveal">
              <h4>Local Cultural Celebrations</h4>
              <p>Chhath Puja, Holi and community events planned with genuine cultural care.</p>
            </div>
          </div>
          <p className="bihar-closing-line reveal">जहाँ परंपरा मिले आधुनिकता से — यही है Bharti Events का वादा।</p>
        </div>
        <MithilaBorder variant="gold" flip />
      </section>

      {/* PACKAGES PREVIEW */}
      <section className="section section-alt packages-preview">
        <div className="container">
          <SectionTitle
            eyebrow="Our Packages"
            title="Simple Packages For Every Celebration"
            subtitle="Pick a package close to what you need — we'll customise everything together and send you a clear, easy quote."
          />
          <div className="packages-grid">
            {packages.map((pkg, i) => (
              <PackageCard pkg={pkg} index={i} key={pkg.id} />
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials-section">
        <div className="container">
          <SectionTitle
            eyebrow="Client Love"
            title="What Our Clients Say"
            subtitle="Real experiences from families and businesses we've had the honour of celebrating with."
          />
          <Testimonial />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="container final-cta-content reveal">
          <h2>Let&rsquo;s Plan Something Beautiful Together</h2>
          <p>Tell us about your celebration and let Bharti Events bring it to life.</p>
          <Button to="/booking" variant="primary" icon={FaArrowRight}>Get Your Free Quote</Button>
        </div>
      </section>
    </div>
  )
}

export default Home
