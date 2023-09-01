import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.js";
import express from "express";

// Create an express router
const router = express.Router();

// Every path we define here will get /api/todos prefix
// To make code even more cleaner we can wrap functions in `./controllers` folder

// GET /api/todos
router.get("/", getTodos);
// POST /api/todos
router.post("/", createTodo);
// PUT /api/todos/:id
router.put("/:id", updateTodo);
// DELETE /api/todos/:id
router.delete("/:id", deleteTodo);

// export the router
export default router;
