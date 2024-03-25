import mongoose from 'mongoose';

const connectToMongoDb = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to db");
    }
    catch(error){
        console.log("Erroe connecting to db",error.message)
    }
}

export default connectToMongoDb; 