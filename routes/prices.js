const { Router } = require("express");
const { check } = require("express-validator");
const { getPrices } = require("../controllers/prices");
const { validateErrors, validateToken } = require('../middlewares');

const pricesRouter = Router();

pricesRouter.get('/', [
    validateToken,
    validateErrors
], getPrices);

module.exports = pricesRouter;