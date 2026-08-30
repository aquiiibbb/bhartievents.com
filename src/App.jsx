import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import useScrollToTop from './hooks/useScrollToTop'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import Services from './pages/Services/Services'
import Weddings from './pages/Weddings/Weddings'
import Decorations from './pages/Decorations/Decorations'
import Gallery from './pages/Gallery/Gallery'
import Packages from './pages/Packages/Packages'
import Testimonials from './pages/Testimonials/Testimonials'
import Contact from './pages/Contact/Contact'
import Booking from './pages/Booking/Booking'

function App() {
  useScrollToTop()

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/weddings" element={<Weddings />} />
          <Route path="/decorations" element={<Decorations />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}

export default App
