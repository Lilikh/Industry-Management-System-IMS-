const express= require('express')
const mongoose= require('mongoose')
const postRouter= require('./routes/post-route')
const userRouter= require('./routes/user-route')

const app=  express()
app.use(express.json())

app.use('/api/posts',postRouter)

app.use('/api/users',userRouter)

mongoose.connect('mongodb+srv://lilikheirandish051:Lilijoon@cluster0.j06bq.mongodb.net/Posts?retryWrites=true&w=majority',{
    userName:'lilikheirandish051',
    Password:'Lilijoon'
}).then(()=>{
    app.listen(3000, () => console.log('Server is running on port 3000'));
}).catch((error)=>{
    console.log(error);
    
})


