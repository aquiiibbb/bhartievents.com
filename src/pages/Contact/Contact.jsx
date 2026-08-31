import React, { useState } from 'react'
import { FaPhoneAlt, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaCheckCircle } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Contact.css'

const initialState = {
  name: '',
  phone: '',
  email: '',
  eventType: '',
  eventDate: '',
  location: '',
  guestCount: '',
  budget: '',
  message: '',
}

const Contact = () => {
  useScrollReveal()
  const [form, setForm] = useState(initialState)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialState)
  }

  return (
    <div className="contact-page">
      <div
        className="page-banner"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Get In Touch</span>
          <h1>Contact Bharti Events</h1>
        </div>
      </div>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-info reveal">
            <span className="eyebrow">Reach Out</span>
            <h2>Let's Start Planning Your Celebration</h2>
            <p>
              Have a question or ready to book? Reach out to our team and we'll get back to
              you within 24 hours with everything you need.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <FaPhoneAlt />
                <div>
                  <h5>Call Us</h5>
                  <span>+91 8969956612</span>
                </div>
              </div>
              <div className="contact-info-item">
                <FaWhatsapp />
                <div>
                  <h5>WhatsApp</h5>
                  <span>+91 8969956612</span>
                </div>
              </div>
              <div className="contact-info-item">
                <FaEnvelope />
                <div>
                  <h5>Email</h5>
                  <span>hello@bhartievents.in</span>
                </div>
              </div>
              <div className="contact-info-item">
                <FaMapMarkerAlt />
                <div>
                  <h5>Location</h5>
                  <span>Bhagwanpur Parsauni Kishun East Champaran 845416, Bihar</span>
                </div>
              </div>
            </div>

            <div className="contact-map">
              <iframe
                title="Bharti Events Location"
                src="https://maps.google.com/maps?q=Bhagwanpur+Parsauni+Kishun+East+Champaran+845416+Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="contact-form-wrap reveal">
            {submitted ? (
              <div className="success-message">
                <FaCheckCircle />
                <h3>Thank You!</h3>
                <p>Your enquiry has been received. Our team will contact you shortly.</p>
                <Button variant="primary" onClick={() => setSubmitted(false)}>
                  Send Another Enquiry
                </Button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 8969956612"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select event type</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Birthday Party</option>
                      <option>Corporate Event</option>
                      <option>Religious Function</option>
                      <option>Reception</option>
                      <option>Baby Shower</option>
                      <option>Anniversary</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Event Date</label>
                    <input
                      type="date"
                      name="eventDate"
                      value={form.eventDate}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City / venue"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Guest Count</label>
                    <input
                      type="number"
                      name="guestCount"
                      value={form.guestCount}
                      onChange={handleChange}
                      placeholder="e.g. 200"
                    />
                  </div>
                  <div className="form-group">
                    <label>Budget</label>
                    <input
                      type="text"
                      name="budget"
                      value={form.budget}
                      onChange={handleChange}
                      placeholder="Approx budget"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event..."
                  ></textarea>
                </div>
                <Button type="submit" variant="primary">
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact