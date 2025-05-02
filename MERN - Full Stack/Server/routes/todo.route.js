const { Router } = require("express")
const todoController = require("../controllers/todo.controller")

const todoRouter = Router()

todoRouter.post("/", todoController.createTodo)
todoRouter.get("/", todoController.viewTodo)
todoRouter.delete("/delete/:id", todoController.deleteTodo)
todoRouter.patch("/update/:id", todoController.updateTodo)

module.exports = todoRouter