<!-- README.md -->
# My space

A modern, responsive personal portfolio website built with cutting-edge web technologies. Showcases professional experience, skills, and projects in an elegant, accessible design with internationalization support.

**Built by Dario Pratola using React & TypeScript with AI pair programming, continuously deployed to Cloudflare from GitHub.**

---

## 🚀 Use This Template for Your Resume

Want to create your own professional portfolio? This template is perfect for you! Here's why:

✨ **Key Features:**
- 🌍 **Multilingual support** - Easily add multiple languages for your content
- 📱 **Fully responsive** - Looks great on all devices
- ⚡ **Lightning fast** - Built with Vite for optimal performance
- 🎨 **Modern design** - Clean, professional UI with Tailwind CSS
- ♿ **Accessible** - Built with accessibility best practices
- 🔧 **Easy to customize** - Well-structured, modular codebase
- 🚀 **Free deployment** - Deploy to Cloudflare Pages in minutes

### 🎯 Perfect For:
- Software developers and engineers
- Designers and creatives
- Freelancers and consultants
- Anyone looking for a modern, professional online presence

## Structure
- UI modules in `src/modules/`
- Domain logic and services in `src/shared/` separated from UI components


### 📝 How to Get Started:

#### 1. Fork or Clone the Repository
```bash
# Option A: Fork on GitHub (recommended)
# Click the "Fork" button at the top of this repository

# Option B: Clone directly
git clone https://github.com/dariomayer/my-space.git
cd my-space
```

#### 2. Install Dependencies
```bash
pnpm install
```

#### 3. Customize Your Content
Edit the JSON files in `src/modules/profile/content/`:
- `experiences.{en,it}.json` - Your work experience
- `education.{en,it}.json` - Your education history
- `certifications-data.json` - Your certifications
- `skills.{en,it}.json` - Your technical skills

Update personal information in:
- `src/shared/i18n/{en,it}.json` - Common translations
- `src/modules/profile/i18n/{en,it}.json` - Profile-specific text

#### 4. Test Locally
```bash
pnpm dev
```
Open `http://localhost:5173` to see your portfolio

#### 5. Deploy to Cloudflare Pages
- Push your changes to GitHub
- Connect your repository to Cloudflare Pages
- Build command: `pnpm build`
- Output directory: `dist`

For more info see: https://developers.cloudflare.com/pages/framework-guides/deploy-a-vite3-project/

💡 **No coding required for content updates!** All your professional information (experience, education, skills, certifications) is stored in easy-to-edit JSON files.


## Technologies

This project leverages modern web technologies to create a fast, accessible, and maintainable portfolio website:

### Core Framework
- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript** - Static type checking for enhanced development experience
- **Vite** - Fast build tool and development server with ESM support

### Styling & UI
- **Tailwind CSS 4.0** - Utility-first CSS framework for rapid styling
- **PostCSS** - CSS post-processing for optimized builds
- **Shadcn UI** - Accessible primitive components
- **Lucide React** - Beautiful icon library

### Internationalization
- **i18next** - Powerful internationalization framework
- **react-i18next** - React integration for i18next
- **i18next-browser-languagedetector** - Automatic language detection

### Development Tools
- **pnpm** - Fast, disk-efficient package manager
- **ESLint** - Code linting and formatting
- **TypeScript** - Advanced type checking with strict configuration


## License
- MIT © Dario Pratola (see `LICENSE`).
