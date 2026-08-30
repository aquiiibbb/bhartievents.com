import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ children, to, href, onClick, variant = 'primary', type = 'button', icon: Icon }) => {
  const className = `btn btn-${variant}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children} {Icon && <Icon />}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children} {Icon && <Icon />}
      </a>
    )
  }

  return (
    <button type={type} className={className} onClick={onClick}>
      {children} {Icon && <Icon />}
    </button>
  )
}

export default Button
