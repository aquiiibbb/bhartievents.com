import React from 'react'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import PackageCard from '../../components/PackageCard/PackageCard'
import Button from '../../components/Button/Button'
import packages from '../../data/packages'
import useScrollReveal from '../../hooks/useScrollReveal'
import MithilaBorder from '../../components/MithilaBorder/MithilaBorder'
import './Packages.css'

const Packages = () => {
  useScrollReveal()
  return (
    <div className="packages-page">
      <div
        className="page-banner"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=80')" }}
      >
        <MithilaBorder variant="gold" flip />
        <div className="page-banner-content">
          <span>Our Packages</span>
          <h1>Celebration Packages</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionTitle
            eyebrow="Simple & Transparent"
            title="Choose A Package That Fits Your Celebration"
            subtitle="Pick the package closest to your event, and we'll customise it together. No confusing price lists — just tell us your needs and we'll send you a clear quote."
          />
          <div className="packages-full-grid">
            {packages.map((pkg, i) => (
              <PackageCard pkg={pkg} index={i} key={pkg.id} />
            ))}
          </div>
          <div className="packages-help reveal">
            <h3>Not sure which one to pick?</h3>
            <p>That's completely fine — most people aren't. Just tell us a little about your event and we'll recommend the right option for you, free of cost.</p>
            <Button to="/booking" variant="primary">Talk To Our Team</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Packages
