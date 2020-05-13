import validateIERD from '../../../src/validate-ie/validate-ie-rd/validateIERD'

describe('validateIERD', () => {
  it('validates Rondônia IE input', () => {
    const examples     = [
      { value: '0000000062521-3', return: true },
      { value: '0000000172158-5', return: true },
      { value: '101.62521-4', return: false },
      { value: '00000101.62521-3', return: false }
    ]

    examples.forEach(example => {
      expect(validateIERD(example.value)).toBe(example.return)
    })
  })
})
