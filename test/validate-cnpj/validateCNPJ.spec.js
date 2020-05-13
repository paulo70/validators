import validateCNPJ from '../../src/validate-cnpj/validateCNPJ'

describe('validateCNPJ', () => {
  it('validates CNPJ document', () => {
    const examples = [
      { value: '79.102.991/0001-73', return: true  },
      { value: '99.350.838/0001-72', return: true  },
      { value: '1111111111111',      return: false }
    ]

    for (let example of examples) {
      expect(validateCNPJ(example.value)).toBe(example.return)
    }
  })
})
