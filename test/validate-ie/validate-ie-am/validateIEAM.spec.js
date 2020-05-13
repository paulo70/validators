import validateIEAM from '../../../src/validate-ie/validate-ie-am/validateIEAM'

describe('validateIEAM', () => {
  it('validates Amazonas IE document number', () => {
    const examples = [
      { documentNumber: '04.345.678-2',   result: true  },
      { documentNumber: '04.193.980-8',   result: true  },
      { documentNumber: '06.200.021-7',   result: true  },
      { documentNumber: '07.000.507-9',   result: true  },
      { documentNumber: '04.104.862-8',   result: true  },
      { documentNumber: '04.345.678-3',   result: false },
      { documentNumber: '04.193.980-9',   result: false },
      { documentNumber: '06.200.021-8',   result: false },
      { documentNumber: '07.000.507-0',   result: false },
      { documentNumber: '04.104.862-9',   result: false }
    ]

    for (let example of examples) {
      expect(validateIEAM(example.documentNumber)).toBe(example.result)
    }
  })
})
