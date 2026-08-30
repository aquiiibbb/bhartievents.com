import React, { useState } from 'react'
import { FaTimes, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa'
import galleryItems from '../../data/gallery'
import './Gallery.css'

const categories = ['All', 'Wedding', 'Haldi', 'Mehndi', 'Reception', 'Birthday', 'Corporate', 'Decoration']

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const showNext = () => setLightboxIndex((i) => (i + 1) % filtered.length)
  const showPrev = () => setLightboxIndex((i) => (i - 1 + filtered.length) % filtered.length)

  return (
    <div className="gallery-wrapper">
      <div className="gallery-filters reveal">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filtered.map((item, index) => (
          <div className="gallery-item reveal" key={item.id} onClick={() => openLightbox(index)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <div className="gallery-item-overlay">
              <FaSearchPlus />
              <span>{item.title}</span>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}><FaTimes /></button>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); showPrev(); }}>
            <FaChevronLeft />
          </button>
          <div className="lightbox-image" onClick={(e) => e.stopPropagation()}>
            <img src={filtered[lightboxIndex].image} alt={filtered[lightboxIndex].title} />
            <p>{filtered[lightboxIndex].title}</p>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); showNext(); }}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}

export default Gallery
