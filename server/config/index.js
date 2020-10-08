import dotenv from 'dotenv'

// Bring environment variables from .env file
dotenv.config()

export default {
    MONGO_URI: process.env.MONGO_URI
}