import validateIERN from '../../../src/validate-ie/validate-ie-rn/validateIERN'

 describe('validateIERN', () => {
  it('validates Rio Grande do Norte IE input', () => {
    const examples     = [
      { value: '20.040.040-1'  , return: true },
      { value: '20.0.040.040-0', return: true },
      { value: '20.5.276.231-0', return: true },
      { value: '20.040.040-0'  , return: false },
      { value: '20.0.040.040-1', return: false },
      { value: '19.0.040.040-5', return: false }
    ]


    examples.forEach(example => {
      expect(validateIERN(example.value)).toBe(example.return)
    })
  })
})
