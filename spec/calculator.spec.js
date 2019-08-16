const { Calculator } = require('../src/calculator.spec')

describe('Calculator', () => {
  it('should add 2 numbers', () => {
    expect(Calculator.add(2, 2)).toBe(4)
  })

  it('should subtract 2 numbers', () => {
    expect(Calculator.sub(2, 2)).toBe(0)
  })

  it('should multiply 2 numbers', () => {
    expect(Calculator.mul(2, 2)).toBe(4)
    expect(Calculator.mul(Math.PI, 10)).toBeCloseTo(31, 0)
  })

  it('should divide 2 numbers', () => {
    expect(Calculator.div(2, 2)).toBe(1)
    expect(Calculator.div(5, 0)).toBe(Infinity)
  })
})
