import React from 'react';

const CategoryFilter = ({ categories, activeCategory, setActiveCategory }) => {
  return (
    <div className="mb-8">
      <h2 className="sr-only">Filtrer par catégorie</h2>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveCategory('Tous')}
          className={`px-4 py-2 rounded-full text-sm font-medium ${
            activeCategory === 'Tous'
              ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
          }`}
          aria-pressed={activeCategory === 'Tous'}
        >
          Tous
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              activeCategory === category
                ? 'bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
            }`}
            aria-pressed={activeCategory === category}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;