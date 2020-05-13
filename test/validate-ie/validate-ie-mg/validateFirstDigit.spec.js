jest.mock('../../../src/validate-ie/validate-ie-mg/addZeroToNumber')
jest.mock('../../../src/validate-ie/validate-ie-mg/sumMultipliedNumbers')
jest.mock('../../../src/validate-ie/validate-ie-mg/subtractionNumber')

import validateFirstDigit   from '../../../src/validate-ie/validate-ie-mg/validateFirstDigit'
import addZeroToNumber      from '../../../src/validate-ie/validate-ie-mg/addZeroToNumber'
import sumMultipliedNumbers from '../../../src/validate-ie/validate-ie-mg/sumMultipliedNumbers'
import subtractionNumber    from '../../../src/validate-ie/validate-ie-mg/subtractionNumber'

describe('validateFirstDigit', () => {
  beforeEach(() => {
    addZeroToNumber.mockClear()
    sumMultipliedNumbers.mockClear()
    subtractionNumber.mockClear()
  })

  it('returns true when first digit is valid', () => {
    const number = '0623079040081'

    addZeroToNumber.mockReturnValue('062030790400')
    sumMultipliedNumbers.mockReturnValue(32)
    subtractionNumber.mockReturnValue(8)

    expect(validateFirstDigit(number)).toBeTruthy()
  })

  it('returns false when first digit is invalid', () => {
    const number = '0623079040052'

    addZeroToNumber.mockReturnValue('062030790400')
    sumMultipliedNumbers.mockReturnValue(32)
    subtractionNumber.mockReturnValue(8)

    expect(validateFirstDigit(number)).toBeFalsy()
  })

  it('calls "addZeroToNumber" passing number without digits as argument', () => {
    const number              = '0623079040081'
    const numberWithoutDigits = '06230790400'

    validateFirstDigit(number)

    expect(addZeroToNumber).toHaveBeenCalledWith(numberWithoutDigits)
  })

  it('calls "sumMultipliedNumbers" passing number with zero as argument', () => {
    const number         = '0623079040081'
    const numberWithZero = '062030790400'

    validateFirstDigit(number)

    expect(sumMultipliedNumbers).toHaveBeenCalledWith(numberWithZero)
  })

  it('calls "subtractionNumber" passing numbers sum as argument', () => {
    const number = '0623079040081'
    const sum    = 32

    validateFirstDigit(number)

    expect(subtractionNumber).toHaveBeenCalledWith(sum)
  })
})

