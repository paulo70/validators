import CheckDigit from '../../../src/check-digit/CheckDigit'

describe('CheckDigit#extractDigits', () => {
  it('extracts as array last "n" digits of the string', () => {
    const digit = '123456'
    const examples = [
      { numDigits: 1, result: '6'   },
      { numDigits: 2, result: '56'  },
      { numDigits: 3, result: '456' }
    ]

    for (let example of examples) {
      const object = new CheckDigit({ numDigits: example.numDigits })

      expect(object.extractDigits(digit)).toEqual(example.result)
    }
  })
})
