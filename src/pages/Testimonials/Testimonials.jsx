import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Testimonial from '../../components/Testimonial/Testimonial'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Testimonials.css'

const TestimonialsPage = () => {
  useScrollReveal()
  return (
    <div className="testimonials-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Client Stories</span>
          <h1>Testimonials</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Client Love"
            title="What Our Clients Say"
            subtitle="Real feedback from the families and businesses we've celebrated with across Bihar."
          />
          <Testimonial />
        </div>
      </section>
    </div>
  )
}

export default TestimonialsPage
