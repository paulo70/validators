jest.mock('../../../src/validate-ie/validate-ie-go/calculateDigit')

import isCheckDigitValid from '../../../src/validate-ie/validate-ie-go/isCheckDigitValid'
import calculateDigit    from '../../../src/validate-ie/validate-ie-go/calculateDigit'

describe('isCheckDigitValid', () => {
  beforeEach(() => {
    calculateDigit.mockClear()
  })

  it('returns true if check digit is valid', () => {
    const value = '109876547'

    calculateDigit.mockReturnValue(7)

    expect(isCheckDigitValid(value)).toBeTruthy()
  })

  it('calls "calculateDigit" passing checkDigit, value as arguments', () => {
    const value      = '109876547'
    const checkDigit = expect.objectContaining({
      _module: 11,
      _numDigits: 1,
      _weights: [2, 3, 4, 5, 6, 7, 8, 9]
    })

    isCheckDigitValid(value)

    expect(calculateDigit).toBeCalledWith(checkDigit, value)
  })
})
