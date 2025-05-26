import React, { useState, useEffect } from 'react';
import ArticleCard from '../components/ArticleCard';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';
import articles from '../data/articles';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [filteredArticles, setFilteredArticles] = useState(articles);

  // Extraire les catégories uniques
  const categories = [...new Set(articles.map((article) => article.category))];

  useEffect(() => {
    let results = articles;

    // Filtrer par recherche
    if (searchTerm) {
      results = results.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrer par catégorie
    if (activeCategory !== 'Tous') {
      results = results.filter((article) => article.category === activeCategory);
    }

    setFilteredArticles(results);
  }, [searchTerm, activeCategory]);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 dark:bg-gray-900">
      {/* En-tête avec recherche */}
      <header className="mb-12 text-center">
        <span className="bg-gray-200 dark:bg-gray-700 py-1 px-4 text-sm rounded-lg mb-8 border-gray-400 dark:border-gray-500 border text-gray-700  dark:text-gray-200 font-semibold">By Hermès Hounkonnou</span><br/><br/>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 bg-gradient-to-r from-blue-600 to-indigo-500 bg-clip-text text-transparent">
          Explorations Technologiques
        </h1>

        <div className="max-w-2xl mx-auto">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} className="shadow-lg" />
        </div>
      </header>

      {/* Filtres et résultats */}
      <section>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            className="flex-1"
          />

          <div className="text-sm text-gray-500 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 px-3 py-2 rounded-full">
            {filteredArticles.length} {filteredArticles.length > 1 ? 'articles' : 'article'} trouvé(s)
          </div>
        </div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.length > 0 ? (
            filteredArticles.map((article) => (
              <ArticleCard
                key={article.id}
                article={article}
                className="transition-all hover:scale-[1.02] hover:shadow-lg"
              />
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <div className="mx-auto w-24 h-24 text-gray-300 dark:text-gray-500 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-2">Aucun résultat</h3>
              <p className="text-gray-500 dark:text-gray-300 max-w-md mx-auto">
                Essayez d'autres termes ou{' '}
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory('Tous');
                  }}
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  réinitialisez les filtres
                </button>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Pagination optionnelle */}
      {filteredArticles.length > 9 && (
        <div className="mt-12 flex justify-center">
          <nav className="flex space-x-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded-full ${
                  page === 1
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-gray-100'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
          </nav>
        </div>
      )}
    </main>
  );
};

export default Home;