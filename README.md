# 112-1-unit1

## API documentation

- GET `/api/todos`

```json
[
  {
    "id": 1
    "title": "todo 1",
    "completed": false
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
