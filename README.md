# 🚀 Portfolio - Bui Trung Quoc

A modern, production-ready personal portfolio website built with React + Vite. Fully data-driven — update content by editing a single file and uploading images.

![React](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-6-purple) ![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **Data-Driven** — All content comes from `src/data/portfolioData.js`
- **Responsive Design** — Looks great on all devices
- **Dark Navy Theme** — Professional, modern design inspired by Apple/Stripe/Vercel
- **Framer Motion Animations** — Smooth scroll animations
- **Lightbox** — Full-screen image viewer with zoom, download, and navigation
- **Certificate Filters** — Instant category filtering
- **Photo Gallery** — Masonry/Pinterest-style layout with category filters
- **SEO Optimized** — Meta tags, Open Graph, Twitter Cards, JSON-LD
- **GitHub Pages Ready** — One-command deployment

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── cv/
│   │   └── CV.pdf              ← Your CV file
│   ├── images/
│   │   ├── profile/            ← Profile/avatar photos
│   │   ├── samsung/            ← Samsung activity photos
│   │   ├── certificates/       ← Certificate images
│   │   ├── competitions/       ← Competition photos
│   │   ├── projects/           ← Project screenshots
│   │   └── achievements/       ← Achievement photos
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Lightbox.jsx
│   ├── sections/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── Achievements.jsx
│   │   ├── Certifications.jsx
│   │   ├── Projects.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── portfolioData.js    ← ✏️ EDIT THIS FILE
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Quick Start

### Chạy trên máy khác (sau khi giải nén zip)

```bash
# 1. Giải nén file portfolio.zip vào thư mục bất kỳ
# 2. Mở terminal tại thư mục vừa giải nén
# 3. Cài dependencies
npm install

# 4. Chạy development server
npm run dev
```

Truy cập `http://localhost:5173` để xem website. Xong! 🎉

### Các lệnh đầy đủ

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

---

## 📝 How to Update Content

### 1. Add a New Certificate

**Step 1:** Put the certificate image in `public/images/certificates/`

```
public/images/certificates/aws-certified.jpg
```

**Step 2:** Add entry to `src/data/portfolioData.js` in the `certifications` array:

```js
{
  title: "AWS Cloud Practitioner",
  issuer: "Amazon Web Services",
  image: "/images/certificates/aws-certified.jpg",
  verifyUrl: "https://aws.amazon.com/certification/verify",
  issueDate: "2024",
  category: "Others",
}
```

That's it! The certificate will automatically appear on the website.

### 2. Add Competition Photos

**Step 1:** Put photos in `public/images/competitions/`

```
public/images/competitions/regional-2024.jpg
```

**Step 2:** Add to `portfolioData.js`:

- In the `achievements` array (if it's a new achievement):

```js
{
  title: "Regional Programming Contest 2024",
  organization: "Hanoi University",
  year: "2024",
  description: "Won 2nd place at the regional programming contest.",
  images: ["/images/competitions/regional-2024.jpg"],
  icon: "trophy",
}
```

- In the `gallery.photos` array (to show in the photo gallery):

```js
{
  src: "/images/competitions/regional-2024.jpg",
  title: "Regional Programming Contest 2024",
  category: "Competitions",
}
```

### 3. Add Samsung Photos

**Step 1:** Put photos in `public/images/samsung/`

**Step 2:** Add to `portfolioData.js` in the `gallery.photos` array:

```js
{
  src: "/images/samsung/team-event.jpg",
  title: "Samsung Team Building Event",
  category: "Samsung",
}
```

### 4. Add a New Project

**Step 1:** Put screenshots in `public/images/projects/`

**Step 2:** Add to `portfolioData.js` in the `projects` array:

```js
{
  title: "My New Project",
  description: "A brief description of the project.",
  technologies: ["React", "Node.js", "MongoDB"],
  screenshots: ["/images/projects/new-project.jpg"],
  githubUrl: "https://github.com/quoc14/new-project",
  demoUrl: "https://new-project.vercel.app",
  featured: true,
}
```

### 5. Update CV

Simply replace the file at:

```
public/cv/CV.pdf
```

If you change the filename, update `profile.cvUrl` in `portfolioData.js`.

### 6. Update Profile Information

Edit the `profile` section in `portfolioData.js`:

```js
profile: {
  name: "Bui Trung Quoc",
  role: "Android Developer",
  company: "Samsung R&D Center Vietnam",
  email: "quocbui2803@gmail.com",
  github: "https://github.com/quoc14",
  avatar: "/images/profile/avatar.jpg",
  cvUrl: "/cv/CV.pdf",
  // ...
}
```

---

## 🎨 Customization

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --navy: #0a192f;
  --accent: #64ffda;
  --accent-blue: #57cbff;
  /* ... */
}
```

### Sections

Each section is a separate component in `src/sections/`. You can reorder sections by editing `src/App.jsx`.

---

## 🌐 Deploy to GitHub Pages

### One-time setup:

1. Update `vite.config.js` base path:

```js
base: '/your-repo-name/',
```

2. Update `package.json` homepage:

```json
"homepage": "https://yourusername.github.io/your-repo-name"
```

3. Update `portfolioData.js` and `index.html` with your GitHub Pages URL.

### Deploy:

```bash
npm run deploy
```

This builds the project and pushes the `dist` folder to the `gh-pages` branch.

---

## 🛠 Tech Stack

- **React 18** — UI library
- **Vite 6** — Build tool
- **Framer Motion** — Animations
- **React Icons** — Icon library
- **React Router** — Navigation
- **GitHub Pages** — Hosting

---

## 📋 Lighthouse Target Scores

| Metric         | Target |
| -------------- | ------ |
| Performance    | > 90   |
| Accessibility  | > 90   |
| Best Practices | > 90   |
| SEO            | > 90   |

---

## 📄 License

MIT License — feel free to use this template for your own portfolio.

---

Built with ❤️ by Bui Trung Quoc
