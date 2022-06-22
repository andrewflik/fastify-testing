// // Testing Server

console.log("Starting...")
const tap = require('tap');
const Testbuild = require('../test.js');


// // Manual Testing
// // test = async() => {
// //     // instance
// //     const server = build()
// //     const response = await server.inject({
// //         method: 'GET',
// //         url: '/'
// //     })
    
// //     //console.log('status code: ', response.statusCode)
// //     //console.log('body: ', response.body)

// // }

// // Tap Test
// // tap.test('GET `/` route', async t => {
// //     const app = build()

// //     const response = await app.inject({
// //       method: 'GET',
// //       url: '/'
// //     })
// //     t.equal(response.statusCode, 200, 'returns a status code of 200')
// //   })

// // tap.test('example is loaded', t => {
// //     t.plan(4)
  
// //     const app = build()
  
// //     // At the end of your tests it is highly recommended to call `.close()`
// //     // to ensure that all connections to external services get closed.
// //     t.teardown(() => app.close())
  
// //     app.inject({
// //       method: 'GET',
// //       url: '/'
// //     }, (err, response) => {
// //       t.error(err)
// //       t.equal(response.statusCode, 200)
// //       t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
// //       t.same(response.json(), { hello: 'world' })
// //     })
// //   })


tap.test('Testing server', t => {
  t.plan(7)

  const app = Testbuild()

  t.teardown(() => app.close())

  // GET CHECK
  app.inject({
    method: 'GET',
    url: '/'
  }, (err, response) => {
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    t.same(response.json(), { message: 'Dev' })
  })

  // Find
  app.inject({
    method: 'POST',
    url: '/find',
    payload:{
      id: 9709
    }
  }, (err, response) => {
    t.error(err)
    t.equal(response.statusCode, 200)
    t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
    //t.same(response.json(), response.json())
    //console.log(response.json())
  })
  /* 
      Endpoint : /create 
  */
  // app.inject({
  //   method: 'POST',
  //   url: '/create',
  //   payload: {
  //   }
  // },(err, response) => {
  //   t.error(err)
  //   t.equal(response.statusCode, 200)
  //   t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
  //   t.same(response.json(), { })
  // })


})

// tap.test('test', async (t) => {
//   t.plan(1)

//   const app = Testbuild()

//   t.teardown(() => app.close())

//   // GET CHECK
//   app.inject({
//     method: 'GET',
//     url: '/'
//   }, (err, response) => {
//     t.error(err)
//     t.equal(response.statusCode, 200)
//     t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
//     t.same(response.json(), { message: 'Dev' })
//   })

//   /* 
//       Endpoint : /create 
//   */
//   // app.inject({
//   //   method: 'POST',
//   //   url: '/create',
//   //   payload: {
//   //     id: 12,
//   //     firstName : "Dan",
//   //     lastName : "Dan",
//   //     age : 19
//   //   }
//   // },(err, response) => {
//   //   t.error(err)
//   //   t.equal(response.statusCode, 200)
//   //   t.equal(response.headers['content-type'], 'application/json; charset=utf-8')
//   //   //t.same(response.json(), { id: 12, firstName: 'Dan', lastName: 'Dan', age: 19 })
//   // })

// });