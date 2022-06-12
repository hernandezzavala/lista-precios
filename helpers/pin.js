const generatePin = () => {
    const pin = [];
    for (let index = 0; index < 8; index++) {
        pin.push(Math.floor(Math.random() * 10));
    }
    return pin.join().replaceAll(',', '');
}

module.exports = {
    generatePin
}