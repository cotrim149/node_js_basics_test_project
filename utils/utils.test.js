const utils = require('./utils');

it('Should sum two numbers', () => {
  var result = utils.add(3,7);

  if (result !== 10) {
    throw new Error(`Expected 10, but got ${result}`);
  }

});

it('Should square a number', () => {
  var result = utils.square(2);
  if (result !== 4) {
    throw new Error(`Expected 4, but got ${result}`);
  }
});