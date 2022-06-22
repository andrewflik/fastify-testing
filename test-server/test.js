const fastify = require('fastify')
const mongoose = require('mongoose');

function Testbuild(){
    const app = fastify()
    try {
        mongoose.connect('mongodb://localhost:27017/test');
        console.log("Connected to DB")
      } catch (e) {
        console.error(e);
      }
    
    // Register routes
    const routes = require('./src/routes/router')
    routes.forEach((route) => {
        app.route(route)
    })

    app.get('/', function (request, reply) {
        reply.send({ message: 'Dev' })
      })
    
    return app
}

module.exports = Testbuild