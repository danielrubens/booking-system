import jwt from 'jsonwebtoken'
import createError from './error.js'

const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token
    if (!token) return next(createError(401, 'Your are not authenticcated!'))
    jwt.verify(token, process.env.JWT, (err, user) => {
        if(err) return next(createError(403, 'Token is not valid!'))
        req.user = user
        next()
    })
}

const user = (req, res, next) => {
    verifyToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) next()
        return next(createError(403, "You are not authorized"))
    })
}

const admin = (req, res, next) => {
    verifyToken(req, res, () => {
        if(!req.user.isAdmin) return next(createError(403, "You are not authorized"))
        next()
    })
}

export default { verifyToken, user, admin }