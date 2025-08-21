# Shivansh Rastogi - Portfolio

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

🌐 **Live Site**: [https://shivanshrastogi.vercel.app](https://shivanshrastogi.vercel.app)

## 🚀 Features

- ⚡ **Next.js 14** with App Router
- 🎨 **Modern UI** with Tailwind CSS and Framer Motion
- 📱 **Responsive Design** that works on all devices
- 🔍 **SEO Optimized** with meta tags, sitemap, and structured data
- 🌓 **Dark Theme** with gradient backgrounds
- 📊 **Analytics Ready** (Google Analytics 4)
- 🚀 **PWA Support** with app manifest
- ⚡ **Performance Optimized** with Next.js features

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── not-found.tsx      # 404 page
│   ├── robots.ts          # Robots.txt
│   ├── sitemap.ts         # Sitemap.xml
│   └── manifest.ts        # PWA manifest
├── components/            # React components
├── lib/                   # Utility functions
├── src/constants/         # App constants
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/shivanshrastogi12/presonal-portfolio.git
cd presonal-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

This project can be deployed on any platform that supports Next.js:

### Popular Deployment Options:

- **Vercel**: Zero-config deployment with automatic CI/CD
- **Netlify**: Easy deployment with form handling
- **Railway**: Simple deployment with database support
- **Digital Ocean**: App Platform with custom domains
- **AWS**: Amplify or EC2 for more control

### General Deployment Steps:

1. Build the project: `npm run build`
2. Set environment variables on your platform
3. Deploy the built application
4. Configure custom domain (optional)

### Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id (optional)
```

## 📊 SEO Features

- ✅ Meta tags and Open Graph
- ✅ Structured data (JSON-LD)
- ✅ Dynamic sitemap generation
- ✅ Robots.txt configuration
- ✅ Twitter Card support
- ✅ Performance optimized

## 🎨 Customization

1. Update personal information in `src/constants/personal.ts`
2. Modify SEO settings in `src/constants/seo.ts`
3. Add your projects in `src/constants/projects.ts`
4. Update experience in `src/constants/experience.ts`

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

**Shivansh Rastogi**
- Email: shivansh.rastogi1204@gmail.com
- LinkedIn: [shivansh-rastogi12](https://www.linkedin.com/in/shivansh-rastogi12/)
- GitHub: [shivanshrastogi12](https://github.com/shivanshrastogi12)

---

⭐ If you like this project, please give it a star on GitHub!
