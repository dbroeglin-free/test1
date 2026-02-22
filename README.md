# ❄️ Météo des Neiges

A static web application displaying real-time weather information for ski resorts in the Geneva region. Built with React, TypeScript, and Vite, deployed automatically to GitHub Pages on every push to `main`.

## 🎯 Features

- **Real-time Weather Data**: Fetches current weather conditions from the free [Open-Meteo API](https://open-meteo.com)
- **Responsive Design**: Fully responsive layout that works on desktop and mobile devices
- **Visual Weather Indicators**: Weather conditions displayed with emoji icons and color-coded temperature indicators
- **Multiple Resorts**: Displays weather for 8 major ski resorts near Geneva:
  - Chamonix (France)
  - Verbier (Switzerland)
  - Zermatt (Switzerland)
  - Courmayeur (Italy)
  - Les Gets (France)
  - Tignes (France)
  - Val d'Isère (France)
  - Méribel (France)
- **Automatic Updates**: Data is cached and refetched every 10 minutes
- **Auto-Deployment**: GitHub Actions workflow automatically builds and deploys to GitHub Pages on every push to `main`

## 🛠 Tech Stack

- **React 19** - UI framework with functional components and hooks
- **TypeScript** - Strict type safety
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4** - Utility-first styling
- **React Router v7** - Client-side routing
- **TanStack React Query v5** - Server state management for API data
- **Leaflet + react-leaflet v5** - Interactive maps (for future enhancements)
- **ESLint 9** - Code quality and consistency
- **GitHub Actions** - CI/CD pipeline

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ and npm

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173/test1/`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # TypeScript check + production build → dist/
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## 📁 Project Structure

```
src/
├── App.tsx              # Root component with router and query provider
├── main.tsx             # Application entry point
├── index.css            # Global styles with Tailwind import
├── env.d.ts             # Vite environment type declarations
├── assets/              # Static assets
├── components/          # Reusable UI components
│   ├── Header.tsx       # Page header
│   ├── Footer.tsx       # Page footer
│   └── ResortCard.tsx   # Individual resort weather card
├── data/                # Static data
│   └── resorts.ts       # Resort definitions with coordinates
├── pages/               # Route-level components
│   └── Dashboard.tsx    # Main dashboard page
├── services/            # API service modules
│   ├── weatherService.ts    # Open-Meteo API integration
│   └── weatherUtils.ts      # Weather description and color utilities
└── types/               # Shared TypeScript interfaces
    └── index.ts
```

## 🌐 API Integration

The application fetches weather data from the free [Open-Meteo API](https://open-meteo.com):

- **Endpoint**: `https://api.open-meteo.com/v1/forecast`
- **Data Retrieved**: Temperature, apparent temperature, weather code, wind speed, precipitation, and snow depth
- **Timezone**: Europe/Zurich
- **Cache Strategy**: 10-minute stale time with `refetchOnWindowFocus: false` to minimize API calls

## 🔒 Security

- ✅ No secrets or API keys in code (`.env` is in `.gitignore`)
- ✅ No authentication required (uses free public API)
- ✅ External links use `rel="noopener"` attribute
- ✅ React JSX escaping for HTML content
- ✅ Strict TypeScript type checking enabled
- ✅ ESLint rules enforce best practices
- ✅ No server-side code execution (static SPA)

## 🌍 Localization

- **Language**: French
- **Timezone**: Europe/Zurich (CET/CEST)
- All UI labels, descriptions, and content are in French

## 📦 Deployment

### GitHub Pages Setup

1. Go to repository **Settings → Pages**
2. Set **Source** to **GitHub Actions** (not "Deploy from a branch")
3. The GitHub Actions workflow will automatically build and deploy on every push to `main`

### How Deployment Works

The workflow (`.github/workflows/deploy.yml`):
1. Runs on every push to `main` or manual trigger (`workflow_dispatch`)
2. Checks out code and sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Runs `npm run build` (TypeScript check + Vite production build)
5. Uploads `dist/` folder as artifact
6. Deploys to GitHub Pages environment

### Base Path Configuration

The app is deployed at `https://<owner>.github.io/test1/`. The base path is configured in:
- **vite.config.ts**: `base: '/test1/'`
- **App.tsx**: `<BrowserRouter basename="/test1">`

⚠️ **Important**: If the repository is renamed, **both values must be updated in sync**.

## 🌐 Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires ES2020 support

## ⚡ Performance Optimizations

- **Code Splitting**: Vite automatically chunks code for optimal loading
- **CSS Minification**: Tailwind CSS with tree-shaking
- **API Caching**: React Query caches data with intelligent stale/fresh timing
- **No Polyfills**: Assumes modern browser APIs
- **Lazy Loading**: Components loaded on demand via React Router

## 🐛 Troubleshooting

### Build fails with TypeScript errors
- Run `npm run lint` to check for issues
- Ensure all files use proper TypeScript types

### Weather data not loading
- Check browser console for errors
- Verify Open-Meteo API is accessible: 
  ```bash
  curl "https://api.open-meteo.com/v1/forecast?latitude=45.9&longitude=6.8&current=temperature_2m"
  ```
- Check if IP is rate-limited (Open-Meteo has free tier limits)

### Styling issues
- Ensure Tailwind CSS is properly imported in `src/index.css`
- Run `npm run build` to verify no CSS compilation errors

## 🔮 Future Enhancements

- Interactive map with resort locations using Leaflet
- Extended weather forecast (5-day, 10-day)
- Weather alerts and warnings
- User preferences (favorite resorts, temperature units)
- PWA features for offline support
- Historical weather data
- Server-side rendering for better SEO
- Internationalization (i18n) support

## 📄 License

MIT

## 🤝 Contributing

Contributions are welcome! Please follow the project's TypeScript and coding conventions when submitting pull requests.

---

**Built with ❤️ using GitHub Copilot**
