const jwt = require('jsonwebtoken');

const generateToken = (uid) => {
    return new Promise((resolve, reject) => {
        jwt.sign({uid}, process.env.SECRET, {expiresIn: '12h'}, 
                (error, token) => {
                    if(error) reject('No se pudo generar el token de acceso');
                    if(!error) resolve(token);
                });
    });
}

module.exports = {
    generateToken
}