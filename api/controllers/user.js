import User from '../models/User.js'

const getAll = async (req, res, next) => {
    try {
        const hotel = await User.find()
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const hotel = await User.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const updated = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        next(error)
    }
}

export default { getAll, getById, update, remove }