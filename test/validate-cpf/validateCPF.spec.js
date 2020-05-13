import validateCPF from '../../src/validate-cpf/validateCPF'

describe('validateCPF', () => {
  it('validates CPF document', () => {
    const examples = [
      { value: '123.456.789-09', return: true  },
      { value: '12345678909',    return: true  },
      { value: '999.999.999-90', return: false }
    ]

    for (let example of examples) {
      expect(validateCPF(example.value)).toBe(example.return)
    }
  })
})
