import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import {auth, users, hotels, rooms} from './routes/index.js'

dotenv.config()
const app = express()

app.use(express.json())

app.use('/api/auth', auth)
app.use('/api/users', users)
app.use('/api/hotels', hotels)
app.use('/api/rooms', rooms)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack})
})

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log({ mongose: error })
    }
}

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(8800, () =>{
    connect()
    console.log("Connected to backend")
})
    