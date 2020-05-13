import validateIEMT from '../../../src/validate-ie/validate-ie-mt/validateIEMT'

describe('validateIEMT', () => {
  it('validates Mato Grosso IE document number', () => {
    const examples = [
      { documentNumber: '0013000001-9', result: true  },
      { documentNumber: '00133159868',  result: true  },
      { documentNumber: '0013193686-7', result: true  },
      { documentNumber: '0013053551-6', result: true  },
      { documentNumber: '0013056071-5', result: true  },
      { documentNumber: '0013151173-4', result: true  },
      { documentNumber: '0013210747-3', result: true  },
      { documentNumber: '0013125061-2', result: true  },
      { documentNumber: '0130181528-1', result: true  },
      { documentNumber: '0064573571-0', result: true  },
      { documentNumber: '0013015257-0', result: false },
      { documentNumber: '13315986-1',   result: false },
      { documentNumber: '0013193686-2', result: false },
      { documentNumber: '0013053551-3', result: false },
      { documentNumber: '0013056071-4', result: false },
      { documentNumber: '0013151173-5', result: false },
      { documentNumber: '0013210747-6', result: false },
      { documentNumber: '0013125061-7', result: false },
      { documentNumber: '130181528-8',  result: false },
      { documentNumber: '0064573571-9', result: false }
    ]

    for (let example of examples) {
      expect(validateIEMT(example.documentNumber)).toBe(example.result)
    }
  })
})
