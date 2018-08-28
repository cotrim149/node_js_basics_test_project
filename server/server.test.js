const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server tests', () => {
  describe('GET /', ()=> {
    it('Should return hello world response', (done) => {
      request(app)
        .get('/')
        .expect(404)
        .expect((res) => {
          expect(res.body).toInclude({
            error: 'Page not found!'
          });
        })
        .end(done);
    });
  });
  
  describe('GET /users', () => {
    it('Should return specific user object', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name:'Cotrim',
            age: 28
          })
        })
        .end(done);
    });
  });
});