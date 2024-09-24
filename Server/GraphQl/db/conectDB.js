const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const connectDB=async()=>{
    try {
        const db=process.env.DATABASE.replace("<db_PASSWORD>", process.env.DATABASE_PASSWORD)
        .replace("<db_NAME>",process.env.DB_NAME)
        await mongoose.connect(db)
        console.log(`MongoDB connected successfully to ${process.env.DB_NAME}`);
        
    } catch (error) {
        console.error("Error connecting to MongoDB", error)
        process.exit(1);
    }
}

module.exports=connectDB