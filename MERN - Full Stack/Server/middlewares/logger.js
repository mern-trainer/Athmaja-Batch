const logger = (req, res, next) => {
    const path = req.url
    const method = req.method
    const startTime = new Date().getTime() // ms
    res.on("finish", () => {
        const endTime = new Date().getTime()
        const duration = endTime - startTime
        const statusCode = res.statusCode
        console.log(`${method} ${path} ${statusCode} - ${duration} --ms`);
    })
    next()
}

module.exports = {
    logger
}