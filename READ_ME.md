# Citadel.Hub // C-137

An interdimensional field guide for browsing Rick and Morty characters, locations, and episodes. The site pairs a dark, terminal-inspired interface with data from the Rick and Morty API.

## Screenshots

<!-- Screenshot: replace this comment with an image. Suggested capture: the home page hero, character carousel, and locations section. -->

<!-- Screenshot: replace this comment with an image. Suggested capture: the Characters & Clones directory, showing the subject cards. -->

<!-- Screenshot: replace this comment with an image. Suggested capture: a character profile with its portrait and origin details. -->

<!-- Screenshot: replace this comment with an image. Suggested capture: the episode archive, including episode cards and pagination. -->

## Features

- Home page with a featured character carousel and a selection of mapped locations.
- Character directory and individual profiles with status, species, origin, and dimension details.
- Episode archive with page navigation.
- Responsive layout and shared site navigation.
- Rick and Morty data fetched from the public GraphQL API.

## Tech stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Apollo Client and GraphQL

## Getting started

### Requirements

- Node.js and npm

### Install and run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Start the production server after building. |
| `npm run lint` | Run ESLint. |

## Pages

| Route | Description |
| --- | --- |
| `/` | Home page with featured characters and locations. |
| `/characters` | Character directory. |
| `/characters/[id]` | Details for an individual character. |
| `/episodes` | Episode archive, with pagination through the `page` query parameter. |

## Data

Character and episode records are requested from the [Rick and Morty API](https://rickandmortyapi.com/) using GraphQL. The featured location entries are maintained locally in `lib/data.ts`. An internet connection is needed for API-backed content.

## Project structure

```text
app/          App Router pages and global styles
components/   Shared interface components
graphql/      Apollo Client setup and GraphQL queries
lib/          Local display data
public/       Static assets
```

This is an independent fan-made project and is not affiliated with the creators or rights holders of Rick and Morty.
