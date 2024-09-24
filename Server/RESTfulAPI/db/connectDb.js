const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const coonectDB=async()=>{
    try {
        const DB=process.env.DATABASE.replace("<db_PASSWORD>",
            process.env.DATABASE_PASSWORD).replace("<db_NAME>", process.env.DB_NAME);
    
        await mongoose.connect(DB)
        console.log(`MongoDB connected successfully to ${process.env.DB_NAME}`);
        
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1);
        
    }
}
module.exports=coonectDB;