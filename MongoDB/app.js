const express = require('express');
const env = require('./env');
const createDatabaseConnection = require('./config/db');
const TodoModel = require('./models/todo.model');

createDatabaseConnection();

const app = express();

app.use(express.json());

app.post("/todo", async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).send({
                message: "Data is required"
            })
        }
        const {title, description} = req.body;
        if(!title || !description) {
            return res.status(400).send({
                message: "Title and description are required"
            })
        }
        const todo = await TodoModel.create({ title, description });
        return res.status(201).send({
            message: "Todo created successfully",
            data: todo
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
})

app.get("/todos", async (req, res) => {
    try {
        const todos = await TodoModel.find();
        return res.status(200).send({
            message: "Todos fetched successfully",
            data: todos
        })
    } catch (error) {
        return res.status(500).send({
            message: error.message
        })
    }
})

app.listen(env.port, () => {
  console.log(`Example app listening on port ${env.port}`)
});
