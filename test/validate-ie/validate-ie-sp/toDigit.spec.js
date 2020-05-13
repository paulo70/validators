import toDigit from '../../../src/validate-ie/validate-ie-sp/toDigit'

describe('toDigit', () => {
  it('returns last digit as a string', () => {
    expect(toDigit(123)).toBe('3')
  })
})
