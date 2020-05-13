import CheckDigit from '../../../src/check-digit/CheckDigit'
import calculateDigit from '../../../src/validate-ie/validate-ie-ap/calculateDigit'

describe('calculateDigit', () => {
  it('returns subtraction by module', () => {
    const number = '03012345'
    const checkDigit = new CheckDigit({ numDigits: 1 })
    const auxValues = { p: 5, d: 0 }
    const calculatedDigit = calculateDigit(checkDigit, number, auxValues)

    expect(calculatedDigit).toBe(9)
  })

  it('returns "d" if subtraction by module equals 11', () => {
    const number = '03092952'
    const checkDigit = new CheckDigit({ numDigits: 1 })
    const auxValues = { p: 0, d: 0 }
    const calculatedDigit = calculateDigit(checkDigit, number, auxValues)

    expect(calculatedDigit).toBe(auxValues.d)
  })

  it('returns 0 if subtraction by module equals 10', () => {
    const number = '030170004'
    const checkDigit = new CheckDigit({ numDigits: 1 })
    const auxValues = { p: 5, d: 0 }
    const calculatedDigit = calculateDigit(checkDigit, number, auxValues)

    expect(calculatedDigit).toBe(0)
  })
})
