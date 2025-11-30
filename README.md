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
1. Header with Navigation Bar (mobile menu toggle)  
2. Hero Section and Form Section 
3. Services  
4. Why Choose Us
5. Testimonials
6. Patients Review
7. Find Us (Location)
8. Footer  

The landing page follows a **desktop-first approach** ensuring a smooth user experience on all devices.

---

## 🌐 Live Demo

**Live URL:**  
https://kushalsg62.github.io/unbundl-landing-page/

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

```JavaScript
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

<img width="1883" height="722" alt="Hero-section" src="https://github.com/user-attachments/assets/cbd61ddb-deed-40ed-97fd-81441aafc43f" />

---

**Hero Section (Mobile)**

<img width="501" height="657" alt="Hero-section-mobile" src="https://github.com/user-attachments/assets/3c202649-a5a3-4b3a-9796-0cdd6102d177" />

---

**Hero Section (Tab)**

<img width="1246" height="714" alt="Hero-section-tab" src="https://github.com/user-attachments/assets/a6198b6a-e81f-481c-a4ab-16ba1c1d6bd5" />

---

**Why Choose Us (Desktop)**

<img width="1888" height="920" alt="Why-choose-us" src="https://github.com/user-attachments/assets/240d2e29-348f-41d7-8315-1292f092764b" />

---

**Find Us Across India (Tab)**

<img width="1237" height="911" alt="Find-us" src="https://github.com/user-attachments/assets/2aa104b5-6b3b-4cb2-9e14-57acecb2e893" />

---

**Form (Mobile)**

<img width="498" height="807" alt="Form" src="https://github.com/user-attachments/assets/9181fadb-f07d-4e20-b29f-5161265fbeaf" />

---

## Author

**Kushal SG**

* Web Developer | Software Engineer
* GitHub: [https://github.com/Kushalsg62/](https://github.com/Kushalsg62/)
* LinkedIn: [www.linkedin.com/in/kushal-sg/](www.linkedin.com/in/kushal-sg-6a6b2a207)
  
---












