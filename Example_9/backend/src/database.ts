import "dotenv/config";
import mongoose from 'mongoose';

const URI = process.env.DB_URI as string;
const DB = process.env.DB as string;

const connect = () =>{
    mongoose.connect(URI,{
        dbName: DB,
    })
    .then(()=> console.log("Database connected"))
    .catch((error) => console.log(error))  
      
}

export default {
    connect
}

