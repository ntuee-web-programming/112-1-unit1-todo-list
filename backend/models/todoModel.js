import mongoose from "mongoose";

// Create a schema
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create a model
const TodoModel = mongoose.model("Todo", todoSchema);

export default TodoModel;
