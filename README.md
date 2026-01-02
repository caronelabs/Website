# Carone Labs Website

Official website for Carone Labs, LLC - [caronelabs.com](https://caronelabs.com)

## Tech Stack

- **Framework**: Next.js 14 (React)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Hosting**: Cloudflare Pages (recommended)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
```

The static export will be in the `out/` directory.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with header/footer
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles & Tailwind
│   ├── about/
│   │   └── page.tsx    # About page
│   ├── services/
│   │   └── page.tsx    # Services page (links to render.com)
│   └── contact/
│       └── page.tsx    # Contact form page
├── components/
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
public/
├── logo.png            # Add your logo here
└── favicon.ico         # Add favicon here
```

## Configuration

### Brand Colors

Colors are configured in `tailwind.config.ts`:

- **Orange**: `rgb(244, 115, 33)` - Primary accent
- **Green**: `rgb(0, 80, 48)` - Secondary color
- **Dark**: `rgb(18, 42, 38)` - Background

### Adding Services

Edit `src/app/services/page.tsx` to add your render.com service links:

```tsx
const services = [
  {
    id: "my-service",
    title: "My Service",
    description: "Service description...",
    href: "https://my-service.onrender.com",
    status: "active", // active, beta, coming-soon
  },
];
```

## Deployment

### Cloudflare Pages

1. Connect your GitHub repository to Cloudflare Pages
2. Set build command: `npm run build`
3. Set output directory: `out`
4. Deploy

### DNS Setup (Cloudflare)

1. Transfer domain from GoDaddy to Cloudflare (or just use Cloudflare DNS)
2. Add CNAME record pointing to your Cloudflare Pages URL
3. Enable proxying for SSL/CDN benefits

## Adding Assets

1. Add `logo.png` to `public/` directory
2. Generate favicon at https://favicon.io/ and add `favicon.ico`
3. (Optional) Add `og-image.png` for social media previews

## Contact Form

The contact form currently logs to console. To make it functional:

1. **Formspree**: Add form action to `https://formspree.io/f/{your-id}`
2. **Custom API**: Create API route in `src/app/api/contact/route.ts`
3. **Cloudflare Workers**: Set up a serverless function

## License

Private - All rights reserved Carone Labs, LLC
