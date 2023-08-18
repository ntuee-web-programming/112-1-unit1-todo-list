const itemTemplate = document.querySelector("#todo-item-template");
const todoList = document.querySelector("#todos");

const todos = [
  {
    id: uuid(),
    title: "Todo 1",
    description: "This is the first todo",
    completed: false,
  },
  {
    id: uuid(),
    title: "Todo 2",
    description: "This is the second todo",
    completed: true,
  },
];

function main() {
  setupEventListeners();
  todos.forEach((todo) => {
    renderTodoItem(todo);
  });
}

function setupEventListeners() {
  const addTodoButton = document.querySelector("#todo-add");
  const todoInput = document.querySelector("#todo-input");
  const todoDescriptionInput = document.querySelector(
    "#todo-description-input"
  );
  addTodoButton.addEventListener("click", () => {
    if (!todoInput.value) {
      alert("Please enter a todo title!");
      return;
    }
    const todo = {
      id: uuid(),
      title: todoInput.value,
      description: todoDescriptionInput.value,
      completed: false,
    };
    todoInput.value = "";
    todoDescriptionInput.value = "";
    renderTodoItem(todo);
  });
}

function deleteTodoItem(id) {
  const todo = document.getElementById(id);
  todo.remove();
  console.log(`Deleted todo with id: ${id}`);
}

function renderTodoItem(todo) {
  const item = createTodoItem(todo);
  todoList.appendChild(item);
}

function createTodoItem(todo) {
  const item = itemTemplate.content.cloneNode(true);
  const container = item.querySelector(".todo-item");
  container.id = todo.id;
  const checkbox = item.querySelector(`input[type="checkbox"]`);
  checkbox.checked = todo.completed;
  checkbox.dataset.id = todo.id;
  const title = item.querySelector("p.todo-title");
  title.innerText = todo.title;
  const description = item.querySelector("p.todo-description");
  description.innerText = todo.description;
  const deleteButton = item.querySelector("button.delete-todo");
  deleteButton.dataset.id = todo.id;
  deleteButton.addEventListener("click", () => {
    deleteTodoItem(todo.id);
  });
  return item;
}

function uuid() {
  return crypto.randomUUID();
}

main();
