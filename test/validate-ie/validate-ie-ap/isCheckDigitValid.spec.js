jest.mock('../../../src/validate-ie/validate-ie-ap/getAuxValues')
jest.mock('../../../src/validate-ie/validate-ie-ap/calculateDigit')

import CheckDigit from '../../../src/check-digit/CheckDigit'
import isCheckDigitValid from '../../../src/validate-ie/validate-ie-ap/isCheckDigitValid'
import getAuxValues from '../../../src/validate-ie/validate-ie-ap/getAuxValues'
import calculateDigit from '../../../src/validate-ie/validate-ie-ap/calculateDigit'

describe('isCheckDigitValid', () => {
  beforeEach(() => {
    getAuxValues.mockClear()
    calculateDigit.mockClear()
  })

  it('returns true if check digit is valid', () => {
    const number = "030123459"

    getAuxValues.mockReturnValue({ p: 5, d: 0 })
    calculateDigit.mockReturnValue(9)

    expect(isCheckDigitValid(number)).toBeTruthy()
  })

  it('calls "getAuxValues" passing value', () => {
    const number = "030123459"

    isCheckDigitValid(number)

    expect(getAuxValues).toBeCalledWith(number.substring(0, number.length - 1))
  })

  it('calls "calculateDigit" passing checkDigit, value and auxValues as arguments', () => {
    const number = "030123459"
    const auxValues = { p: 5, d: 0 }

    getAuxValues.mockReturnValue(auxValues)

    isCheckDigitValid(number)

    expect(calculateDigit).toBeCalledWith(
      expect.any(CheckDigit),
      number.substring(0, number.length - 1),
      auxValues
    )
  })
})
