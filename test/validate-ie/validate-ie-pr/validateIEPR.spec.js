import validateIEPR from '../../../src/validate-ie/validate-ie-pr/validateIEPR'

describe('validateIEPR', () => {
  it('validates Paraná IE input', () => {
    const examples     = [
      { value: '117.36358-90',   return: true },
      { value: '737.59318-55',   return: true },
      { value: '405.04325-42',   return: false },
    ]

    examples.forEach(example => {
      expect(validateIEPR(example.value)).toBe(example.return)
    })
  })
})
