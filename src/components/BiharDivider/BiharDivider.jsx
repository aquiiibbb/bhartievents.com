import React from 'react'
import './BiharDivider.css'

// A hand-crafted, original decorative strip inspired by Mithila/Madhubani folk-art
// motifs (sun, fish, peacock, florals) — used as an elegant section divider that
// gives the site a distinct Bihar identity without looking cartoonish.
const BiharDivider = ({ flip = false }) => {
  return (
    <div className={`bihar-divider ${flip ? 'flip' : ''}`} aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="30" x2="1200" y2="30" stroke="var(--gold)" strokeWidth="1" strokeDasharray="2 10" />

        {/* Sun motif */}
        <g transform="translate(80,30)">
          <circle r="11" fill="none" stroke="var(--gold)" strokeWidth="2" />
          <circle r="4" fill="var(--gold)" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 * Math.PI) / 180
            const x1 = Math.cos(angle) * 14
            const y1 = Math.sin(angle) * 14
            const x2 = Math.cos(angle) * 19
            const y2 = Math.sin(angle) * 19
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--gold)" strokeWidth="1.5" />
          })}
        </g>

        {/* Fish motif (Mithila-style paisley eye) */}
        <g transform="translate(320,30)">
          <path d="M -20 0 C -10 -14, 14 -14, 22 0 C 14 14, -10 14, -20 0 Z" fill="none" stroke="var(--maroon)" strokeWidth="2" />
          <circle cx="10" cy="0" r="2.4" fill="var(--maroon)" />
          <path d="M -20 0 L -30 -7 M -20 0 L -30 7" stroke="var(--maroon)" strokeWidth="1.5" fill="none" />
        </g>

        {/* Peacock motif (stylised) */}
        <g transform="translate(600,28)">
          <circle cx="0" cy="0" r="5" fill="var(--maroon)" />
          <path d="M 0 -3 Q 5 -18 0 -30" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
          <path d="M 0 -3 Q -14 -14 -22 -26" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
          <path d="M 0 -3 Q 14 -14 22 -26" stroke="var(--gold)" strokeWidth="1.5" fill="none" />
          <circle cx="0" cy="-30" r="2.5" fill="var(--gold)" />
          <circle cx="-22" cy="-26" r="2.5" fill="var(--gold)" />
          <circle cx="22" cy="-26" r="2.5" fill="var(--gold)" />
          <path d="M 5 -2 Q 14 -2 16 6" stroke="var(--maroon)" strokeWidth="1.5" fill="none" />
        </g>

        {/* Floral motifs repeated */}
        {[160, 240, 440, 520, 700, 780, 900, 980, 1060, 1140].map((cx, i) => (
          <g key={i} transform={`translate(${cx},30)`}>
            <circle r="3" fill="var(--gold)" opacity="0.8" />
            <path d="M 0 -6 Q 4 0 0 6 Q -4 0 0 -6 Z" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.7" />
          </g>
        ))}
      </svg>
    </div>
  )
}

export default BiharDivider
