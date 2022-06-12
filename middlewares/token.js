const jwt = require('jsonwebtoken');

const User = require('../models/user');

const validateToken = async(request, response, next) => {
    const token = request.header('app-token');
    console.log(token);

    if(!token) {
        return response.status(400).json({
            error: 'No hay un token de acceso en la peticion',
            type: 'token'
        });
    }

    try {
        const {uid} = jwt.verify(token, process.env.SECRET);

        const user = await User.findById(uid);

        if(!user || !user.hasAccess) {
            return response.status(401).json({
                error: 'El usuario no existe o no tiene acceso',
                type: 'token'
            });
        }
        next();
    } catch (error) {
        response.status(401).json({
            error: 'El token no es valido',
            type: 'token'
        });
    }
}

module.exports = {
    validateToken
}