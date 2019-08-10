describe('Calculator', () => {
  it('should add 2 numbers', () => {
    expect(2 + 2).toBe(4)
  })

  it('should subtract 2 numbers', () => {
    expect(2 - 2).toBe(0)
  })

  it('should multiply 2 numbers', () => {
    expect(2 * 2).toBe(4)
    expect(Math.PI * 10).toBeCloseTo(31, 0)
  })

  it('should divide 2 numbers', () => {
    expect(2 / 2).toBe(1)
    expect(5 / 0).toBe(Infinity)
  })
})
