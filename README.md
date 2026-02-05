# Anthuan Vásquez | Senior Full-Stack Engineer

Personal website of Anthuan Vásquez, a Senior Full-Stack Engineer. This project showcases a modern portfolio built with Nuxt 3, featuring internationalization, interactive maps, and an AI-powered chatbot.

## Features

- **⚡ Nuxt 3:** Built on the latest Vue 3 framework for high performance and developer experience.
- **🎨 Tailwind CSS & Nuxt UI:** Modern, responsive, and accessible UI components.
- **🌐 Internationalization (i18n):** Full support for English (en-US) and Spanish (es-ES).
- **🗺️ Interactive Map:** Integrated with Mapbox for location visualization.
- **🤖 AI Chatbot:** A conversational agent powered by Groq and LangChain to answer questions about Anthuan's experience.
- **✅ Testing:** Unit and component testing with Vitest.
- **🧹 Code Quality:** Enforced with ESLint and Prettier.

## Tech Stack

- **Framework:** [Nuxt 3](https://nuxt.com/)
- **UI:** [Tailwind CSS](https://tailwindcss.com/) / [Nuxt UI](https://ui.nuxt.com/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **State Management:** Nuxt Composables
- **Maps:** [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/api/) / [nuxt-mapbox](https://nuxt-mapbox.vercel.app/)
- **AI/LLM:** [LangChain](https://js.langchain.com/) / [Groq](https://groq.com/)
- **Testing:** [Vitest](https://vitest.dev/)

## Prerequisites

- **Node.js:** v18 or higher
- **Package Manager:** [pnpm](https://pnpm.io/) (recommended)

## Setup

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd anthuanvasquez.net
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Configure Environment Variables:**

   Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

   Update the `.env` file with your API keys:

   ```env
   BASE_URL=http://localhost:3000
   MAPBOX_TOKEN=your_mapbox_token
   GROQ_API_KEY=your_groq_api_key
   ```

## Development

Start the development server:

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`.

## Building for Production

Build the application for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Testing & Linting

Run unit tests:

```bash
pnpm test
```

Run linter:

```bash
pnpm lint
```

## Project Structure

- `app/` - Application source code (pages, components, composables).
- `server/` - Server-side API routes (including Chatbot logic).
- `i18n/` - Internationalization configuration and translation files.
- `public/` - Static assets.
