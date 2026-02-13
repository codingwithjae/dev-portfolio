# Developer Portfolio

> [!NOTE]
> This project is a comprehensive **refactor** of a legacy portfolio originally built with strict **HTML**, **CSS**, and **Vanilla JavaScript**. The goal was to modernize the architecture while maintaining the original design's spirit.

## 📂 Project Structure

```bash
/
├── public/                 # Static assets (Favicons, images)
├── src/
│   ├── assets/            # Local images and icons
│   ├── components/
│   │   ├── pages/         # Page-specific building blocks
│   │   ├── sections/      # Large landing page sections (Hero, Footer, etc.)
│   │   ├── seo/           # SEO and Metadata components
│   │   └── ui/            # Reusable UI atoms (Buttons, Cards, Toasts)
│   ├── data/              # Static data and configuration
│   ├── layouts/           # Astro master layouts
│   ├── lib/
│   │   └── sanity/        # Sanity client, types, and data transforms
│   ├── pages/             # File-based routing (including /blog)
│   └── styles/            # Global Tailwind and CSS modules
├── astro.config.mjs       # Astro configuration
├── sanity.config.ts       # Sanity Studio configuration
└── package.json           # Dependencies and scripts

## 🛠️ Stack

-   **Framework**: [Astro 5](https://astro.build/) - For performance-first island architecture.
-   **Interactivity**: [React](https://reactjs.org/) - Selective hydration for interactive components.
-   **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Modern utility-first CSS.
-   **CMS**: [Sanity](https://www.sanity.io/) - Headless CMS for typed content management.
-   **Language**: [TypeScript](https://www.typescriptlang.org/) - End-to-end type safety.
-   **Deployment**: [Vercel](https://vercel.com/) - Edge computing and hosting.
```

## ⚡ Performance (PSI)

- **Mobile**: [90+ Overall](https://pagespeed.web.dev/analysis/https-developer-johandercampos-com/siupgqhtui?form_factor=mobile)
- **Desktop**: [100 Overall](https://pagespeed.web.dev/analysis/https-developer-johandercampos-com/siupgqhtui?form_factor=desktop)

## 🚀 Recent Changes
- **Modernized Architecture**: Migrated from a legacy Vanilla JS setup to Astro 5.
- **Dynamic Content**: Integrated Sanity CMS for easy project and blog management.
- **Enhanced Design**: Implemented a responsive, premium UI with Tailwind CSS 4 and glassmorphism.
