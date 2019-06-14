const formatStr = require('./format-str');
const tokenizer = require('./tokenizer');
const parser = require('./parser');
const generater = require('./generater');

const compiler = yamlStr => {
    const str = formatStr(yamlStr);
    const tokens = tokenizer(str);
    const ast = parser(tokens, str);
    console.log(tokens);
    console.log(JSON.stringify(ast))
    console.log(JSON.stringify(generater(ast)))
    return generater(ast);
};

module.exports = {
    formatStr,
    tokenizer,
    parser,
    generater,
    compiler
};
