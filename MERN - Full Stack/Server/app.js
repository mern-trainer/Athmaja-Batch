const express = require("express")
require("dotenv").config()

const app = express()

app.get("/:id", (request, response) => {
    const { id } = request.params
    return response.status(200).send({
        message: id
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is running")
})