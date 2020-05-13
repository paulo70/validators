import validateIEPE from '../../../src/validate-ie/validate-ie-pe/validateIEPE'

describe('validateIEPE', () => {
   it('validates Pernambuco IE document number', () => {
    const examples = [
      { documentNumber: '0321418-40', result: true  },
      { documentNumber: '7830400-83', result: true  },
      { documentNumber: '4216155-08', result: true  },
      { documentNumber: '8492448-99', result: false },
    ]

    for (let example of examples) {
      expect(validateIEPE(example.documentNumber)).toBe(example.result)
    }
  })
})
