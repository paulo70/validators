import validateIEES from '../../../src/validate-ie/validate-ie-es/validateIEES'

describe('validateIEES', () => {
  it('validates Espírito Santo IE document number', () => {
    const examples = [
      { documentNumber: '99999999-0',   result: true  },
      { documentNumber: '082.260.66-4', result: true  },
      { documentNumber: '081.877.45-5', result: true  },
      { documentNumber: '395.333.85-7', result: true  },
      { documentNumber: '322.589.71-1', result: true  },
      { documentNumber: '916.453.75-8', result: true  },
      { documentNumber: '99999999-1',   result: false },
      { documentNumber: '082.260.66-5', result: false },
      { documentNumber: '081.877.45-6', result: false },
      { documentNumber: '395.333.85-8', result: false },
      { documentNumber: '322.589.71-2', result: false },
      { documentNumber: '916.453.75-9', result: false }
    ]

    for (let example of examples) {
      expect(validateIEES(example.documentNumber)).toBe(example.result)
    }
  })
})
