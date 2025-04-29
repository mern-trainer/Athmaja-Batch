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



server.on("request", (request, response) => {
    const pathWithQuery = request.url;
    const urlComponents = url.parse(pathWithQuery, true)
    const path = urlComponents.pathname;
    const query = urlComponents.query
    return response.end(JSON.stringify({name: query.name, password: query.password, path: path}))
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})