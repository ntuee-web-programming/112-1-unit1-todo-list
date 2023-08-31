import { db } from "../db.js";
import { v4 as uuid } from "uuid";

// Get all todos
export const getTodos = async (req, res) => {
  return res.status(200).json(db.todos);
};

// Create a todo
export const createTodo = async (req, res) => {
  const { title, description } = req.body;

  // check title and description
  if (!title || !description) {
    return res
      .status(400)
      .json({ message: "Title and description are required!" });
  }
  const todo = {
    id: uuid(),
    title,
    description,
    completed: false,
  };
  db.todos.push(todo);
  return res.status(201).json(todo);
};

// Update a todo
export const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  const todo = db.todos.find((todo) => todo.id === id);
  if (!todo) {
    return res.status(404).json({ message: "Todo not found!" });
  }

  // update the todo
  if (title !== undefined) todo.title = title;
  if (description !== undefined) todo.description = description;
  if (completed !== undefined) todo.completed = completed;

  return res.status(200).json(todo);
};

// Delete a todo
export const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const todoIndex = db.todos.findIndex((todo) => todo.id === id);

  // if not found
  if (todoIndex === -1) {
    // not found
    return res.status(404).json({ message: "Todo not found!" });
  }
  // delete 1 item from index
  db.todos.splice(todoIndex, 1);

  return res.status(200).json({ message: "Todo deleted!" });
};
