import validateIEMS from '../../../src/validate-ie/validate-ie-ms/validateIEMS'

describe('validateIEMS', () => {
  it('validates Mato Grosso do Sul IE document number', () => {
    const examples = [
      { documentNumber: '28.322.235-2', result: true  },
      { documentNumber: '28.301.273-0', result: true  },
      { documentNumber: '28.288.890-0', result: true  },
      { documentNumber: '28.226.590-2', result: true  },
      { documentNumber: '28.296.665-0', result: true  },
      { documentNumber: '28.303.740-7', result: true  },
      { documentNumber: '28.306.701-2', result: true  },
      { documentNumber: '28.071.810-1', result: true  },
      { documentNumber: '28.311.591-2', result: true  },
      { documentNumber: '28.098.983-0', result: true  },
      { documentNumber: '28.316.487-5', result: true  },
      { documentNumber: '28.639.242-9', result: true  },
      { documentNumber: '28.330.011-6', result: true  },
      { documentNumber: '28.211.197-2', result: true  },
      { documentNumber: '28.322.235-3', result: false },
      { documentNumber: '28.301.273-1', result: false },
      { documentNumber: '28.288.890-1', result: false },
      { documentNumber: '28.226.590-3', result: false },
      { documentNumber: '28.296.665-1', result: false },
      { documentNumber: '28.303.740-8', result: false },
      { documentNumber: '28.306.701-3', result: false },
      { documentNumber: '28.071.810-2', result: false },
      { documentNumber: '28.311.591-3', result: false },
      { documentNumber: '28.098.983-1', result: false },
      { documentNumber: '28.316.487-6', result: false },
      { documentNumber: '28.639.242-0', result: false },
      { documentNumber: '28.330.011-7', result: false },
      { documentNumber: '28.211.197-3', result: false },
      { documentNumber: '123456780',    result: false }
    ]

    for (let example of examples) {
      expect(validateIEMS(example.documentNumber)).toBe(example.result)
    }
  })
})
