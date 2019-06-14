const {tokenTypes} = require('./help');

module.exports = input => {
    const tokens = [];
    let index = 0;
    let indentWidth = 0;
    let lastIndent = 0;
    let indent = 0;
    const types = Object.entries(tokenTypes);
    while (input.length) {
        for (let [type, reg] of types) {
            const matches = reg.exec(input);
            if (!matches) {
                continue;
            }

            const matchStr = matches[0];
            const matchStrLen = matchStr.length;
            input = input.replace(matchStr, '');
            if (matches) {
                switch (type) {
                    case 'bool':
                    case 'null':
                    case 'undefined':
                    case 'int':
                    case 'float':
                    case 'string':
                        tokens.push({
                            type,
                            value: matchStr,
                            start: index,
                            end: index + matchStrLen - 1
                        });
                        break;
                    case 'arraySymbol':
                        lastIndent = indent;
                        indent = matches[1].length / indentWidth + 1;
                        if (indent < lastIndent) {
                            let start = indent;
                            while (++start <= lastIndent) {
                                tokens.push({
                                    type: 'dedent'
                                });
                            }
                        }
                        tokens.push({type});
                        break;
                    case 'name':
                        tokens.push({
                            type,
                            value: matches[1],
                            start: index,
                            end: index + matchStrLen - 2
                        }, {
                            type: 'colon',
                            value: ':',
                            start: index + matchStrLen - 1,
                            end: index + matchStrLen - 1
                        });
                        break;
                    case 'space':
                        break;
                    case 'indent':
                        const spaces = matches[1].length;
                        if (!indentWidth) {
                            indentWidth = spaces;
                        }
                        lastIndent = indent;
                        indent = spaces / indentWidth;
                        if (isNaN(indent)) {
                            indent = 0;
                        }
                        if (indent === lastIndent + 1) {
                            tokens.push({
                                type
                            });
                        }
                        else if (indent < lastIndent) {
                            let start = indent;
                            while (++start < lastIndent) {
                                tokens.push({
                                    type: 'dedent'
                                });
                            }
                        }
                        break;
                    default:
                        throw new Error('unidentifiable type');
                }

                index = index + matchStrLen;
                break;
            }
        }
    }
    return tokens;
};
