module.exports = {
    success: true,
    result: {
        total: 88,
        list: [{
            id: 1,
            name: 'model01',
            tag: [
                'beauty',
                {
                    nature: [{
                            ids: [1, 2]
                        },
                        {
                            names: 'ss'
                        }
                    ]
                }
            ],
            level: 1,
            showHistory: false
        }, {
            id: 2,
            name: 'model02',
            tag: ['animal'],
            level: 0.4,
            showHistory: true
        }]
    },
    message: 'this is a message'
};
