import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import './ServiceCard.css'

const ServiceCard = ({ service, index = 0 }) => {
  const { title, description, image, icon: Icon } = service
  return (
    <div className="service-card reveal" style={{ transitionDelay: `${(index % 3) * 0.1}s` }}>
      <div className="service-card-image">
        <img src={image} alt={title} loading="lazy" />
        <div className="service-card-icon"><Icon /></div>
      </div>
      <div className="service-card-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to="/services" className="service-card-link">
          View Details <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default ServiceCard
