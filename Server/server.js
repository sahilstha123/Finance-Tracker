const express = require("express")

// import route models
const userRouter = require("./routers/userRouter")
const transactionRouter = require("./routers/transactionRouter")
const dotenv = require("dotenv").config()

const app = express()
const cors = require("cors")
app.use(cors())

// database connection
const connectDB = require("./config/dbconfig")
const { auth } = require("./middleware/authMiddleware")
const errorHandlerMiddleware = require("./middleware/errorMiddleware")
const apiError = require("./utils/apiError")
const PORT = process.env.PORT || 8000
connectDB()

// parse Json request bodies
app.use(express.json())
app.get("/", (req, res) => {
    res.status(200).send("Server is running yaya ")
})

// api routes
app.use("/api/v1/users", userRouter)
app.use("/api/v1/transactions", auth, transactionRouter)

// 404 not found
app.use((req,res,next)=>{
     throw new apiError("Not found", 404)
})
// global error handling middle ware 
app.use(errorHandlerMiddleware)
app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log("Server is running on port 8000")
})