import React, { useState } from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import Button from '../../components/Button/Button'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Booking.css'
const initialState = {
  fullName: '', mobile: '', email: '', eventType: '', eventDate: '',
  eventLocation: '', guests: '', decoration: 'Yes', photography: 'Yes',
  catering: 'Yes', dj: 'Yes', budget: '', requirements: '',
}

const Booking = () => {
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
    <div className="booking-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Booking / Enquiry</span>
          <h1>Request A Quote</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Tell Us About Your Event"
            title="Booking & Enquiry Form"
            subtitle="Share your event details and our team will get back to you with a customised plan and quote."
          />

          <div className="booking-form-wrap reveal">
            {submitted ? (
              <div className="success-message">
                <FaCheckCircle />
                <h3>Enquiry Submitted Successfully!</h3>
                <p>
                  Thank you for choosing Bharti Events. Our team will reach out to you within
                  24 hours to discuss your celebration in detail.
                </p>
                <Button variant="primary" onClick={() => setSubmitted(false)}>Submit Another Enquiry</Button>
              </div>
            ) : (
              <form className="booking-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" />
                  </div>
                  <div className="form-group">
                    <label>Mobile Number</label>
                    <input type="tel" name="mobile" value={form.mobile} onChange={handleChange} required placeholder="+91" />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Event Type</label>
                    <select name="eventType" value={form.eventType} onChange={handleChange} required>
                      <option value="">Select event type</option>
                      <option>Wedding</option>
                      <option>Engagement</option>
                      <option>Birthday Party</option>
                      <option>Corporate Event</option>
                      <option>Religious Function</option>
                      <option>Cultural Event</option>
                      <option>Reception</option>
                      <option>Baby Shower</option>
                      <option>Anniversary</option>
                      <option>College/School Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Event Date</label>
                    <input type="date" name="eventDate" value={form.eventDate} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Event Location</label>
                    <input type="text" name="eventLocation" value={form.eventLocation} onChange={handleChange} placeholder="City / venue" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Number Of Guests</label>
                    <input type="number" name="guests" value={form.guests} onChange={handleChange} placeholder="e.g. 300" />
                  </div>
                  <div className="form-group">
                    <label>Estimated Budget</label>
                    <input type="text" name="budget" value={form.budget} onChange={handleChange} placeholder="Approx budget" />
                  </div>
                </div>

                <div className="form-row form-row-4">
                  <div className="form-group">
                    <label>Decoration Required</label>
                    <select name="decoration" value={form.decoration} onChange={handleChange}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Photography Required</label>
                    <select name="photography" value={form.photography} onChange={handleChange}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Catering Required</label>
                    <select name="catering" value={form.catering} onChange={handleChange}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>DJ / Sound Required</label>
                    <select name="dj" value={form.dj} onChange={handleChange}>
                      <option>Yes</option>
                      <option>No</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Additional Requirements</label>
                  <textarea name="requirements" rows="4" value={form.requirements} onChange={handleChange} placeholder="Tell us more about your event, theme or special requests..."></textarea>
                </div>

                <Button type="submit" variant="primary">Request A Quote</Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking
