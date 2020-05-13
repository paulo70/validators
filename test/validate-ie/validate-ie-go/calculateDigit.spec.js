jest.mock('../../../src/validate-ie/validate-ie-go/getCorrectDigit')

import CheckDigit from '../../../src/check-digit'
import calculateDigit from '../../../src/validate-ie/validate-ie-go/calculateDigit'
import getCorrectDigit from '../../../src/validate-ie/validate-ie-go/getCorrectDigit'

describe('calculateDigit', () => {
  beforeEach(() => {
    getCorrectDigit.mockClear()
  })

  it('returns subtraction by module', () => {
    const number = '109876547'
    const checkDigit = new CheckDigit({ numDigits: 1 })
    const calculatedDigit = calculateDigit(checkDigit, number)

    expect(calculatedDigit).toBe(7)
  })

  it('calls "getCorrectDigit" with number and calculatedModule as arguments', () => {
    const number = '159876540'
    const checkDigit = new CheckDigit({ numDigits: 1 })
    const numberWithoutDigits = checkDigit.extractNumberWithoutDigits(number)
    const multipliedWeights = checkDigit.multiplyWeights(numberWithoutDigits)
    const calculatedModule = multipliedWeights % checkDigit.module

    calculateDigit(checkDigit, number)

    expect(getCorrectDigit).toBeCalledWith(numberWithoutDigits, calculatedModule)
  })
})
