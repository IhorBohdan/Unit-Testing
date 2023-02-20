/**
 *
 * a simple class contains the metods add and multiply
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   *
   *
   * @param {Number} number pass the numbers to add
   * @return {Number} sum of numbers that passed
   * @memberof Calculator
   */
  add(...numbers) {
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return sum;
  }

  /**
   *
   *
   * @param {Number} numbers pass the numbers to multiply
   * @return {Number} multiplyed numbers result
   * @memberof Calculator
   */
  multiply(...numbers) {
    const product = numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
    return product;
  }
}

module.exports = Calculator;
