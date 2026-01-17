# 🍵 Vanankam - Premium Tea Franchise Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-purple)](https://www.framer.com/motion/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> **"Who needs a राज when there is a चाय"** - Experience authentic Indian chai culture with Vanankam

A modern, responsive website for India's fastest-growing kulhad chai franchise, built with Next.js 14, TypeScript, and cutting-edge web technologies.

![Vanankam Preview](./public/images/preview.png)

## 🌟 Features

### ✨ Core Features
- **🍵 Authentic Experience**: Traditional kulhad chai served in eco-friendly clay cups
- **🏪 Franchise Network**: 500+ outlets across 26+ states and 6 countries
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ High Performance**: Built with Next.js 14 for optimal loading speeds
- **🎨 Modern UI**: Beautiful animations and micro-interactions
- **♿ Accessibility**: WCAG compliant with keyboard navigation support

### 🛠️ Technical Features
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for responsive styling
- **Framer Motion** for smooth animations
- **React Hook Form** with Zod validation
- **Radix UI** components for accessibility
- **SEO Optimized** with meta tags and structured data

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/vanankam.git
   cd vanankam
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
vanankam/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── globals.css        # Global styles
│   ├── about/             # About page
│   ├── menu/              # Menu page
│   ├── contact/           # Contact page
│   ├── franchise/         # Franchise page
│   └── api/               # API routes
├── components/            # Reusable components
│   ├── layout/            # Layout components
│   ├── home/              # Home page sections
│   └── ui/                # UI components
├── lib/                   # Utility functions and configs
├── hooks/                 # Custom React hooks
├── public/                # Static assets
│   └── images/            # Image assets
├── types/                 # TypeScript type definitions
└── styles/                # Additional styles
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run type-check   # Run TypeScript checks
npm run format       # Format code with Prettier

# Git Hooks
npm run prepare      # Set up Husky git hooks
```

## 🎨 Design System

### Colors
- **Primary**: `#2D3748` (Dark slate)
- **Accent**: `#F6C000` (Golden yellow)
- **Background**: Gradient from light blue to pink

### Typography
- **Headings**: Oswald (Google Fonts)
- **Body**: Poppins (Google Fonts)
- **Accent**: Playfair Display (Google Fonts)

### Components
- Responsive grid system
- Animated buttons with hover effects
- Card components with 3D transforms
- Form components with validation
- Modal and overlay components

## 📱 Pages & Features

### 🏠 Home Page
- Hero section with rotating background images
- Statistics showcase (500+ outlets, 26+ states)
- Menu highlights with interactive cards
- Franchise benefits section
- Customer testimonials carousel
- Newsletter subscription

### 📋 Menu Page
- Categorized menu items (Hot Beverages, Cold Beverages, Snacks)
- Interactive filtering
- Detailed item descriptions with pricing
- Bestseller badges

### 🏪 Franchise Page
- Investment models (Kiosk, Express Outlet, Café Format)
- ROI calculator
- Application form with validation
- Process timeline
- Success stories

### 📞 Contact Page
- Contact information with icons
- Contact form with validation
- Social media links
- Business hours

### 👥 About Page
- Company story and timeline
- Mission and vision
- Leadership team
- Core values

### 💼 Careers Page
- Job openings with detailed descriptions
- Benefits showcase
- Application process

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file with:

```env
# Add your environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
# Add other environment variables as needed
```

### Tailwind Configuration
Custom breakpoints and design tokens in `tailwind.config.ts`:

```typescript
screens: {
  'xs': '475px',
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The app can be deployed to any platform supporting Node.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes and test thoroughly
4. Run linting and type checking: `npm run lint && npm run type-check`
5. Commit your changes: `git commit -m 'Add your feature'`
6. Push to your branch: `git push origin feature/your-feature`
7. Create a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Design Inspiration**: Tealogy's modern franchise website design
- **Icons**: Lucide React for consistent iconography
- **Animations**: Framer Motion for smooth interactions
- **UI Components**: Radix UI for accessibility

## 📞 Support

- **Website**: [vanankam.com](https://vanankam.com)
- **Email**: info@vanankam.com
- **Phone**: +91-6269112500
- **Franchise**: franchise@vanankam.com

---

**Made with ❤️ by [Alok Yadav](https://github.com/aloky)**

*Join India's chai revolution with Vanankam - Where every sip tells a story!* 🍵