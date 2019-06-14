const tokens = [{
        type: 'name',
        value: 'success',
        start: 0,
        end: 6
    },
    {
        type: 'colon',
        value: ':',
        start: 7,
        end: 7
    },
    {
        type: 'bool',
        value: 'true',
        start: 9,
        end: 12
    },
    {
        type: 'name',
        value: 'result',
        start: 14,
        end: 19
    },
    {
        type: 'colon',
        value: ':',
        start: 20,
        end: 20
    },
    {
        type: 'indent'
    },
    {
        type: 'name',
        value: 'total',
        start: 24,
        end: 28
    },
    {
        type: 'colon',
        value: ':',
        start: 29,
        end: 29
    },
    {
        type: 'int',
        value: '88',
        start: 31,
        end: 32
    },
    {
        type: 'name',
        value: 'list',
        start: 36,
        end: 39
    },
    {
        type: 'colon',
        value: ':',
        start: 40,
        end: 40
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'name',
        value: 'id',
        start: 48,
        end: 49
    },
    {
        type: 'colon',
        value: ':',
        start: 50,
        end: 50
    },
    {
        type: 'int',
        value: '1',
        start: 52,
        end: 52
    },
    {
        type: 'name',
        value: 'name',
        start: 60,
        end: 63
    },
    {
        type: 'colon',
        value: ':',
        start: 64,
        end: 64
    },
    {
        type: 'string',
        value: '"model01"',
        start: 66,
        end: 74
    },
    {
        type: 'name',
        value: 'tag',
        start: 82,
        end: 84
    },
    {
        type: 'colon',
        value: ':',
        start: 85,
        end: 85
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'string',
        value: 'beauty',
        start: 97,
        end: 102
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'name',
        value: 'nature',
        start: 114,
        end: 119
    },
    {
        type: 'colon',
        value: ':',
        start: 120,
        end: 120
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'name',
        value: 'ids',
        start: 134,
        end: 136
    },
    {
        type: 'colon',
        value: ':',
        start: 137,
        end: 137
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'int',
        value: '1',
        start: 153,
        end: 153
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'int',
        value: '2',
        start: 169,
        end: 169
    },
    {
        type: 'dedent'
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'name',
        value: 'names',
        start: 183,
        end: 187
    },
    {
        type: 'colon',
        value: ':',
        start: 188,
        end: 188
    },
    {
        type: 'string',
        value: 'ss',
        start: 190,
        end: 191
    },
    {
        type: 'dedent'
    },
    {
        type: 'dedent'
    },
    {
        type: 'name',
        value: 'level',
        start: 199,
        end: 203
    },
    {
        type: 'colon',
        value: ':',
        start: 204,
        end: 204
    },
    {
        type: 'int',
        value: '1',
        start: 206,
        end: 206
    },
    {
        type: 'name',
        value: 'showHistory',
        start: 214,
        end: 224
    },
    {
        type: 'colon',
        value: ':',
        start: 225,
        end: 225
    },
    {
        type: 'bool',
        value: 'false',
        start: 227,
        end: 231
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'name',
        value: 'id',
        start: 245,
        end: 246
    },
    {
        type: 'colon',
        value: ':',
        start: 247,
        end: 247
    },
    {
        type: 'int',
        value: '2',
        start: 249,
        end: 249
    },
    {
        type: 'name',
        value: 'name',
        start: 257,
        end: 260
    },
    {
        type: 'colon',
        value: ':',
        start: 261,
        end: 261
    },
    {
        type: 'string',
        value: 'model02',
        start: 263,
        end: 269
    },
    {
        type: 'name',
        value: 'tag',
        start: 277,
        end: 279
    },
    {
        type: 'colon',
        value: ':',
        start: 280,
        end: 280
    },
    {
        type: 'arraySymbol'
    },
    {
        type: 'string',
        value: 'animal',
        start: 292,
        end: 297
    },
    {
        type: 'dedent'
    },
    {
        type: 'name',
        value: 'level',
        start: 305,
        end: 309
    },
    {
        type: 'colon',
        value: ':',
        start: 310,
        end: 310
    },
    {
        type: 'float',
        value: '0.4',
        start: 312,
        end: 314
    },
    {
        type: 'name',
        value: 'showHistory',
        start: 322,
        end: 332
    },
    {
        type: 'colon',
        value: ':',
        start: 333,
        end: 333
    },
    {
        type: 'bool',
        value: 'true',
        start: 335,
        end: 338
    },
    {
        type: 'dedent'
    },
    {
        type: 'dedent'
    },
    {
        type: 'name',
        value: 'message',
        start: 340,
        end: 346
    },
    {
        type: 'colon',
        value: ':',
        start: 347,
        end: 347
    },
    {
        type: 'string',
        value: 'this is a message',
        start: 349,
        end: 365
    }
];

module.exports = {
    tokens
};
