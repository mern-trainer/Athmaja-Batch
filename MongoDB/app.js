const express = require('express');
const env = require('./env');
const createDatabaseConnection = require('./config/db');

createDatabaseConnection();

const app = express();

app.listen(env.port, () => {
  console.log(`Example app listening on port ${env.port}`)
});
