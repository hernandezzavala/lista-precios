const User = require("../models/user")

const validatePin = async (pin) => {
    const pinExist = await User.findOne({pin});
    if(pinExist) {
        throw new Error('El pin no es valido');
    }
}

module.exports = {
    validatePin
}