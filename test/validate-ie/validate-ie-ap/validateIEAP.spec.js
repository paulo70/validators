import validateIEAP from '../../../src/validate-ie/validate-ie-ap/validateIEAP'

describe('validateIEAP', () => {

  it('validates Amapá IE input', () => {
    const examples = [
      { value: '03.012.345-9', return: true },
      { value: '03.002.547-3', return: true },
      { value: '03.092.952-0', return: true },
      { value: '03.012.345-0', return: false },
      { value: '03.002.547-4', return: false },
      { value: '12.345.678-9', return: false }
    ]

    examples.forEach(example => {
      expect(validateIEAP(example.value)).toBe(example.return)
    })
  })
})
