# Heroes App 🦸‍♂️

A React Single Page Application showcasing superheroes from DC Comics and Marvel Comics. Built with modern React patterns, featuring routing, search functionality, and responsive design.

## ✨ Features

- **Hero Browsing**: Browse heroes by publisher (Marvel Comics & DC Comics)
- **Search Functionality**: Real-time hero search with URL persistence
- **Hero Details**: Detailed individual hero pages
- **Responsive Design**: Mobile-friendly Bootstrap UI
- **Mock Authentication**: Simple login/logout flow
- **SPA Navigation**: Client-side routing with React Router

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM v7** - Client-side routing
- **Bootstrap** - CSS framework
- **Query String** - URL parameter handling
- **ESLint + Prettier** - Code formatting and linting

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Heroesapp
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🏗️ Project Structure

```
src/
├── auth/                   # Authentication module
│   ├── components/
│   ├── hooks/
│   └── pages/
│       └── LoginPage.jsx
├── heroes/                 # Heroes feature module
│   ├── components/
│   │   ├── HeroCard.jsx
│   │   └── HeroList.jsx
│   ├── data/
│   │   └── heroes.js       # Static hero data
│   ├── helpers/
│   │   ├── getHeroById.js
│   │   ├── getHeroesByName.js
│   │   └── getHeroesByPublisher.js
│   ├── pages/
│   │   ├── DcPage.jsx
│   │   ├── MarvelPage.jsx
│   │   ├── HeroPage.jsx
│   │   └── SearchPage.jsx
│   └── routes/
│       └── HeroesRoutes.jsx
├── hooks/
│   └── useForm.js          # Custom form hook
├── router/
│   └── AppRouter.jsx       # Main routing configuration
├── ui/
│   └── components/
│       └── Navbar.jsx      # Navigation component
├── HeroesApp.jsx           # Main app component
└── main.jsx                # Application entry point
```

## 🗺️ Routes

- `/` - Redirects to Marvel page
- `/marvel` - Marvel Comics heroes
- `/dc` - DC Comics heroes  
- `/search` - Hero search page
- `/hero/:id` - Individual hero details
- `/login` - Mock login page

## 🎨 Components Overview

### Core Components
- **HeroCard**: Displays individual hero information
- **HeroList**: Renders a grid of hero cards filtered by publisher
- **Navbar**: Navigation bar with active route highlighting
- **SearchPage**: Hero search with real-time filtering

### Custom Hooks
- **useForm**: Manages form state and input handling

### Helper Functions
- **getHeroById**: Find hero by ID
- **getHeroesByName**: Filter heroes by name
- **getHeroesByPublisher**: Filter heroes by publisher

## 📊 Data

The app uses static data located in `src/heroes/data/heroes.js` containing 20 superheroes (10 Marvel, 10 DC) with the following structure:

```javascript
{
  id: 'dc-batman',
  superhero: 'Batman',
  publisher: 'DC Comics',
  alter_ego: 'Bruce Wayne',
  first_appearance: 'Detective Comics #27',
  characters: 'Bruce Wayne'
}
```

## 🎯 Key Features Explained

### Search Functionality
- Real-time search as you type
- URL synchronization (search terms persist in URL)
- Empty state and no-results state handling

### Routing
- Nested routing structure with protected routes
- URL parameter handling for hero details
- Navigation with history management

### Performance Optimizations
- `useMemo` for expensive hero filtering operations
- Component memoization where appropriate
- Optimized asset loading

## 🚀 Deployment

The app is configured for easy deployment to static hosting services:

1. Build the project:
```bash
npm run build
```

2. The `dist/` folder contains the production build

3. For SPA routing support, a `_redirects` file is included in the `public/` directory for Netlify deployment.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting: `npm run lint`
5. Format code: `npm run format`
6. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built by Roge Mateos

---

*This project was bootstrapped with Vite + React template and enhanced with routing, search functionality, and responsive design.*