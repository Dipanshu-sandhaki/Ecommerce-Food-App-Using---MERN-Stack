import mongoose from "mongoose"

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://dipanshu:988462@cluster0.8qqnlsd.mongodb.net/food-del').then(()=>console.log("Database connected"));
}