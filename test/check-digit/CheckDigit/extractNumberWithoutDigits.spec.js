import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit#extractNumberWithoutDigits', () => {
  it('extracts as array until the last "n" digits of the string', () => {
    const digit = '123456'
    const examples = [
      { numDigits: 1, result: '12345' },
      { numDigits: 2, result: '1234'  },
      { numDigits: 3, result: '123'   }
    ]

    for (let example of examples) {
      const object = new CheckDigit({ numDigits: example.numDigits })

      expect(object.extractNumberWithoutDigits(digit)).toEqual(example.result)
    }
  })
})
