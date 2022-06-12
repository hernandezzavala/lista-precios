const { Router } = require("express");
const { check } = require("express-validator");
const { getUsers, getPin, invalidatePin } = require("../controllers/user");
const { validateErrors, validateToken } = require('../middlewares');


const userRouter = Router();

userRouter.get('/', [
    validateToken,
    validateErrors
], getUsers);

userRouter.post('/pin', [
    validateToken,
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    validateErrors
], getPin);

userRouter.delete('/:id', [
    validateToken,
    check('id', 'No se ha mandado un metodo de acceso').not().isEmpty(),
    check('id', 'El identificador no es valido').isMongoId(),
    validateErrors
], invalidatePin);

module.exports = userRouter;