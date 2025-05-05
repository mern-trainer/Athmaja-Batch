const bcrypt = require("bcrypt")

let users = [];

const signup = async (request, response) => {
    try {
        const {confirmPassword, ...body} = request.body;
        body.password = await bcrypt.hash(body.password, 10)
        users.push({ ...body, id: crypto.randomUUID() })
        return response.status(200).send({
            message: "User created successfully",
            data: body
        })
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}

const login = async () => {
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
        return response.status(200).send({
            message: "User logged in successfully",
            data: user
        })
    } catch (err) {
        return response.status(500).send({
            message: err.message || "Internal server error"
        })
    }
}


module.exports = {
    signup,
    login
}