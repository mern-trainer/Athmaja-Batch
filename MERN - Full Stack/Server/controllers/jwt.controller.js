// jsonwebtoken -> jwt

// jwt is used for authentication, authorization, information exchange
const jwt = require("jsonwebtoken")

// jwt -> 3 parts
// header, payload, signature
// sign

const createJwt = (req, res) => {
    try {
        const token = jwt.sign({ sub: { name: "Harsha", age: 23 } }, "0auvEHBrg8TBrBdnJAazqz4HeTzR15", {
        expiresIn: "3d"
        });
        return res.status(200).send({
            message: "Token created successfully",
            data: token
        })
    } catch (err) {
        return res.status(500).send({
            message: "Something went wrong"
        })   
    }
}

const verifyJwt = (req, res) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token, "0auvEHBrg8TBrBdnJAazqz4HeTzR15")
        console.log(decoded);
        console.log(new Date(decoded.exp * 1000));
    } catch (err) {
        return res.status(401).send({
            message: "Invalid token"
        })
    }
}

module.exports = {
    createJwt,
    verifyJwt
}