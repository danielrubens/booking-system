import Hotel from '../models/Hotel.js'

const getAll = async (req, res, next) => {
    try {
        const hotel = await Hotel.find()
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const insert = async (req, res, next) => {
    const created = new Hotel(req.body)
    try {
        const savedHotel = await created.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const updated = await Hotel.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        next(error)
    }
}

export default { getAll, getById, insert, remove, update}