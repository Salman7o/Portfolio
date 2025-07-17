# PersonalShowcase

A modern, responsive portfolio web application to showcase your professional journey, projects, and downloadable resources. Built with React (Vite), TypeScript, Tailwind CSS, and Firebase Hosting.

## Features

- **Beautiful Landing Page:** Eye-catching hero section and smooth animations.
- **About, Skills, and Education:** Highlight your background, skills, and academic achievements.
- **Projects Showcase:** Display featured projects with images, categories, and direct links to GitHub repositories.
- **Downloads & Resources:** Allow visitors to download your latest CV/resume and other professional documents.
- **Contact Section:** Easy way for visitors to reach out.
- **Mobile Responsive:** Fully optimized for all devices.
- **Fast & Secure Hosting:** Deployed on Firebase Hosting for global reach and reliability.

## Tech Stack

- **Frontend:** React (Vite), TypeScript, Tailwind CSS, Framer Motion
- **Icons:** Lucide React
- **State & Utilities:** React Hooks
- **Backend/Server:** (Optional) Node.js/Express for API routes (if needed)
- **Hosting:** Firebase Hosting

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm or yarn
- Firebase CLI (for deployment)

### Local Development
1. **Install dependencies:**
   ```sh
   cd client
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit `http://localhost:5173` (or as indicated in your terminal)

### Build for Production
1. **Build the app:**
   ```sh
   npm run build
   ```
2. **Copy static assets (e.g., PDF resume) to the build output:**
   ```sh
   cp public/Salman\ Resume.pdf ../dist/public/Salman\ Resume.pdf
   ```

### Deploy to Firebase
1. **Login to Firebase:**
   ```sh
   firebase login
   ```
2. **Deploy:**
   ```sh
   firebase deploy
   ```

## Project Structure

```
PersonalShowcase/
├── client/
│   ├── public/                # Static assets (PDFs, images)
│   ├── src/                   # React source code
│   └── ...
├── dist/public/               # Production build output (for deployment)
├── attached_assets/           # Original assets (not deployed)
├── firebase.json              # Firebase Hosting config
└── README.md
```

## Live Demo
[Portfolio Live Site](https://salman-portfolio-8bc67.web.app)

## License
This project is for personal and educational use. Feel free to fork and adapt for your own portfolio!
