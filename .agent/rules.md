# Term5 Website - Agent Rules

## Project Overview

**Term5** is a German-language website selling EndoTherm® heating additive products, competing with hansewatt.de. The design follows an Airbnb-inspired aesthetic with modern, clean, and premium UI/UX.

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Calendar Integration**: Cal.com
- **Deployment**: Vercel

## Design Guidelines

### Design Philosophy
- **Airbnb-style aesthetic**: Clean, spacious, modern
- **Premium feel**: High-quality imagery, subtle animations
- **German language**: All content in German
- **Conversion-focused**: Clear CTAs, trust signals, social proof

### Color Palette
```css
/* Primary Colors */
--primary-green: #22c55e;        /* Eco-friendly accent */
--primary-dark: #1a1a2e;         /* Dark backgrounds */
--primary-light: #ffffff;        /* Light backgrounds */

/* Supporting Colors */
--accent-blue: #3b82f6;          /* Links, interactive elements */
--accent-orange: #f97316;        /* CTAs, warnings */
--text-primary: #1f2937;         /* Main text */
--text-secondary: #6b7280;       /* Secondary text */
--text-muted: #9ca3af;           /* Muted text */

/* Background Colors */
--bg-gradient-start: #f8fafc;
--bg-gradient-end: #e2e8f0;
--bg-card: #ffffff;
--bg-dark: #0f172a;
```

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large, impactful
- **Body**: Regular, readable, 16-18px base
- **German text considerations**: Longer words, proper hyphenation

### Spacing & Layout
- Generous whitespace (Airbnb-style)
- Max container width: 1280px
- Section padding: 80-120px vertical
- Grid system: 12-column responsive

### Animations
- Subtle fade-in on scroll
- Smooth hover transitions (0.3s ease)
- Micro-interactions on buttons
- No overwhelming animations

## Component Architecture

### Layout Components
1. **Header** - Sticky navigation, logo, CTA button
2. **Footer** - Links, contact info, legal

### Page Sections (in order)
1. **Hero** - Main headline, subheadline, CTA, hero image/illustration
2. **Problem** - Pain points customers face
3. **Solution** - How EndoTherm® solves the problems
4. **HowItWorks** - Step-by-step process
5. **Benefits** - Key advantages grid
6. **Statistics** - Numbers and achievements
7. **Testimonials** - Customer reviews (carousel)
8. **Pricing** - Investment and ROI calculator
9. **FAQ** - Frequently asked questions (accordion)
10. **Contact** - Contact form + Cal.com calendar embed
11. **Newsletter** - Email signup

### UI Components
- Button (primary, secondary, outline variants)
- Card (feature cards, testimonial cards)
- Badge (trust badges, eco labels)
- Input fields (form elements)
- Accordion (FAQ)
- Modal (popups)
- Carousel (testimonials)
- Counter (animated statistics)

## Cal.com Integration

- Embed Cal.com booking widget in Contact section
- Use Cal.com embed API
- Booking type: Consultation/Beratungstermin
- Duration: 30 minutes default

## SEO Requirements

- German meta tags and descriptions
- Structured data (LocalBusiness, Product)
- Alt text for all images
- Semantic HTML5 elements
- Fast loading (Core Web Vitals optimized)

## Emotional Selling Strategy

> **CRITICAL**: People don't care about saving emissions – they want to SAVE MONEY. 
> Lead with fear of rising costs, urgency, and financial relief. Climate is a secondary benefit, never the headline.

### Core Emotional Triggers

1. **FEAR** – Rising heating costs are out of control
   - "Heizkosten explodieren – und es wird nur schlimmer"
   - "Jede Abrechnung ein Schock?"
   - "Die nächste Nebenkostenabrechnung kommt bestimmt"

2. **PAIN** – Money is being wasted every day
   - "Jeden Tag verbrennen Sie bares Geld"
   - "Ihr Geld geht buchstäblich in Rauch auf"
   - "Was könnten Sie mit 3.000€ mehr im Jahr tun?"

3. **URGENCY** – Act now before winter/next heating season
   - "Jetzt handeln, bevor die nächste Heizperiode beginnt"
   - "Jeden Tag ohne Lösung = verlorenes Geld"
   - "Die Preise steigen weiter – Ihre Rechnung auch"

4. **RELIEF** – We have the solution
   - "Endlich aufatmen bei der Heizkostenabrechnung"
   - "Sparen Sie sofort – ohne teure Sanierung"
   - "Mehr Geld in der Tasche, gleiche Wärme"

5. **TRUST** – Proven, safe, simple
   - "Bewährt in tausenden Gebäuden"
   - "Amortisiert in 12-24 Monaten – danach nur noch Gewinn"
   - "10+ Jahre Wirkung – einmal investieren, jahrelang profitieren"

### Key Messages (Priority Order)

1. **💰 GELD SPAREN ist #1** – "Bis zu 15% weniger Heizkosten"
2. **😰 ANGST ansprechen** – "Steigende Energiekosten stoppen"
3. **⏰ DRINGLICHKEIT erzeugen** – "Jetzt handeln, sofort sparen"
4. **✅ EINFACHHEIT betonen** – "Keine Umbauarbeiten, keine Störung"
5. **🎁 FÖRDERUNG erwähnen** – "15% BAFA-Zuschuss sichern"

### Headline Formulas

- "Heizkosten runter. Sofort. Ohne Umbau."
- "Sparen Sie bis zu 15% Heizkosten – ab morgen."
- "Ihre Heizkosten steigen? Wir stoppen das."
- "Nie wieder Schock bei der Heizkostenabrechnung."
- "Was, wenn Sie 3.000€ im Jahr sparen könnten?"

### Words TO USE (German)
- Sparen, Geld, Kosten senken, sofort, einfach, ohne Umbau
- Heizkosten, Nebenkostenabrechnung, Geldbeutel, Tasche
- Garantiert, bewährt, sicher, schnell, jetzt

### Words to AVOID
- Klimaschutz (as main message)
- CO₂-Reduktion (as main message)
- Umwelt, nachhaltig, grün (as headlines)
- Ökologisch (unless secondary)

> **Note**: Environmental benefits can be mentioned as a "nice bonus" or secondary point, 
> never as the primary selling argument. Example: "...und Sie tun nebenbei auch noch etwas Gutes für die Umwelt."

### Trust Signals (Money-Focused)
- "Über X Euro eingespart" (customer testimonials with € amounts)
- Concrete ROI examples with real numbers
- BAFA funding (15% = free money from government)
- Amortisation calculator
- "Geld-zurück" if applicable
- Case studies with exact savings figures

## File Structure
```
term5/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── fonts/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Problem.tsx
│   │   ├── Solution.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Benefits.tsx
│   │   ├── Statistics.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Contact.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Badge.tsx
│       ├── Input.tsx
│       ├── Accordion.tsx
│       └── Carousel.tsx
├── lib/
│   └── utils.ts
├── public/
│   └── images/
└── .agent/
    ├── rules.md
    ├── product-info.md
    └── workflows/
```

## Development Workflow

1. Set up Next.js project with TypeScript
2. Configure Tailwind CSS
3. Create layout components (Header, Footer)
4. Build UI components
5. Create page sections top-to-bottom
6. Integrate Cal.com embed
7. Add animations and polish
8. Optimize for SEO and performance
9. Deploy to Vercel

## Reference Websites

- **Competitor**: [hansewatt.de](https://hansewatt.de/)
- **Product Source**: [EndoTec Solutions](https://endotec-solutions.de/index.php/endotherm-r)
- **Company**: [Klimaschutz Einfach](https://klimaschutz-einfach.de/)

## Notes

- Always reference `/Users/ezram/Desktop/N5/term5/.agent/product-info.md` for product details
- Keep German text professional and formal (Sie-form)
- Focus on B2B and B2C messaging
- Highlight BAFA funding opportunity prominently
