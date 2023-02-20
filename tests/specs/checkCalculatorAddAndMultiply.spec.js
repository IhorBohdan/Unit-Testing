const Calculator = require('../../app/calculator');
const { expect } = require('chai');

describe('Calculator Positive scenarios', function () {

  let validator;

  beforeEach(() => (validator = new Calculator()));
  it('Should return 15 when called with (1, 2, 3, 4, 5)', function () {
    expect(validator.add(1, 2, 3, 4, 5)).to.be.equal(15);
  });
  it('Should return 120 when called with (1, 2, 3, 4, 5)', function () {
    expect(validator.multiply(1, 2, 3, 4, 5)).to.be.equal(120);
  });
});
