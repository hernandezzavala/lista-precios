const { validateErrors } = require("./errors");
const { validatePin } = require("./pin");
const { validateToken } = require("./token");

module.exports = {
    validateErrors,
    validatePin,
    validateToken
}