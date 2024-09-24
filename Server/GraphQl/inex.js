const express=require('express');
const cors=require('cors');
const connectDB=require('./db/conectDB')

const app=express()
const PORT=process.env.PORT || 3000

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>res.send('Hello World!'))

app.listen(PORT,()=>console.log(`Server running on port GrapgQL ${PORT}`))