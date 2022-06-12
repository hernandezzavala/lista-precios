const axios = require('axios');

const apiUrl = 'http://200.77.145.150:9030/rest/s1';

const getPrices = async (request, response) => {
    const data = await axios.get(`${apiUrl}/precios`).then(result => result.data);
    response.json(data);
}

module.exports = {
    getPrices
}