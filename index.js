import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const app = express()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log("Connected to mongoDB")
    } catch (error) {
        console.log({ mongose: error })
    }
}

// mongoose.connection.on("disconnect" () => {
//     console.log("")
// })
app.listen(8800, () =>{
    connect()
    console.log("Connected to backend")
})
    