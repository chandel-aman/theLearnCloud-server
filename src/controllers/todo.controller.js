const TodoItem = require("../models/todo.model");

// Get all todos
exports.getAllTodos = async (req, res) => {
  try {
    const todos = await TodoItem.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Add a new todo
exports.addTodo = async (req, res) => {
  const { id, title, checked, status, index } = req.body;
  const newTodo = new TodoItem({ id, title, checked, status, index });

  try {
    const savedTodo = await newTodo.save();
    res.json(savedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update todo position and status
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const { status, index } = req.body;

  try {
    const updatedTodo = await TodoItem.findById(id);
    updatedTodo.status = status;
    updatedTodo.index = index;
    await updatedTodo.save();
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
