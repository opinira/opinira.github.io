# Mst. Opisultana Nira — Creative Portfolio Website

A luxury, editorial-inspired, motion-focused personal creative portfolio website for **Mst. Opisultana Nira** (Motion Graphics Designer | UI/UX Designer | CSE Undergraduate), crafted for international clients, creative marketing teams, and freelance opportunities.

---

## 🎨 Design System & Visual Foundation

- **Deep Navy (`#0B1B33`)**: Primary dark luxury foundation canvas.
- **Royal Navy (`#142B4A`)**: Elevated surfaces, cards, and navigation.
- **Ivory (`#F5F1E8`)**: High-contrast typography & editorial text.
- **Bronze (`#A98252`)**: Accent lines, active states, and glowing highlights.
- **Soft Gray (`#D9D9D6`)**: Secondary metadata, borders, and subtle textures.
- **Typography**: Space Grotesk (geometric editorial headings) & Inter (high-legibility body).

---

## 🚀 Key Features

1. **Editorial Hero Section**: Portrait frame, animated headline *"Designing Visual Stories That Move Brands Forward"*, and clear call-to-actions.
2. **Core Creative Categories (1:1 Ratio Containers)**:
   - **Category 1**: Motion Graphics & Video (Commercial video ads, luxury product showcases, promotional motion design).
   - **Category 2**: Static Poster Design (Promotional posters, luxury campaign visuals, e-commerce banners).
3. **8-Part Interactive Case Study System**: In-depth modal breakdown for every project (Objective, Creative Approach, Production Process, Tools, Deliverables, Reflection, and Google Drive source links).
4. **Work Experience Timeline**: Documented role at *Royal Hair Wigs & Roylux (Worldwide Export Brands)* from November 2023 to Present.
5. **Categorized Skill Trees**: Motion & Video Production, UI/UX & Graphics, and AI-Augmented Creative Workflows.
6. **Academic Background**: B.Sc. in Computer Science & Engineering (Varendra University), HSC, and SSC.
7. **Direct Channels**: Direct WhatsApp message launcher, verified Behance portfolio (`https://www.behance.net/opinira`), and pre-formatted mailto composer.
8. **Mobile-First & GitHub Pages Ready**: Fully responsive navigation drawer, zero-layout-shift 1:1 image containers, and hash-based SPA routing.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite 6
- **Styling**: Tailwind CSS + PostCSS + Autoprefixer
- **Icons**: Lucide React
- **Hosting**: Static GitHub Pages Ready

---

## 📦 How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🌐 Deploying to GitHub Pages

### Option 1: Direct Push from VS Code / Terminal

```bash
# Initialize git if needed
git init
git add .
git commit -m "feat: Initial commit of luxury creative portfolio"

# Create a repository on your GitHub account using GitHub CLI
gh repo create nira-portfolio --public --source=. --remote=origin --push

# Build and deploy with gh-pages or GitHub Actions
npm run build
```

---

## 📝 Updating Projects & Content

All portfolio content is structured in `src/data/`:
- `src/data/portfolioData.js`: Add/edit projects, categories, descriptions, case study details, and Google Drive links.
- `src/data/experienceData.js`: Update roles, responsibilities, and skill proficiencies.
- `src/data/educationData.js`: Update education and contact links.

---

© Mst. Opisultana Nira. All rights reserved.
