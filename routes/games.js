import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/* GET users listing. */
router.get('/', isLoggedIn, gamesCtrl.index)
router.post('/', isLoggedIn, gamesCtrl.create)
router.get('/:id', isLoggedIn, gamesCtrl.show)
router.put('/:id', isLoggedIn, gamesCtrl.update)
router.delete('/:id', isLoggedIn, gamesCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}