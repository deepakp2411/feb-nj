import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import connectDB from './db/connectdb.js'

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// middleware 
app.use(cors())
app.use(express.json())

// routes 

// app.get('/student/delete/:id', (req,res) => {
//     console.log(req.params)
//     res.send(`Student deleted ${req.params.id}`)
// })

// app.get("/product/:category/:id", (req,res) => {
//     console.log(req.params)
//     const { category,id } = req.params
//     res.send(`Product category ${category} and id is ${id}`)
// })

// dot . 

app.get("/location/:state.:city", (req,res) => {
    console.log(req.params)
    const { state, city } = req.params
    res.send(`State: ${state} and city is ${city}`)
})

// db 
connectDB(DATABASE_URL)


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})