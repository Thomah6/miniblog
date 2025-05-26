import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import articles from '../data/articles';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article.id === parseInt(id));
  const [hasLiked, setHasLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const commentInputRef = useRef(null);

  // Charger likes et commentaires depuis localStorage
  useEffect(() => {
    if (article) {
      const storedLikes = localStorage.getItem(`likes-${article.id}`);
      const storedHasLiked = localStorage.getItem(`hasLiked-${article.id}`);
      const storedComments = localStorage.getItem(`comments-${article.id}`);
      if (storedLikes) setLikes(parseInt(storedLikes));
      if (storedHasLiked) setHasLiked(storedHasLiked === 'true');
      if (storedComments) setComments(JSON.parse(storedComments));
      document.title = article.metaTitle;
    }
  }, [article]);

  // Gérer le like/délike
  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem(`likes-${article.id}`, newLikes);
      localStorage.setItem(`hasLiked-${article.id}`, 'true');
    } else {
      const newLikes = likes - 1;
      setLikes(newLikes);
      setHasLiked(false);
      localStorage.setItem(`likes-${article.id}`, newLikes);
      localStorage.setItem(`hasLiked-${article.id}`, 'false');
    }
  };

  // Gérer le formulaire de commentaire
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const newComment = {
        id: Date.now(),
        text: comment,
        date: new Date().toLocaleString('fr-FR'),
      };
      const updatedComments = [...comments, newComment];
      setComments(updatedComments);
      localStorage.setItem(`comments-${article.id}`, JSON.stringify(updatedComments));
      setComment('');
      setShowCommentForm(false);
    }
  };

  // Focus sur le textarea quand le formulaire s'ouvre
  useEffect(() => {
    if (showCommentForm && commentInputRef.current) {
      commentInputRef.current.focus();
    }
  }, [showCommentForm]);

  if (!article) {
    return (
      <div className="bg-red-100 dark:bg-red-900/50 container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Article non trouvé</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-4">L'article que vous recherchez n'existe pas.</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 bg-gray-50 dark:bg-gray-900">
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content="React, SEO, accessibilité, développement web" />
      </Helmet>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Image de couverture */}
        <div className="mb-10 rounded-xl overflow-hidden shadow-lg">
          <img
            src={article.coverImage || '/default-cover.jpg'}
            alt={`Couverture pour ${article.title}`}
            className="w-full h-64 sm:h-80 object-cover"
            loading="eager"
          />
        </div>

        {/* En-tête */}
        <header className="mb-10">
          <span
            className={`inline-block px-4 py-2 text-sm font-semibold rounded-full mb-6
              ${article.category === 'Tech' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/50 dark:text-indigo-300' :
                article.category === 'SEO' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-300' :
                'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-300'}`}
          >
            {article.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex items-center text-gray-500 dark:text-gray-300 space-x-4 mb-8">
            <span>
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span>•</span>
            <span>
              {Math.ceil(
                article.content.reduce((acc, section) => acc + section.body.split(' ').length, 0) / 200
              )} min de lecture
            </span>
          </div>
        </header>

        {/* Sommaire flottant */}
        <aside className="hidden lg:block fixed right-8 top-1/3 w-60 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md border border-gray-100 dark:border-gray-700">
          <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-100">Sommaire</h3>
          <nav role="navigation">
            <ul className="space-y-2">
              {article.content
                .filter((s) => s.level === 2)
                .map((section, i) => (
                  <li key={i}>
                    <a
                      href={`#section-${i}`}
                      className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm transition"
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(`#section-${i}`)?.scrollIntoView({
                          behavior: 'smooth',
                        });
                      }}
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
            </ul>
          </nav>
        </aside>
        {/* Sommaire mobile */}
        <div className="lg:hidden mb-8 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <details>
            <summary className="font-bold cursor-pointer text-gray-800 dark:text-gray-200">📖 Sommaire</summary>
            <nav className="mt-2">
              <ul className="space-y-2 pl-4">
                {article.content
                  .filter((s) => s.level === 2)
                  .map((section, i) => (
                    <li key={i}>
                      <a
                        href={`#section-${i}`}
                        className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm"
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
              </ul>
            </nav>
          </details>
        </div>
        {/* Introduction */}
        <section className="mb-12 bg-blue-50/50 dark:bg-blue-900/30 p-6 rounded-xl border border-blue-100 dark:border-blue-800">
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed !mb-0">{article.intro}</p>
        </section>

        {/* Contenu structuré */}
        <div className="prose prose-lg max-w-none">
          {article.content.map((section, index) => (
            <section
              key={index}
              id={`section-${index}`}
              className={`mb-10 scroll-mt-20 ${section.level === 3 ? 'ml-8' : ''}`}
            >
              {section.level === 2 ? (
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 pt-2 border-t border-gray-100 dark:border-gray-700">
                  {section.title}
                </h2>
              ) : (
                <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-3">
                  {section.title}
                </h3>
              )}
              <div className="text-gray-700 dark:text-gray-200 leading-relaxed space-y-4">
                {section.body.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
        {/* Pied de page */}
        <footer className="mt-16 pt-8 border-t border-gray-100 dark:border-gray-700">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleLike}
              className="flex items-center text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label={
                hasLiked
                  ? `Retirer le like de l'article ${article.title}, ${likes} likes actuellement`
                  : `Ajouter un like à l'article ${article.title}, ${likes} likes actuellement`
              }
              aria-live="polite"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill={hasLiked ? 'currentColor' : 'none'}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                />
              </svg>
              {hasLiked ? 'Déliker' : 'Réagir'} ({likes})
            </button>
            <button
              onClick={() => setShowCommentForm(!showCommentForm)}
              className="flex items-center text-gray-500 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              aria-label={showCommentForm ? `Fermer le formulaire de commentaire` : `Ajouter un commentaire à l'article ${article.title}`}
              aria-expanded={showCommentForm}
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24" // Corrigé de "0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              Commenter ({comments.length})
            </button>
          </div>
          {showCommentForm && (
            <form onSubmit={handleCommentSubmit} className="mt-4">
              <label htmlFor="comment" className="sr-only">
                Votre commentaire
              </label>
              <textarea
                id="comment"
                ref={commentInputRef}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full p-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-blue-500 dark:focus:border-blue-400 text-gray-900 dark:text-gray-100"
                rows="4"
                placeholder="Écrivez votre commentaire..."
                aria-label="Écrivez votre commentaire pour cet article"
              />
              <div className="mt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowCommentForm(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
                  aria-label="Annuler le commentaire"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600"
                  disabled={!comment.trim()}
                  aria-label="Soumettre le commentaire"
                >
                  Envoyer
                </button>
              </div>
            </form>
          )}
          {comments.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Commentaires</h3>
              <ul className="space-y-4">
                {comments.map((comment) => (
                  <li
                    key={comment.id}
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <p className="text-gray-700 dark:text-gray-200">{comment.text}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{comment.date}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </footer>
      </article>
    </main>
  );
};

export default ArticleDetail;