const fs = require('fs');
const path = require('path');
const {tokenizer, parser, compiler} = require('../compiler');

const yaml = fs.readFileSync(path.resolve(__dirname, './sample.yaml.txt'), {
    encoding: 'utf-8'
});
const {tokens} = require('./fixtures/tokens');
const ast = require('./fixtures/ast');
const json = require('./fixtures/json');

test('yaml string to tokens', () => {
    expect(tokenizer(yaml)).toStrictEqual(tokens);
});

test('parse tokens to ast', () => {
    expect(parser(tokens, yaml)).toStrictEqual(ast);
});

test('generate json', () => {
    expect(compiler(yaml)).toStrictEqual(json);
});
