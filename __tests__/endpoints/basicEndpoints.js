const { doesNotMatch } = require('assert');
const request = require('supertest')
const server = require('../../server/server.js');

//using proxy server to test to avoid IN USE error - creates test server each time this file is run
const http = require('http').createServer(server).listen(8080);




describe('Route integration', () => {
  describe('/', () => {
    describe('GET', () => {
      //GET request to root endpoint should return 200 status as defined in server
      it('responds with 200 status', () => {
        return request(server)
          .get('/')
          .expect(200)
      });
    });
  });

  describe('/bundle.js', () => {
    describe('GET', () => {
      // Note that we return the evaluation of `request` here! It evaluates to
      // a promise, so Jest knows not to say this test passes until that
      // promise resolves. See https://jestjs.io/docs/en/asynchronous
      it('responds with 200 status and application/json content', () => {
        return request(server)
          .get('/')
          .expect('Content-Type', /application\/json/)
          .expect(200)
      });
    });
  })
});

