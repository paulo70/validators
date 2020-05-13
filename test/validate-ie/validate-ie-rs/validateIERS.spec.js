import validateIERS from '../../../src/validate-ie/validate-ie-rs/validateIERS'

describe('validateIERS', () => {
  it('validates Rio Grande do Sul IE input', () => {
    const examples     = [
      { value: '224/3658792',    return: true },
      { value: '265/1129083',    return: true },
      { value: '115/1842316',    return: false },
    ]

    examples.forEach(example => {
      expect(validateIERS(example.value)).toBe(example.return)
    })
  })
})
