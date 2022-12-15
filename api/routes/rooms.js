import { Router } from "express";
import Authorize from '../utils/Authorize.js'
import controller from '../controllers/room.js'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/:hotelid', Authorize.admin, controller.insert)
router.delete('/:id', Authorize.admin, controller.remove)
router.put('/:id', Authorize.admin, controller.update)

export default router