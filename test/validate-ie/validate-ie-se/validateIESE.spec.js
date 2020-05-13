import validateIESE from '../../../src/validate-ie/validate-ie-se/validateIESE'

describe('validateIESE', () => {

   it('validates Sergipe IE input', () => {

    const examples     = [
      { value: '012345679',    return: true },
      { value: '16.907.872-8', return: true },
      { value: '81.806.022-0', return: true },
      { value: '01234567-0',   return: false },
      { value: '16.907.872-9', return: false },
      { value: '81.806.022-1', return: false }
    ]

     examples.forEach(example => {
       expect(validateIESE(example.value)).toBe(example.return)
    })
  })
})
