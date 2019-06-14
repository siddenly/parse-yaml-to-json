const help = require('./help');

module.exports = (tokens, input) => {
    const ast = {
        type: 'YAMLDOCUMENT',
        body: []
    };
    const lines = help.getLines(input);
    let current = 0;
    const walk = () => {
        let {type, value, start, end} = tokens[current];
        switch (type) {
            case 'name':
                current++;
                return {
                    type: 'YAMLKEY',
                    keyName: value,
                    start: help.getPos(start, lines),
                    end: help.getPos(end, lines),
                    value: walk()
                };
            case 'string':
            case 'int':
            case 'float':
            case 'null':
            case 'undefined':
            case 'bool':
                current++;
                return {
                    ...help[`parseYaml${type.replace(/./, v => v.toUpperCase())}`](value, type),
                    start: help.getPos(start, lines),
                    end: help.getPos(end, lines)
                };
            case 'colon':
                current++;
                return walk();
            case 'indent': {
                let token = tokens[++current];
                const nodes = {
                    type: 'YAMLHASH',
                    value: []
                };
                while (token.type !== 'dedent') {
                    nodes.value.push(walk());
                    token = tokens[current];
                }
                current++;
                return nodes;
            }
            case 'arraySymbol': {
                let token = tokens[++current];
                const nodes = {
                    type: 'YAMLLIST',
                    value: [[]]
                };
                while (token.type !== 'dedent') {
                    if (token.type === 'arraySymbol') {
                        nodes.value.push([]);
                        token = tokens[++current];
                        continue;
                    }
                    nodes.value[nodes.value.length - 1].push(walk());
                    token = tokens[current];
                }
                current++;
                return nodes;
            }
        }
    };

    while (current < tokens.length) {
        ast.body.push(walk());
    }
    return ast;
};
