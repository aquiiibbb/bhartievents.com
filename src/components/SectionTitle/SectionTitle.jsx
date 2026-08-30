import React from 'react'
import './SectionTitle.css'

const SectionTitle = ({ eyebrow, title, subtitle, align = 'center' }) => {
  return (
    <div className={`section-title section-title-${align} reveal`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  )
}

export default SectionTitle
