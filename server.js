const express=require('express')
const mongoose=require('mongoose')
const workoutsRoutes =require('./routes/workout')
const cors=require('cors')
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())

app.use('/api/workout',workoutsRoutes)

mongoose.connect(process.env.MONGO_URL).then(()=>{
    app.listen(process.env.PORT,()=>{console.log("connected to DB and listening on port 4000")})
})






