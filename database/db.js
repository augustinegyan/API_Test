const mongoose = require('mongoose')

const connectToDb = async()=>{
    try {
        await mongoose.connect('LINK TO DB HERE (MONGODB)')
        console.log('MongoDB is connected ')
    } catch (error) {
        console.log('MongoDB connection failed',error)
        process.exit(1)
    }

}

module.exports = connectToDb;
