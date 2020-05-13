jest.mock('../../../src/validate-ie/validate-ie-ba/getGroup')
jest.mock('../../../src/validate-ie/validate-ie-ba/defineCheckDigits')
jest.mock('../../../src/validate-ie/validate-ie-ba/calculate')

import isCheckDigitValid from '../../../src/validate-ie/validate-ie-ba/isCheckDigitValid'
import getGroup from '../../../src/validate-ie/validate-ie-ba/getGroup'
import defineCheckDigits from '../../../src/validate-ie/validate-ie-ba/defineCheckDigits'
import calculate from '../../../src/validate-ie/validate-ie-ba/calculate'
import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('isCheckDigitValid', () => {
  beforeEach(() => {
    getGroup.mockClear()
    defineCheckDigits.mockClear()
    calculate.mockClear()
  })

  it('returns true when check digit is valid', () => {
    const number = '61234557'

    getGroup.mockReturnValue(2)
    defineCheckDigits.mockReturnValue([new CheckDigit(), new CheckDigit()])
    calculate.mockReturnValue([5, 7])

    expect(isCheckDigitValid(number)).toBeTruthy()
  })

  it('returns false when check digit is invalid', () => {
    const number = '61234557'

    getGroup.mockReturnValue(2)
    defineCheckDigits.mockReturnValue([new CheckDigit(), new CheckDigit()])
    calculate.mockReturnValue([5, 8])

    expect(isCheckDigitValid(number)).toBeFalsy()
  })

  it('calls "calculate" passing "...checkDigits" and "numberWithoutDigit" as arguments', () => {
    const number = '61234557'
    const checkDigits = [new CheckDigit(), new CheckDigit()]
    const numberWithoutDigit = number.substring(0, number.length - 2)

    getGroup.mockReturnValue(2)
    defineCheckDigits.mockReturnValue(checkDigits)
    calculate.mockReturnValue([5, 7])

    isCheckDigitValid(number)

    expect(calculate).toHaveBeenCalledWith(...checkDigits, numberWithoutDigit)
  })
})
