const { Schema, model } = require('mongoose');

const userSchema = Schema({
    username: {
        type: String,
        required: [true, 'El usuario es obligatorio']
    },
    pin: {
        type: String,
        required: [true, 'El pin es obligatorio']
    },
    hasAccess: {
        type: Boolean,
    }
});

userSchema.methods.toJSON = function () {
    const { __v, _id, ...user } = this.toObject();
    user.uid = _id;
    return user;
}

module.exports = model('User', userSchema);