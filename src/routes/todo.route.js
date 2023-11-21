const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.controller");

// Get all todos
router.get("/todos", todoController.getAllTodos);

// Add a new todo
router.post("/todos", todoController.addTodo);

// Update todo position and status
router.put("/todos/:id", todoController.updateTodo);

module.exports = router;
