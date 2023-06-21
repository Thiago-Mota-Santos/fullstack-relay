# Turborepo Tailwind CSS starter

This is an official starter Turborepo.

## Using this example

Run the following command:

```sh
npx create-turbo@latest -e with-tailwind
```

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `web`: another [Next.js](https://nextjs.org/) app with [Tailwind CSS](https://tailwindcss.com/)
- `ui`: a stub React component library with [Tailwind CSS](https://tailwindcss.com/) shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### How to use

- Node.js
  ```sh
  https://nodejs.org/en/download/
  ```
- yarn
  ```sh
  npm install yarn -g
  ```
- MongoDB
  ```sh
  https://www.mongodb.com/docs/manual/installation/
  ```

### Installation

Clone the repo

```sh
git clone https://github.com/Thiago-Mota-Santos/fullstack-relay.git
```
1. Install packages
   ```sh
   yarn install
   ```
2. Copy the .env.example
   ```sh
   yarn copy-env
   ```
3. Fill the .env file
   ```sh
   PORT=
   JWT_SECRET=
   MONGO_URI=
   ```
4. Start the server
   ```sh
   yarn dev
   ```

<p align="right">(<a href="#top">back to top</a>)</p>


### Utilities

This Turborepo has some additional tools already setup for you:

- [Tailwind CSS](https://tailwindcss.com/) for styles
- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
