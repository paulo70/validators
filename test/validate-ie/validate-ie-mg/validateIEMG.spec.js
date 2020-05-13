import validateIEMG from '../../../src/validate-ie/validate-ie-mg/validateIEMG'

describe('validateIEMG', () => {

  it('validates Minas Gerais IE input', () => {

    const examples     = [
      { value: '062.307.904/0081',  return: true },
      { value: '924.169.213/1992',  return: true },
      { value: '0635438346878',     return: true },
      { value: '7029855470002',     return: true },
      { value: '924.169.213/1994',  return: false },
      { value: '062.307.904/0000',  return: false },
      { value: '7029855470012',     return: false },
      { value: '0635438346870',     return: false }
    ]

    examples.forEach(example => {
      expect(validateIEMG(example.value)).toBe(example.return)
    })
  })
})
