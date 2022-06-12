const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT;

const { databaseConnection } = require("../database/connection");

const initServer = () => {
    connectToDatabase();
    setMiddlewares();
    setRoutes();
    setListener();
}

const connectToDatabase = async() => {
    await databaseConnection();
}

const setMiddlewares = () => {
    app.use(cors());
    app.use(express.json());
}

const setRoutes = () => {
    app.use(`/auth`, require('../routes/auth'));
    app.use(`/users`, require('../routes/users'));
    app.use(`/precios`, require('../routes/prices'));
}

const setListener = () => {
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
}

module.exports = {
    initServer
}