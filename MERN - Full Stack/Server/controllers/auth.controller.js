const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

let users = [];

const signup = async (request, response) => {
    try {
        const { confirmPassword, ...body } = request.body;
        const user = users.find(u => u.email == body.email)
        if (user) {
            return response.status(409).send({
                message: "User already exists"
            })
        }
        body.password = await bcrypt.hash(body.password, 10)
        users.push({ ...body, id: crypto.randomUUID() })
        return response.status(201).send({
            message: "User created successfully"
        })
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

const login = async (request, response) => {
    try {
        const { email, password } = request.query;
        const user = users.find(u => u.email == email)
        if (!user) {
            return response.status(404).send({
                message: "User not found"
            })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) {
            return response.status(401).send({
                message: "Invalid credentials"
            })
        }
        const token = jwt.sign({ sub: user }, process.env.JWT_KEY, {
            expiresIn: "3d"
        })
        return response.status(200).send({
            message: "User logged in successfully",
            token
        })
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

const checkUser = async (request, response) => {
    try {
        return response.status(200).send({
            message: "User is valid"
        })
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

module.exports = {
    signup,
    login,
    checkUser
}