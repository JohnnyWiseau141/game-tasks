import { Game } from "../models/game.js";
import { Task } from "../models/task.js"

function index(req, res) {
  Game.find({collectedBy: req.user.profile._id}, function(err, games) {
    res.render('games/index', {
      title: 'Games',
      games,
      user: req.user ? req.user : null
    })
  })
}

function create(req, res) {
  req.body.complete = !!req.body.complete
  const game = new Game(req.body)
  game.save(function(err) {
    console.log(err)
    res.redirect('/games')
  })
}

function show(req, res) {
  Game.findById(req.params.id, function(err, game) {
    Task.find({ game: game._id }, function(err, tasks) {
      res.render('games/show', {
        game,
        tasks,
        title: 'Game Edit',
        user: req.user ? req.user : null
      })
    })
  })
}

function update(req, res) {
  req.body.complete = !!req.body.complete
  Game.findByIdAndUpdate(req.params.id, req.body, function(err, game) {
    console.log(err)
    res.redirect('/games')
  })
}

function deleteGame(req, res) {
  Game.findByIdAndDelete(req.params.id, function(err, game) {
    console.log(err)
    res.redirect('/games')
  })
}

export {
  index,
  create,
  show,
  update,
  deleteGame as delete
}