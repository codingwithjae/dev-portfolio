# Professional Developer Portfolio 🚀

A high-performance, visually stunning developer portfolio built with a modern tech stack centered around **Astro**, **React**, and **Sanity CMS**.

![Thumbnail Preview](file:///home/johander/dev-projects/portfolio/developer/public/images/thumbnail-preview.webp)

## ✨ Features

-   **Ultrafast Performance**: Built with Astro for minimal client-side JavaScript.
-   **SSR Migration**: Fully migrated to Server-Side Rendering (SSR) for real-time content updates.
-   **Glassmorphism UI**: High-end aesthetic with custom linear gradients, inset shadows, and "Aurora" background effects.
-   **Sanity CMS Integration**: Manage blog posts, hero content, skills, and contact info via an embedded Studio.
-   **Theme System**: Persistent dark/light mode with a synchronized MutationObserver system.
-   **Dynamic Tickers**: Custom-built vertical skill ticker using React hooks and Framer Motion.
-   **Type-Safe**: Developed with strict TypeScript for maximum reliability.

## 🛠️ Tech Stack

-   **Framework**: [Astro v5](https://astro.build/)
-   **UI Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **CMS**: [Sanity.io](https://www.sanity.io/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Deployment**: [Vercel](https://vercel.com/) (SSR Adapter)
-   **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### 1. Prerequisites

-   Node.js v20 or higher
-   pnpm (recommended)

### 2. Installation

```bash
# Clone the repository
git clone https://github.com/jaedevgithub/myPortfolio.git

# Install dependencies
pnpm install
```

### 3. Environment Variables

Create a `.env` file in the root directory:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
PUBLIC_EMAILJS_SERVICE_ID=your_id
PUBLIC_EMAILJS_TEMPLATE_ID=your_id
PUBLIC_EMAILJS_API_KEY=your_key
```

### 4. Local Development

```bash
# Start Astro dev server
pnpm dev

# Start Sanity Studio (embedded)
# Access at http://localhost:4321/admin
```

---

## 🏗️ Architecture & Logic

### Data Fetching (`src/lib/sanity.ts`)

Centralized functions for interacting with Sanity. Fully documented with TSDoc.

```ts
/**
 * Example: Fetching featured posts
 */
const featuredPosts = await getFeaturedBlogPosts();
```

### Custom Hooks (`src/hooks/`)

The project utilizes several specialized hooks for state management:

-   `useTheme`: Manages dark/light mode persistence and cross-component synchronization.
-   `useToast`: A global, event-driven notification system.
-   `useSkillTicker`: Logic for the infinite vertical skill rotation.
-   `useContactForm`: Form validation and EmailJS integration.

### Embedded Sanity Studio

Access the integrated CMS at `/admin`. Changes made here are reflected instantly on the site thanks to the SSR configuration.

---

## 📖 Component Documentation

### `BlogCard.astro`

Displays an article summary with optimized Sanity images.

**Props:**
-   `title` (string): Article title.
-   `excerpt` (string): Short summary.
-   `slug` (string): URL path.
-   `coverImage` (SanityImageSource): Reference from Sanity.

### `SkillCard.tsx` (React)

An animated card featuring a rotating ticker of skills.

---

## 🖼️ Design System

The UI follows a **Glassmorphism** approach:
-   **Backdrop Blur**: `5px` to `15px` depending on depth.
-   **Border Effects**: Inset shadows and subtle gradients to simulate glass edges.
-   **Aurora Orbs**: Dynamic background blurs that adjust opacity between themes.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Johander Campos** - Front End Developer
-   Portfolio: [johandercampos.com](https://developer.johandercampos.com)
-   Frontend Mentor: [@jaegit123](https://www.frontendmentor.io/profile/jaegit123)
