import validateIEAC from '../../../src/validate-ie/validate-ie-ac/validateIEAC'

describe('validateIEAC', () => {
  it('validates Acre IE document number', () => {
    const examples = [
      { documentNumber: '01.004.823/001-12', result: true  },
      { documentNumber: '01.004.141/001-46', result: true  },
      { documentNumber: '01.001.349/001-77', result: true  },
      { documentNumber: '01.956.867/001-07', result: true  },
      { documentNumber: '01.379.333/036-16', result: true  },
      { documentNumber: '01.367.306/773-60', result: true  },
      { documentNumber: '01.658.566/892-98', result: true  },
      { documentNumber: '01.689.555/741-67', result: true  },
      { documentNumber: '12.345.678.901-07', result: false },
      { documentNumber: '01.004.823/001-02', result: false }
    ]

    examples.forEach(example => {
      expect(validateIEAC(example.documentNumber)).toBe(example.result)
    })
  })
})
