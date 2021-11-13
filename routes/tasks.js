import { Router } from 'express'
import * as tasksCtrl from '../controllers/tasks.js'
const router = Router()

router.get('/', isLoggedIn, tasksCtrl.index)
router.post('/', isLoggedIn, tasksCtrl.create)



function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

export {
  router
}