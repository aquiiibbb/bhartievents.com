import React, { useId } from 'react'
import './MithilaBorder.css'

/**
 * An original, hand-drawn decorative border strip inspired by the geometric
 * folk-art motifs (sun, fish, lotus, triangle borders) traditionally seen in
 * Bihar's Mithila/Madhubani art — not a reproduction of any existing artwork.
 * variant: 'gold' (for dark backgrounds) | 'maroon' (for light backgrounds)
 */
const MithilaBorder = ({ variant = 'gold', flip = false }) => {
  const uid = useId().replace(/:/g, '')
  const patternId = `mithila-${uid}`

  return (
    <div className={`mithila-border mithila-${variant} ${flip ? 'mithila-flip' : ''}`} aria-hidden="true">
      <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 240 40" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id={patternId} width="40" height="40" patternUnits="userSpaceOnUse">
            {/* central sun motif */}
            <circle cx="20" cy="20" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.1" />
            <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
              <line x1="20" y1="10" x2="20" y2="13.5" />
              <line x1="20" y1="26.5" x2="20" y2="30" />
              <line x1="10" y1="20" x2="13.5" y2="20" />
              <line x1="26.5" y1="20" x2="30" y2="20" />
              <line x1="12.8" y1="12.8" x2="15.2" y2="15.2" />
              <line x1="24.8" y1="24.8" x2="27.2" y2="27.2" />
              <line x1="12.8" y1="27.2" x2="15.2" y2="24.8" />
              <line x1="24.8" y1="15.2" x2="27.2" y2="12.8" />
            </g>
            {/* small fish motif, alternating */}
            <path d="M2 34 Q6 30 10 34 Q6 36 2 34 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            <circle cx="3.4" cy="33.6" r="0.5" fill="currentColor" />
            {/* triangle border row */}
            <path d="M0 40 L4 34 L8 40 Z" fill="currentColor" opacity="0.55" />
            <path d="M16 40 L20 34 L24 40 Z" fill="currentColor" opacity="0.55" />
            <path d="M32 40 L36 34 L40 40 Z" fill="currentColor" opacity="0.55" />
          </pattern>
        </defs>
        <rect width="240" height="40" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

export default MithilaBorder
