const express = require("express")
const todoRouter = require("./routes/todo.route")
const { logger } = require("./middlewares/logger")
require("dotenv").config()
// const morgan = require("morgan")

const app = express()

// app.use(morgan("dev"))

// Middleware -> Middlewares are functions that are executed before the request is handled.

app.use(express.json()) // middleware

// app.use((req, res, next) => {
//     console.log(req.url);
//     next()
// })

app.use(logger)

// application level -> Global middleware -> app.use()
// Route level -> app.get()/app.post()/app.put()/app.delete()

// Local middleware

// app.get("/:id", middleware, (request, response) => {
//     // const { q } = request.query
//     const { id } = request.params
//     return response.status(200).send({
//         message: id
//     })
// })

// app.post("/", (request, response) => {
//     const body = request.body
//     return response.status(200).send({
//         message: body
//     })
// })

app.use("/todo", todoRouter) 

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is running")
})