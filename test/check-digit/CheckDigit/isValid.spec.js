import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit#isValid', () => {
  const calculate = CheckDigit.prototype.calculate

  beforeEach(() => {
    CheckDigit.prototype.calculate = jest.fn()
  })

  afterEach(() => {
    CheckDigit.prototype.calculate = calculate
  })

  describe('when "calculate" returns check digits in sequence', () => {
    it('returns "true"', () => {
      const digit = '0100482300112'
      const options = {
        numDigits: 2,
        module: 11,
        weights: [2, 3, 4, 5, 6, 7, 8, 9],
        withoutModuleComplement: false
      }
      const object = new CheckDigit(options)

      object.calculate
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(2)

      expect(object.isValid(digit)).toBeTruthy()
    })
  })

  describe('when "calculate" doesn`t return check digits in sequence', () => {
    it('returns "false"', () => {
      const digit = '0100482300112'
      const options = {
        numDigits: 2,
        module: 11,
        weights: [2, 3, 4, 5, 6, 7, 8, 9],
        withoutModuleComplement: false
      }
      const object = new CheckDigit(options)

      object.calculate
        .mockReturnValueOnce(2)
        .mockReturnValueOnce(1)

      expect(object.isValid(digit)).toBeFalsy()
    })
  })
})
