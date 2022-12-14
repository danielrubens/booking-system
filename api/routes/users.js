import { Router } from "express";
import Token from '../utils/verifyToken.js'
import controller from '../controllers/user.js'

const router = Router()

router.get('/', Token.verifyAdmin, controller.getAll)
router.get('/:id', Token.verifyUser, controller.getById)
router.delete('/:id', Token.verifyUser, controller.remove)
router.put('/:id', Token.verifyUser, controller.update)

export default router