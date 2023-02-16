import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import { join } from 'path'
import connectDB from './db/connectdb.js'
import webRoutes from './routes/webRoutes.js'

const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

// middleware 
app.use(cors())
app.use(express.json())

// static files 
// app.use(express.static('public'))
// for absolute path 
app.use(express.static(join(process.cwd(), 'public')))
// for individual linking 
// app.use("/css",express.static(join(process.cwd(),'public/css')))
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

// app.get("/location/:state.:city", (req,res) => {
//     console.log(req.params)
//     const { state, city } = req.params
//     res.send(`State: ${state} and city is ${city}`)
// })


// with regex 

// app.get("/student/delete/:id([0-9]{2})", (req,res) => {
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

// restrict type 
// app.get("/:type(post|article)/:id", (req,res) => {
//     console.log(req.params)
//     res.send(`Student Deleted ${req.params.id}`)
// })

// app.param() 

// app.param("id", (req,res,next,id) => {
//     console.log(`Id: ${id}`)
//     next()
// })

// multi param 
// app.param(["id,page"], (req,res,next,value) => {
//     console.log(`Called Only Once ${value}`)
//     next()
// })

// app.get("/user/:id", (req,res) => {
//     console.log("This is User ID Path")
//     res.send("Response Ok")
// })

// query string

// app.get('/product', (req,res) => {
//     console.log(req.query)
//     const { category, id } = req.query
//     res.send(`Response OK ${category} and ${id}`)

// })


// routes 
app.use('/',webRoutes)

// db 
connectDB(DATABASE_URL)


app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})