const express = require("express")
const errorHandler = require("./middleware/errorMiddleware")
const userRouter = require("./routers/userRouter")
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())
app.get("/", (req, res) => {
    res.status(200).send("Server is running yaya ")
})
app.use("/api/v1",userRouter)
app.use(errorHandler)
app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log("Server is running on port 8000")
})