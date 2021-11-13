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

function create(req, res) {
  req.body.complete = !!req.body.complete
  const task = new Task(req.body)
  task.save(function(err) {
    console.log(err)
    res.redirect('/tasks')
  })
}


export {
  index,
  create,
}