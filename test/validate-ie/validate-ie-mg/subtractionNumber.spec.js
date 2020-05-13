import subtractionNumber from '../../../src/validate-ie/validate-ie-mg/subtractionNumber'

describe('subtractionNumber', () => {
  it('returns subtraction of first number multiple of 10 by number', () => {
    const number = 32

    expect(subtractionNumber(number)).toBe(8)
  })

  it('returns 0 if subtraction equals 10', () => {
    const number = 10

    expect(subtractionNumber(number)).toBe(0)
  })
})
