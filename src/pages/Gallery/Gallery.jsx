import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import GalleryComponent from '../../components/Gallery/Gallery'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Gallery.css'

const GalleryPage = () => {
  useScrollReveal()
  return (
    <div className="gallery-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Our Work</span>
          <h1>Gallery</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Moments We've Created"
            title="A Glimpse Into Our Celebrations"
            subtitle="Browse through our recent weddings, décor and events across Bihar."
          />
          <GalleryComponent />
        </div>
      </section>
    </div>
  )
}

export default GalleryPage
