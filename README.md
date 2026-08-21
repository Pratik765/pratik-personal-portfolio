# 🚀 Pratik Kamble — Premium Personal Portfolio Website

A modern, high-performance, and responsive personal portfolio website built for **Pratik Kamble**, specialized in **MERN Stack & React.js Development**.

---

## ✨ Features & Highlights

- **🌙 Dark / Light Mode**: Seamless theme switcher persisted in `localStorage` with distinct curated color palettes.
- **⚡ Modern Tech Stack**: React 18, Vite, Tailwind CSS, Framer Motion, and Lucide React.
- **📸 High-Resolution Profile Presentation**: Custom user profile photo integration with glowing neon borders and floating animated tech badges.
- **🏛️ Interactive Architecture Spec**: Dedicated **"How I Build Applications"** section with interactive layered diagrams and modal view.
- **💻 Interactive Developer CLI Terminal**: A developer easter egg console supporting commands like `skills`, `projects`, `experience`, `contact`, and `sudo hire` with confetti animation.
- **📊 Real-time Metrics & Animated Counters**: Visual statistics tracking years of experience, mentored developers, projects, and technologies.
- **🎯 Growth Dashboard ("My MERN Journey")**: Progress meters tracing growth from web foundations to full-scale MERN deployments.
- **📄 Resume Integration**: Quick download (`Pratik_Kamble_Resume.pdf`) and "View in New Tab" capabilities.
- **📬 Interactive Contact Form**: Fully validated client-side contact interface with real-time feedback and direct reachout channels.
- **⚙️ Centralized Data Layer**: All editable content is organized in a single file: `src/data/portfolio.js`.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion, Canvas Confetti
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Fonts**: Inter, Outfit, JetBrains Mono

---

## 📁 Project Structure

```
pratik-personal-portfolio/
├── public/
│   ├── resume/
│   │   └── Pratik_Kamble_Resume.pdf     # Place your updated resume PDF here
│   ├── favicon.svg                     # Custom geometric PK SVG favicon
│   ├── robots.txt                      # Search engine crawler config
│   ├── pratik-photo.jpg                # User profile photo
│   ├── project-ecommerce.png           # E-Commerce showcase thumbnail
│   ├── project-kanban.png              # Kanban workspace thumbnail
│   └── project-api.png                 # API Testing studio thumbnail
├── src/
│   ├── assets/                         # Local image assets
│   ├── components/                     # Reusable UI components
│   │   ├── Navbar.jsx                  # Sticky translucent header with scrollspy
│   │   ├── Footer.jsx                  # Modern footer with socials & shortcuts
│   │   ├── ThemeToggle.jsx             # Dark / Light mode toggle
│   │   ├── ScrollProgress.jsx          # Top scroll progress bar
│   │   ├── BackToTop.jsx               # Floating back-to-top button
│   │   ├── SectionHeading.jsx          # Gradient title & badge wrapper
│   │   ├── AnimatedCounter.jsx         # Viewport count-up numbers
│   │   ├── TechCard.jsx                # Interactive tech badge with progress
│   │   ├── SkillBar.jsx                # Animated skill proficiency bar
│   │   ├── ProjectCard.jsx             # Project showcase card with architecture trigger
│   │   ├── TimelineItem.jsx            # Experience & milestone timeline item
│   │   ├── ArchitectureDiagram.jsx     # Interactive system flow diagram
│   │   ├── ArchitectureModal.jsx       # Modal for expanded architecture specs
│   │   ├── DeveloperTerminal.jsx       # Interactive developer CLI console
│   │   ├── ContactForm.jsx             # Validated contact form
│   │   └── BrandIcons.jsx              # Crisp SVGs for GitHub and LinkedIn
│   ├── sections/                       # Portfolio page sections
│   │   ├── Hero.jsx                    # Intro, photo, status pill, CTAs
│   │   ├── About.jsx                   # Professional narrative & pillars
│   │   ├── Stats.jsx                   # Experience and mentorship stats
│   │   ├── TechStack.jsx               # Categorized filterable tech grid
│   │   ├── Skills.jsx                  # Visual proficiency distribution
│   │   ├── Experience.jsx              # Know-IT C-DAC ACTS Trainer timeline
│   │   ├── Projects.jsx                # Full-stack project showcases
│   │   ├── Architecture.jsx            # "How I Build Applications" pipeline
│   │   ├── Journey.jsx                 # "My MERN Journey" milestone tracker
│   │   ├── GitHub.jsx                  # GitHub metrics and pinned repos
│   │   ├── Resume.jsx                  # Resume preview and download
│   │   └── Contact.jsx                 # Direct outreach and contact channels
│   ├── data/
│   │   └── portfolio.js                # 🌟 ALL editable data centralized here
│   ├── hooks/
│   │   ├── useTheme.jsx                # Dark / Light theme context hook
│   │   └── useScrollSpy.js             # Active section navbar tracking
│   ├── layouts/
│   │   └── MainLayout.jsx              # Main viewport layout wrapper
│   ├── utils/
│   │   └── helpers.js                  # Icon map, confetti, scroll helpers
│   ├── App.jsx                         # Main React application component
│   ├── index.css                       # Tailwind directives, glassmorphism & gradients
│   └── main.jsx                        # React root entry point
├── index.html                          # SEO meta tags, Google Fonts
├── tailwind.config.js                  # Custom color tokens, fonts & animations
├── postcss.config.js                   # PostCSS configuration
├── vite.config.js                      # Vite bundler configuration
└── package.json                        # Dependencies and scripts
```

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Customize Your Details

All personal information, links, and content are centralized in **[`src/data/portfolio.js`](file:///c:/Users/prati/Desktop/Practice/portfolio/pratik-personal-portfolio/src/data/portfolio.js)**:

| Item to Change | Location in `src/data/portfolio.js` |
|---|---|
| **Name, Role, Tagline, Bio** | `personalInfo.name`, `personalInfo.role`, `personalInfo.bio` |
| **Email Address** | `personalInfo.email` |
| **LinkedIn URL** | `personalInfo.socials.linkedin` |
| **GitHub Profile URL** | `personalInfo.socials.github` |
| **Availability Status** | `personalInfo.status` |
| **Skills & Percentages** | `skillProgress` and `techStack` |
| **Experience Timeline** | `experience` array |
| **Project Details & Links** | `projects` array |
| **Architecture Spec Data** | `architectureSectionData` |

### Replacing Your Photo
Your uploaded photo is already active at `public/pratik-photo.jpg` and `src/assets/pratik-photo.jpg`. To update it in the future, simply place your new image in `public/` and update `personalInfo.photoUrl` in `src/data/portfolio.js`.

### Replacing Your Resume PDF
Place your updated resume file at:
`public/resume/Pratik_Kamble_Resume.pdf`

---

## 🌐 Free One-Click Deployment

### Deploying to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete premium portfolio website"
   git push origin main
   ```
2. Go to [Vercel](https://vercel.com) and click **"New Project"**.
3. Import your repository and click **Deploy**. Vercel will automatically detect Vite.

### Deploying to Netlify
1. Connect your repository on [Netlify](https://netlify.com).
2. Set Build command to `npm run build` and Publish directory to `dist`.

---

## 📄 License
MIT License © 2026 Pratik Kamble
