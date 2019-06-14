require('@babel/register');
const fs = require('fs');
const path = require('path');
const yamlStr = fs.readFileSync(path.resolve(__dirname, './__tests__/sample.yaml.txt'), {encoding: 'utf-8'});
const {compiler} = require('./compiler');

console.log(compiler(yamlStr)); // eslint-disable-line