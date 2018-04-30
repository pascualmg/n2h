const path = require('path');

module.exports = {
    entry: './src/n2h.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'src/demo')
    }
};