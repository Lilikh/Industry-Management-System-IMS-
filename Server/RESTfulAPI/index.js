const express=require('express')
const cors=require("cors");
const coonectDB = require('./db/connectDb')
const app=express()


coonectDB();
const PORT=process.env.PORT || 3000
app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>res.send('Hello World!'))

app.listen(PORT,()=>console.log(`Server running on port RESTfull API ${PORT}`))