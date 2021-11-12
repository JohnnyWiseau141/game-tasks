import { Game } from "../models/game.js";

function index(req, res) {
  Game.find({}, function(err, games) {
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
    res.render('games/show', {
      game,
      title: 'Game Detail',
      user: req.user ? req.user : null
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