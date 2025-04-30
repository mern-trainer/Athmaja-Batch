const express = require("express")
require("dotenv").config()

const app = express()

app.use(express.json()) // middleware

// app.get("/:id", (request, response) => {
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

let todos = []

app.post("/todo", (req, res) => {
    const { title, description } = req.body
    if (!title || !description) {
        return res.status(400).send({
            message: "Title and description are required"
        })
    }
    const index = todos.findIndex(todo => todo.title.toLowerCase() === title.toLowerCase())
    if (index > -1) {
        return res.status(400).send({
            message: "Todo already exists"
        })
    }
    const todoObj = {
        id: crypto.randomUUID(),
        title,
        description,
        is_completed: false
    }
    todos.push(todoObj)
    return res.status(201).send({
        message: "Todo created successfully",
        data: todoObj
    })
})

app.get("/todo", (_req, res) => {
    return res.status(200).send({
        message: "Todos fetched successfully",
        data: todos
    })
})

app.delete("/todo/:id", (req, res) => {
    const { id } = req.params
    const item = todos.find(todo => todo.id === id)
    if (!item) {
        return res.status(404).send({
            message: "Todo not found"
        })
    }
    todos = todos.filter(todo => todo.id !== id)
    return res.status(200).send({
        message: "Todo deleted successfully",
        deleted: item
    })
})

app.patch("/todo/:id", (req, res) => {
    const { id } = req.params
    const { title, description, is_completed } = req.body
    if(!title && !description && !is_completed) {
        return res.status(400).send({
            message: "Title, description or is_completed is required"
        })
    }
    const obj = {};
    if (title) obj.title = title
    if (description) obj.description = description
    if (is_completed) obj.is_completed = is_completed
    todos = todos.map(todo => {
        if (todo.id == id) {
            return {...todo, ...obj}
        }
        return todo
    })
    return res.status(200).send({
        message: "Todo updated successfully",
        data: todos.find(todo => todo.id === id)
    })
})

app.listen(process.env.PORT || 8081, () => {
    console.log("Server is running")
})