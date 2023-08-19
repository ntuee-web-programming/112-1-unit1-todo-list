# 112-1-unit1

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

## Backend Setup
### 1. Create a backend directory and initialize a new Node.js project
```bash 
mkdir backend
cd backend
yarn init -y
```
### 2. Add some lines in `package.json`
```json
{
  ...
  "types": "module",
  "scripts": {
    "start": "nodemon index.js",
  },
  ...
}
```
### 3. Environment variables setting:
* In `/backend` directory, create a file named `.env`
* Add some lines in `.env`
  ```bash
  PORT=5000
  ```
  Remember to add `.env` to `.gitignore` file. This is to prevent sensitive information from being exposed.

### 4. Install dependencies
```bash
cd backend
yarn add express cors body-parser uuidv4
```
Remember to add `node_modules` to `.gitignore` file. This is because dependency files are large and not necessary to be uploaded to GitHub. You can always install dependencies by `yarn install` or `npm install` when you clone the project.

### 5. Run the server
```bash
cd backend
yarn start
```
If successful, you should see the following message in the terminal:
```bash
Server is running on port http://localhost:5000
```
Next time you can just have to run `yarn start` to start the server. Step 1-4 are only needed for the first time.

