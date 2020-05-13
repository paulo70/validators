import validateIEMA from '../../../src/validate-ie/validate-ie-ma/validateIEMA'

describe('validateIEMA', () => {
   it('validates Maranhão IE document number', () => {
    const examples = [
      { documentNumber: '12267672-6',  result: true },
      { documentNumber: '12.074072-9', result: true },
      { documentNumber: '12000038-5',  result: true },
      { documentNumber: '12.074072-5', result: false },
      { documentNumber: '12000038-0',  result: false }
    ]

    for (let example of examples) {
      expect(validateIEMA(example.documentNumber)).toBe(example.result)
    }
  })
})
