const http = require("http");
const url = require("url");

const server = http.createServer() // server object

// status codes

// 200 - success, 200->OK, 201->created
// 300 - redirection
// 400 - client error -> 400->Bad request, 401->unauthorized, 403->forbidden, 404->not found, 409->conflict
// 500 - server error -> 500->internal server error, 502->bad gateway, 503->service unavailable, 504->gateway timeout, 505->HTTP version not supported

// methods

// GET -> read a resource
// POST -> create a resource
// PUT -> replace a resource
// PATCH -> update a resource
// DELETE -> delete a resource

// todo

let todoList = []

server.on("request", (request, response) => {
    const pathWithQuery = request.url;
    const urlComponents = url.parse(pathWithQuery, true)
    const path = urlComponents.pathname;
    const method = request.method;
    const query = urlComponents.query
    if (path == "/todo" && method == "GET") {
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify(todoList))
    }
    if (path == "/todo" && method == "POST") {
        const task = query.task
        if (!task) {
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Task is required."
            }))
        }
        const index = todoList.findIndex((item) => item.task.toLowerCase() == task.toLowerCase())
        if (index > -1) {
            response.writeHead(409, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Task already exists."
            }))
        }
        const taskObj = {
            id: crypto.randomUUID(),
            task: task
        }
        todoList.push(taskObj)
        response.writeHead(201, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Task added successfully."
        }))
    }

    if(path == "/todo" && method == "DELETE"){
        const id = query.id
        if (!id) {
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Id is required."
            }))
        }
        const data = todoList.find((item) => item.id == id)
        if (!data) {
            response.writeHead(404, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Task not found."
            }))
        }
        todoList = todoList.filter((item) => item.id != id)
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Task deleted successfully."
        }))
    }

    if (path == "/todo" && method == "PATCH") {
        const { id, task } = query
        if (!id || !task) {
            response.writeHead(400, {
                "content-type": "application/json"
            })
            return response.end(JSON.stringify({
                message: "Id and task are required."
            }))
        }
        todoList = todoList.map((item) => {
            if (item.id == id) {
                item.task = task
            }
            return item
        })
        response.writeHead(200, {
            "content-type": "application/json"
        })
        return response.end(JSON.stringify({
            message: "Task updated successfully."
        }))
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})