const {getType} = require('./help');

function transformArray(v) {
    return v.reduce((mem, item) => {
        if (getType(item) === 'Array') {
            mem = [...mem, Object.assign(...transformArray(item))];
        }
        else {
            mem.push(transformNode(item));
        }
        return mem;
    }, []);
}

function transformObject(v) {
    return v.reduce((mem, item) => {
        mem[item.keyName] = transformNode(item.value);
        return mem;
    }, {});
}

function transformNode(ast) {
    switch (ast.type) {
        case 'YAMLDOCUMENT':
            return Object.assign({}, ...ast.body.map(transformNode));
        case 'YAMLKEY':
            const value = ast.value;
            const type = getType(value);
            let result;
            if (type === 'Object') {
                result = transformNode(value);
            }
            else {
                result = traverseArray(value);
            }
            return {[ast.keyName]: result};
        case 'YAMLLIST':
            return transformArray(ast.value);
        case 'YAMLHASH':
            return transformObject(ast.value);
        default:
            return ast.value;
    }
}

module.exports = ast => JSON.parse(JSON.stringify(transformNode(ast)));
