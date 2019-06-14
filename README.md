受the-super-tiny-compiler启发,仅供学习编译
只支持部分yaml语法
解析步骤:
1.使用正则将yaml字符转解析为tokens, token分为九类:arraySymbol、indent、name、space、bool、null、undefined、float、int、string
2.遍历tokens,转为结构清晰的ast
```
// ast结构
{
    type: 'YAMLDOCUMENT',
    body: [{
        type: 'YAMLKEY',
        keyNAME: 'success',
         start: {
            column: 0,
            row: 0
        },
        end: {
            column: 6,
            row: 0
        },
        value: {
            type: 'YAMLBOOL',
            value: true,
            raw: 'true',
            start: {
                column: 9,
                row: 0
            },
            end: {
                column: 12,
                row: 0
            }
        }
    }, {
        type: 'YAMLKEY',
        keyNAME: 'list',
         start: {
            column: 0,
            row: 0
        },
        end: {
            column: 6,
            row: 0
        },
        value: {
            type: 'YAMLLIST',
            value: [[
                {
                    ....
                },
                ...
            ]]
        }
    }, {
        type: 'YAMLKEY',
        keyNAME: 'list',
         start: {
            column: 0,
            row: 0
        },
        end: {
            column: 6,
            row: 0
        },
        value: {
            type: 'YAMLHASH',
            value: [
                {
                    ...
                },
                ...
            ]
        }
    }]
}
```
3.遍历ast生成json.
  这里有个不好的设计,[[{}]]这种没有判断内层是object还是基本类型,直接Object.assign了.assign后基本类型会变成类似{NUMBER: 2}这种类型,导致后面JSON.stringfy |> JSON.parse后才能获取到正确的结构(ast设计不合理导致,但是不想改了...).

