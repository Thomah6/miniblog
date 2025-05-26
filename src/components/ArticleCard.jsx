import React from 'react';
import { Link } from 'react-router-dom';

const ArticleCard = ({ article }) => {
  return (
    <article
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      aria-labelledby={`article-${article.id}-title`}
    >
      <Link
          to={`/article/${article.id}`}
          aria-label={`Lire l'article "${article.title}"`}
        >
          <div className="h-44 md:h-56 overflow-hidden relative shadow-inner">
        <img src={article.coverImage} className="w-full h-full object-cover" alt={article.title} />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/90 dark:from-gray-900/90 to-transparent"></div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-2">
          {article.category}
        </span>
        <h2
          id={`article-${article.id}-title`}
          className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2"
        >
          {article.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{article.excerpt}</p>
        <Link
          to={`/article/${article.id}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          aria-label={`Lire l'article "${article.title}"`}
        >
          Lire la suite
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
      </div>
      </Link>
    </article>
  );
};

export default ArticleCard;