import { Router } from "express";

const router = Router()

router.post('/', (req, res) => {
    
})
router.get('/', (req, res) => {
    res.send("Hello, this is an auth endpoint")
})

export default router