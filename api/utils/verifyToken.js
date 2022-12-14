import jwt from 'jsonwebtoken'
import { createError } from '../utils/error'

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return next(createError(401, 'Your are not authenticcated!'))
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err)return next(createError(403, 'Token is not valid!'))
        req.user = user
        next()
    })
}

export default verifyToken