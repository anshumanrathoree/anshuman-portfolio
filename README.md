# Farhan Khan - Developer Portfolio

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean, minimal, and recruiter-friendly interface
- **Responsive Layout**: Mobile-first design that works on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Complete metadata and OpenGraph tags
- **Fast Performance**: Built with Next.js 15 and optimized for speed
- **Accessibility**: Following best practices for screen readers and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: next-themes
- **TypeScript**: Full type safety

## 📁 Project Structure

```
farhan-portfolio/
├── public/
│   └── resume.pdf          # Resume file for download
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and CSS variables
│   │   ├── layout.tsx      # Root layout with SEO metadata
│   │   └── page.tsx        # Main page combining all sections
│   └── components/
│       ├── ui/             # shadcn/ui components
│       ├── about.tsx       # About section with skills and certifications
│       ├── contact.tsx     # Contact form and social links
│       ├── footer.tsx      # Footer component
│       ├── hero.tsx        # Hero section with animations
│       ├── navbar.tsx      # Navigation with theme toggle
│       ├── projects.tsx    # Projects showcase
│       ├── theme-provider.tsx  # Theme context provider
│       └── theme-toggle.tsx    # Dark/light mode toggle
├── components.json         # shadcn/ui configuration
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🚀 Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Customization

### Personal Information
Update the following files with your information:
- `src/components/hero.tsx` - Name and tagline
- `src/components/about.tsx` - Biography and skills
- `src/components/contact.tsx` - Contact information
- `src/components/projects.tsx` - Your projects

### SEO Metadata
Update SEO information in `src/app/layout.tsx`:
- Title and description
- OpenGraph tags
- Twitter card information
- Keywords and author information

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push

### Manual Build
```bash
npm run build
npm start
```

---

**Built with ❤️ by Farhan Khan**

© 2025 Farhan Khan • Built with Next.js & Tailwind CSS
