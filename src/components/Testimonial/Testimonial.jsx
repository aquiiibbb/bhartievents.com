import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import testimonials from '../../data/testimonials'
import 'swiper/css'
import 'swiper/css/pagination'
import './Testimonial.css'

const Testimonial = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={1}
      spaceBetween={30}
      loop
      autoplay={{ delay: 4500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 },
      }}
      className="testimonial-swiper"
    >
      {testimonials.map((t) => (
        <SwiperSlide key={t.id}>
          <div className="testimonial-card">
            <FaQuoteLeft className="quote-icon" />
            <div className="testimonial-rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar key={i} className={i < t.rating ? 'star-filled' : 'star-empty'} />
              ))}
            </div>
            <p className="testimonial-review">{t.review}</p>
            <div className="testimonial-author">
              <span className="author-avatar">{t.name.charAt(0)}</span>
              <div>
                <h5>{t.name}</h5>
                <span>{t.event} &middot; {t.location}</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Testimonial
