import validateIEPB from '../../../src/validate-ie/validate-ie-pb/validateIEPB'

describe('validateIEPB', () => {
   it('validates Paraíba IE document number', () => {
    const examples = [
      { documentNumber: '012345679',    result: true  },
      { documentNumber: '16.907.872-8', result: true  },
      { documentNumber: '81.806.022-0', result: true  },
      { documentNumber: '01234567-0',   result: false },
      { documentNumber: '16.907.872-9', result: false },
      { documentNumber: '81.806.022-1', result: false }
    ]

    for (let example of examples) {
      expect(validateIEPB(example.documentNumber)).toBe(example.result)
    }
  })
})
