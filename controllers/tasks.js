import { Task } from "../models/task.js";

function index(req, res) {
  Task.find({}, function(err, tasks) {
    res.render('tasks/index', {
      title: 'Tasks',
      tasks,
      user: req.user ? req.user : null
    })
  })
}

export {
  index
}