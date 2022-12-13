import { Router } from "express";

const router = Router()

router.get('/', (req, res) => {
    res.send("Hello, this is an auth endpoint")
})

export default router