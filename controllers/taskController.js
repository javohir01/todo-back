const Task = require('../models/Task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  console.log(req.body)
  const newTask = new Task({
    user: req.user.id,
    text: req.body.text,
  });
  const saved = await newTask.save();
  res.json(saved);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not allowed' });

  task.completed = req.body.completed;
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not allowed' });

  await task.deleteOne();
  res.json({ msg: 'Deleted' });
};
