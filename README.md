# Web Platform Version 1

Used for monitoring and controlling monkey robots in the plantation.
The current version uses uses fullstack javascript webframework called Nuzt 3 to build the platform
Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Why Nuxt?
Nuxt js is chosen by comparing the three most popular fullstack javascript webframeworks, which are Next js (React), sveltekit, Nuxt js (vue) 

1) Nuxt is faster than react apps and next js apps due to its lighter bundle size but its slower than sveltekit due its virtual DOM
2) Second largest community size after next js, clear documentation available
3) Better in-built state management and routing compared to sveltekit 
4) Can deploy on various platforms

## Setup
Make sure to install the dependencies:

Currently node compiler used is pnpm, so to install dependencies run

```bash

# pnpm
pnpm install

```

## Development Server

Start the development server on `http://localhost:3000`:

```bash

# pnpm
pnpm run dev

```

## Production

Build the application for production:

```bash

# pnpm
pnpm run build

```

Locally preview production build:

```bash

# pnpm
pnpm run preview

```
Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Roadmap
### Core-features
1) Configure database connection & ORM 
2) Intregate authentication to the web platform. To be integrated User sign-in, sign-up, forget password functionalities
3) Show Rover location on map based on GPS cordinatates received from the gateway
4) Build backend server to extract required info from the database and send to platform buil
5) show trees, charging station and other land marks on the map from the plantation api
4) show rover information such as battery level, temp, health on charts from rover api
5) Stream real time location instead loading the page. either using web socket aproach or redis streams
6) Add options menu the to the map
7) Make web app multi-screen. For Laptop and tablet screens
8) Show different maps

### Product-Roadmap
1) Integrate core-features that doesnt require backend server
2) Make the database relationship diagram & backend server
3) Integrate the rest of the core features
4) Convert the web app to a native app or a PWA (progressive web app)

## Authors
- [@iyadhali](https://github.com/iyadhali)

