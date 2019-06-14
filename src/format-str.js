const trimWhitespace = require('remove-trailing-spaces');

module.exports = str => trimWhitespace(str.replace(/\r\n/g, '\n'));
