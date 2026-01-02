# JLS Reglazing Website

Professional bathtub and kitchen reglazing services website for JL Bath Renovation Services.

## Project Overview

This is a production-grade website for a bathtub and kitchen reglazing business serving Southern California (San Bernardino, Riverside, Hemet, and Los Angeles counties). The site uses the existing FormHub backend infrastructure for form submissions while maintaining its own frontend identity.

## Tech Stack

- **Frontend**: Vite + React + TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Backend**: Supabase (shared with FormHub)
- **Form Processing**: n8n workflow automation
- **Deployment**: Vercel

## Features

### SEO Optimization
- **Dual keyword targeting**: Both "reglazing" (primary) and "refinishing" (secondary)
- JSON-LD schema markup (LocalBusiness, Service)
- County-specific pages for local SEO
- Optimized meta tags and Open Graph tags
- Sitemap generation ready

### Pages
- **Home**: Hero section, services preview, service areas, CTA
- **Services**: Complete service descriptions with features
- **Process**: 4-step reglazing process showcase
- **About**: Jorge's story, credentials, why choose us
- **Gallery**: Before/After showcase (ready for media assets)
- **Contact**: Contact form (integration pending)
- **County Pages**: San Bernardino, Riverside, Hemet, Los Angeles

### Design
- Evercraft.pro-inspired aesthetic
- Navy/white color palette
- Custom fonts: Orbitron (headings), Jost (body), Marcellus (secondary)
- Physics-based Framer Motion animations
- Fully responsive design
- Zero Cumulative Layout Shift (CLS)

## Getting Started

### Prerequisites
- Node.js 24+ (via nvm)
- Access to FormHub Supabase database

### Installation

1. Install dependencies:
```bash
npm install
```

2. Environment variables are already configured in `.env` (shared with FormHub)

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## Project Structure

```
JLS-Reglazing/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── atoms/        # Basic components (to be added)
│   │   ├── molecules/    # Composite components (to be added)
│   │   ├── organisms/    # Navigation, Footer
│   │   └── templates/    # Layout
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Process.tsx
│   │   ├── About.tsx
│   │   ├── Gallery.tsx
│   │   ├── Contact.tsx
│   │   └── counties/     # County-specific pages
│   ├── lib/
│   │   ├── supabase.ts   # Supabase client
│   │   └── seo.ts        # Schema generation
│   └── App.tsx           # Main app with routing
├── .env                  # Environment variables (shared with FormHub)
└── package.json
```

## Backend Integration

This website shares the FormHub backend:
- **Database**: Supabase (same instance as FormHub)
- **Form Submissions**: Stored in `form_submissions` table
- **Workflows**: n8n automation for AI parsing and responses
- **Notifications**: Slack webhooks and email (Gmail SMTP)

## Next Steps

### Immediate Priorities
1. **Download and optimize media assets** from Google Drive
   - Link: https://drive.google.com/drive/folders/14NNk6lrSe3AUdNRZgV4zDCzDyLayPmEz?usp=sharing
   - Convert to WebP/AVIF
   - Add to Gallery page
   - Update hero sections with real images

2. **Integrate Contact Form**
   - Copy ContactForm component from FormHub
   - Connect to existing API endpoint
   - Test spam protection

3. **Add Schema Markup**
   - Implement LocalBusiness schema on homepage
   - Add Service schema to services page
   - County-specific schemas for each location page

4. **SEO Enhancements**
   - Generate dynamic sitemap
   - Add robots.txt
   - Optimize images with lazy loading
   - Implement critical CSS

5. **Deploy to Vercel**
   - Connect GitHub repository
   - Configure environment variables
   - Set up custom domain (jlsreglazing.com)
   - Test production build

## Business Information

- **Company**: JL Bath Renovation Services
- **Owner**: Jorge Saldana
- **Experience**: 20+ years
- **Units Serviced**: 4,000+
- **Warranty**: 2 years
- **Status**: Hispanic-owned, Licensed & Insured

### Contact
- **Email**: jorge@jlsreglazing.com
- **Phone**: (XXX) XXX-XXXX
- **Service Areas**: San Bernardino, Riverside, Hemet, Los Angeles counties

## Services Offered

- Bathtub reglazing & refinishing
- Kitchen countertop reglazing
- Kitchen sink refinishing
- Bath vanity restoration
- Crack and chip repair (all sizes)
- Bathtub enclosure refinishing
- Cut-out repairs with fiberglass patches

## Development Notes

- Uses Tailwind CSS v3 (downgraded from v4 for compatibility)
- Framer Motion for spring physics animations
- Type-safe imports required (`type ReactNode`)
- All routes configured in `src/App.tsx`
- SEO utilities in `src/lib/seo.ts`

## License

Proprietary - JL Bath Renovation Services

test
test on read me file