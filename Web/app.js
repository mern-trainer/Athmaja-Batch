const http = require("http");

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

server.on("request", (request, response) => {
    const pathName = request.url;
    const method = request.method;
   
    if (pathName === "/") {
        response.writeHead(400, {
            "content-type": "application/json"
        })
        response.write("Hi")
        response.write("Hello")
        return response.end();
    }
    if (pathName === "/profile") {
        return response.end("Profile page");
    }
})

server.listen(8080, () => {
    console.log("Server is running on port 8080");
})