const express = require("express")
const app = express()
const tasks = require("./routes/tasks")
const connectDB = require('./db/connect')
require('dotenv').config({ path: '.env' }); // This will help us access mongoDB
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('../Task-Manager/middleware/error-handler');

app.use(express.static('./public'));
app.use(express.json())

app.get("/hello", (req, res) => {
    res.send("Task Manager App")
})

app.use('/api/v1/tasks', tasks)

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => { // Since connectDB is returning a promise we are using async u can see connect.js
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(3000, () => {
            console.log("Server is successfully running on port 3000")
        })
    } catch (error) {
        console.log(error)
    }
}

start()