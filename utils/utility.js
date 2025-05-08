const constant = require('../lib/constant');
const fs = require('fs');

exports.isValidJS = (file) => {
    file = file.endsWith(constant.JS_EXT) ? file : file + constant.JS_EXT;
    return fs.existsSync('./' + file);
}

// Anti-rebond - éviter les appels successifs dans un laps de temps court
exports.debounce = (func, delay) => {
    let debounceTimer;

    return function() {
        let context = this;
        let args = arguments;
        
        clearTimeout(debounceTimer);

        debounceTimer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    }
}
