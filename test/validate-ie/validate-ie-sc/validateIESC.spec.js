import validateIESC from '../../../src/validate-ie/validate-ie-sc/validateIESC'

describe('validateIESC', () => {

   it('validates Santa Catarina IE input', () => {
    const examples     = [
      { value: '251.040.852',   return: true },
      { value: '112.632.629',   return: true },
      { value: '879.176.298',   return: false },
    ]

     examples.forEach(example => {
       expect(validateIESC(example.value)).toBe(example.return)
    })
  })
})
