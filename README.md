# Frontend Challenge: AniSearch

![AniSearch Screenshot](/public/challenge.jpg)

## AniList GraphQL API

- Endpoint: `https://graphql.anilist.co`
- No authentication required
- [API Docs](https://anilist.gitbook.io/anilist-apiv2-docs)

---

## Overview

You are given a Nuxt 3 app with **static hardcoded HTML** across two pages — a search page and a watchlist page. Your job is to make it fully dynamic and functional.

**Time limit: 90 minutes**

---

## User Stories

- As a user, I want to **search for anime** by name so I can discover new shows
- As a user, I want to **see search results** displayed as cards with cover image, title, score, format, episode count, status, and genres
- As a user, I want to **add anime to my watchlist** so I can keep track of what I want to watch
- As a user, I want to **remove anime from my watchlist** when I no longer want to track them
- As a user, I want my **watchlist to persist** when I navigate between pages
- As a user, I want to **see the watchlist count** in the navigation bar

---

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`. You should see the app with static content on both pages.

Run the tests:

```bash
npm test
```

---

## Tech Stack

- **Nuxt 3** — Vue 3 framework with file-based routing and auto-imports
- **Tailwind CSS** — Utility-first CSS framework
- **Apollo Client** — GraphQL client pre-configured for the AniList API (`@nuxtjs/apollo`)
- **Vitest** — Unit testing framework with Vue Test Utils
- **TypeScript**

---

## Requirements and submission guidelines

- Build your solution within the existing Nuxt 3 scaffold provided;
- You are free to install any additional third-party libraries;
- Code and commit messages should be treated as you would on a real-world task;
- Please take some time to think about code quality and testing;
    - The existing test should pass once you've built your components;
    - Add additional tests as you see fit;
- Make sure `npm run dev` and `npm test` both work before submitting.

---

## Challenge assessment

- Clean code and general code structure;
- Code quality (testing and maintainability);
- UI Design;

---

Good luck!
