const express = require("express")
const app = express()
const PORT = process.env.PORT || 8000
app.get("/", (req, res) => {
    res.status(200).send("Server is running yaya ")
})
app.listen(PORT, (error) => {
    error ? console.log(error) :
        console.log("Server is running on port 8000")
})