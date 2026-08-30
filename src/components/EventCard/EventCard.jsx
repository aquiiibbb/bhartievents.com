import React from 'react'
import './EventCard.css'

const EventCard = ({ title, image, description, index = 0 }) => {
  return (
    <div className="event-card reveal" style={{ transitionDelay: `${(index % 4) * 0.08}s` }}>
      <div className="event-card-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="event-card-overlay">
          <h4>{title}</h4>
          {description && <p>{description}</p>}
        </div>
      </div>
    </div>
  )
}

export default EventCard
