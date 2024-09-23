import mongoose from "mongoose";
import dotenv from "dotenv";
import { createCustomError } from "../middlewares/errors/customError.js";

dotenv.config();

async function connectDB() {

    const mongo_username = process.env.MONGO_USERNAME;
    const mongo_password = process.env.MONGO_PASSWORD;
    const mongo_host = process.env.MONGO_HOST;
    const mongo_db = process.env.MONGO_DB;

    const mongo_url = `mongodb+srv://${mongo_username}:${mongo_password}@${mongo_host}/${mongo_db}?retryWrites=true&w=majority`;

    let connection = await mongoose.connect(mongo_url);

    // check if the connection is successful
    if (!connection) {
        throw createCustomError("Could not connect to MongoDB", 500, null);
    }

    console.log("Connected to MongoDB");
}

export default connectDB;