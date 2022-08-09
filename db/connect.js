const mongoose = require('mongoose')
// const connectionString = "mongodb+srv://arjun:1234@nodejsmongodb.aoy7b.mongodb.net/3-Task-Manager?retryWrites=true&w=majority"
// Shifted to env file

const connectDB = (url) => {
    return mongoose.connect(url).then(() => console.log("Connected to DB"))
} // This is returning a promise

module.exports = connectDB