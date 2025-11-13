# 🐾 PawMart - Pet Adoption & Supply Platform

<div align="center">

**A Modern Community Platform for Pet Adoption & Pet Supply Shopping**

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://pawmart-zone.web.app)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/aamamunszone/pawmart-client)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

🌐 [Live Demo](https://pawmart-zone.web.app) | 🐛 [Report Bug](https://github.com/aamamunszone/pawmart-client/issues) | ✨ [Request Feature](https://github.com/aamamunszone/pawmart-client/issues)

</div>

---

## 📋 Table of Contents

- 🎯 [About The Project](#-about-the-project)
- ✨ [Key Features](#-key-features)
- 🛠 [Tech Stack](#-tech-stack)
- 🚀 [Getting Started](#-getting-started)
- 📂 [Project Structure](#-project-structure)
- 📦 [NPM Packages](#-npm-packages)
- 📸 [Screenshots](#-screenshots)
- 🌐 [Deployment](#-deployment)
- 👨‍💻 [Developer](#-developer)
- 📝 [License](#-license)
- 🙏 [Acknowledgments](#-acknowledgments)

---

## 🎯 About The Project

**PawMart** is a modern, community-driven platform that connects **pet lovers, adopters, and pet supply sellers** in one ecosystem.  
It enables users to **adopt pets**, **buy pet supplies**, and **interact with a caring community** - all in one place.

### Why PawMart?

- 🐕 **Save Lives** - Every adoption gives homeless pets a second chance
- 🛒 **One-Stop Shop** - Everything your pet needs, all in one platform
- 🤝 **Community Driven** - Connect with real pet owners and stores
- 📱 **Modern UX** - Sleek, responsive, and mobile-friendly interface
- 🔒 **Secure** - Protected routes with Firebase authentication

---

## ✨ Key Features

### Core Functionality

- ✅ **Pet Adoption System** - Browse and adopt pets with detailed profiles
- ✅ **Pet Supply Store** - Food, toys, accessories & more
- ✅ **Advanced Search & Filters** - Category & keyword-based filtering
- ✅ **User Authentication** - Firebase Email/Password & Google OAuth
- ✅ **Listing Management** - Create, edit & delete listings
- ✅ **Order Tracking** - Track and view your past orders

### User Experience

- ✅ **Dark/Light Theme** - Toggle between themes with smooth transitions
- ✅ **Responsive Design** - Perfect experience on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Powered by Framer Motion
- ✅ **Real-time Notifications** - Toast messages for user feedback
- ✅ **Category Navigation** - Easy browsing by pet type and product category

---

## 🛠 Tech Stack

### Frontend

- **React 19** - Modern UI library
- **Vite 7** - Lightning-fast build tool
- **React Router 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first styling
- **DaisyUI 5** - Component library
- **Framer Motion 12** - Smooth animations

### Backend & Services

- **Firebase Auth** - User authentication
- **MongoDB** - Database (via REST API)
- **Axios** - HTTP client
- **Node.js/Express** - Backend API

### Additional Tools

- **jsPDF + AutoTable** - PDF generation
- **Swiper** - Touch slider/carousel
- **React Icons** - Icon library
- **React Hot Toast** - Notifications
- **SweetAlert2** - Beautiful alerts

---

## 🚀 Getting Started

### Prerequisites

```bash
node >= 18.0.0
npm >= 9.0.0
```

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/aamamunszone/pawmart-client.git
   cd pawmart-client
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Setup environment variables**

   Create `.env.local` file:

   ```env
   # Firebase Configuration
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_domain.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_bucket.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   # API URL
   VITE_API_URL=http://localhost:3000
   ```

4. **Start development server**

   ```bash
   npm run dev
   ```

5. **Open browser**
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📂 Project Structure

```
pawmart-client/
├── src/
│   ├── assets/              # Images, fonts
│   ├── components/          # Reusable components
│   │   ├── common/         # Shared components
│   │   ├── home/           # Home page sections
│   │   ├── listing/        # Listing components
│   │   └── shared/         # Layout components
│   ├── contexts/           # React Context
│   ├── firebase/           # Firebase config
│   ├── hooks/              # Custom hooks
│   ├── layouts/            # Page layouts
│   ├── pages/              # Page components
│   ├── providers/          # Context providers
│   ├── routes/             # Route config
│   ├── styles/             # Global styles
│   └── main.jsx            # Entry point
├── public/                  # Static files
├── .env.local              # Environment variables
├── package.json            # Dependencies
└── vite.config.js          # Vite config
```

---

## 📦 NPM Packages

### Core Dependencies

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-router": "^7.9.5",
  "firebase": "^12.5.0",
  "axios": "^1.13.2"
}
```

### UI & Styling

```json
{
  "tailwindcss": "^4.1.17",
  "@tailwindcss/vite": "^4.1.17",
  "daisyui": "^5.4.7",
  "framer-motion": "^12.23.24",
  "react-icons": "^5.5.0",
  "swiper": "^12.0.3"
}
```

### Utilities

```json
{
  "react-hot-toast": "^2.6.0",
  "sweetalert2": "^11.26.3",
  "jspdf": "^3.0.3",
  "jspdf-autotable": "^5.0.2"
}
```

### Development

```json
{
  "vite": "^7.1.7",
  "@vitejs/plugin-react": "^5.0.4",
  "eslint": "^9.36.0"
}
```

---

## 📸 Screenshots

### Desktop Views

![Home Page](/public/assets/screenshots/home-light.png)  
_Modern hero section with animated carousel_

### Dark Mode

![Dark Theme](/public/assets/screenshots/home-dark.png)  
_Beautiful dark theme support_

### Mobile Responsive

![Mobile View](/public/assets/screenshots/mobile-view.png)  
_Responsive mobile view_

---

## 🚀 Deployment

### Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Build
npm run build

# Deploy
firebase deploy
```

### Live Site

🌐 [https://pawmart-zone.web.app](https://pawmart-zone.web.app)

---

## 👨‍💻 Developer

<div align="center">

### Abdullah Al Mamun

**Full Stack Developer | MERN Stack**

[![GitHub](https://img.shields.io/badge/GitHub-aamamunszone-181717?style=flat&logo=github)](https://github.com/aamamunszone)
[![Email](https://img.shields.io/badge/Email-aamamunszone@gmail.com-D14836?style=flat&logo=gmail)](mailto:aamamunszone@gmail.com)

</div>

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Firebase](https://firebase.google.com/) - Authentication & Hosting
- [Unsplash](https://unsplash.com/) - Pet images
- [Programming Hero](https://www.programming-hero.com/) - Learning platform

---

<div align="center">

**Made with ❤️ and 🐾 by [Abdullah Al Mamun](https://github.com/aamamunszone)**

⭐ Star this repo if you like it!

</div>
