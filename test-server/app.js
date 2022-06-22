// const fastify = require('fastify')({
//     logger: true
// })
const app = require('fastify')()
const mongoose = require('mongoose');


// try n connect
try {
    mongoose.connect('mongodb://localhost:27017/test');
    console.log("Connected to DB")
  } catch (e) {
    console.error(e);
  }

// Register routes
const routes = require('./src/routes/router')
routes.forEach((route, index) => {
    app.route(route)
})
// Default route
app.get('/', function (req, reply) {
    reply.send({ message: 'Dev' });
})


app.listen(3000, (err, address) => {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }
    app.log.info(`server listening on ${address}`)
})

