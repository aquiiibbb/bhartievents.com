# Bharti Events

Premium event management & decoration website for **Bharti Events**, a Bihar-based event company.

**Tagline:** Har Khushi Ka Jashn, Bharti Events Ke Sang

## Tech Stack

- React 18 + Vite
- React Router DOM (routing)
- React Icons
- Swiper.js (testimonials slider)
- Plain CSS (Flexbox + Grid) — no Tailwind/Bootstrap/MUI/styled-components

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
  assets/            (static assets, if any)
  components/        Reusable UI components (each with its own .jsx + .css)
    Navbar/ Footer/ Hero/ SectionTitle/ ServiceCard/ EventCard/
    PackageCard/ Gallery/ Testimonial/ Button/ WhatsAppButton/
  pages/             One folder per route
    Home/ About/ Services/ Weddings/ Decorations/ Gallery/
    Packages/ Testimonials/ Contact/ Booking/
  data/              Content/data files (services, packages, gallery, etc.)
  hooks/             Custom hooks (scroll reveal, scroll-to-top)
  App.jsx            Route definitions
  main.jsx           App entry point
  index.css          Global design system (colors, typography, utilities)
```

## Pages / Routes

| Route          | Page                     |
|----------------|--------------------------|
| `/`            | Home                     |
| `/about`       | About Us                 |
| `/services`    | Services                 |
| `/weddings`    | Weddings                 |
| `/decorations` | Decorations              |
| `/gallery`     | Gallery (with lightbox)  |
| `/packages`    | Packages                 |
| `/testimonials`| Testimonials             |
| `/contact`     | Contact (enquiry form)   |
| `/booking`     | Booking / Enquiry form   |

## Notes

- Images are pulled from Unsplash via direct URLs — swap these for your own
  professional photography in `src/data/*.js` and inline `src` attributes
  before going live.
- The WhatsApp button and footer social links use placeholder numbers/URLs
  (`+91 99999 99999`, `hello@bhartievents.in`) — update these in
  `src/components/WhatsAppButton/WhatsAppButton.jsx` and
  `src/components/Footer/Footer.jsx`.
- The Contact/Booking forms currently show a success message on submit but
  do not send data anywhere — connect them to your backend, form service
  (e.g. Formspree), or email API as needed.
- Design system (colors, fonts, spacing) lives in `src/index.css` as CSS
  custom properties — edit `:root` to re-theme the whole site.
