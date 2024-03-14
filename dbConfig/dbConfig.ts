import { log } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log("MogoDB Connected Successfully");
        })

        connection.on('error', (err) => {
            console.log("MogoDB Connection error. Please make sure MonoDB is running. " + err);
            process.exit();            
        })
        
    } catch (error) {
        console.log("Something went wrong");
        console.log(error);
        
    }
}