const express = require("express")
const todoRouter = require("./routes/todo.route")
const { logger } = require("./middlewares/logger")
const authRouter = require("./routes/auth.route")
require("dotenv").config()
const cors = require("cors")
const jwtRouter = require("./routes/jwt.route")
//  CORS -> Cross Origin Resource Sharing
// const morgan = require("morgan")

const app = express()
app.use(cors())

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
app.use("/auth", authRouter)
app.use("/jwt", jwtRouter)

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is running")
})