const mongoose = require('mongoose')

const connectToDb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://augustinehappysunshine369:2024@cluster0.0epmy.mongodb.net/')
        console.log('MongoDB is connected ')
    } catch (error) {
        console.log('MongoDB connection failed',error)
        process.exit(1)
    }

}

module.exports = connectToDb;