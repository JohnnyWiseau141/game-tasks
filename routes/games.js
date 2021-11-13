import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/* GET users listing. */
router.get('/', isLoggedIn, gamesCtrl.index)
router.get('/:id', isLoggedIn, gamesCtrl.show)
router.delete('/:id', isLoggedIn, gamesCtrl.delete)
router.put('/:id', isLoggedIn, gamesCtrl.update)
router.post('/', isLoggedIn, gamesCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}