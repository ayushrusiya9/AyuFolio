<div align="center">

# ✨ AyuFolio — Personal Portfolio

**A modern, responsive portfolio website built with React, Vite, and Tailwind CSS.**

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![EmailJS](https://img.shields.io/badge/EmailJS-Integrated-FF6C37?logo=mail.ru&logoColor=white)](https://www.emailjs.com/)

</div>

---

## 📸 Preview

<div align="center">

| Home                                                                     | Projects                                                             |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| ![Home Section](https://img.shields.io/badge/Hero-Typing_Animation-cyan) | ![Projects](https://img.shields.io/badge/6_Projects-Live_Demos-blue) |

</div>

---

## 🚀 Features

- 🎨 **Modern Dark Theme** — Sleek gradient backgrounds with cyan-blue accent colors
- ⌨️ **Typing Animation** — Dynamic role titles on the hero section
- 📱 **Fully Responsive** — Mobile-first design with hamburger menu
- 🎭 **Scroll Animations** — Elements animate into view using Framer Motion
- 📂 **6 Live Projects** — Each with Code & Demo links
- 🛠️ **16 Skills** — Interactive skill cards with hover effects
- 📧 **Contact Form** — EmailJS integration for direct email delivery
- ⬆️ **Back to Top** — Smooth scroll-to-top button
- 📄 **Resume Download** — One-click PDF resume download

---

## 🛠️ Tech Stack

| Category         | Technologies                        |
| ---------------- | ----------------------------------- |
| **Frontend**     | React 18, JavaScript (ES6+)         |
| **Build Tool**   | Vite 4                              |
| **Styling**      | Tailwind CSS 3, Custom CSS          |
| **Animations**   | Framer Motion, react-type-animation |
| **Navigation**   | react-scroll (smooth scrolling)     |
| **Contact Form** | EmailJS (client-side email)         |
| **Fonts**        | Raleway, Great Vibes, Nunito        |
| **Icons**        | Custom SVG components, Devicons     |

---

## 📁 Project Structure

```
AyuFolio/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Images, resume, favicons
│   │   ├── Avatars/         # Avatar SVG
│   │   ├── Favicons/        # Site favicon
│   │   └── Projects/        # Project screenshots
│   ├── components/          # React components
│   │   ├── ui/              # Reusable UI (AnimatedWrapper)
│   │   ├── Home.jsx         # Hero section
│   │   ├── About.jsx        # About + tech stack
│   │   ├── Projects.jsx     # Project cards grid
│   │   ├── Skills.jsx       # Skills grid
│   │   ├── Contact.jsx      # Contact form (EmailJS)
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Footer.jsx       # Footer with links
│   │   └── ...              # Other components
│   ├── data/                # Content data files
│   │   ├── projects.js      # Project entries
│   │   ├── skills.jsx       # Skill entries
│   │   ├── contactInfo.jsx  # Social links
│   │   ├── techStack.jsx    # Tech stack icons
│   │   └── navlinks.js      # Navigation links
│   ├── utils/               # Utility functions
│   │   └── formValidation.js # Form validation + EmailJS
│   ├── App.jsx              # Main app layout
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── .env.example             # Environment variable template
├── tailwind.config.cjs      # Tailwind configuration
├── vite.config.js           # Vite configuration
└── package.json
```

---

## ⚡ Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ayushrusiya9/AyuFolio.git

# Navigate to project
cd AyuFolio

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your EmailJS credentials (see below)

# Start development server
npm run dev
```

### 📧 EmailJS Setup (for Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Add Gmail as an Email Service → get **Service ID**
3. Create an Email Template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{reply_to}}`
4. Copy your **Public Key** from Account → General
5. Add these to your `.env` file:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview   # Preview the build locally
```

---

## 📂 Featured Projects

| Project       | Description                                    | Tech               |
| ------------- | ---------------------------------------------- | ------------------ |
| **FlyNow**    | Airline booking website with CRUD operations   | HTML, CSS, JS      |
| **Echofy**    | Django web project exploring core concepts     | Django, Python     |
| **EduNexus**  | E-learning platform with role-based dashboards | Django, Cloudinary |
| **FixItFast** | Home repair service booking app                | HTML, CSS, JS      |
| **Shopora**   | Full-stack eCommerce with auth & cart          | Django, Python     |
| **Grocify**   | Grocery management with CRUD operations        | React, JSON Server |

---

## 🤝 Connect With Me

<div align="center">

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Ayush_Rusiya-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ayushrusiya/)
[![GitHub](https://img.shields.io/badge/GitHub-ayushrusiya9-181717?logo=github&logoColor=white)](https://github.com/ayushrusiya9)
[![Gmail](https://img.shields.io/badge/Gmail-ayushrusiya386-EA4335?logo=gmail&logoColor=white)](mailto:ayushrusiya386@gmail.com)
[![Telegram](https://img.shields.io/badge/Telegram-Ayush_Rusiya-26A5E4?logo=telegram&logoColor=white)](https://t.me/Ayush_Rusiya)

</div>

---

## 👤 Developer

**Ayush Rusiya**

- 🎓 B.Tech CSE | RGPV University, Bhopal
- 💻 Full Stack Developer (Python, Django, FastAPI, React, Next.js)
- 📍 Bhopal, Madhya Pradesh, India

---

<div align="center">

**⭐ Star this repo if you like it!**

Made with ❤️ by [Ayush Rusiya](https://github.com/ayushrusiya9)

</div>
