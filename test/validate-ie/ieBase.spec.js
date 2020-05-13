import ieBase    from '../../src/validate-ie/ieBase'
import CheckDigit from '../../src/check-digit/CheckDigit'

describe('ieBase', () => {
  it('validates initial chars', () => {
    const options      = { initialChars: '01' }
    const examples     = [
      { value: '010000000', return: true },
      { value: '100000000', return: false }
    ]

    CheckDigit.prototype.isValid = () => true

    examples.forEach(example => {
      expect(ieBase(example.value, options)).toBe(example.return)
    })
  })

  it('validates value length', () => {
    const options      = { valueLength: 10 }
    const examples     = [
      { value: '0000000000', return: true },
      { value: '000000000',  return: false }
    ]

    CheckDigit.prototype.isValid = () => true

    examples.forEach(example => {
      expect(ieBase(example.value, options)).toBe(example.return)
    })
  })

  it('validates value length when it is an array', () => {
    const options      = { valueLength: [9, 10] }
    const examples     = [
      { value: '0000000000', return: true },
      { value: '000000000',  return: true },
      { value: '00000000',   return: false }
    ]

    CheckDigit.prototype.isValid = () => true

    examples.forEach(example => {
      expect(ieBase(example.value, options)).toBe(example.return)
    })
  })

  it('validates check digit on provided value', () => {
    const examples     = [
      { value: '000000000', return: true },
      { value: '000000000', return: false }
    ]

    CheckDigit.prototype.isValid = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false)

    examples.forEach(example => {
      expect(ieBase(example.value)).toBe(example.return)
    })
  })

  it('validates custom conditions', () => {
    const options      = { customConditions: true && true }
    const examples     = [
      { value: '000000000', return: true },
      { value: '000000000', return: false }
    ]

    CheckDigit.prototype.isValid = jest.fn().mockReturnValueOnce(true).mockReturnValueOnce(false)

    examples.forEach(example => {
      expect(ieBase(example.value, options)).toBe(example.return)
    })
  })
})
