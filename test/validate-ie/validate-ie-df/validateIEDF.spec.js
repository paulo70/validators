import validateIEDF from '../../../src/validate-ie/validate-ie-df/validateIEDF'

describe('validateIEDF', () => {
  it('validates Distrito Federal IE document number', () => {
    const examples = [
      { documentNumber: '07300001001-09',    result: true  },
      { documentNumber: '07.343.623/001-77', result: true  },
      { documentNumber: '07.451.530/001-68', result: true  },
      { documentNumber: '07.389.634/001-01', result: true  },
      { documentNumber: '07.336.802/001-60', result: true  },
      { documentNumber: '07.346.779/001-46', result: true  },
      { documentNumber: '07.548.137/001-52', result: true  },
      { documentNumber: '07300001001-10',    result: false },
      { documentNumber: '07.343.623/001-88', result: false },
      { documentNumber: '07.451.530/001-79', result: false },
      { documentNumber: '07.389.634/001-12', result: false },
      { documentNumber: '07.336.802/001-71', result: false },
      { documentNumber: '07.346.779/001-57', result: false },
      { documentNumber: '07.548.137/001-63', result: false }
    ]

    for (let example of examples) {
      expect(validateIEDF(example.documentNumber)).toBe(example.result)
    }
  })
})
