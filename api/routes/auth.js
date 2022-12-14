import { Router } from "express";
import controller from '../controllers/auth.js'

const router = Router()

router.get('/', controller.register)

export default router