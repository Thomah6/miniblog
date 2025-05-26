const articles = [
  {
    id: 1,
    title: "React vs Vue : Comparaison 2023",
    excerpt: "Une analyse approfondie des deux frameworks frontend les plus populaires.",
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Tech",
    date: "2023-05-15",
    metaTitle: "React vs Vue - Comparaison complète | TechBit",
    metaDescription: "Découvrez les différences entre React et Vue.js pour choisir le meilleur framework pour votre projet.",
    intro: "Dans l'univers du développement frontend, React et Vue.js dominent les discussions. Mais lequel choisir en 2023 ? Cette analyse compare leur écosystème, performances, courbe d'apprentissage et cas d'usage idéaux.",
    content: [
      {
        title: "Historique et Philosophie",
        level: 2,
        body: "React, créé par Facebook en 2013, suit une approche déclarative alors que Vue, développé par Evan You en 2014, mise sur la progressivité. React impose JSX tandis que Vue permet des templates HTML classiques."
      },
      {
        title: "Performances Comparées",
        level: 2,
        body: "Benchmarks (JS Framework Benchmark) montrent que Vue 3 est ~15% plus rapide que React 18 pour les updates DOM. Cependant, React excelle dans les applications complexes grâce à son Virtual DOM optimisé."
      },
      {
        title: "Écosystème",
        level: 2,
        body: "React bénéficie de 3x plus de librairies (Next.js, Redux). Vue a des outils officiels comme Pinia (state management) et Nuxt.js. Exemple : React compte 12M+ de téléchargements hebdomadaires contre 4M pour Vue."
      },
      {
        title: "Cas d'Usage Recommandés",
        level: 3,
        body: "Choisissez React pour : applications à grande échelle, équipes expérimentées. Préférez Vue pour : intégration progressive, prototypes rapides, petites équipes."
      }
    ]
  },
  {
    id: 2,
    title: "SEO pour les Progressive Web Apps",
    excerpt: "Optimisez votre PWA pour un meilleur référencement naturel.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "SEO",
    date: "2023-06-02",
    metaTitle: "SEO pour PWA - Guide complet | TechBit",
    metaDescription: "Meilleures pratiques pour optimiser le référencement de vos applications web progressives.",
    intro: "Les PWAs combinent le meilleur du web et des apps mobiles, mais leur SEO présente des défis uniques. Ce guide couvre les techniques avancées pour ranker efficacement.",
    content: [
      {
        title: "Problématiques Spécifiques aux PWAs",
        level: 2,
        body: "Le rendu côté client (CSR) et le lazy loading impactent l'indexation. Googlebot traite désormais le JavaScript comme Chrome 110, mais les temps de crawl restent limités."
      },
      {
        title: "Solutions Techniques",
        level: 2,
        body: "Implémentez le SSR (Next.js, Nuxt) ou le prerendering (Static Site Generation). Utilisez le Worker API pour servir du contemps différent aux bots (Googlebot vs utilisateurs)."
      },
      {
        title: "Structured Data Essentiel",
        level: 3,
        body: "Ajoutez WebPage (pour le core), WebApp (manifest) et ServiceWorker (offline capability). Testez avec Rich Results Test."
      }
    ]
  },
  {
    id: 3,
    title: "Accessibilité Web : Les Bases",
    excerpt: "Introduction aux principes d'accessibilité pour les développeurs web.",
    coverImage: "https://images.unsplash.com/photo-1616587894289-86480e533129?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Accessibilité",
    date: "2023-04-20",
    metaTitle: "Accessibilité Web - Principes de base | Blog Tech",
    metaDescription: "Apprenez les fondamentaux de l'accessibilité web pour créer des sites inclusifs.",
    intro: "L'accessibilité web (WCAG) concerne 1 milliard de personnes en situation de handicap. Voici les piliers techniques et méthodologiques pour des applications inclusives.",
    content: [
      {
        title: "Principes WCAG 2.1",
        level: 2,
        body: "Perceptible : alternatives textuelles, contraste 4.5:1. Utilisable : navigation clavier, timing ajustable. Robust : compatibilité avec les assistive technologies."
      },
      {
        title: "Outils de Vérification",
        level: 2,
        body: "Lighthouse (score a11y), Axe DevTools, NVDA pour les tests lecteur d'écran. Exemple : un bouton doit avoir un aria-label si son texte est une icône seule."
      },
      {
        title: "Erreurs Courantes",
        level: 3,
        body: "Contraste insuffisant (#777777 sur #FFFFFF échoue), liens vides ('cliquez ici'), missing alt attributes, et focus styles non visibles."
      }
    ]
  },
  {
    id: 4,
    title: "TypeScript 5.0 : Les Nouvelles Fonctionnalités",
    excerpt: "Découvrez les dernières améliorations apportées par TypeScript 5.0.",
    coverImage: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Tech",
    date: "2023-08-12",
    metaTitle: "TypeScript 5.0 - Nouveautés | TechBit",
    metaDescription: "Tour d'horizon des fonctionnalités majeures de TypeScript 5.0 pour les développeurs.",
    intro: "TypeScript 5.0 apporte des optimisations significatives et de nouvelles syntaxes pour améliorer l'expérience des développeurs. Voyons comment ces changements impactent votre workflow quotidien.",
    content: [
      {
        title: "Performances Accrues",
        level: 2,
        body: "Le temps de compilation est réduit de 30% grâce à une réécriture complète du compilateur. Les projets volumineux voient leur build time passer de 4.7s à 3.3s en moyenne."
      },
      {
        title: "Nouvelle Syntaxe Decorators",
        level: 2,
        body: "Les décorateurs standardisés ECMAScript sont maintenant supportés nativement, permettant une métaprogrammation plus propre et interopérable entre frameworks."
      },
      {
        title: "Améliorations Majeures",
        level: 3,
        body: "Le nouveau système de résolution de modules simplifie les imports, et le type 'const' permet des inférences plus précises pour les tableaux et objets immuables."
      }
    ]
  },
  {
    id: 5,
    title: "Les Bonnes Pratiques GraphQL en 2023",
    excerpt: "Guide complet pour concevoir des APIs GraphQL performantes et maintenables.",
    coverImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "API",
    date: "2023-07-22",
    metaTitle: "Best Practices GraphQL 2023 | TechBit",
    metaDescription: "Les standards actuels pour construire des APIs GraphQL optimisées.",
    intro: "GraphQL continue d'évoluer comme alternative aux REST APIs. Ce guide couvre les patterns éprouvés par les équipes de Netflix, GitHub et Shopify pour des APIs efficaces.",
    content: [
      {
        title: "Design de Schéma",
        level: 2,
        body: "Privilégiez les schémas modulaires avec des types spécifiques plutôt que des champs génériques. Exemple : préférez 'customerAddress' à un champ 'metadata' trop générique."
      },
      {
        title: "Optimisation des Performances",
        level: 2,
        body: "Implémentez le dataloader pour batch les requêtes et éviter les N+1 queries. Le lazy loading des fragments complexes peut réduire la payload de 40%."
      },
      {
        title: "Sécurité",
        level: 3,
        body: "Limitez la profondeur des queries (maxDepth: 7), implémentez le query cost analysis, et utilisez les persisted queries en production."
      }
    ]
  },
  {
    id: 6,
    title: "WebAssembly : Le Futur du Web Performant",
    excerpt: "Comment WASM révolutionne les applications web critiques en termes de performance.",
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Tech",
    date: "2023-09-05",
    metaTitle: "WebAssembly Applications Pratiques | TechBit",
    metaDescription: "Cas concrets d'utilisation de WebAssembly pour des gains de performance spectaculaires.",
    intro: "WebAssembly permet d'exécuter du code natif dans le navigateur à des vitesses proches du hardware. Découvrez comment l'utiliser pour des applications graphiques, scientifiques ou multimédias.",
    content: [
      {
        title: "Cas d'Usage Concrets",
        level: 2,
        body: "Figma gagne 3x en performance sur les gros documents en utilisant WASM. Photoshop Web utilise WASM pour les opérations sur calques, réduisant le temps de traitement de 60%."
      },
      {
        title: "Intégration avec JavaScript",
        level: 2,
        body: "Le WebAssembly.instantiateStreaming() permet un chargement progressif. La communication JS/WASM via SharedArrayBuffer est cruciale pour les applications multithread."
      },
      {
        title: "Outils Recommandés",
        level: 3,
        body: "Emscripten pour compiler du C/C++, Rust avec wasm-pack pour la toolchain complète, et AssemblyScript pour les développeurs frontend familiers avec TypeScript."
      }
    ]
  }
];

export default articles;