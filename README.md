# Ganesh Gurav Photography — Premium Website

A modern, premium photography portfolio and booking website built with React, TypeScript, Tailwind CSS, and Framer Motion.

## 📸 Business Information

- **Business Name:** Ganesh Gurav Photography
- **Photographer:** Ganesh Gurav
- **Location:** Thergaon, Pimpri-Chinchwad, Maharashtra 411033
- **Phone:** +91 98900 79396
- **Instagram:** @ganesh_n_gurav
- **Google Rating:** 4.6⭐ (37 Reviews)
- **Hours:** Open 24 Hours
- **Specializations:** Wedding, Fashion, Events, Pre-Wedding, Cinematic Reels, Magazine Shoots
- **Founder & CEO:** BMF International Magazine
- **Maharashtra Icon Event Organiser**

## 🚀 Getting Started

### Installation
```bash
npm install
npm run dev
```

### Email Setup (Optional - to receive booking inquiries via email)
1. Go to [Web3Forms](https://web3forms.com/) and enter your email to get a free Access Key
2. Create a `.env` file:
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your-free-access-key-here
   ```
3. Restart the dev server. Now bookings will also email you!

**Note:** Even without email setup, all bookings are sent directly to your **WhatsApp** (+91 98900 79396) when clients submit the booking form.

## 📸 How to Replace Photos

### Option A: Replace Image Files Directly
All images are in the `public/images/` folder. Simply replace these files with your own photos:

| File | Description | Recommended Size |
|------|-------------|-----------------|
| `hero-bg.jpg` | Hero banner background | 1920×1080 (landscape) |
| `about-photo.jpg` | Your profile/about photo | 800×1000 (portrait) |
| `portfolio-1.jpg` through `portfolio-8.jpg` | Portfolio gallery images | Mix of 800×1000 (portrait) and 1200×800 (landscape) |

### Option B: Update URLs in Data
Edit `src/lib/data.ts` to change image paths or add more images:

```ts
export const portfolioImages = [
  { id: '1', src: '/images/your-photo.jpg', category: 'Wedding Photography', title: 'Your Title' },
  // Add more...
];
```

### Tips for Best Results
- Use `.webp` or compressed `.jpg` (keep files under 1MB)
- Mix portrait and landscape photos for a stunning masonry grid
- Use warm, rich tones to match the luxury dark aesthetic

## 📝 How to Update Content

### Change Text
- **Services:** Edit the `services` array in `src/lib/data.ts`
- **Testimonials:** Edit the `testimonials` array in `src/lib/data.ts`
- **Packages/Pricing:** Edit the `packages` array in `src/lib/data.ts`
- **FAQs:** Edit the `faqs` array in `src/lib/data.ts`
- **Stats:** Edit the `stats` array in `src/lib/data.ts`
- **Categories:** Edit the `categories` array in `src/lib/data.ts`

### Update Contact Info
Edit these files:
- `src/components/layout/Footer.tsx` — footer contact info
- `src/pages/Contact.tsx` — contact page info
- `src/components/layout/WhatsAppButton.tsx` — WhatsApp number
- `src/pages/Booking.tsx` — WhatsApp number in booking form
- `index.html` — page title and meta description

### Update Instagram Link
Search and replace `ganesh_n_gurav` with your new username across all files.

##  Adding More Portfolio Images

1. Add your image file to `public/images/`
2. Add entry in `src/lib/data.ts`:
   ```ts
   { id: '13', src: '/images/new-photo.jpg', category: 'Wedding Photography', title: 'Beautiful Wedding' }
   ```
3. Optionally add new categories to the `categories` array

##  Deployment

### Build
```bash
npm run build
```

### Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

### Deploy to Netlify
1. Run `npm run build`
2. Upload the `dist/` folder to Netlify

## 🔧 Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS 4
- React Router DOM
- Framer Motion
- React Hook Form + Zod
- Lucide React Icons

## 📱 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth Framer Motion animations
- ✅ Masonry portfolio gallery with lightbox
- ✅ Multi-step booking form with WhatsApp integration
- ✅ Floating WhatsApp chat button
- ✅ Services & pricing section
- ✅ Testimonial slider
- ✅ Instagram preview feed
- ✅ Google Maps embed
- ✅ FAQ accordion
- ✅ Scroll progress indicator
- ✅ Sticky transparent navbar with blur
- ✅ Dark luxury UI with gold/amber accents
- ✅ SEO optimized meta tags
- ✅ Google Fonts (Playfair Display + Inter)

---

Built with ❤️ for **Ganesh Gurav Photography**
