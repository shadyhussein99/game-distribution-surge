## Tech-Stack used

- Next.js 15+ with App Router
- tailwindcss
- Zustand (for Global State Management)

## Key Features

- Games list with categories filtering (allows multi-select)
- Games filtering Search
- Detailed game page with iframe and "Similar games" section (according to Category)
- Favorite Games section

## Tech Features

- SEO optimization using metadata for each page and dynamic metadata for single game page to display each game title dynamically which enhances SEO (Note: take a look at the tab title)
- Using custom hook for favorite games and iframe logic to abstract complex logic
- Minimize the use of Client Side Rendering components to enhance performance and SEO
- CI/CD pipeline to ensure unit tests succeed before merging to "main" branch and block merging if it fails (with little unit tests just for POC)

## If I have more time

- Add more unit tests
- Implement E2E testing

## Installation

To run the chrome extention locally, use the following commands

`git clone https://github.com/shadyhussein99/game-distribution-surge`

Install the dependencies

`pnpm install`

Run the application

`pnpm dev`

## Deployment Link

https://vercel.com/shadyhussein99s-projects/game-distribution-surge



