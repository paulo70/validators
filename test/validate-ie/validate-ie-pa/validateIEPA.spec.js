import validateIEPA from '../../../src/validate-ie/validate-ie-pa/validateIEPA'

describe('validateIEPA', () => {
  it('validates Pará IE document number', () => {
    const examples = [
      { documentNumber: '15999999-5',   result: true  },
      { documentNumber: '15.229.851-7', result: true  },
      { documentNumber: '15.133.081-6', result: true  },
      { documentNumber: '15.143.772-6', result: true  },
      { documentNumber: '15.191.809-0', result: true  },
      { documentNumber: '15.105.561-0', result: true  },
      { documentNumber: '15.069.510-1', result: true  },
      { documentNumber: '15.002.934-9', result: true  },
      { documentNumber: '15.133.041-7', result: true  },
      { documentNumber: '15.887.063-8', result: true  },
      { documentNumber: '15999999-0',   result: false }
    ]

    for (let example of examples) {
      expect(validateIEPA(example.documentNumber)).toBe(example.result)
    }
  })
})
