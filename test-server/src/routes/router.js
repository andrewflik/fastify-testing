const userController = require('../controller/userController');
//const validation = require('../routes/validation');

const ErrorResponse = {
    "statusCode":  {type : 'integer'},
    "error": {type: 'string'},
    "message": {type: 'string'}
  }

  
const userRead = {
    params: {
        id: { type: 'string' },
        firstName: { type: 'string' },
        lastName: {type: 'string'},
        age: {type: 'integer'}
    },
    response: {
        200: {
           type: 'object',
           properties: {
                id: { type: 'string' },
                firstName: { type: 'string' },
                lastName: {type: 'string'},
                age: {type: 'integer'}
           }
        }
    }
};

const userCheck = {
    body: {
        type: 'object',
        required: [
            'id', //'firstName', 'lastName', 'age'
        ],
        properties:{
            id: { type: 'string' },
            firstName: { type: 'string' },
            lastName: {type: 'string'},
            age: {type: 'integer'}
        }
    },
    response: {
        200: {
            type: 'object',
            properties: {
                //user: userRead
                id: { type: 'string' },
                firstName: { type: 'string' },
                lastName: {type: 'string'},
                age: {type: 'integer'}
            }
        },
        '4xx': {
            "type": 'object',
            properties : ErrorResponse
          },
        500: {
            "type": 'object',
            properties : ErrorResponse
        }
    }
};

// Routes array
const routes = [
    // CREATE 
    {
        method: 'POST',
        url: '/api/create',
        schema: userCheck,
        handler: userController.createUser, 
    },
    // READ
    {
        method: 'POST',
        url: '/api/find',
        schema: userRead,
        handler: userController.getUser,
    },
];

module.exports = routes;
