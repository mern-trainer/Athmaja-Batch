const jwt = require("jsonwebtoken")
require("dotenv").config()

const Auth = async (request, response, next) => {
    try {
        const bearerToken = request.headers.authorization
        if (!bearerToken) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
        const [_, token] = bearerToken.split(" ")
        if (!token) {
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
        try {
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            if (!decoded) {
                return response.status(401).send({
                    message: "Unauthorized"
                })
            }
            next()
        } catch (err) {
            console.log("error happend");
            return response.status(401).send({
                message: "Unauthorized"
            })
        }
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

module.exports = Auth