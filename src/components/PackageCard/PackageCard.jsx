import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import Button from '../Button/Button'
import './PackageCard.css'

const PackageCard = ({ pkg, index = 0 }) => {
  const { name, tag, features, highlighted } = pkg
  return (
    <div className={`package-card reveal ${highlighted ? 'package-highlight' : ''}`} style={{ transitionDelay: `${index * 0.1}s` }}>
      {tag && <span className="package-tag">{tag}</span>}
      <h3>{name}</h3>
      <ul className="package-features">
        {features.map((f, i) => (
          <li key={i}><FaCheckCircle /> {f}</li>
        ))}
      </ul>
      <Button to="/booking" variant={highlighted ? 'primary' : 'dark-outline'}>Get Quote</Button>
    </div>
  )
}

export default PackageCard
