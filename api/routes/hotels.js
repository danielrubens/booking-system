import { Router } from "express";
import Token from '../utils/verifyToken.js'
import controller from '../controllers/hotel.js'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', Token.verifyAdmin, controller.insert)
router.delete('/:id', Token.verifyAdmin, controller.remove)
router.put('/:id', Token.verifyAdmin, controller.update)

export default router