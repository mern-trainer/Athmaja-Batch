const { connect } = require('mongoose');
const env = require('../env');

const createDatabaseConnection = async () => {
    try {
        const res = await connect(env.mongo_url, {
            dbName: "HARSHA001"
        });
        console.log("Database connected successfully:", res.connection.db.databaseName);
    } catch (error) {
        return process.exit(1);
    }
}

module.exports = createDatabaseConnection;