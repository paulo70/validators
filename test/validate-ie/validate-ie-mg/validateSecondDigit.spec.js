import validateSecondDigit from '../../../src/validate-ie/validate-ie-mg/validateSecondDigit'

describe('validateSecondDigit', () => {
  it('returs true when second digit is valid', () => {
    const number = '0635438346878'

    expect(validateSecondDigit(number)).toBeTruthy()
  })

  it('returs false when second digit is not valid', () => {
    const number = '0635438346870'

    expect(validateSecondDigit(number)).toBeFalsy()
  })
})

