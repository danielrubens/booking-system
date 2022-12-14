import User from "../models/User.js";
import createError from '../utils/error.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body. username })
        if (!user) return next(createError(404, "User not found"))
        const valid = await bcrypt.compare(req.body.password, user.password)
        if (!valid) return next(createError(400, "Wrong password or user"))
        const { password, isAdmin, ...otherDetails } = user._doc
        console.log(user._doc)
        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)
        res.cookie("access_token", token, { httpOnly: true }).status(201).json({...otherDetails})
    } catch (error) {
        next(error)
    }
}

export default { register, login }