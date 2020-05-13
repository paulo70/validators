import validateIECE from '../../../src/validate-ie/validate-ie-ce/validateIECE'

describe('validateIECE', () => {
   it('validates Ceará IE document number', () => {
    const examples = [
      { documentNamber: '06000001-5',   result: true  },
      { documentNamber: '06.998.161-2', result: true  },
      { documentNamber: '06.864.509-0', result: true  },
      { documentNamber: '06000001-6',   result: false },
      { documentNamber: '06.998.161-3', result: false },
      { documentNamber: '06.864.509-1', result: false }
    ]

    for (let example of examples) {
      expect(validateIECE(example.documentNamber)).toBe(example.result)
    }
  })
})
