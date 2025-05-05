const express = require('express');
const taskRouter = express.Router();
const auth = require('../middleware/auth');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');

taskRouter.get('/', auth, getTasks);
taskRouter.post('/', auth, createTask);
taskRouter.put('/:id', auth, updateTask);
taskRouter.delete('/:id', auth, deleteTask);

module.exports = taskRouter;