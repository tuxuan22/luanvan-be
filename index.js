import express from 'express'
require('dotenv').config()
import cors from 'cors'
import initRoutes from './src/routes'
import connectDB from './src/config/connectDB'

const app = express()

app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['POST', 'GET', 'PUT', 'DELETE']
}))

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

initRoutes(app)
connectDB()

const port = process.env.PORT || 8080

const listener = app.listen(port, () => {
    console.log(`Server is running on http://localhost:${listener.address().port}`)
})