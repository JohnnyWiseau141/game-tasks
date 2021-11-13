import { Task } from "../models/task.js"

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
  Task.create(req.body, function(err) {
    console.log(err)
    res.redirect('/tasks')
  })
}

function show(req, res) {
  Task.findById(req.params.id, function(err, task) {
    res.render('tasks/show', {
      title: 'Task Edit',
      task,
      user: req.user
    })
  })
}

function update(req, res) {
  req.body.complete = !!req.body.complete
  Task.findByIdAndUpdate(req.params.id, req.body, function(err, task) {
    console.log(err)
    res.redirect('/tasks')
  })
}


export {
  index,
  create,
  show,
  update
}