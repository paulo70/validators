import validateIEAL from '../../../src/validate-ie/validate-ie-al/validateIEAL'

 describe('validateIEAL', () => {
  it('validates Alagoas IE document number', () => {
    const examples = [
      { documentNumber: '24.076.739-0', result: true  },
      { documentNumber: '24.089.826-5', result: true  },
      { documentNumber: '24.099.991-6', result: true  },
      { documentNumber: '24.067.173-2', result: true  },
      { documentNumber: '24.079.990-9', result: true  },
      { documentNumber: '24.089.451-0', result: true  },
      { documentNumber: '24.080.152-0', result: true  },
      { documentNumber: '24.092.497-5', result: true  },
      { documentNumber: '24.088.932-0', result: true  },
      { documentNumber: '24.097.262-7', result: true  },
      { documentNumber: '24.086.162-0', result: true  },
      { documentNumber: '24.097.871-4', result: true  },
      { documentNumber: '24.085.016-5', result: true  },
      { documentNumber: '24.073.874-8', result: true  },
      { documentNumber: '24.071.760-0', result: true  },
      { documentNumber: '24.065.706-3', result: true  },
      { documentNumber: '24.076.739-1', result: false },
      { documentNumber: '24.103.644-5', result: false },
      { documentNumber: '24.102.358-0', result: false },
      { documentNumber: '999456789-1',  result: false }
    ]

    for (let example of examples) {
      expect(validateIEAL(example.documentNumber)).toBe(example.result)
    }
  })
})
