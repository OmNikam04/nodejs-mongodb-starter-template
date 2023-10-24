import express from "express";
const app = express();
import errorMiddleware from './middleware/Error.js'


app.use(express.json());

// Route imports
import dummyroute from './routes/basic_route.js'


// using routes
app.use("/api/v1", dummyroute);


// this middleware should be used at the last
app.use(errorMiddleware)

export default app