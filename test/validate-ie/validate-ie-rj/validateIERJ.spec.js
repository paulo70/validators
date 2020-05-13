import validateIERJ from '../../../src/validate-ie/validate-ie-rj/validateIERJ'

describe('validateIERJ', () => {
  it('validates Rio de Janeiro IE input', () => {
    const examples     = [
      { value: '99.999.99-3',  return: true },
      { value: '78045302',     return: true },
      { value: '99.999.99-0',  return: false },
      { value: '78045304',     return: false },
      { value: '19.301.656-1', return: false }
    ]

    examples.forEach(example => {
      expect(validateIERJ(example.value)).toBe(example.return)
    })
  })
})
