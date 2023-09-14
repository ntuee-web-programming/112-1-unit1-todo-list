# 112-1-unit1-todo-list

This repository is for the first and second week of the course.
In the first week, we will build a simple todo list app with pure JavaScript and Node.js Express.
In the second week, we will add MongoDB to the app, and we will also introduce Axios, a powerful HTTP client for the browser and Node.js.

## API documentation

- GET `/api/todos`

```json
[
  {
    "id": "69862077-f127-45a0-9cb2-39fa73592aca",
    "title": "todo 1",
    "completed": false,
    "description": "todo 1 description"
  }
]
```

- GET `/api/todos/:id`

```json
{
  "id": "69862077-f127-45a0-9cb2-39fa73592aca",
  "title": "todo 1",
  "completed": false,
  "description": "todo 1 description"
}
```

- POST `/api/todos`

```json
{
  "title": "todo 1",
  "completed": false,
  "description": "todo 1 description"
}
```

- PUT `/api/todos/:id`

```json
{
  "id": "69862077-f127-45a0-9cb2-39fa73592aca",
  "title": "todo 1",
  "completed": false,
  "description": "todo 1 description"
}
```

- DELETE `/api/todos/:id`

```json
{
  "id": "69862077-f127-45a0-9cb2-39fa73592aca",
  "title": "todo 1",
  "completed": false,
  "description": "todo 1 description"
}
```

## Run the project

If you only want to run the project, you can follow the steps below.

### 1. Clone the project

```bash
git clone https://github.com/ntuee-web-programming/112-1-unit1-todo-list.git
```

### 2. Install dependencies

```bash
cd backend
yarn
```

### 3. Run the server

```bash
yarn start
```

### 4. Open the frontend

Open `frontend/index.html` by clicking it in your file explorer.

Or if you're on ubuntu, you can run the following command to open it in your browser.

```bash
cd frontend
xdg-open index.html
```

If you're on macOS, you can run the following command to open it in your browser.

```bash
cd frontend
open index.html
```

## Frontend eslint and prettier Setup

### 1. Create a frontend directory and initialize a new Node.js project for eslint and prettier

```bash
mkdir frontend
cd frontend
yarn init -y
```

### 2. Install eslint and prettier

eslint is a tool for identifying and reporting on patterns found in your code, with the goal of making code more consistent and enforce best practices. On the other hand, prettier code formatter. It only cares about the format but not the logic. However, eslint would also try to fix some minor formatting issues, so we need eslint-config-prettier to disable the eslint rules that may conflict with those of prettier.

```bash
yarn add -D eslint prettier eslint-config-prettier
```

### 3. configure eslint and prettier

eslint come with a built-in command to create a config file to provide a good starting point. You can run the following command to create a `.eslintrc.js` file. You'll be prompted several questions about your project. For this project, answer these questions like so.

```text
$ yarn eslint --init
You can also run this command directly using 'npm init @eslint/config'.
? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems # choose this one
  To check syntax, find problems, and enforce code style
? What type of modules does your project use? …
  JavaScript modules (import/export)
  CommonJS (require/exports)
❯ None of these # choose this one
? Which framework does your project use? …
  React
  Vue.js
❯ None of these # choose this one
? Does your project use TypeScript? › No / Yes # choose No
? What format do you want your config file to be in? …
❯ JavaScript # choose this one
  YAML
  JSON
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser # select this one
✔ Node
```

After answering all the questions, you should see a `.eslintrc.js` file in your project directory. Open it and change the `extends` option. The final `.eslintrc.js` would look like this:

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["eslint:recommended", "prettier"], // change this line
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};
```

For prettier, create a `.prettierrc.cjs` file in your project directory and add the following lines:

```javascript
module.exports = {};
```

### 3. Add scripts

Add the following lines in `package.json` file:

```json
{
...
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint --fix .",
    "format": "prettier --write ."
  },
...
}
```

Now you can run `yarn lint` to check your code style and `yarn lint:fix` to fix some minor issues. You can also run `yarn format` to format your code.

## Backend eslint and prettier Setup

The eslint setup step are similar to the frontend setup. The only difference is that you should answer the questions differently when running `yarn eslint --init`.

```text
$ yarn eslint --init
You can also run this command directly using 'npm init @eslint/config'.
? How would you like to use ESLint? …
  To check syntax only
❯ To check syntax and find problems # choose this one
  To check syntax, find problems, and enforce code style
? What type of modules does your project use? …
❯ JavaScript modules (import/export) # choose this one
  CommonJS (require/exports)
  None of these
? Which framework does your project use? …
  React
  Vue.js
❯ None of these # choose this one
? Does your project use TypeScript? › No / Yes # choose No
? What format do you want your config file to be in? …
❯ JavaScript # choose this one
  YAML
  JSON
? Where does your code run? …  (Press <space> to select, <a> to toggle all, <i> to invert selection)
✔ Browser
✔ Node # select this one
```

The prettier setup for backend is different from that of the frontend package. Follow the steps below to setup prettier for backend. We will use "@trivago/prettier-plugin-sort-imports" to sort imports.

### 1. Install prettier and "@trivago/prettier-plugin-sort-imports"

```bash
yarn add -D prettier @trivago/prettier-plugin-sort-imports
```

### 2. Create a `.prettierrc.cjs` file in your project directory and add the following lines:

```javascript
module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: [
    "^react",
    "^next",
    "<THIRD_PARTY_MODULES>",
    "^@w+\\w",
    "^@\\w",
    "^./",
  ],
  importOrderSeparation: true,
};
```

## Frontend Setup

### 1. Create html, css, and js files (week 1)

```bash
mkdir frontend
cd frontend
touch index.html style.css script.js
```

### 2. Add some lines in `index.html` (week 1)

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body></body>
</html>
```

### 3. Import css and js files in `index.html` (week 1)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css" />
    <script defer src="index.js"></script>
  </head>
  <body></body>
</html>
```

### 4. Run frontend (week 1)

Simply click `index.html` in your file explorer to open it in your browser.

### 5. Install dependencies (week 2)

We need to install `axios` to make HTTP requests to the backend server. Add the following line in the `head` tag in `index.html` file. Find the latest version of `axios` [here](https://cdnjs.com/libraries/axios).

```html
<head>
  ...
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.5.0/axios.min.js"
    integrity="sha512-aoTNnqZcT8B4AmeCFmiSnDlc4Nj/KPaZyB5G7JnOnUEkdNpCZs1LCankiYi01sLTyWy+m2P+W4XM+BuQ3Q4/Dg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
</head>
```

## Backend Setup

### 1. Create a backend directory and initialize a new Node.js project (week 1)

```bash
mkdir backend
cd backend
yarn init -y
```

### 2. Add some lines in `package.json` (week 1)

If you already have the `scripts` field in `package.json`, add `"start": "nodemon index.js"` to the `scripts` field. Otherwise, add the following lines in `package.json` file.

```json
{
  ...
  "type": "module",
  "scripts": {
    "start": "nodemon index.js",
  },
  ...
}
```

### 3. Environment variables setting (week 1)

- In `/backend` directory, create a file named `.env`
- Add some lines in `.env`
  ```bash
  PORT=8000
  ```
  Remember to add `.env` to `.gitignore` file. This is to prevent sensitive information from being exposed.

### 4. Install dependencies (week 1)

```bash
cd backend
yarn add express cors body-parser uuid
```

Remember to add `node_modules` to `.gitignore` file. This is because dependency files are large and not necessary to be uploaded to GitHub. You can always install dependencies by `yarn install` or `npm install` when you clone the project.

### 5. Run the server (week 1)

```bash
cd backend
yarn dev
```

If successful, you should see the following message in the terminal:

```bash
Server is running on port http://localhost:8000
```

Next time you can just have to run `yarn start` to start the server. Step 1-4 are only needed for the first time.

### 6. MongoDB setup (week 2)

1. See this awesome tutorial: https://youtu.be/O5cmLDVTgAs?si=CNNLtl9m7kX7GbFh (2:01:08 - 2:03:00)
2. Copy the connection string.
3. Add the following line in `backend/.env` file

```bash
MONGO_URL=<your connection string>
```

4. Install dependencies

```bash
cd backend
yarn add mongoose
```
