import { Router } from 'express'
import * as gamesCtrl from '../controllers/games.js'
const router = Router()

/* GET users listing. */
router.get('/', gamesCtrl.index)
router.get('/:id', gamesCtrl.show)
router.delete('/:id', gamesCtrl.delete)
router.put('/:id', gamesCtrl.update)
router.post('/', gamesCtrl.create)

export {
  router
}