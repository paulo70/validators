import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit#multiplyWeights', () => {
  it('calculates with weights array equal to digit', () => {
    const digit = '210126'
    const object = new CheckDigit({ weights: [3, 4, 5, 6, 7, 8] })

    expect(object.multiplyWeights(digit)).toBe(54)
  })

  it('calculates with weights array less then digit', () => {
    const digit = '210126'
    const object = new CheckDigit({ weights: [3, 4, 5] })

    expect(object.multiplyWeights(digit)).toBe(45)
  })

  it('calculates with weights array bigger then digit', () => {
    const digit = '210126'
    const object = new CheckDigit({ weights: [3, 4, 5, 6, 7, 8, 9] })

    expect(object.multiplyWeights(digit)).toBe(54)
  })
})
