
const userRead = {
    params: {
        id: { type: 's' }
    },
    response: {
        200: {
            type: 'string',
            properties: {
                id: { type: 'string' },
                firstName: { type: 'string' },
                lastName: {type: 'string'},
                //age: {type: 'integer'}
            }
        }
    }
};

module.exports = userRead