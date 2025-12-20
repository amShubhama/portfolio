# Modern React Portfolio Animations

## Overview
This project is a **modern, interactive, and responsive React front-end setup** featuring:

- **Intro animations** with greetings in multiple languages.
- **Custom smooth cursor** with lag effect.
- **Responsive Navbar** with scroll hide/show behavior.
- **Fullscreen Overlay Menu** with animated transitions.
- **Particles background** animation.

The code is **production-ready, responsive, accessible**, and optimized for **all devices**.

---

## Table of Contents
1. [Installation](#installation)
2. [Project Structure](#project-structure)
3. [Components](#components)
4. [Features](#features)
5. [Future Enhancements](#future-enhancements)
6. [Technologies](#technologies)
7. [Screenshots](#screenshots)

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
├─ components/
│  ├─ IntroAnimation.jsx       # Animated greetings
│  ├─ CustomCursor.jsx         # Smooth lagging cursor
│  ├─ Navbar.jsx               # Transparent responsive navbar
│  ├─ OverlayMenu.jsx          # Fullscreen animated menu
│  └─ ParticlesBackground.jsx  # Animated particles background
├─ assets/
│  └─ img2.jpg                 # Logo image
├─ App.jsx                     # Main app integration
└─ main.jsx                    # React entry point
```

---

## Components

### 1. `IntroAnimation.jsx`
- Displays greetings in multiple languages.
- Fully responsive font sizes.
- Smooth animations using **Framer Motion**.
- Accessible (`aria-live="polite"`) for screen readers.

### 2. `CustomCursor.jsx`
- Custom cursor with smooth lag effect.
- Disabled on mobile/touch devices.
- Respects `prefers-reduced-motion` for accessibility.
- Lerp (linear interpolation) for smooth movement.

### 3. `Navbar.jsx`
- Fully **transparent** navbar.
- Scroll behavior: hides on scroll down, shows on scroll up.
- Responsive layout: hamburger menu on mobile, CTA button on desktop.
- Observes `#home` section to remain visible.
- Accessible and keyboard-friendly.

### 4. `OverlayMenu.jsx`
- Fullscreen menu overlay for mobile and desktop.
- Smooth opening/closing using **Framer Motion clipPath animation**.
- Staggered animation for menu items.
- Responsive padding and font sizes.
- Accessible close button with `aria-label`.

### 5. `ParticlesBackground.jsx`
- Lightweight particle animation using canvas.
- Fully responsive and high-DPI ready.
- Adaptive particle count based on screen width.
- Disabled for users who prefer reduced motion.
- Performance optimized for mobile and desktop.

---

## Features

- ✅ Fully responsive on all devices.
- ✅ Scroll-sensitive Navbar visibility.
- ✅ Accessible for keyboard & screen readers.
- ✅ Smooth animations using Framer Motion.
- ✅ Lightweight and performance-optimized particles.
- ✅ Easy customization (brand name, menu items, greetings).

---

## Future Enhancements

- Add **theme toggle** (dark/light mode).
- Interactive particles reacting to cursor hover.
- Dynamic greetings from API or localization files.
- Scroll progress indicator.
- Portfolio content integration (Projects, Skills, Testimonials, Contact).

---

## Technologies

- React 18+
- Tailwind CSS
- Framer Motion
- React Icons
- Canvas API (particles)

---

## Screenshots