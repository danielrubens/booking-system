import { Router } from "express";
import Authorize from '../utils/Authorize.js'
import controller from '../controllers/user.js'

const router = Router()

router.get('/', Authorize.admin, controller.getAll)
router.get('/:id', Authorize.user, controller.getById)
router.delete('/:id', Authorize.user, controller.remove)
router.put('/:id', Authorize.user, controller.update)

export default router