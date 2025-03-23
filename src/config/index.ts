import dotenv from "dotenv";
import path from "path";
dotenv.config({path: path.join(__dirname, "../../.env")});

export default {
    env: process.env.NODE_ENV || 'development',
    SECRET: process.env.SECRET || "Default secret because SECRET is not set in .env",
}