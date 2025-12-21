# Modern React Portfolio Animations

## Overview
This project is a **modern, interactive, and responsive React portfolio** featuring:

- **Intro animations** with greetings in multiple languages.
- **Custom smooth cursor** with lag effect.
- **Responsive Navbar** with scroll hide/show behavior.
- **Fullscreen Overlay Menu** with animated transitions.
- **Particles background** animation.
- **Skills section** with infinite marquee animation.
- Other sections: About, Experience, Projects, Testimonials, Contact, Footer.

The code is **production-ready, responsive, accessible**, and optimized for **all devices**.

---

## Table of Contents
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Components](#components)
4. [Sections](#sections)
5. [Features](#features)
6. [Future Enhancements](#future-enhancements)
7. [Technologies](#technologies)
8. [Screenshots](#screenshots)

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/amShubhama/portfolio.git
```

2. Navigate to the project directory:

```bash
cd portfolio
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

5. Open the browser at `http://localhost:5173`.

---

## Project Structure

```
src/
├─ assets/
│  └─ img1.jpg / img2.jpg      # Logo and avatar images
├─ components/
│  ├─ CustomCursor.jsx         # Smooth lagging cursor
│  ├─ IntroAnimation.jsx       # Animated greetings
│  ├─ Navbar.jsx               # Transparent responsive navbar
│  ├─ OverlayMenu.jsx          # Fullscreen animated menu
│  └─ ParticlesBackground.jsx  # Animated particles background
├─ sections/
│  ├─ About.jsx                # About Me section
│  ├─ Contact.jsx              # Contact form section
│  ├─ Experience.jsx           # Experience timeline
│  ├─ Footer.jsx               # Footer section
│  ├─ Home.jsx                 # Hero/intro section
│  ├─ Projects.jsx             # Projects showcase
│  ├─ Skills.jsx               # Skills with animated marquee
│  └─ Testimonials.jsx         # Testimonials slider
├─ App.jsx                     # Main app integration
├─ index.css                   # Global styles
└─ main.jsx                    # React entry point
```

---

## Components

### 1. `CustomCursor.jsx`
- Custom cursor with smooth lag effect.
- Disabled on mobile/touch devices.
- Respects `prefers-reduced-motion`.
- Smooth movement using linear interpolation (lerp).

### 2. `IntroAnimation.jsx`
- Displays greetings in multiple languages.
- Responsive font sizes.
- Smooth animations using **Framer Motion**.
- Accessible with `aria-live="polite"`.

### 3. `Navbar.jsx`
- Transparent navbar with scroll hide/show behavior.
- Hamburger menu on mobile.
- CTA button for desktop.
- Observes `#home` section to remain visible.
- Accessible and keyboard-friendly.

### 4. `OverlayMenu.jsx`
- Fullscreen menu overlay.
- Smooth opening/closing using **Framer Motion clipPath animation**.
- Staggered animation for menu items.
- Responsive padding and font sizes.

### 5. `ParticlesBackground.jsx`
- Lightweight particle animation using canvas.
- Fully responsive and high-DPI ready.
- Adaptive particle count.
- Performance optimized for all devices.

---

## Sections

### 1. `Home.jsx`
- Hero section with greeting and intro animation.
- Avatar/hero image with responsive blur and gradient effects.
- Animated roles ticker (Web Developer, Software Engineer).

### 2. `About.jsx`
- Personal info, stats, and summary.
- Responsive layout with background glows.
- Smooth **Framer Motion** animations.

### 3. `Skills.jsx`
- Infinite marquee of skill icons.
- Scroll-sensitive direction: scroll down → left to right, scroll up → right to left.
- Responsive, smooth, and no blinking.

### 4. `Experience.jsx`
- Timeline of professional experience.
- Responsive vertical/horizontal layout.
- Animated entry transitions.

### 5. `Projects.jsx`
- Project cards with images, description, and links.
- Hover effects and responsive grid layout.

### 6. `Testimonials.jsx`
- Slider for client or peer testimonials.
- Smooth transitions and responsive layout.

### 7. `Contact.jsx`
- Contact form section.
- Accessible, responsive, and includes CTA buttons.

### 8. `Footer.jsx`
- Footer with social links and copyright.
- Responsive and lightweight.

---

## Features

- ✅ Fully responsive on all devices.
- ✅ Scroll-sensitive Navbar visibility.
- ✅ Accessible for keyboard & screen readers.
- ✅ Smooth animations using Framer Motion.
- ✅ Lightweight particles and background glows.
- ✅ Infinite scrolling marquee for Skills section.
- ✅ Easy customization (brand name, menu items, greetings, skills).

---

## Future Enhancements

- Dark/Light theme toggle.
- Interactive particles reacting to cursor.
- Dynamic greetings from localization/API.
- Scroll progress indicator.
- More sections and portfolio content integration.

---

## Technologies

- React 18+
- Tailwind CSS
- Framer Motion
- React Icons
- Canvas API (particles)

---

## Screenshots