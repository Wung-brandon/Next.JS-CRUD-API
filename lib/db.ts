import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGO_URL

const connectToDatabase = async() => {
    try{
        await mongoose.connect(MONGODB_URI)
        console.log("connected to database")
    }catch(e){
        console.error("Error connecting to database", e)
        process.exit(1)
    }
}

export default connectToDatabase