const constant  = require('../lib/constant');

const logger = (type, message) => {
    console.log(constant.COLOR[type], `[MAKENODE] ${message}`);
}

module.exports = logger;
