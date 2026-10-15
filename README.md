# Citadel.Hub // C-137

An interdimensional field guide for browsing Rick and Morty characters, locations, and episodes. The site pairs a dark, terminal-inspired interface with data from the Rick and Morty API.

## Screenshots

![image](https://github.com/user-attachments/assets/71ce2f11-6da0-4972-88e6-ad5e1300f584)

![image](https://github.com/user-attachments/assets/dc66f52d-33ca-4b37-ab12-d0df3949ee20)

![image](https://github.com/user-attachments/assets/6c068f48-5f62-4bae-81fe-38282653848b)

![image](https://github.com/user-attachments/assets/28a998cf-2e96-4320-b994-06fb19d3d362)

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
