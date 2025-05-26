import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // 1. Vérifie d'abord le localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    
    // 2. Sinon, vérifie les préférences système
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Toggle theme avec vérification complète
  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Animation du bouton
    const btn = document.getElementById('theme-toggle');
    if (btn) {
      btn.classList.add('animate-pulse');
      setTimeout(() => btn.classList.remove('animate-pulse'), 300);
    }
  };

  // Applique le thème au chargement et quand il change
// Alternative ultra-robuste
useEffect(() => {
  const applyTheme = () => {
    const html = document.documentElement;
    const theme = isDarkMode ? 'dark' : 'light';
    
    html.classList.remove('light', 'dark');
    html.classList.add(theme);
    html.style.colorScheme = theme;
    
    // Force le recalcul des styles
    window.dispatchEvent(new Event('theme-change'));
  };

  // Applique immédiatement
  applyTheme();

  // Ré-application après hydratation (Next.js/Remix)
  const timer = setTimeout(applyTheme, 50);
  return () => clearTimeout(timer);
}, [isDarkMode]);

  return (
    
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <Link
              to="/"
              className="text-xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
              aria-label="Retour à l'accueil"
            >
              TechBit
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="px-3 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-current="page"
              >
                Accueil
              </Link>
              
              {/* Bouton theme amélioré */}
              <button
                id="theme-toggle"
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300"
                aria-label={isDarkMode ? 'Passer en mode clair' : 'Passer en mode sombre'}
              >
                {isDarkMode ? (
                  // Soleil (mode clair)
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  // Lune (mode sombre)
                  <svg 
                    className="w-5 h-5" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </button>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} TechBit. Tous droits réservés.
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Conçu avec React, Tailwind CSS et <span className="text-red-500">♥</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;