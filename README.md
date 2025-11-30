### Responsive Landing Page – Web Development Assignment

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)

---

## Overview

This project is a **fully responsive landing page** built from a Figma design using **HTML, CSS, and Vanilla JavaScript**.  
It demonstrates translating a design into semantic, clean, and responsive code with basic interactivity.

**Implemented Sections (6 selected from Figma):**
1. Navigation Bar (with mobile menu toggle)  
2. Hero Section  
3. Features / Services  
4. About Us  
5. Testimonials  
6. Footer  

The landing page follows a **mobile-first approach** ensuring smooth user experience on all devices.

---

## Live Demo

[🌐 View Live Site](https://yourusername.github.io/repository-name/)

---

## Features

- Fully responsive layout for **mobile, tablet, and desktop**  
- Semantic HTML5 structure for better accessibility and SEO  
- CSS3 styling with media queries and grid/flex layouts  
- Vanilla JavaScript interactivity:
  - Mobile hamburger menu toggle
  - Smooth scrolling for anchor links  
- Pixel-perfect visual fidelity to the Figma design  
- Deployment-ready using GitHub Pages  

---

## Tech Stack

- **HTML5** – Page structure and semantic elements  
- **CSS3** – Styling, responsive layouts, grids, and flexbox  
- **JavaScript (Vanilla)** – Interactivity  
- **Git & GitHub** – Version control and deployment  
- **Figma** – Source design and asset export  

---

## Project Structure

```

my-landing-page/
├── index.html                  ← Main HTML file
├── css/
│   └── style.css               ← Styles for layout and design
├── js/
│   └── script.js               ← JavaScript for interactivity
├── images/                     ← Exported Figma assets (PNG/SVG)
├── favicon.ico                 ← Optional favicon for browser tab
└── README.md                   ← Project documentation

````

---

## Setup & Installation

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/repository-name.git
````

2. **Open `index.html` in your browser**
   No additional setup required.

3. **Deploy on GitHub Pages (optional):**

* Push code to GitHub
* Go to Repository → Settings → Pages → Select branch `main` → Save
* Your site will be live in minutes

---

## Responsive Design

* Mobile-first layout with media queries
* Tested across multiple screen sizes using Chrome DevTools and real devices
* Breakpoints:

  * **Mobile:** `<768px`
  * **Tablet:** `768px–1023px`
  * **Desktop:** `1024px–1439px`
  * **Large Desktop:** `1440px+`

---

## JavaScript Interactivity

```javascript
// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navMenu.classList.toggle('show');
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
```

---

## Screenshots

**Hero Section (Desktop)**
![Hero Desktop](images/hero-desktop.png)

**Features Section (Tablet)**
![Features Tablet](images/features-tablet.png)

**Testimonials Section (Mobile)**
![Testimonials Mobile](images/testimonials-mobile.png)

---


## Author

**Kushal SG**

* Web Developer | Software Engineer
* GitHub: [https://github.com/Kushalsg62/](https://github.com/Kushalsg62/)
* LinkedIn: [www.linkedin.com/in/kushal-sg/](www.linkedin.com/in/kushal-sg-6a6b2a207)

---

