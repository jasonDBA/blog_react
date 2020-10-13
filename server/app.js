import express from 'express'
import hpp from 'hpp'
import helmet from 'helmet'
import cors from 'cors'
import morgan from 'morgan'
import mongoose from 'mongoose'
import config from './config'

// Routes
import postsRoutes from './routes/api/post'

// Create a Express server
const app = express()
const {MONGO_URI} = config

// Security - Express middleware
app.use(hpp()); // protect against HTTP Parameter Pollution attacks
app.use(helmet());  // protect HTTP Header Info
app.use(cors({
    origin: true,
    credentials: true
})); // refers to a case where a resource is requested from a domain different from the current domain.

app.use(morgan("dev")); // HTTP request logger middleware

// In order to get access to the post data we have to use body-parser. 
// Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand.
app.use(express.json());


// Connect to Mongo clusters
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log("Mongo DB Connection Success!!")
}).catch((e) => console.log(e))


// Use routers
app.get('/');
app.use('/api/post', postsRoutes);

export default app;