# LUMI Landing Page

A premium landing page for LUMI, the AI fashion companion inside the SIMPLARA ecosystem.

## Features

- ✨ Premium fashion-tech design
- 🎨 Custom color palette with soft luxury feeling
- 📱 Fully responsive (mobile-first)
- ⚡ Built with Next.js 15, TypeScript, and Tailwind CSS
- 🎭 Smooth animations and micro-interactions
- 🎯 12 comprehensive sections covering LUMI's story
- 📋 Waitlist form integration
- ❓ Interactive FAQ accordion

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── ui/                 # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Container.tsx
│   │   └── Section.tsx
│   └── sections/           # Landing page sections
│       ├── Hero.tsx
│       ├── WhoIsLumi.tsx
│       ├── WhyLumiExists.tsx
│       ├── WhereLumiLives.tsx
│       ├── ImproveLumiLife.tsx
│       ├── OutfitSelection.tsx
│       ├── OutfitEvaluation.tsx
│       ├── FashionBattles.tsx
│       ├── NotPayToWin.tsx
│       ├── MediaCharacter.tsx
│       ├── Waitlist.tsx
│       ├── FAQ.tsx
│       └── Footer.tsx
└── public/
    └── assets/
        └── lumi1.png       # LUMI character image
```

## Design System

### Color Palette

- **Cream**: `#fffaf6`, `#efe6dd`, `#d7cabd` (Background, soft tones)
- **Charcoal**: `#2b2623`, `#6b625d` (Text, dark accents)
- **Terracotta**: `#a86e61` (Accent color)

### Typography

- Display: 72px - 48px (Headlines)
- Heading: 40px - 20px (Section titles)
- Body: 18px - 16px (Content)
- Small: 14px (Labels, captions)

### Components

- **Buttons**: Primary, Secondary, Tertiary variants
- **Cards**: Premium rounded cards with hover effects
- **Sections**: Consistent padding and spacing
- **Animations**: Fade-in, slide-up, scale-in effects

## Landing Page Sections

1. **Hero** - Introduction to LUMI with CTAs
2. **Who is LUMI** - Emotional states and character explanation
3. **Why LUMI Exists** - Value proposition and daily scenarios
4. **Where LUMI Lives** - Room evolution stages
5. **How to Improve LUMI's Life** - Game loop and Lumens system
6. **Outfit Selection** - AI-powered outfit suggestions
7. **Outfit Evaluation** - Private feedback system
8. **Fashion Battles** - Competitive mechanics
9. **Not Pay-to-Win** - Fairness explanation
10. **Media Character** - Social media presence
11. **Waitlist** - Early access signup form
12. **FAQ** - Common questions and answers

## Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your Git repository to Vercel for automatic deployments.

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Customization

### Update Colors

Edit `tailwind.config.ts` to modify the color palette:

```typescript
colors: {
  cream: { ... },
  charcoal: { ... },
  terracotta: { ... },
}
```

### Add Analytics

Update `app/layout.tsx` to add analytics scripts (Google Analytics, Meta Pixel, etc.)

### Form Integration

Update `components/sections/Waitlist.tsx` to integrate with your CRM or email service.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Proprietary - SIMPLARA

## Contact

For questions or support, contact: hello@simplara.com
