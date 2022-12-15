import Room from "../models/Room.js";
import Hotel from '../models/Hotel.js'
import createError from "../utils/error.js";

const getAll = async (req, res, next) => {
    try {
        const room = await Room.find()
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

const getById = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (error) {
        next(error)
    }
}

const insert = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json(savedRoom)
    } catch (error) {
        next(error)
    }
}

const remove = async (req, res, next) => {
    const hotelId = req.params.hotelId
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, { $pull: {rooms: req.params.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).json("Room has been deleted")
    } catch (error) {
        next(error)
    }
}

const update = async (req, res, next) => {
    try {
        const updated = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updated)
    } catch (error) {
        next(error)
    }
}

export default { getAll, getById, insert, remove, update }