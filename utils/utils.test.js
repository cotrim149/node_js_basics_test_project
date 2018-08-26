const utils = require('./utils');
const expect = require('expect');

it('Should sum two numbers', () => {
  var result = utils.add(3,7);

  expect(result).toBe(10).toBeA('number');
});

it('Should square a number', () => {
  var result = utils.square(2) ;

  expect(result).toBe(4, `Expected result 4, but got ${result}`).toBeA('number', `Expected a number but got ${typeof result}`);

});

it('Should see equality of Objects', () => {

  // this always will fail
  // expect({name: 'Cotrim'}).toBe({name: 'Cotrim'});

  // For objects, must use Equals
  expect({name: 'Cotrim'}).toEqual({name: 'Cotrim'});

});

it('Should see if array include or exclude some element', () => {
  var myArray = [2,3,4];

  expect(myArray).toInclude(2);

  expect(myArray).toExclude(1);

  var json = {
    name: 'Cotrim',
    age: 28
  };

  expect(json).toInclude({age: 28});
});

it('Should verify user with first and last name setted', () => {
  var user = utils.setName({},'Victor Cotrim');

  expect(user).toInclude({
    firstName: 'Victor',
    lastName: 'Cotrim'
  }).toBeA('object');

  expect(user.firstName).toBeA('string');
  expect(user.lastName).toBeA('string');

});

it('Should async add two numbers', (done) => {
  utils.asyncAdd(3,4, (result) => {
    expect(result).toBe(7).toBeA('number');
    done();
  });
});

it('Should async square a number', (done) => {
  utils.asyncSquare(3, (result)=>{
    expect(result).toBe(9).toBeA('number');
    done();
  });
});