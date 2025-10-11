# TheHunter: Call of the Wild - Unofficial Guide

A modern, comprehensive guide for TheHunter: Call of the Wild, built with React, Vite, and Tailwind CSS. This project aims to provide a more structured, aesthetically pleasing, and informative resource compared to existing wikis.

![Project Status](https://img.shields.io/badge/status-in%20development-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🎯 Project Overview

This unofficial guide is a side project developed as part of my computer science studies. It showcases modern web development practices and provides hunters with detailed information about:

- **17 Hunting Reserves** - Explore diverse locations from around the world
- **100+ Animal Species** - Learn about wildlife behavior and hunting strategies
- **Weapons Arsenal** - Master the right tools for each hunt
- **Hunting Tips** - Improve your skills with expert guidance

## 🚀 Live Demo

The site is deployed on GitHub Pages: [View Live Site](https://AleksanderAsoy.github.io/TheHunterCOTW-Guide)

## 🛠️ Tech Stack

- **React 19** - Modern UI library
- **Vite** - Next-generation frontend tooling
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **GitHub Pages** - Hosting platform

## 📋 Features

- ✅ Responsive design optimized for all devices
- ✅ Dark theme with hunting/nature aesthetics
- ✅ Fast navigation with React Router
- ✅ Structured JSON data for easy updates
- ✅ SEO-friendly architecture
- ✅ Performance optimized with Vite

## 🚦 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/AleksanderAsoy/TheHunterCOTW-Guide.git
   cd TheHunterCOTW-Guide
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 📦 Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 🚀 Deployment

This project is configured for deployment to GitHub Pages. To deploy:

```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

## 📁 Project Structure

```
TheHunterCOTW-Guide/
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   └── Hero.jsx
│   ├── pages/          # Page components
│   │   ├── Home.jsx
│   │   ├── Reserves.jsx
│   │   ├── ReserveDetail.jsx
│   │   ├── Animals.jsx
│   │   └── Weapons.jsx
│   ├── data/           # JSON data files
│   │   ├── reserves.json
│   │   └── animals.json
│   ├── assets/         # Images and static files
│   ├── App.jsx         # Main application component
│   └── index.css       # Global styles with Tailwind
├── public/             # Static assets
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Project dependencies
```

## 🔒 Security Best Practices

This project follows security best practices:

- Environment variables are managed through `.env` files (never committed)
- `.env.example` provides a template for required environment variables
- `.gitignore` prevents sensitive files from being tracked
- All API keys (if added in the future) use Vite's `import.meta.env` syntax

### Adding Environment Variables

If you need to add external APIs in the future:

1. Copy `.env.example` to `.env`
2. Add your API keys to `.env`
3. Access them in code using `import.meta.env.VITE_YOUR_VAR_NAME`

**Note:** Never commit your `.env` file to version control!

## 🎨 Customization

### Theme Colors

The project uses a custom color palette defined in `tailwind.config.js`:

- `hunter-dark` - Primary dark background
- `hunter-darker` - Deeper dark background
- `hunter-green` - Primary green accent
- `hunter-green-light` - Lighter green for hover states
- `hunter-brown` - Brown accent
- `hunter-brown-light` - Lighter brown
- `hunter-tan` - Tan for highlights

### Adding New Content

1. **Reserves**: Add new entries to `src/data/reserves.json`
2. **Animals**: Add new entries to `src/data/animals.json`
3. **Pages**: Create new page components in `src/pages/`
4. **Routes**: Update `src/App.jsx` to include new routes

## 🤝 Contributing

This is a personal learning project, but suggestions and feedback are welcome! Feel free to:

- Open issues for bugs or feature requests
- Submit pull requests with improvements
- Share hunting tips or corrections

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🎮 Disclaimer

This is an **unofficial** fan-made guide. All rights to "TheHunter: Call of the Wild" belong to Expansive Worlds and Avalanche Studios. This project is not affiliated with, endorsed by, or connected to the game developers or publishers.

## 👤 Author

**Aleksander Æsøy**

- GitHub: [@AleksanderAsoy](https://github.com/AleksanderAsoy)
- Project: [TheHunterCOTW-Guide](https://github.com/AleksanderAsoy/TheHunterCOTW-Guide)

## 🙏 Acknowledgments

- [TheHunter: Call of the Wild Wiki](https://thehuntercotw.fandom.com/) - Source of game information
- Expansive Worlds & Avalanche Studios - For creating the amazing game
- The TheHunter community - For their passion and knowledge

---

**Happy Hunting!** 🦌🏹
