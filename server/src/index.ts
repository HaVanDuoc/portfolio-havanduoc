import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/connectDB"

dotenv.config()

const app = express()
const port = process.env.PORT
const host = process.env.HOST

app.get("/", (req, res) => {
    res.send("Connected to Server")
})

connectDB()

app.listen(port, () => {
    console.log(`[server]: Server is running at http://${host}:${port}`)
})
