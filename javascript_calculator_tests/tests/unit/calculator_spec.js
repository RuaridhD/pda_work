var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator();
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 0;
    calculator.add(2);
    assert.strictEqual(calculator.runningTotal, 2)
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 5;
    calculator.subtract(2);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 6;
    calculator.divide(2);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 6;
    calculator.multiply(2);
    assert.strictEqual(calculator.runningTotal, 12)
  })

  it('should have a working numberClick', function(){
    calculator.numberClick(2);
    assert.strictEqual(calculator.runningTotal, 2)
  })

  it('should have a working operatorClick', function(){
    calculator.operatorClick('*');
    assert.strictEqual(calculator.previousOperator, '*')
  })

  it('should have a working clearClick', function(){
    calculator.runningTotal = 6;
    calculator.clearClick();
    assert.strictEqual(calculator.runningTotal, 0)
  })





});
