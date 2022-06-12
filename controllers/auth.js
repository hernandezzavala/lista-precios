const { generateToken } = require('../helpers/token');
const User = require('../models/user');

const login = async (request, response) => {
    const {pin} = request.body;
    try {
        const user = await User.findOne({pin});
        if(!user || !user.hasAccess) {
            return response.status(401).json({
                error: 'El usuario no existe o no tiene acceso'
            });
        }
        const token = await generateToken(user._id);
        response.status(200).json({token});
    } catch (error) {
        console.log(error);
        return response.status(401).json({
            error: 'No se pudo generar un token de acceso. Intentelo nuevamente.'
        });
    }
}

module.exports = {
    login
}