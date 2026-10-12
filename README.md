# Hemanth Eagambaram M — Personal Engineering Portfolio

A modern, recruiter-ready personal portfolio built for **Hemanth Eagambaram M** (Aspiring Data Engineer & Computer Science Engineering undergraduate).

## ✨ Key Features

- **Authentic Data Engineering Positioning**: Built around verified skills in Python, SQL, PySpark, Apache Spark, Azure Databricks, and AWS Cloud Architecting.
- **Interactive Data Pipeline Visualizer**: Custom code & SVG architecture flow in the Hero section illustrating Extraction, Transformation, Storage, and Analytics stages.
- **Deep-Dive Project Architecture Modals**: Detailed breakdown of problem statements, technical approaches, and multi-stage data/ML pipelines for:
  1. *AI-Based Phishing & Scam Detection System* (97.1% F1-score, DistilBERT + XGBoost + FastAPI)
  2. *AI-Based Urban Heat Prediction & Cooling System* (Spatial heat-risk classification, Flask + React.js + NLP)
  3. *Data Engineering Practice & Pipeline Workflows* (PySpark, Apache Spark, Azure Databricks, Advanced SQL)
- **Single Source of Truth Data File**: All profile info, skills, projects, experience, education, and achievements are stored in [`src/data/portfolioData.ts`](src/data/portfolioData.ts) for effortless maintenance.
- **Integrated Resume Download**: Configured with your actual PDF resume at `public/Hemanth_Eagambaram_Resume.pdf`.
- **Responsive & Accessible**: Full mobile navigation drawer, keyboard support (`ESC` to close modals/menus), semantic HTML5, and high-contrast dark slate/cyan theme.

---

## 🛠️ Tech Stack

- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 8
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React + Custom SVG Brand Icons

---

## 🚀 Getting Started Locally

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

Open the local URL shown in the terminal (typically `http://localhost:5173`) to view and edit the site with hot-module reloading.

### 3. Build for Production

```bash
npm run build
```

This runs TypeScript type checking (`tsc -b`) and compiles optimized production assets into the `dist/` folder.

### 4. Preview Production Build

```bash
npm run preview
```

---

## 📝 Updating Content & Resume

1. **Updating Text, Projects, or Links**:
   Edit [`src/data/portfolioData.ts`](src/data/portfolioData.ts). Everything on the website updates automatically from this single file.
2. **Updating Your Resume PDF**:
   Replace `public/Hemanth_Eagambaram_Resume.pdf` with any updated PDF using the same filename, or update `resumePdfPath` in `src/data/portfolioData.ts`.

---

## 🌐 Deployment (Vercel / Netlify)

- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`
