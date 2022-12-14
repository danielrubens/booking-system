import { Router } from "express";
import controller from '../controllers/hotel.js'

const router = Router()

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/', controller.insert)
router.delete('/:id', controller.remove)
router.put('/:id', controller.update)

export default router