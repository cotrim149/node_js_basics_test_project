const request = require('supertest');
var app = require('./server').app;

it('Should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(200)
    .expect('Hello World!')
    .end(done);
});