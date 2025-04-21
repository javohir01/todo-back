const Todo = require('../models/Todo');

exports.getTodos = async (req, res) => {
  const todos = await Todo.find({ user: req.user.id });
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const newTodo = new Todo({
    user: req.user.id,
    text: req.body.text,
  });
  const saved = await newTodo.save();
  res.json(saved);
};

exports.updateTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo || todo.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not allowed' });

  todo.completed = req.body.completed;
  await todo.save();
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo || todo.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not allowed' });

  await todo.deleteOne();
  res.json({ msg: 'Deleted' });
};
