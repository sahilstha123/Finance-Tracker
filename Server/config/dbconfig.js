const mongoose = require("mongoose")
const connectMongoDb = async()=>{
    try{
        const connectDb = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDb connected,${connectDb.connection.host}`)
    }
    catch(error)
    {
        console.error("Error in connecting to MongoDb",error)
        process.exit(1)
    }
}
module.exports = connectMongoDb