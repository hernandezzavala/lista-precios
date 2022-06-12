const { Router } = require("express");
const { check } = require("express-validator");
const { login } = require("../controllers/auth");
const { validatePin, validateErrors } = require("../middlewares");


const authRouter = Router();

authRouter.post('/login', [
    check('pin', 'No se ha enviado un metodo de acceso').not().isEmpty(),
    check('pin', 'El pin no es valido').custom(validatePin),
    validateErrors
], login);

module.exports = authRouter;