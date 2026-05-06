# Lokesh Portfolio

Personal portfolio website for Lokesh Reddy, built with React and Vite.

Live site:
https://lokisdp.github.io/lokesh_portfolio/

## Features

- Responsive portfolio homepage
- Hero section with CV, GitHub, and LinkedIn links
- Skills, experience, projects, and contact sections
- Reveal animations and floating UI controls
- Loki portfolio chatbot with guided questions, quick actions, and local knowledge base
- Back-to-top floating button
- GitHub Pages deployment setup

## Tech Stack

- React
- Vite
- React Router
- React Icons
- GitHub Pages

## Local Development

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

The project is configured for GitHub Pages using the `gh-pages` package.

Deploy:

```bash
npm run deploy
```

The Vite base path is configured for:

```text
/lokesh_portfolio/
```

Routing uses `HashRouter` so page refreshes work correctly on GitHub Pages.

## Project Structure

```text
src/
  components/
  data/
  pages/
  index.css
public/
  cv/
  illustrations/
  logos/
```

## Loki Chatbot

Loki is a local portfolio chatbot. Its responses are driven by:

```text
src/data/lokiKnowledge.js
```

It can answer questions about Lokesh's roles, skills, experience, projects, industries, contact details, hobbies, availability, and profile fit.
