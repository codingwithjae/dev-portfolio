# Developer Portfolio

> [!NOTE]
> This project is a comprehensive **refactor** of a legacy portfolio originally built with strict **HTML**, **CSS**, and **Vanilla JavaScript**. The goal was to modernize the architecture while maintaining the original design's spirit.

## 📂 Project Structure

```bash
/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Optimized images and local assets
│   ├── components/
│   │   ├── head/          # Head elements (SEO, Meta)
│   │   ├── pages/         # Page-specific components (Logic separation)
│   │   ├── sections/      # Landing page sections (Hero, About, etc.)
│   │   └── ui/            # Reusable UI components (Buttons, Cards, Toasts)
│   ├── data/              # Static site data
│   ├── layouts/           # Astro layouts
│   ├── pages/             # File-based routing
│   │   ├── blog/          # Blog routes
│   │   └── index.astro    # Main entry point
│   ├── sanity/            # Sanity CMS configuration and schemas
│   ├── styles/            # Global styles
│   └── types/             # TypeScript definitions
├── astro.config.mjs       # Astro configuration
├── sanity.config.ts       # Sanity Studio configuration
└── tailwind.config.mjs    # Tailwind configuration
```

## 🛠️ Stack

This project leverages a modern Jamstack architecture:

-   **Framework**: [Astro](https://astro.build/) - For performance-first static site generation.
-   **Interactivity**: [React](https://reactjs.org/) - Used in "Islands" for complex interactive components (Forms, Toasts).
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
-   **CMS**: [Sanity](https://www.sanity.io/) - Headless CMS for managing dynamic content (Projects, Blog, Skills).
-   **Language**: [TypeScript](https://www.typescriptlang.org/) - For type safety and better developer experience.
-   **Deployment**: [Vercel](https://vercel.com/) - Hosting and CI/CD.
