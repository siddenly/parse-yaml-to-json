const tokenTypes = {
    'arraySymbol': /^\n( *)-/,
    'indent': /^\n( *)/,
    'name': /^(\w+):/,
    'space': /^\s+/,
    'bool': /^\b(true|false)\b/,
    'null': /^\b(null)\b/,
    'undefined': /^\b(undefined)\b/,
    'float': /^(\d+\.\d+)/,
    'int': /^(\d+)/,
    'string': /^([^\n]+|"(.*?)"|'(.*?)')/
};

const parseYamlString = (raw, type) => {
    let value = raw;
    if (value.startsWith('"') || value.startsWith('\'')) {
        value = value.substring(1, value.length - 1);
    }
    return {
        type: 'YAMLSTRING',
        value,
        raw
    };
};

const parseYamlInt = (raw, type) => ({
    type: 'YAMLINT',
    value: Math.round(raw),
    raw
});

const parseYamlFloat = (raw, type) => ({
    type: 'YAMLFLOAT',
    value: parseFloat(raw),
    raw
});

const parseYamlNull = (raw, type) => ({
    type: 'YAMLNULL',
    value: null,
    raw
});

const parseYamlUndefined = (raw, type) => ({
    type: 'YAMLUNDEFINED',
    value: undefined,
    raw
});

const parseYamlBool = (raw, type) => ({
    type: 'YAMLBOOL',
    value: JSON.parse(raw),
    raw
});

const getLines = input => input.split('\n').map(i => i + '\n');

const getPos = (index, lines) => {
    let current = 0;
    while (index > 0) {
        const lineWidth = lines[current].length;
        if (index >= lineWidth) {
            index -= lineWidth;
            current++;
            continue;
        }
        break;
    }
    return {
        column: index,
        row: current
    };
};

const getType = v => Object.prototype.toString.call(v).match(/\[object\s([A-Z][a-z]+)\]/)[1];

module.exports = {
    tokenTypes,
    parseYamlString,
    parseYamlInt,
    parseYamlFloat,
    parseYamlNull,
    parseYamlUndefined,
    parseYamlBool,
    getLines,
    getPos,
    getType
};
