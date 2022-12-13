import { Router } from "express";
import Hotel from "../models/Hotel.js";

const router = Router()

// router.post('/:id?limit=5')
router.post('/', async (req, res) => {
    const created = new Hotel(req.body)
    try {
        const savedHotel = await created.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const updated = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        res.status(500).json(error)
    }
})

// router.get('/', (req, res) => {
//     res.send("Hello, this is an auth endpoint")
// })

export default router