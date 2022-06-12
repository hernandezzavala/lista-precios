const User = require('../models/user');
const { generatePin } = require('../helpers/pin');

const getUsers = async (request, response) => {
    try {
        const users = await User.find();
        response.status(200).json(users);
    } catch (error) {
        return response.status(400).json({
            error: 'No se pudo obtener el listado de usuarios. Intentelo nuevamente.'
        });
    }
}

const getPin = async (request, response) => {
    const {username} = request.body;
    try {
        const user = await new User({username: username, pin: generatePin(), hasAccess: true});
        await user.save();
        response.status(201).json(user);
    } catch (error) {
        return response.status(401).json({
            error: 'No se pudo generar un nuevo usuario. Intentelo nuevamente.'
        });
    }
}

const invalidatePin = async (request, response) => {
    const {id} = request.params;
    try {
        const user = await User.findByIdAndUpdate(id, {hasAccess: false}, {new: true});
        response.status(201).json(user);
    } catch (error) {
        return response.status(401).json({
            error: 'No se pudo eliminar al usuario. Intentelo nuevamente.'
        });
    }
}

module.exports = {
    getUsers,
    getPin,
    invalidatePin
}